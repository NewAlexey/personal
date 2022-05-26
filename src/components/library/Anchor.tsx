import { ReactElement } from "react";
import styled from "styled-components";

import { AnchorTypes } from "../../../utils/types";

const AnchorComponent = styled.a`
  color: inherit;
  height: fit-content;

  text-decoration: none;
  width: fit-content;

  :visited,
  :hover,
  :active {
    color: inherit;
  }

  > * {
    color: inherit;
  }
`;

interface IAnchor {
  href: string;
  children: ReactElement;
  target?: AnchorTypes;
}

export const Anchor = ({ href, target, children }: IAnchor): JSX.Element => (
  <AnchorComponent href={href} target={target}>
    {children}
  </AnchorComponent>
);
