import { secondsToMilliseconds } from "app/utils/number";
import React from "react";
import { useEffectOnce, useInterval, useSetState } from "react-use";

interface IRefreshState {
  loading: boolean;
  error: boolean;
}
const useComponentRefresh = (urlToCheck: string) => {
  const [{ loading, error }, setState] = useSetState<IRefreshState>();

  const setLoading = React.useCallback(
    (loading: boolean) => setState({ loading: loading }),
    [loading]
  );

  const setError = React.useCallback(
    (err: boolean) => setState({ error: err }),
    [error]
  );
  const checkIframeLoadable = () => {
    fetch(urlToCheck, { mode: "no-cors" })
      .then((_) => {
        setError(false);
      })
      .catch((_) => setError(true));
  };

  useEffectOnce(() => {
    checkIframeLoadable();
  });

  useInterval(() => {
    setLoading(true);

    checkIframeLoadable();

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, secondsToMilliseconds(30));

  return { loading, error };
};

export default useComponentRefresh;
