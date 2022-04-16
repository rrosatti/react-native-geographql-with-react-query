import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import routeNames from 'routes';

import Countries from 'routes/Countries';

import type { NavigationParams } from './types';

const routes = {
  [routeNames.Countries]: Countries,
};

const Tab = createBottomTabNavigator<NavigationParams>();

const HomeNavigator = (): JSX.Element => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      {Object.entries(routes).map(([name, component]) => (
        <Tab.Screen
          name={name as keyof NavigationParams}
          component={component}
          key={name}
        />
      ))}
    </Tab.Navigator>
  );
};

export default HomeNavigator;
