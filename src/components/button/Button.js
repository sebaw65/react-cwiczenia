import React from 'react';
import * as Styles from './Button.styles';

const Button = ({ children, color, font }) => {
  return (
    <Styles.Container color={color} font={font}>
      {children}
    </Styles.Container>
  );
};

export default Button;
