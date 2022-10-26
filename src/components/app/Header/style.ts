import styled from "styled-components";

const boxShadowHeader = "0px 5px 17px 0px rgba(0, 0, 0, 0.2)";

export const HeaderComponent = styled.header`
  height: 50px;
  padding: 0 40px;

  display: flex;

  align-items: center;
  justify-content: center;

  box-shadow: ${boxShadowHeader};
`;
