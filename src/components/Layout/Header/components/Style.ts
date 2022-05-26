import styled from "styled-components";

export const SiteNavigation = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style-type: none;
`;

export const LinkItem = styled.li<{ isActive: boolean }>`
  cursor: pointer;
  color: ${({ isActive }) => isActive && "#f26500"};

  padding: 0 10px;

  &:hover {
    color: #f26500;
  }
`;

export const ContentContainer = styled.div`
  width: 300px;
  height: 180px;
  border-radius: 10px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;

  background-color: white;
  margin: 0 auto;

  transform: translateY(calc(50vh - 50%));
`;

export const ButtonContainer = styled.div`
  display: flex;
  padding-top: 20px;

  button:first-child {
    margin-right: 15px;
  }
`;
