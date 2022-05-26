import React from "react";
import Container from "./Container";

export const HomeContainer = (): JSX.Element => {
  const onClickButton = async (): Promise<void> => {
    await fetch(`${process.env.NEXT_PUBLIC_HOST}api/crypt`);
  };

  return (
    <Container>
      <span>Home page</span>
    </Container>
  );
};
