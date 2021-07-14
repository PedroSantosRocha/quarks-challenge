import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Favorites from '../screens/Favorites';

const Tab = createBottomTabNavigator();

const tabBarOptions = {
  showLabel: false,
  inactiveTintColor: '#2D3038',
  activeTintColor: '#FFFFFF',
  style: {
    height: '10%',
    backgroundColor: '#FFF',
  },
};

// const screenOptions = (route, color) => {
//   let iconName;

//   switch (route.name) {
//     case 'Home':
//       iconName = 'icon';
//       break;
//     case 'Favorites':
//       iconName = 'icon';
//       break;
//     default:
//       break;
//   }

//   return <MaterialCommunityIcons name={iconName} color={color} size={24} />;
// };

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={tabBarOptions}
        // screenOptions={({ route }) => ({
        //   tabBarIcon: ({ color }) => screenOptions(route, color)
        // })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Favorites" component={Favorites} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
