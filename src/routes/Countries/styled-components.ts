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

export const StyledHeaderTextContainerView = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  margin-top: 16px;
`;

export const StyledHeaderText = styled.Text`
  font-family: ${() => Fonts.NunitoSansBold};
  font-size: 24px;
`;
