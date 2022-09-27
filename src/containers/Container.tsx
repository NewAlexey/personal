import React from "react";
import styled from "styled-components";

const ContainerComponent = styled.div`
  width: min(100% - 2rem, 1000px);
  margin-inline: auto;

  padding: 20px 0;
`;

interface IContainer {
  children: React.ReactNode;
}

const Container = ({ children }: IContainer): JSX.Element => (
  <ContainerComponent>{children}</ContainerComponent>
);

export default Container;
