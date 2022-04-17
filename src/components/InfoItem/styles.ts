import { StyleSheet } from 'react-native';

import Fonts from 'styles/fonts';
import Colors from 'styles/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  label: {
    fontFamily: Fonts.NunitoSansBold,
    fontSize: 20,
  },
  value: {
    color: Colors.blackCoral,
    fontFamily: Fonts.NunitoSansBold,
    fontSize: 18,
  },
});

export default styles;
