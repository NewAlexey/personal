import {
    IText,
    TextDisplayEnum,
    TextSizeEnum,
    TextWeightEnum,
} from "src/components/library/Text/interfaces";
import * as Style from "src/components/library/Text/style";

export const Text = ({
    value,
    style,
    className,
    size = TextSizeEnum.regular,
    weight = TextWeightEnum.regular,
    display = TextDisplayEnum.block,
    color = "black",
}: IText): JSX.Element => (
    <Style.SpanComponent
        size={size}
        weight={weight}
        className={className}
        display={display}
        color={color}
        style={style}
    >
        {value}
    </Style.SpanComponent>
);
