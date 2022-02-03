import { useInterval } from "../../hooks/useInterval";
import * as React from "react";
import { minutesToMilliseconds } from "../../../app/utils/number";
import dayjs from "dayjs";
import { GetCatUrl, GetRandomUserImage } from "../../../app/actions/cat";
import useEffectOnce from "react-use/lib/useEffectOnce";
import useSetState from "react-use/lib/useSetState";
import { Col, Row } from "react-bootstrap";

interface ICatProps {}

interface ICatState {
  catUrl: string;
  userImageDataUri: string;
  count: number;
  start: Date;
}

export const Cat: React.FC<ICatProps> = () => {
  const [{ catUrl, userImageDataUri, count: catCount, start }, setState] =
    useSetState<ICatState>();

  // only set on initial render
  useEffectOnce(() => {
    (async () => {
      const randomDataUri = await GetRandomUserImage();
      setState({
        start: new Date(),
        catUrl: "https://cataas.com/cat/gif",
        userImageDataUri: randomDataUri,
        count: 1,
      });
    })();
  });

  useInterval(() => {
    setState({ count: catCount + 2 });
    (async () => {
      setState({
        catUrl: await GetCatUrl(),
        userImageDataUri: await GetRandomUserImage(),
      });
    })();
  }, minutesToMilliseconds(1));

  return (
    <div>
      <Row>
        <Col className="m-0 p-0">
          <img className="cat" src={catUrl} />
        </Col>
        <Col className="m-0 p-0">
          <img className="cat" src={userImageDataUri} />
        </Col>
      </Row>
      <Row className="mt-2">
      <p>
        There has been {catCount} cats since {dayjs(start).format("HH:mm")}
      </p>
      </Row>
    </div>
  );
};

export default Cat;
