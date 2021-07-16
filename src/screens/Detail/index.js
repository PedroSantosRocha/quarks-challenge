import React from 'react';
import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import { actions, selectors } from '../../store/slices/home';
import {
  Container,
  Card,
  TextTitleCard,
  TextContentCard,
  LittleCard,
  AreaButton,
} from './styles';

import Header from '../../components/Header';
import Button from '../../components/Button';

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
      <Header title={personage.name} />
      <Container>
        <Card>
          <LittleCard>
            <TextTitleCard>Birth Date: </TextTitleCard>
            <TextContentCard>{personage.birth_year}</TextContentCard>
          </LittleCard>
          <LittleCard>
            <TextTitleCard>Gender: </TextTitleCard>
            <TextContentCard>{personage.gender}</TextContentCard>
          </LittleCard>
          <LittleCard>
            <TextTitleCard>Height: </TextTitleCard>
            <TextContentCard>{personage.height}</TextContentCard>
          </LittleCard>
          <LittleCard>
            <TextTitleCard>Mass: </TextTitleCard>
            <TextContentCard>{personage.mass}</TextContentCard>
          </LittleCard>
          <LittleCard>
            <TextTitleCard>Hair color: </TextTitleCard>
            <TextContentCard>{personage.hair_color}</TextContentCard>
          </LittleCard>
          <LittleCard>
            <TextTitleCard>Eye Color: </TextTitleCard>
            <TextContentCard>{personage.eye_color}</TextContentCard>
          </LittleCard>
          <LittleCard>
            <TextTitleCard>Skin Color: </TextTitleCard>
            <TextContentCard>{personage.skin_color}</TextContentCard>
          </LittleCard>
        </Card>
        <AreaButton>
          <Button
            onPress={() => {
              ifExists(personage)
                ? removePersonageList(personage)
                : addPersonageFavoriteList(personage);
            }}
            title={!ifExists(personage) ? 'Favorite' : 'Disfavor'}
            disabled={ifExists(personage) ? true : false}
          />
        </AreaButton>
      </Container>
    </>
  );
};

export default Favorites;
