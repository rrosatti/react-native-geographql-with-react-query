import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';

import Colors from 'styles/colors';
import Fonts from 'styles/fonts';

export const Constants = {
  iconSize: 48,
};

export const tabBarOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarIconStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBarLabelStyle: {
    color: Colors.platinum,
    fontFamily: Fonts.NunitoSansBold,
    fontSize: 14,
    textTransform: 'uppercase',
  },
  tabBarStyle: {
    backgroundColor: Colors.blackCoral,
    borderTopWidth: 0,
    height: 120,
  },
};

const styles = StyleSheet.create({
  icon: {
    height: Constants.iconSize,
    width: Constants.iconSize,
  },
});

export default styles;
