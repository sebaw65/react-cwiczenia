import styled from 'styled-components';

export const StyledWrapper = styled.article`
  background-color: aqua;
  padding: 14px;
  border: 2px solid black;

  & .test {
    background-color: black;
    color: white;
  }
`;

export const StyledTitle = styled.h2`
  font-size: 2.8rem;
  color: red;
`;

export const StyledParagraph = styled.p`
  color: blueviolet;
`;

export const StyledButton = styled.button`
  background-color: gold;
  transition: 0.4s;

  &:hover {
    background-color: red;
  }
  &:active {
    background-color: black;
    border: 2px solid white;
  }
`;
