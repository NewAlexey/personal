import React, { useEffect } from "react";

export const useAnimationFrame = (
  callback: (timestamp: number) => void,
  isAnimationStart: boolean,
  progressStartRef: React.MutableRefObject<number>
): void => {
  const callbackRef = React.useRef(callback);
  const frameRef = React.useRef(0);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const loop = (timestamp: number) => {
    frameRef.current = requestAnimationFrame(loop);
    const cb = callbackRef.current;
    cb(timestamp);
  };

  // eslint-disable-next-line
  useEffect(() => {
    if (isAnimationStart) {
      frameRef.current = requestAnimationFrame(loop);

      return () => {
        // eslint-disable-next-line
        progressStartRef.current = 0;
        cancelAnimationFrame(frameRef.current);
      };
    } // eslint-disable-next-line
  }, [isAnimationStart]);
};
