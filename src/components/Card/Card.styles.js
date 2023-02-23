import styled from 'styled-components';

const COLOR = {
  violet: '#f6076a',
  orange: 'orange',
  green: 'green',
};

const RADIUS = '20px';

export const Container = styled.article`
  width: 350px;
  height: 570px;
  border: 1px solid black;
  border-radius: ${RADIUS};
  box-sizing: border-box;
  text-align: center;
  position: relative;
  margin: 0 20px;
`;

export const Image = styled.img`
  width: 100%;
  border-radius: ${RADIUS} ${RADIUS} 0 0;
`;

export const ContentWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const WhenText = styled.p`
  color: ${({ color }) => COLOR[color]};
  font-size: 0.9rem;
  font-weight: 700;
  margin-top: 30px;
`;

export const HeadingText = styled.h1`
  font-weight: 700;
  font-size: 2.2em;
  margin-top: 5px;
`;

export const Paragraph = styled.p`
  font-size: 0.9rem;
  color: grey;
  font-weight: 500;
  margin: 30px 0;
`;

export const SectionInfo = styled.div`
  background-color: ${({ color }) => COLOR[color]};
  width: 100%;
  height: 120px;
  position: absolute;
  bottom: 0;
  border-radius: 0 0 ${RADIUS} ${RADIUS};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const Box = styled.div`
  margin: auto 0;
`;
