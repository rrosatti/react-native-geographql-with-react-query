import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/core';
import type { RouteProp } from '@react-navigation/core';
import FastImage from 'react-native-fast-image';

import type { StandaloneNavigationParams } from 'navigation/CountryNavigator/types';

import type routes from 'routes';

import useGetCountry from 'state/remote/use-get-country';

import LoadingOrError from 'components/LoadingOrError';
import CountryInfo from 'components/CountryInfo';

import styles from './styles';

type CountryDetailRouteProp = RouteProp<
  StandaloneNavigationParams,
  typeof routes.CountryDetail
>;

const CountryDetail = (): JSX.Element => {
  const { id = undefined } = useRoute<CountryDetailRouteProp>()?.params;
  const { data, loading, error, refetch } = useGetCountry({
    skip: !id,
    variables: { id },
  });

  const { goBack } = useNavigation();

  const country = React.useMemo(() => data?.country, [data]);

  return (
    <LoadingOrError
      loading={loading}
      error={error}
      data={data}
      refetch={refetch}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.headerContainer}>
            <TouchableOpacity onPress={goBack}>
              <FastImage
                // eslint-disable-next-line global-require
                source={require('assets/left-arrow.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
            <View style={styles.headerTextContainer}>
              <Text style={styles.headerText}>{country && country.name}</Text>
            </View>
            <View style={styles.icon} />
          </View>
          <View style={styles.infoItemsContainer}>
            <CountryInfo country={country} />
          </View>
        </View>
      </SafeAreaView>
    </LoadingOrError>
  );
};

export default CountryDetail;
