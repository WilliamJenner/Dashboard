import { useInterval } from "../../hooks/useInterval";
import React from "react";
import { ListGroup, Spinner } from "react-bootstrap";
import { secondsToMilliseconds } from "../../../app/utils/number";
import { GetStatus } from "../../../app/actions/status";
import { ProcessInfoResult, Status } from "../../../app/client/client";
import useEffectOnce from "react-use/lib/useEffectOnce";
import useSetState from "react-use/lib/useSetState";
import { AppState } from "../../state/appState";

interface IStatusState {
  status: Status;
  processes: ProcessInfoResult[];
  error: boolean;
  loading: boolean;
}

export const ServerStatus: React.FunctionComponent = () => {
  const { wallboardInfo } = AppState.useContainer();
  const [{ error, status, loading, processes }, setState] =
    useSetState<IStatusState>();
  const getAndSetStatus = async () => {
    try {
      setState({ loading: true });
      const { status, processes } = await GetStatus();
      setState({
        status: status,
        loading: false,
        error: false,
        processes: processes,
      });
    } catch (error) {
      setState({ error: true, loading: false, status: undefined });
    }
  };

  useEffectOnce(() => {
    getAndSetStatus();
  });

  useInterval(() => {
    wallboardInfo &&
      wallboardInfo.serverStatus &&
      wallboardInfo.processes &&
      setState({
        processes: wallboardInfo?.processes.filter((_, i) => i < 5),
        status: wallboardInfo?.serverStatus[0],
      });
  }, secondsToMilliseconds(10));

  if (loading === true) {
    return (
      <div className="flex justify-center">
        {" "}
        <Spinner animation="border" />
      </div>
    );
  }

  return error && (!status || !processes) ? (
    <p>Error getting server status</p>
  ) : (
    <>
      <h4>Server Memory Usage</h4>
      <ListGroup className="bg-dash-item" variant="flush">
        <ListGroup.Item className="bg-dash-item d-flex justify-content-between pt-0 pb-0 text-white">
          <span>Total:</span>
          <span>{status?.totalMb?.toFixed(0)} MB</span>
        </ListGroup.Item>
        <ListGroup.Item className="bg-dash-item d-flex justify-content-between pt-0 pb-0 text-white">
          <span>Free:</span>
          <span>{status?.freeMb?.toFixed(0)} MB</span>
        </ListGroup.Item>
        <ListGroup.Item className="bg-dash-item d-flex justify-content-between pt-0 pb-0 text-white">
          <span>Used:</span>
          <span>{status?.usedMb?.toFixed(0)} MB</span>
        </ListGroup.Item>
      </ListGroup>
      <h4 className="mt-2 mb-2">Top 5 Processes</h4>
      <ListGroup className="bg-dash-item mb-2">
        {processes?.map((proc, i) => (
          <ListGroup.Item
            key={`${i}_listItem`}
            className="bg-dash-item d-flex justify-content-between pt-0 pb-0 text-white"
          >
            <span>{proc?.name}</span>
            <span>{proc?.memoryMbUsed?.toFixed(0)} MB</span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default ServerStatus;
