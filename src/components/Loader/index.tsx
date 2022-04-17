import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

import styles from './styles';

const Loader = (): JSX.Element => (
  <View style={styles.container}>
    <LottieView
      // eslint-disable-next-line global-require
      source={require('lottie/spinner.json')}
      autoPlay
      loop
      style={styles.lottieContainer}
    />
  </View>
);

export default Loader;
