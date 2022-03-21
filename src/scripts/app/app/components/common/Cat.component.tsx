import { useInterval } from "../../hooks/useInterval";
import * as React from "react";
import { secondsToMilliseconds } from "../../../app/utils/number";
import { GetRandomUserImage } from "../../../app/actions/cat";
import useEffectOnce from "react-use/lib/useEffectOnce";
import useSetState from "react-use/lib/useSetState";
import { Col, Row } from "react-bootstrap";
import { AppState } from "../../state/appState";

interface ICatProps {}

interface ICatState {
  catUrl: string;
  userImageDataUri: string;
}

export const Cat: React.FC<ICatProps> = () => {
  const { wallboardInfo } = AppState.useContainer();
  const [{ catUrl, userImageDataUri }, setState] = useSetState<ICatState>();

  // only set on initial render
  useEffectOnce(() => {
    (async () => {
      const randomDataUri = await GetRandomUserImage();
      setState({
        catUrl: "https://cataas.com/cat/gif",
        userImageDataUri: randomDataUri,
      });
    })();
  });

  useInterval(() => {
    wallboardInfo &&
      wallboardInfo.catUrl &&
      wallboardInfo.randomImageUri &&
      setState({
        catUrl: wallboardInfo.catUrl,
        userImageDataUri: wallboardInfo.randomImageUri,
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
    </div>
  );
};

export default Cat;
