import { StyleSheet } from 'react-native';

import Colors from 'styles/colors';
import Fonts from 'styles/fonts';

const styles = StyleSheet.create({
  buttonText: {
    color: Colors.white,
    fontFamily: Fonts.NunitoSansBold,
    fontSize: 18,
  },
  container: {
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
    marginTop: 24,
    paddingVertical: 16,
  },
  favorite: {
    backgroundColor: Colors.dartmouthGreen,
    borderColor: Colors.dartmouthGreen,
  },
  unfavorite: {
    backgroundColor: Colors.englishVermillion,
    borderColor: Colors.englishVermillion,
  },
});

export default styles;
