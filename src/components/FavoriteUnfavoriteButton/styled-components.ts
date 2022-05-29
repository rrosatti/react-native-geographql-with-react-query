import styled from 'styled-components/native';

import Colors from 'styles/colors';
import Fonts from 'styles/fonts';

import type { Props } from './types';

export const StyledContainerView = styled.View<Pick<Props, 'type'>>`
  align-items: center;
  border-radius: 20px;
  border-width: 1px;
  margin-top: 24px;
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: ${(p) =>
    p.type === 'favorite' ? Colors.dartmouthGreen : Colors.englishVermillion};
  border-color: ${(p) =>
    p.type === 'favorite' ? Colors.dartmouthGreen : Colors.englishVermillion};
`;

export const StyledButtonText = styled.Text`
  color: ${() => Colors.white};
  font-family: ${() => Fonts.NunitoSansBold};
  font-size: 18px;
`;
