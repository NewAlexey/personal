import styled from "styled-components";

import { Button } from "src/components/library";

const boxShadowHeader = "0px 5px 17px 0px rgba(0, 0, 0, 0.2)";

export const HeaderComponent = styled.header`
  height: 50px;
  padding: 0 40px;

  display: flex;

  align-items: center;
  justify-content: center;

  box-shadow: ${boxShadowHeader};
`;

export const SiteNavigation = styled.ul`
  display: flex;
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
