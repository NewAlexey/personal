import React from "react";
import styled from "styled-components";

import { Text } from "./Text";

const InputComponent = styled.input`
  height: 25px;
  padding: 0 5px;
`;

interface IInputProps extends React.HTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: string;
}

export const Input = ({ label, type, ...props }: IInputProps): JSX.Element => (
  <>
    {label ? <Text value={label} /> : null}
    <InputComponent type={type} {...props} />
  </>
);
