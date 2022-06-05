import React from 'react';

import type { CountryTileProps } from './types';

import {
  StyledTouchableOpacity,
  StyledLeftContentContainerView,
  StyledNameText,
  StyledCapitalContainerView,
  StyledCapitalText,
  StyledEmojiContainerView,
  StyledEmojiText,
} from './styled-components';

const CountryTile = ({
  id,
  name,
  capital,
  emoji,
  onPress,
  highlight = false,
}: CountryTileProps): JSX.Element => {
  const handleOnPress = React.useCallback(
    (): void => onPress(id),
    [onPress, id],
  );

  return (
    <StyledTouchableOpacity onPress={handleOnPress} highlight={highlight}>
      <StyledLeftContentContainerView>
        <StyledNameText>{name}</StyledNameText>
        <StyledCapitalContainerView>
          <StyledCapitalText highlight={highlight}>{capital}</StyledCapitalText>
        </StyledCapitalContainerView>
      </StyledLeftContentContainerView>
      <StyledEmojiContainerView>
        <StyledEmojiText>{emoji}</StyledEmojiText>
      </StyledEmojiContainerView>
    </StyledTouchableOpacity>
  );
};

export default CountryTile;
