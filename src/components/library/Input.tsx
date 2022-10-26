import React from "react";
import styled, { css } from "styled-components";

import { Text } from "./Text";

interface IInput {
    type?: string;
}

const InputComponent = styled.input<IInput>`
  height: 25px;
  padding: 0 5px;

  ${({ type }) =>
        type && type === "radio" && css`
            cursor: pointer;
          `}
`;

interface IInputProps extends React.HTMLAttributes<HTMLInputElement> {
    label?: string;
    type?: string;
    value?: string;
    id?: string;
    checked?: boolean;
    name?: string;
}

export const Input = ({
    label,
    type,
    value,
    checked = false,
    id,
    name,
    ...props
}: IInputProps): JSX.Element => (
    <>
        {label ? <Text value={label} /> : null}
        <InputComponent
            type={type}
            value={value}
            checked={checked}
            id={id}
            name={name}
            {...props}
        />
    </>
);
