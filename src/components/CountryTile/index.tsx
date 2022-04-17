import React from 'react';
import { View, Text } from 'react-native';

import type { GetCountries } from 'state/remote/__generated__/default';

import styles from './styles';

type Country = GetCountries.Node;

const CountryTile = ({ name, capital, emoji }: Country): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContentContainer}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.capitalContainer}>
          <Text style={styles.capital}>{capital}</Text>
        </View>
      </View>
      <View style={styles.emojiContainer}>
        <Text style={styles.emoji}>{emoji}</Text>
      </View>
    </View>
  );
};

export default CountryTile;
