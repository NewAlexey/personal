import React from "react";
import styled from "styled-components";
import { textDisplay, textSizes, textWeight } from "../../../utils/constants";

interface ISpanProps {
  size: textSizes;
  weight: textWeight;
  display: textDisplay;
  color: string;
}

const SpanComponent = styled.span<ISpanProps>`
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
  display: ${({ display }) => display};
  color: ${({ color }) => color};
  padding: 5px 0;
`;

interface ITextProps {
  value: string;
  className?: string;
  size?: textSizes;
  weight?: textWeight;
  display?: textDisplay;
  color?: string;
}

export const Text = ({
  value,
  size = textSizes.regular,
  weight = textWeight.regular,
  className,
  display = textDisplay.block,
  color = "black",
}: ITextProps): JSX.Element => (
  <SpanComponent
    size={size}
    weight={weight}
    className={className}
    display={display}
    color={color}
  >
    {value}
  </SpanComponent>
);
