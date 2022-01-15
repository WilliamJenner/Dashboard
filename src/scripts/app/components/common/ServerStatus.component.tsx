import { useInterval } from "../../hooks/useInterval"
import { AppState } from "@state/appState"
import React, { useEffect } from "react"
import { ListGroup, Spinner } from "react-bootstrap"
import useSetState from "react-use/lib/useSetState"
import { minutesToMilliseconds } from "../../../app/utils/number"
import { GetStatus } from "../../../app/actions/status"
import { ProcessInfoResult, Status } from "../../../app/client/client"

interface IStatusState {
    status: Status;
    processes: ProcessInfoResult[];
    error: boolean;
    loading: boolean;
}

export const ServerStatus: React.FunctionComponent<{}> = () => {
    const [{ error, status, loading, processes }, setState] = useSetState<IStatusState>();
    const getAndSetStatus = async () => {
        try {
            setState({ loading: true })
            const { status, processes } = await GetStatus();
            setState({ status: status, loading: false, error: false, processes: processes });
        } catch (error) {
            setState({ error: true, loading: false, status: undefined })
        }
    }

    React.useEffect(() => {
        getAndSetStatus();
    }, [])

    useInterval(() => { getAndSetStatus() }
        , minutesToMilliseconds(0.5))


    if (loading === true) {
        return <Spinner animation="border" />
    }

    return error && (!status || !processes) ? <p>Error getting server status</p> :
        <>
            <h4>Server Memory Usage (MB)</h4>
            <ListGroup className="bg-dash-item" variant="flush">
                <ListGroup.Item className="bg-dash-item d-flex justify-content-between">
                    <span>Total:</span>
                    <span>{status?.totalMb?.toFixed(0)}</span>
                </ListGroup.Item>
                <ListGroup.Item className="bg-dash-item d-flex justify-content-between">
                    <span>Free:</span>
                    <span>{status?.freeMb?.toFixed(0)}</span>
                </ListGroup.Item>
                <ListGroup.Item className="bg-dash-item d-flex justify-content-between">
                    <span>Used:</span>
                    <span>{status?.usedMb?.toFixed(0)}</span>
                </ListGroup.Item>
            </ListGroup>
            <h4 className="mt-2 mb-2">Top 10 Processes</h4>
            <ListGroup className="bg-dash-item mb-2">
                {processes?.map(proc => <ListGroup.Item className="bg-dash-item d-flex justify-content-between pt-0 pb-0">
                    <span>{proc?.name}</span>
                    <span>{proc?.memoryMbUsed?.toFixed(0)} MB</span>
                    </ListGroup.Item>)}
            </ListGroup>
        </>
}