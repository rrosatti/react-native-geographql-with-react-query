import React from 'react';
import { View, Text } from 'react-native';

import InfoItem from 'components/InfoItem';

import type { GetCountry } from 'state/remote/__generated__/default';

import styles from './styles';

interface CountryDetailProps {
  country: GetCountry.Country | null | undefined;
}

const CountryInfo = ({ country }: CountryDetailProps): JSX.Element => {
  return country ? (
    <>
      <View style={styles.emojiContainer}>
        <Text style={styles.emoji}>{country.emoji}</Text>
      </View>
      <View>
        <View style={styles.infoItemContainer}>
          <InfoItem label="Name" value={country.name} />
        </View>
        <View style={styles.infoItemContainer}>
          <InfoItem label="Capital" value={country.capital} />
        </View>
        <View style={styles.infoItemContainer}>
          <InfoItem label="Phone Code" value={country.phone_code} />
        </View>
        <View style={styles.infoItemContainer}>
          <InfoItem label="Currency Symbol" value={country.currency_symbol} />
        </View>
        <View style={styles.infoItemContainer}>
          <InfoItem label="Region" value={country.region} />
        </View>
        <View style={styles.infoItemContainer}>
          <InfoItem label="Subregion" value={country.subregion} />
        </View>
        <View style={styles.infoItemContainer}>
          <InfoItem
            label="Timezone"
            value={country.timezones[0].abbreviation}
          />
        </View>
        <View style={styles.infoItemContainer}>
          <InfoItem label="Latitude" value={String(country.latitude)} />
        </View>
        <View style={styles.infoItemContainer}>
          <InfoItem label="Longitude" value={String(country.longitude)} />
        </View>
      </View>
    </>
  ) : (
    <View />
  );
};

export default CountryInfo;
