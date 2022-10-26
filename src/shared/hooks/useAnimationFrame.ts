import React, { useCallback, useEffect } from "react";

export const useAnimationFrame = (
    callback: (timestamp: number) => void,
    isAnimationStart: boolean,
    progressStartRef: React.MutableRefObject<number>,
): void => {
    const callbackRef = React.useRef(callback);
    const frameRef = React.useRef(0);

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    const loop = useCallback((timestamp: number) => {
        frameRef.current = requestAnimationFrame(loop);
        const cb = callbackRef.current;
        cb(timestamp);
    }, []);

    useEffect(() => {
        if (isAnimationStart) {
            frameRef.current = requestAnimationFrame(loop);

            return () => {
                progressStartRef.current = 0;
                cancelAnimationFrame(frameRef.current);
            };
        }
    }, [isAnimationStart, loop, progressStartRef]);
};
