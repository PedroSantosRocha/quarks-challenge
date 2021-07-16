import React from 'react';
import { SafeAreaView } from 'react-native';
import { Container, Title, SubTitle } from './styles';

const Header = ({ title, subTitle }) => {
  return (
    <Container>
      <SafeAreaView />
      <Title>{title}</Title>
      {subTitle ? <SubTitle>{subTitle}</SubTitle> : null}
    </Container>
  );
};

export default Header;
