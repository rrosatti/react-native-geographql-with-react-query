/* eslint-disable global-require */
import React from 'react';
import { View } from 'react-native';
import FastImage from 'react-native-fast-image';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import routeNames from 'routes';

import Countries from 'routes/Countries';
import FavoriteCountry from 'routes/FavoriteCountry';

import type { NavigationParams } from './types';
import styles, { tabBarOptions } from './styles';

const routes = {
  [routeNames.Countries]: Countries,
  [routeNames.FavoriteCountry]: FavoriteCountry,
};

const icons = {
  [routeNames.Countries]: require('assets/earth.png'),
  [routeNames.FavoriteCountry]: require('assets/star.png'),
};

const names = {
  [routeNames.Countries]: 'Countries',
  [routeNames.FavoriteCountry]: 'Favorite',
};

const iconsRoutes = (routeName: keyof NavigationParams) => {
  const iconSrc = icons[routeName];
  return (
    <View style={{}}>
      <FastImage source={iconSrc} style={styles.icon} />
    </View>
  );
};

const Tab = createBottomTabNavigator();

const HomeNavigator = (): JSX.Element => {
  return (
    <Tab.Navigator screenOptions={tabBarOptions}>
      {Object.entries(routes).map(([name, component]) => (
        <Tab.Screen
          name={names[name as keyof NavigationParams]}
          component={component}
          key={name}
          options={{
            tabBarIcon: () => iconsRoutes(name as keyof NavigationParams),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default HomeNavigator;
