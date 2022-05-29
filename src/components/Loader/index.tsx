import React from 'react';
import LottieView from 'lottie-react-native';

import { styles, StyledContainerView } from './styled-components';

const Loader = (): JSX.Element => (
  <StyledContainerView>
    <LottieView
      // eslint-disable-next-line global-require
      source={require('lottie/spinner.json')}
      autoPlay
      loop
      style={styles.lottieContainer}
    />
  </StyledContainerView>
);

export default Loader;
