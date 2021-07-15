import React from 'react';
import { SafeAreaView } from 'react-native';
import {
  Container,
  Title,
  SubTitle,
  FavoriteButton,
  TextButton,
} from './styles';

const Header = ({ title, subTitle, onPress, textButton }) => {
  return (
    <Container>
      <SafeAreaView />
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
      <FavoriteButton onPress={onPress}>
        <TextButton>{textButton}</TextButton>
      </FavoriteButton>
    </Container>
  );
};

export default Header;
