import styled from 'styled-components/native';

import Fonts from 'styles/fonts';
import Colors from 'styles/colors';

export const StyledContainerView = styled.View`
  flex-direction: row;
`;

export const StyledLabelText = styled.Text`
  font-family: ${() => Fonts.NunitoSansBold};
  font-size: 20px;
`;

export const StyledValueText = styled.Text`
  color: ${() => Colors.blackCoral};
  font-family: ${() => Fonts.NunitoSansBold};
  font-size: 18px;
`;
