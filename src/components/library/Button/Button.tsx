import * as Style from "src/components/library/Button/style";
import { IButton } from "src/components/library/Button/interfaces";
import { Text } from "src/components/library/Text";

export const Button = ({
    text,
    ...props
}: IButton) => (
    <Style.Button {...props}>
        <Text value={text} />
    </Style.Button>
);
