import React from 'react';
import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import { actions, selectors } from '../../store/slices/home';
import { Container, Card, TextCard, LittleCard } from './styles';

import Header from '../../components/Header';

const Favorites = () => {
  const route = useRoute();
  const dispatch = useDispatch();

  const personage = route.params.personage;
  const favoritesPersonages = useSelector(selectors.favoritesPersonages);

  const addPersonageFavoriteList = personageProp =>
    dispatch(actions.addPersonageFavorite(personageProp));
  const removePersonageList = personageProp =>
    dispatch(actions.removePersonageFavorite(personageProp));

  const ifExists = personageProp => {
    return (
      favoritesPersonages.filter(item => item.name === personageProp.name)
        .length > 0
    );
  };

  return (
    <>
      <Header
        title={personage.name}
        onPress={() => {
          ifExists(personage)
            ? removePersonageList(personage)
            : addPersonageFavoriteList(personage);
        }}
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
