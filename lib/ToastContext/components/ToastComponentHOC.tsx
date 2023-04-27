import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";

import { useMount } from "src/shared/hooks";
import { Timer } from "utils/Timer";

interface IToastComponentHOC {
    component: JSX.Element;
    destroyToast: () => void;
    showTime: number;
}

export const ToastComponentHOC = ({
    component,
    destroyToast,
    showTime,
}: IToastComponentHOC): JSX.Element => {
    const ref = useRef<HTMLDivElement>(null);
    const isMount = useMount();
    const [isOpen, setIsOpen] = useState(false);

    const timerRef = useRef(new Timer({
        delay: showTime,
        handler: () => setIsOpen(false),
    }));

    useEffect(() => setIsOpen(true), []);

    useEffect(() => {
        timerRef.current.run();

        function onMouseEnter() {
            timerRef.current.pause();
        }

        function onMouseLeave() {
            if (!isOpen) {
                return;
            }

            timerRef.current.run();
        }

        const toastContainer = ref.current;

        toastContainer?.addEventListener("mouseenter", onMouseEnter);
        toastContainer?.addEventListener("mouseleave", onMouseLeave);

        return () => {
            toastContainer?.removeEventListener("mouseenter", onMouseEnter);
            toastContainer?.removeEventListener("mouseleave", onMouseLeave);
        };
    }, [showTime, destroyToast, isOpen]);

    const onDestroyToast = () => {
        if (isOpen) {
            return;
        }

        destroyToast();
    };

    return (
        <ToastContainerHOC
            ref={ref}
            isMount={isMount}
            isOpen={isOpen}
            onTransitionEnd={onDestroyToast}
        >
            {component}
        </ToastContainerHOC>
    );
};

interface IToastContainer {
    isMount: boolean;
    isOpen: boolean;
}

const ToastContainerHOC = styled.div<IToastContainer>`
  bottom: 0;
  right: 0;

  margin-top: 50px;

  transition: all 0.4s cubic-bezier(.7, -0.8, .5, 2);

  transform: translateY(calc(100% + 40px));

  ${({
        isMount,
        isOpen,
    }) => isMount
          && isOpen
          && css`
            transform: translateY(0px)`}

  ${({
        isMount,
        isOpen,
    }) => isMount
          && !isOpen
          && css`
            transform: translateX(calc(100% + 40px))`}
`;
