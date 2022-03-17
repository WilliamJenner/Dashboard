// Source - https://overreacted.io/making-setinterval-declarative-with-react-hooks/
// Thanks Dan Abramov! :D

import { useEffect, useRef } from "react";

export const useInterval = (callback: () => unknown, delay: number) => {
  const savedCallback = useRef<any>();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};
