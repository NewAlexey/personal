import styled, { keyframes } from "styled-components";

const boxShadowHeader = "0px 5px 17px 0px rgba(0, 0, 0, 0.2)";
const boxShadowFooterInitial = "0px -5px 17px 0px rgba(0, 0, 0, 0.2)";
const boxShadowFooterFinal = "0px -7px 17px 0px rgba(0, 0, 0, 0.3)";

export const HeaderComponent = styled.header`
  height: 50px;
  padding: 0 40px;

  display: flex;

  align-items: center;
  justify-content: center;

  box-shadow: ${boxShadowHeader};
`;

// 100px - footerHeight + headerHeight
export const MainComponent = styled.main`
  min-height: calc(100vh - 100px);
`;

const boxShadowAnimation = keyframes`
  0% {
    box-shadow: ${boxShadowFooterInitial};
  }

  50% {
    box-shadow: ${boxShadowFooterFinal};
  }

  100% {
    box-shadow: ${boxShadowFooterInitial};
  }
`;

export const FooterComponent = styled.footer`
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: ${boxShadowFooterInitial};

  :hover {
    animation: ${boxShadowAnimation} 1s linear infinite;
  }
`;

export const FooterText = styled.span`
  display: block;
  font-size: 16px;
  cursor: pointer;
`;
