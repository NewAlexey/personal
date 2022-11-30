import { useEffect, useState } from "react";

import { useMount } from "src/shared/hooks/useMount";

interface IUseSmoothlyClose {
    handler?: () => void;
}

export const useTransitionHandler = ({ handler }: IUseSmoothlyClose) => {
    const [trigger, setTrigger] = useState(false);
    const isMount = useMount();

    const setTriggerToFalse = () => {
        if (!isMount) {
            return;
        }

        setTrigger(false);
    };

    const callHandler = () => {
        if (!trigger && handler) {
            handler();
        }
    };

    useEffect(() => setTrigger(true), []);

    return {
        trigger,
        isMount,
        setTriggerToFalse,
        callHandler,
    };
};
