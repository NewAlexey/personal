import styled, { css } from "styled-components";

import { Button, Text } from "src/components/library";
import { COLOURS, Z_INDEX_LEVELS } from "utils/constants";

const boxShadowHeader = "0px 5px 17px 0px rgba(0, 0, 0, 0.2)";

export const HeaderComponent = styled.header`
  height: 50px;
  padding: 0 40px;

  position: relative;
  z-index: ${Z_INDEX_LEVELS.second};

  display: flex;

  ${(props) => css`
    background-color: ${props.theme.background};
  `}

  align-items: center;
  justify-content: center;

  box-shadow: ${boxShadowHeader};
`;

export const SiteNavigation = styled.ul`
  display: flex;
  flex-basis: 90%;
  align-items: center;
  justify-content: center;
  list-style-type: none;
`;

export const LoginButton = styled(Button)`
  position: absolute;
  right: 50px;
`;

export const HeaderAuthContainer = styled.div`
  position: absolute;
  right: 140px;
`;

export const LinkText = styled(Text)`
  &:hover {
    color: ${COLOURS.active};
  }
`;
