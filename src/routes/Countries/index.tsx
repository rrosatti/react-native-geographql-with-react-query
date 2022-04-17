import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NavigationProp } from '@react-navigation/native';

import useGetCountries, {
  Constants as GetCountriesConstants,
} from 'state/remote/use-get-countries';

import routes from 'routes';

import type { StandaloneNavigationParams } from 'navigation/CountryNavigator/types';

import LoadingOrError from 'components/LoadingOrError';
import CountryList from 'components/CountryList';

import styles from './styles';

const Countries = (): JSX.Element => {
  const { loading, error, data, refetch } = useGetCountries({
    notifyOnNetworkStatusChange: true,
    variables: {
      pageCountries: { first: GetCountriesConstants.countries.defaultFirst },
    },
  });

  const { navigate } =
    useNavigation<NavigationProp<StandaloneNavigationParams>>();

  const handleOnPress = React.useCallback(
    (id: number): void => navigate(routes.CountryDetail, { id }),
    [navigate],
  );

  const mappedCountries = React.useMemo(
    () =>
      data?.countries.edges.map((country) => {
        const onPress = () => handleOnPress(country.node.id);
        return { ...country.node, onPress };
      }) || [],
    [data, handleOnPress],
  );

  return (
    <LoadingOrError
      loading={loading}
      error={error}
      data={data}
      refetch={refetch}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerText}>Countries</Text>
          </View>
          <CountryList countries={mappedCountries} />
        </View>
      </SafeAreaView>
    </LoadingOrError>
  );
};

export default Countries;
