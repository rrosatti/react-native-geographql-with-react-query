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
  emptyInfoContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 8,
    marginTop: 16,
  },
  headerText: {
    fontFamily: Fonts.NunitoSansBold,
    fontSize: 24,
  },
  headerTextContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  icon: {
    height: 24,
    width: 24,
  },
  infoItemsContainer: {
    paddingTop: 24,
  },
});

export default styles;
