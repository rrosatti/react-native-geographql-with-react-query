import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import type { GetCountries } from 'state/remote/__generated__/default';

import styles from './styles';

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
    <TouchableOpacity style={styles.container} onPress={handleOnPress}>
      <View style={styles.leftContentContainer}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.capitalContainer}>
          <Text style={styles.capital}>{capital}</Text>
        </View>
      </View>
      <View style={styles.emojiContainer}>
        <Text style={styles.emoji}>{emoji}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CountryTile;
