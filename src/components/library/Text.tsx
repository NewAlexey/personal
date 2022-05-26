import React from "react";
import styled from "styled-components";

const SpanComponent = styled.span`
  font-size: 12px;
  display: block;
  padding: 5px 0;
`;

interface ITextProps {
  value: string;
}

export const Text = ({ value }: ITextProps): JSX.Element => (
  <SpanComponent>{value}</SpanComponent>
);
