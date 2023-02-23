import React from 'react';
import * as Styles from './UserCard.styles';

const UserCard = () => {
  return (
    <Styles.StyledWrapper>
      <div className="test">Hello World</div>
      <Styles.StyledParagraph>Lorem ipsum</Styles.StyledParagraph>
      <Styles.StyledButton>Kilknij</Styles.StyledButton>
    </Styles.StyledWrapper>
  );
};

export default UserCard;
