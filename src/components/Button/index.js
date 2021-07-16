import React from 'react';

import {
  FavoriteButton,
  FavoriteButtonDisabled,
  Title,
  TitleDisabled,
} from './styles';

const Button = ({ title, onPress, disabled }) => {
  return (
    <>
      {!disabled ? (
        <FavoriteButton onPress={onPress}>
          <Title>{title}</Title>
        </FavoriteButton>
      ) : (
        <FavoriteButtonDisabled onPress={onPress}>
          <TitleDisabled>{title}</TitleDisabled>
        </FavoriteButtonDisabled>
      )}
    </>
  );
};

export default Button;
