import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { actions, selectors } from '../../store/slices/home';
import { Container } from './styles';

import Personage from '../../components/Personage';
import Header from '../../components/Header';

const Home = () => {
  const favorites = useSelector(selectors.favoritesPersonages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getPersonage());
  }, [dispatch]);

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
