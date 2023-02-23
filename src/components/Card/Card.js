import React from 'react';
import * as Styles from './Card.styles';
import { Images } from '../../IMG/Images';

const Card = (props) => {
  return (
    <Styles.Container>
      {/* <Styles.Image> */}
      <Styles.Image src={Images[props.image]} />
      {/* </Styles.Image> */}
      <Styles.ContentWrapper>
        <Styles.WhenText color={props.color}>Coś tam?</Styles.WhenText>
        <Styles.HeadingText>Post One</Styles.HeadingText>
        <Styles.Paragraph>
          Coś tam oś tam. Trorolrorolsod sjkdkas ckxzjnkdas
        </Styles.Paragraph>
      </Styles.ContentWrapper>
      <Styles.SectionInfo color={props.color}>
        <Styles.Box>
          <h3>4+</h3>
          <p>Lolo</p>
        </Styles.Box>
        <Styles.Box
          style={{
            borderLeft: '1px solid black',
            borderRight: '1px solid black',
          }}
        >
          <h3>7123</h3>
          <p>TROLO</p>
        </Styles.Box>
        <Styles.Box>
          <h3>12</h3>
          <p>MZIU</p>
        </Styles.Box>
      </Styles.SectionInfo>
    </Styles.Container>
  );
};

export default Card;
