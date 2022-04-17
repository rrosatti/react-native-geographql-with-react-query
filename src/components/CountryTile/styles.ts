import { StyleSheet } from 'react-native';

import Colors from 'styles/colors';
import Fonts from 'styles/fonts';

const styles = StyleSheet.create({
  capital: {
    color: Colors.graniteGray,
    fontFamily: Fonts.NunitoSansBold,
    fontSize: 14,
  },
  capitalContainer: {
    paddingTop: 2,
  },
  container: {
    backgroundColor: Colors.platinum,
    borderRadius: 10,
    flexDirection: 'row',
    padding: 16,
  },
  emoji: {
    fontSize: 48,
  },
  emojiContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftContentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontFamily: Fonts.NunitoSansBold,
    fontSize: 20,
  },
});

export default styles;
