import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import routeNames from 'routes';

import HomeTabNavigator from 'navigation/HomeNavigator';

import type { NavigationParams } from './types';

const Stack = createStackNavigator<NavigationParams>();

const LoggedNavigator = (): JSX.Element => (
  <Stack.Navigator
    initialRouteName={routeNames.HomeTabNavigator as keyof NavigationParams}
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen
      name={routeNames.HomeTabNavigator as keyof NavigationParams}
      component={HomeTabNavigator}
    />
  </Stack.Navigator>
);

export default LoggedNavigator;
