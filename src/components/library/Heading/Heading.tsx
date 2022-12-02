import * as Style from "src/components/library/Heading/style";
import {
    HeadingSizeEnum,
    IHeading,
} from "src/components/library/Heading/interfaces";

export const Heading = ({
    value,
    style,
    className,
    size = HeadingSizeEnum.h1,
    as = "h1",
}: IHeading): JSX.Element => (
    <Style.Heading
        as={as}
        size={size}
        className={className}
        style={style}
    >
        {value}
    </Style.Heading>
);
