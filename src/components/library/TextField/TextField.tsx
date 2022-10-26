import { Text } from "src/components/library/Text";
import * as Style from "src/components/library/TextField/style";
import { ITextField } from "src/components/library/TextField/interfaces";

export const TextField = ({
    label,
    type,
    value,
    id,
    name,
    checked = false,
    ...props
}: ITextField): JSX.Element => (
    <>
        {label ? <Text value={label} /> : null}
        <Style.Input
            type={type}
            value={value}
            checked={checked}
            id={id}
            name={name}
            {...props}
        />
    </>
);
