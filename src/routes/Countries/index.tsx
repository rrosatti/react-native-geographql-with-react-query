import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NavigationProp } from '@react-navigation/native';

import useGetCountries, {
  Constants as GetCountriesConstants,
} from 'state/remote/use-get-countries';

import routes from 'routes';

import type { StandaloneNavigationParams } from 'navigation/CountryNavigator/types';

import CountryList from 'components/CountryList';
import LoadingOrTapToRefresh from 'components/LoadingOrTapToRefresh';

import styles from './styles';

const Countries = (): JSX.Element => {
  const { loading, error, data, refetch, fetchMore } = useGetCountries({
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

  const [hasMomentumScrollBegin, setHasMomentumScrollBegin] =
    React.useState(false);

  // necessary to fix a bug in which the onEndReached was being called
  // twice in a roll during the first load
  const handleOnMomentumScrollBegin = React.useCallback((): void => {
    setHasMomentumScrollBegin(true);
  }, []);

  const handleOnEndReached = React.useCallback((): void => {
    if (
      hasMomentumScrollBegin &&
      !loading &&
      data?.countries.pageInfo.hasNextPage
    ) {
      fetchMore({
        variables: {
          pageCountries: {
            after: data.countries.pageInfo.endCursor,
            first: GetCountriesConstants.countries.defaultFirst,
          },
        },
      });
      setHasMomentumScrollBegin(false);
    }
  }, [data, fetchMore, hasMomentumScrollBegin, loading]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Countries</Text>
        </View>
        <CountryList
          countries={mappedCountries}
          onMomentumScrollBegin={handleOnMomentumScrollBegin}
          onEndReached={handleOnEndReached}
          ListFooterComponent={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <LoadingOrTapToRefresh
              loading={loading}
              error={error}
              data={data}
              refetch={refetch}
            />
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default Countries;
