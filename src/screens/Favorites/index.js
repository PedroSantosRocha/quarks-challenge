import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import { selectors } from '../../store/slices/home';
import { Container } from './styles';

import Personage from '../../components/Personage';
import Header from '../../components/Header';

const Home = () => {
  const favorites = useSelector(selectors.favoritesPersonages);

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
            <Personage name={favorite.name} />
          )}
        />
      </Container>
    </>
  );
};

export default Home;
