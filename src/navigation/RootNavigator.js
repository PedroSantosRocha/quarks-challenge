import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Favorites from '../screens/Favorites';
import Detail from '../screens/Detail';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const tabBarOptions = {
  showLabel: true,
  inactiveTintColor: '#2D3038',
  activeTintColor: '#FFFFFF',
  labelStyle: {
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  style: {
    height: '10%',
    backgroundColor: '#1f1e25',
  },
};

function HomeTabs() {
  return (
    <Tab.Navigator initialRouteName="Home" tabBarOptions={tabBarOptions}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorites" component={Favorites} />
    </Tab.Navigator>
  );
}

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeTabs} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
