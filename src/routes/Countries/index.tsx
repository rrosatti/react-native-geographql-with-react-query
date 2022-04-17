import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

import useGetCountries, {
  Constants as GetCountriesConstants,
} from 'state/remote/use-get-countries';

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

  const mappedCountries = React.useMemo(
    () => data?.countries.edges.map((country) => ({ ...country.node })) || [],
    [data],
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
