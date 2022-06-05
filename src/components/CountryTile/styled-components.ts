/* eslint-disable sort-keys */
import styled from 'styled-components/native';

import Colors from 'styles/colors';
import Fonts from 'styles/fonts';

import type { CountryTileProps } from './types';

export const StyledTouchableOpacity = styled.TouchableOpacity<
  Pick<CountryTileProps, 'highlight'>
>`
  background-color: ${(props) =>
    props.highlight ? Colors.dartmouthGreen : Colors.platinum};
  border-radius: 10px;
  flex-direction: row;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
`;

export const StyledLeftContentContainerView = styled.View`
  flex: 1;
  justify-content: center;
`;

export const StyledNameText = styled.Text`
  font-family: ${() => Fonts.NunitoSansBold};
  font-size: 20px;
`;

export const StyledCapitalContainerView = styled.View`
  padding-top: 2px;
`;

export const StyledCapitalText = styled.Text<
  Pick<CountryTileProps, 'highlight'>
>`
  color: ${(props) => (props.highlight ? Colors.platinum : Colors.graniteGray)};
  font-family: ${() => Fonts.NunitoSansBold};
  font-size: 14px;
`;

export const StyledEmojiContainerView = styled.View`
  align-items: center;
  justify-content: center;
`;

export const StyledEmojiText = styled.Text`
  font-size: 48px;
`;
