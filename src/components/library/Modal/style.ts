import styled, { css } from "styled-components";

export const ModalContainer = styled.div<{
    isMount: boolean;
    isOpen: boolean;
}>`
  width: 300px;
  padding: 25px;

  border-radius: 10px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;

  background-color: ${({ theme }) => theme.backgroundPrimary};
  margin: 0 auto;

  transform: translateY(250px);

  opacity: 0;
  transition: all 0.4s ease-in-out;

  ${({
        isMount,
        isOpen,
    }) =>
        isMount &&
          isOpen &&
          css`
            opacity: 1;
            transform: translateY(300px);
          `}
`;
