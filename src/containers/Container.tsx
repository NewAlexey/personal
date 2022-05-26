import React from "react";
import styled from "styled-components";

const ContainerComponent = styled.div`
  width: 1400px;
  padding: 15px 20px;

  margin: 0 auto;
`;

interface IContainer {
  children: React.ReactElement;
}

const Container = ({ children }: IContainer): JSX.Element => (
  <ContainerComponent>{children}</ContainerComponent>
);

export default Container;
