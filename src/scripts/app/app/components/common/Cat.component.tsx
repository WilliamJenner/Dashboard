import { useInterval } from "../../hooks/useInterval";
import * as React from "react";
import { secondsToMilliseconds } from "../../../app/utils/number";
import dayjs from "dayjs";
import { GetRandomUserImage } from "../../../app/actions/cat";
import useEffectOnce from "react-use/lib/useEffectOnce";
import useSetState from "react-use/lib/useSetState";
import { Col, Row } from "react-bootstrap";
import { AppState } from "../../state/appState";

interface ICatProps {}

interface ICatState {
  catUrl: string;
  userImageDataUri: string;
  count: number;
  start: Date;
}

export const Cat: React.FC<ICatProps> = () => {
  const { appState } = AppState.useContainer();
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
    appState.wallboardInfo &&
      appState.wallboardInfo.catUrl &&
      appState.wallboardInfo.randomImageUri &&
      setState({
        catUrl: appState.wallboardInfo.catUrl,
        userImageDataUri: appState.wallboardInfo.randomImageUri,
      });
  }, secondsToMilliseconds(10));

  return (
    <div>
      <Row className="ml-1 mr-1">
        <Col className="m-0 p-0">
          <img className="cat" src={catUrl} />
        </Col>
        <Col className="m-0 p-0">
          <img className="cat" src={userImageDataUri} />
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <p>
            There has been {catCount} {catCount <= 1 ? "cat" : "cats"} since{" "}
            {dayjs(start).format("HH:mm")}
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Cat;
