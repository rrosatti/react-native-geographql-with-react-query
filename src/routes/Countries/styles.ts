import { StyleSheet } from 'react-native';

import Fonts from 'styles/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  headerText: {
    fontFamily: Fonts.NunitoSansBold,
    fontSize: 24,
  },
  headerTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
    marginTop: 16,
  },
});

export default styles;
