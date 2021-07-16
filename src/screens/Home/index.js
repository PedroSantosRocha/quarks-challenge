import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { actions, selectors } from '../../store/slices/home';
import { Container } from './styles';

import Personage from '../../components/Personage';
import Header from '../../components/Header';

const Home = () => {
  const navigation = useNavigation();
  const personages = useSelector(selectors.personages);
  const dispatch = useDispatch();

  function navigateToDetail(personage) {
    navigation.navigate('Detail', { personage });
  }

  useEffect(() => {
    dispatch(actions.getPersonage());
  }, [dispatch]);

  return (
    <>
      <Header title="Welcome!" subTitle="Find your favorite personage!" />
      <Container>
        <FlatList
          data={personages}
          keyExtractor={personage => String(personage.name)}
          showsVerticalScrollIndicator={false}
          onEndReached={() => {
            dispatch(actions.getPersonageNextPage());
          }}
          onEndReachedThreshold={0.3}
          removeClippedSubviews={true}
          renderItem={({ item: personage }) => (
            <Personage
              name={personage.name}
              onPress={() => navigateToDetail(personage)}
            />
          )}
        />
      </Container>
    </>
  );
};

export default Home;
