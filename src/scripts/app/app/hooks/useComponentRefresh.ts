import { secondsToMilliseconds } from "app/utils/number";
import { useEffectOnce, useInterval } from "react-use";

const useComponentRefresh = (
  urlToCheck: string,
  setLoading: (loading) => void,
  setError: (error) => void
) => {
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
};

export default useComponentRefresh;
