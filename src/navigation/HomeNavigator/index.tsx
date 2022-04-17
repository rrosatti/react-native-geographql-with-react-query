import React from 'react';
import { View } from 'react-native';
import FastImage from 'react-native-fast-image';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import routeNames from 'routes';

import Countries from 'routes/Countries';

import type { NavigationParams } from './types';
import styles, { tabBarOptions } from './styles';

const routes = {
  [routeNames.Countries]: Countries,
};

const icons = {
  // eslint-disable-next-line global-require
  [routeNames.Countries]: require('assets/earth.png'),
};

const iconsRoutes = (routeName: keyof NavigationParams) => {
  const iconSrc = icons[routeName];
  return (
    <View style={{}}>
      <FastImage source={iconSrc} style={styles.icon} />
    </View>
  );
};

const Tab = createBottomTabNavigator<NavigationParams>();

const HomeNavigator = (): JSX.Element => {
  return (
    <Tab.Navigator screenOptions={tabBarOptions}>
      {Object.entries(routes).map(([name, component]) => (
        <Tab.Screen
          name={name as keyof NavigationParams}
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
