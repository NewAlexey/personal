import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";

import { useMount } from "src/shared/hooks";
import { Timer } from "utils/Timer";

interface IPopupComponentHOC {
    component: JSX.Element;
    destroyPopup: () => void;
    showTime: number;
}

export const PopupComponentHOC = ({
    component,
    destroyPopup,
    showTime,
}: IPopupComponentHOC): JSX.Element => {
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

        const popupContainer = ref.current;

        popupContainer?.addEventListener("mouseenter", onMouseEnter);
        popupContainer?.addEventListener("mouseleave", onMouseLeave);

        return () => {
            popupContainer?.removeEventListener("mouseenter", onMouseEnter);
            popupContainer?.removeEventListener("mouseleave", onMouseLeave);
        };
    }, [showTime, destroyPopup, isOpen]);

    const onDestroyPopup = () => {
        if (isOpen) {
            return;
        }

        destroyPopup();
    };

    return (
        <PopupContainer
            ref={ref}
            isMount={isMount}
            isOpen={isOpen}
            onTransitionEnd={onDestroyPopup}
        >
            {component}
        </PopupContainer>
    );
};

interface IPopupContainer {
    isMount: boolean;
    isOpen: boolean;
}

const PopupContainer = styled.div<IPopupContainer>`
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
