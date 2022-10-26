import {
    IText,
    TextDisplayEnum,
    TextSizeEnum,
    TextWeightEnum,
} from "src/components/library/Text/interfaces";
import * as Style from "src/components/library/Text/style";

export const Text = ({
    value,
    size = TextSizeEnum.regular,
    weight = TextWeightEnum.regular,
    className,
    display = TextDisplayEnum.block,
    color = "black",
}: IText): JSX.Element => (
    <Style.SpanComponent
        size={size}
        weight={weight}
        className={className}
        display={display}
        color={color}
    >
        {value}
    </Style.SpanComponent>
);
