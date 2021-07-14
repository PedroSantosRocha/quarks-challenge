import React, { useEffect } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { actions } from '../../store/slices/home';
import { Container } from './styles';
import Personage from '../../components/Personage';

const Home = () => {
  const personages = useSelector(state => state.home.personages);
  const fetchPersonages = useDispatch();

  useEffect(() => {
    fetchPersonages(actions.getPersonage());
  }, [fetchPersonages]);

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
