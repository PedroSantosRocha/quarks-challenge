import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { selectors } from '../../store/slices/home';
import { Container } from './styles';

import Personage from '../../components/Personage';
import Header from '../../components/Header';

const Home = () => {
  const navigation = useNavigation();
  const favorites = useSelector(selectors.favoritesPersonages);

  function navigateToDetail(personage) {
    navigation.navigate('Detail', { personage });
  }

  return (
    <>
      <Header
        title="Favorites"
        subTitle="Your personages marked as favorites!"
      />
      <Container>
        <FlatList
          data={favorites}
          keyExtractor={favorite => String(favorite.name)}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.1}
          renderItem={({ item: favorite }) => (
            <Personage
              name={favorite.name}
              onPress={() => navigateToDetail(favorite)}
            />
          )}
        />
      </Container>
    </>
  );
};

export default Home;
