import { useTransitionHandler } from "src/shared/hooks/useTransitionHandler";
import { Backdrop } from "src/components/library/Backdrop";
import { Heading, HeadingSizeEnum } from "src/components/library/Heading";
import { Cross } from "src/components/library/Icons";
import * as Style from "./style";

type DrawerType = "left" | "right";

export interface IDrawerProps {
    position: DrawerType;
    render: (props: { handleSmoothlyClose: () => void }) => JSX.Element;
    heading: string;
    closeDrawer?: () => void;
}

export const Drawer = ({
    closeDrawer,
    render,
    position,
    heading,
}: IDrawerProps) => {
    const {
        setTriggerToFalse,
        callHandler,
        trigger,
        isMount,
    } = useTransitionHandler({ handler: closeDrawer });

    return (
        <Backdrop>
            <Style.DrawerContainer
                position={position}
                isOpen={trigger}
                isMount={isMount}
                onTransitionEnd={callHandler}
            >
                <Style.CrossContainer onClick={setTriggerToFalse}>
                    <Cross />
                </Style.CrossContainer>

                <Heading
                    value={heading}
                    size={HeadingSizeEnum.h3}
                    as="h2"
                />
                {render({ handleSmoothlyClose: setTriggerToFalse })}
            </Style.DrawerContainer>
        </Backdrop>
    );
};
