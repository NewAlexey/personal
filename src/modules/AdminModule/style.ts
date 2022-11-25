import styled from "styled-components";

import { Text } from "src/components/library";

export const AdminPanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

export const InformationDataContainer = styled.div`
  padding: 25px 0;
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
