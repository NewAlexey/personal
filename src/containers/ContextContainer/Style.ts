import styled from "styled-components";
import { Text } from "../../components/library";

export const TextContainer = styled.div`
  display: flex;
`;

export const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ContentContainer = styled(InnerWrapper)`
  margin-top: 20px;
`;

export const BlockWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 7px 10px;
  margin: 7px;

  border-radius: 25px;

  width: 300px;
  border: 1px solid #e8e8e8;

  transition: all 0.3s ease-in-out;

  box-shadow: 0 0 20px -4px rgba(34, 60, 80, 0.2);

  &:hover {
    box-shadow: 0 0 20px -4px rgba(34, 60, 80, 0.5);
  }
`;

export const ValueWrapper = styled.div`
  padding: 0 5px;
`;

export const RadioInputGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  label {
    padding-left: 7px;
    min-width: 50px;

    cursor: pointer;
  }
`;

export const FakeProgressBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;

  background-color: rgba(0, 170, 238, 0.2); ;
`;

export const CustomText = styled(Text)`
  text-align: center;
`;

export const ProgressBar = styled.div`
  width: 100%;
  margin: 5px 0;

  position: relative;
`;
