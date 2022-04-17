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
  emoji: {
    fontSize: 48,
  },
  emojiContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 22,
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
  infoItemContainer: {
    paddingVertical: 6,
  },
  infoItemsContainer: {
    flex: 1,
    paddingTop: 24,
  },
});

export default styles;
