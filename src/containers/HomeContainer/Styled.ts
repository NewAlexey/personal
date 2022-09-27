import styled from "styled-components";

export const ImageContainer = styled.div`
  position: relative;
  width: 275px;
  height: 257px;

  margin: 0 auto;

  span {
    border-radius: 50%;
    box-shadow: 0 0 8px 3px rgba(0, 0, 0, 0.4);
  }
`;

export const TextContainer = styled.div`
  padding: 15px 0;
  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: start;
  text-align: start;
  max-height: 200px;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  list-style-type: "-";
`;
