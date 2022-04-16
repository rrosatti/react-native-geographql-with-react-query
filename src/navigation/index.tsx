import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import LoggedNavigator from './LoggedNavigator';

const Navigation = (): JSX.Element => {
  return (
    <NavigationContainer>
      <LoggedNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
