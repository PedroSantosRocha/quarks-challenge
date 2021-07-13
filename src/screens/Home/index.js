import React, { useEffect } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { actions } from '../../store/slices/home';
import { Container } from './styles';
import Personage from '../../components/Personage';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getPersonage());
  }, [dispatch]);

  const personages = useSelector(state => state.home.personages);

  return (
    <>
      <Container>
        <SafeAreaView />
        <FlatList
          data={personages}
          keyExtractor={personage => String(personage.name)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: personage }) => (
            <Personage name={personage.name} />
          )}
        />
      </Container>
    </>
  );
};

export default Home;
