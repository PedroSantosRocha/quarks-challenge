import React from 'react';
import { useRoute } from '@react-navigation/native';

import { Container, Card, TextCard, LittleCard } from './styles';

import Header from '../../components/Header';

const Favorites = () => {
  const route = useRoute();

  const personage = route.params.personage;

  return (
    <>
      <Header
        title={personage.name}
        onPress={console.log('button')}
        textButton="Favorite"
      />
      <Container>
        <Card>
          <LittleCard>
            <TextCard>Birth Date: {personage.birth_year}</TextCard>
          </LittleCard>
          <LittleCard>
            <TextCard>Gender: {personage.gender}</TextCard>
          </LittleCard>
          <LittleCard>
            <TextCard>Height: {personage.height}</TextCard>
          </LittleCard>
          <LittleCard>
            <TextCard>Mass: {personage.mass}</TextCard>
          </LittleCard>
          <LittleCard>
            <TextCard>Hair color: {personage.hair_color}</TextCard>
          </LittleCard>
          <LittleCard>
            <TextCard>Eye Color: {personage.eye_color}</TextCard>
          </LittleCard>
          <LittleCard>
            <TextCard>Skin Color: {personage.skin_color}</TextCard>
          </LittleCard>
        </Card>
      </Container>
    </>
  );
};

export default Favorites;
