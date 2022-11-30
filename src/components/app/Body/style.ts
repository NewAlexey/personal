import styled from "styled-components";
import { Z_INDEX_LEVELS } from "utils/constants";

// 100px - footerHeight + headerHeight
export const MainComponent = styled.main`
  min-height: calc(100vh - 100px);

  position: relative;
  z-index: ${Z_INDEX_LEVELS.first};
`;

export const Container = styled.div`
  width: min(100% - 2rem, 1000px);
  margin-inline: auto;

  padding: 20px 0;
`;
