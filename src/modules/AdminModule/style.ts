import styled, { css } from "styled-components";

import { Text } from "src/components/library";

export const AdminPanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

export const ConfigurationToolsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;

  padding-top: 10px;
`;

export const CustomTextArea = styled.textarea`
  width: 85%;
  height: 150px;

  font-size: 16px;
  line-height: 30px;

  ${({ theme }) => css`
    color: ${theme.textColor};
    background-color: ${theme.backgroundSecondary};
    border: 1px solid ${theme.textColor};

    &:focus-visible {
      border: 1px solid ${theme.mainColour};
      outline: 1px solid ${theme.mainColour};
    }
  `};

  padding: 15px;
`;

export const ButtonContainer = styled.div`
  padding-top: 25px;

  position: relative;
`;

export const ErrorMessage = styled(Text)`
  position: absolute;

  top: 50%;
  right: -40%;
`;
