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
    disabled,
    isActive = false,
    size = TextSizeEnum.regular,
    weight = TextWeightEnum.regular,
    display = TextDisplayEnum.block,
}: IText): JSX.Element => (
    <Style.SpanComponent
        disabled={disabled}
        size={size}
        weight={weight}
        className={className}
        display={display}
        style={style}
        isActive={isActive}
    >
        {value}
    </Style.SpanComponent>
);

export const DangerText = ({
    value,
    style,
    disabled,
    className,
    display = TextDisplayEnum.block,
    size = TextSizeEnum.regular,
    weight = TextWeightEnum.regular,
}: IText) => (
    <Style.SpanComponent
        size={size}
        disabled={disabled}
        weight={weight}
        className={className}
        display={display}
        style={style}
        dangerouslySetInnerHTML={{ __html: value }}
    />
);
