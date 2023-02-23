import styled, { css } from 'styled-components';

const COLOR = {
  yellow: css`
    background-color: gold;
    border: 2px solid black;
    color: black;
  `,
  green: css`
    background-color: yellowgreen;
    border: 2px solid green;
    color: white;
  `,
  red: css`
    background-color: coral;
    border: 2px solid red;
    color: white;
  `,
};

const FONT = {
  heading: css`
    font-size: 2rem;
    color: black;
    font-weight: 700;
  `,
  title: css`
    font-size: 1.5rem;
    color: grey;
    font-weight: 500;
  `,
  bodyText: css`
    font-size: 1.2rem;
    color: black;
    font-weight: 500;
  `,
};

export const Container = styled.button`
  border: none;
  /* background-color: ${(props) => (props.primary ? 'red' : 'green')}; */
  text-transform: uppercase;
  cursor: pointer;
  font-weight: 500;
  transition: 0.4s;
  /* font-size: ${(props) => (props.size ? `${props.size}px` : '14px')}; */
  ${({ color }) => color && COLOR[color]}
  ${({ font }) => font && FONT[font]}
`;
