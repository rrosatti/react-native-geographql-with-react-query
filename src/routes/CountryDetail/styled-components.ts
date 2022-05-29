import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import Fonts from 'styles/fonts';

export const StyledContainerSafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

export const StyledContentContainerView = styled.View`
  flex: 1;
  padding-left: 16px;
  padding-right: 16px;
`;

export const StyledHeaderContainerView = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 8px;
  margin-top: 16px;
`;

export const StyledHeaderTextContainerView = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
`;

export const StyledHeaderText = styled.Text`
  font-family: ${() => Fonts.NunitoSansBold};
  font-size: 24px;
`;

export const StyledRightAccessoryHeaderView = styled.View`
  height: 24px;
  width: 24px;
`;

export const StyledInfoItemsContainerView = styled.View`
  padding-top: 24px;
`;

export const styles = StyleSheet.create({
  icon: {
    height: 24,
    width: 24,
  },
});
