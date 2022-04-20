import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import styles from './styles';

type Type = 'favorite' | 'unfavorite';

interface Props {
  onPress: () => void;
  type: Type;
}

const FavoriteUnfavoriteButton = ({ onPress, type }: Props): JSX.Element => {
  return (
    <View
      style={[
        styles.container,
        type === 'favorite' ? styles.favorite : styles.unfavorite,
      ]}
    >
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.buttonText}>
          {type === 'favorite' ? 'Favorite' : 'Unfavorite'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default FavoriteUnfavoriteButton;
