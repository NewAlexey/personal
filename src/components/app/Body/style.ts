import styled from "styled-components";

// 100px - footerHeight + headerHeight
export const MainComponent = styled.main`
  min-height: calc(100vh - 100px);
`;

export const Container = styled.div`
  width: min(100% - 2rem, 1000px);
  margin-inline: auto;

  padding: 20px 0;
`;
