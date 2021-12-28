import { useInterval } from "../../hooks/useInterval"
import { AppState } from "@state/appState"
import React, { useEffect } from "react"
import { ListGroup, Spinner } from "react-bootstrap"
import useSetState from "react-use/lib/useSetState"
import { minutesToMilliseconds } from "../../../app/utils/number"
import { GetStatus } from "../../../app/actions/status"
import { Status } from "../../../app/client/client"

export const ServerStatus: React.FunctionComponent<{}> = () => {
    const [{ error, status, loading }, setState] = useSetState<{ status: Status, error: boolean, loading: boolean }>();
    const getAndSetStatus = async () => {
        try {
            setState({ loading: true })
            const result = await GetStatus();
            setState({ status: result, loading: false, error: false });
        } catch (error) {
            setState({ error: true, loading: false })
        }

    }
    React.useEffect(() => {
        getAndSetStatus();
    }, [])

    useInterval(() => { getAndSetStatus() }, minutesToMilliseconds(0.5))


    if (loading === true) {
        return <Spinner animation="border" />
    }

    return error && !status ? <p>Error getting server status</p> :
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
        </>
}