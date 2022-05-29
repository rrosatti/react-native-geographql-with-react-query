import React from 'react';
import { TouchableOpacity } from 'react-native';

import { StyledContainerView, StyledButtonText } from './styled-components';
import type { Props } from './types';

const FavoriteUnfavoriteButton = ({ onPress, type }: Props): JSX.Element => {
  return (
    <StyledContainerView type={type}>
      <TouchableOpacity onPress={onPress}>
        <StyledButtonText>
          {type === 'favorite' ? 'Favorite' : 'Unfavorite'}
        </StyledButtonText>
      </TouchableOpacity>
    </StyledContainerView>
  );
};

export default FavoriteUnfavoriteButton;
