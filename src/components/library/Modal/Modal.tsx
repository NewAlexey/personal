import React from "react";

import * as Style from "src/components/library/Modal/style";
import { Backdrop } from "src/components/library/Backdrop";
import { useTransitionHandler } from "src/shared/hooks/useTransitionHandler";

export interface IModal {
    closeModal: () => void;
    render: (props: { handleSmoothlyClose: () => void }) => JSX.Element;
}

export const Modal = ({
    closeModal,
    render,
}: IModal): JSX.Element => {
    const {
        setTriggerToFalse,
        callHandler,
        trigger,
        isMount,
    } = useTransitionHandler({ handler: closeModal });

    return (
        <Backdrop close={setTriggerToFalse}>
            <Style.ModalContainer
                onClick={(event: React.MouseEvent<HTMLDivElement>) => {
                    event.stopPropagation();
                }}
                isMount={isMount}
                isOpen={trigger}
                onTransitionEnd={callHandler}
            >
                {render({ handleSmoothlyClose: setTriggerToFalse })}
            </Style.ModalContainer>
        </Backdrop>
    );
};
