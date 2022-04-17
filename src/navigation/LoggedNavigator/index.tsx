import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import routeNames from 'routes';

import HomeTabNavigator from 'navigation/HomeNavigator';
import { standaloneRoutes as countryStandaloneRoutes } from 'navigation/CountryNavigator';

import type { NavigationParams } from './types';

const Stack = createStackNavigator<NavigationParams>();

const standaloneRoutes = {
  ...countryStandaloneRoutes,
};

const LoggedNavigator = (): JSX.Element => (
  <Stack.Navigator
    initialRouteName={routeNames.HomeTabNavigator as keyof NavigationParams}
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen
      name={routeNames.HomeTabNavigator as keyof NavigationParams}
      component={HomeTabNavigator}
    />
    {Object.entries(standaloneRoutes).map(([name, component]) => (
      <Stack.Screen
        name={name as keyof NavigationParams}
        component={component}
        key={name}
      />
    ))}
  </Stack.Navigator>
);

export default LoggedNavigator;
