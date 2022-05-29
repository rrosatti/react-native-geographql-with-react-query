import React from 'react';

import type { GetCountries } from 'state/remote/__generated__/default';

import {
  StyledTouchableOpacity,
  StyledLeftContentContainerView,
  StyledNameText,
  StyledCapitalContainerView,
  StyledCapitalText,
  StyledEmojiContainerView,
  StyledEmojiText,
} from './styled-components';

type Country = GetCountries.Node;

export interface CountryTileProps extends Country {
  onPress: (id: number) => void;
}

const CountryTile = ({
  id,
  name,
  capital,
  emoji,
  onPress,
}: CountryTileProps): JSX.Element => {
  const handleOnPress = React.useCallback(
    (): void => onPress(id),
    [onPress, id],
  );

  return (
    <StyledTouchableOpacity onPress={handleOnPress}>
      <StyledLeftContentContainerView>
        <StyledNameText>{name}</StyledNameText>
        <StyledCapitalContainerView>
          <StyledCapitalText>{capital}</StyledCapitalText>
        </StyledCapitalContainerView>
      </StyledLeftContentContainerView>
      <StyledEmojiContainerView>
        <StyledEmojiText>{emoji}</StyledEmojiText>
      </StyledEmojiContainerView>
    </StyledTouchableOpacity>
  );
};

export default CountryTile;
