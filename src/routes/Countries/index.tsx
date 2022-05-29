import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NavigationProp } from '@react-navigation/native';

import { Constants as GetCountriesConstants } from 'state/remote/use-get-countries';

import { client } from 'state/graphql-config';

import { useInfiniteGetCountriesQuery } from 'state/remote/__generated__/default';

import routes from 'routes';

import type { StandaloneNavigationParams } from 'navigation/CountryNavigator/types';

import CountryList from 'components/CountryList';
import type { CountryTileProps } from 'components/CountryTile';
import LoadingOrTapToRefresh from 'components/LoadingOrTapToRefresh';

import styles from './styles';

const Countries = (): JSX.Element => {
  const { isLoading, error, data, refetch, fetchNextPage, hasNextPage } =
    useInfiniteGetCountriesQuery(
      'pageCountries',
      client,
      {
        pageCountries: { first: GetCountriesConstants.countries.defaultFirst },
      },
      {
        getNextPageParam: (lastPage) =>
          lastPage.countries.pageInfo.endCursor ?? undefined,
      },
    );

  const { navigate } =
    useNavigation<NavigationProp<StandaloneNavigationParams>>();

  const handleOnPress = React.useCallback(
    (id: number): void => navigate(routes.CountryDetail, { id }),
    [navigate],
  );

  const mappedCountries = React.useMemo(() => {
    const countries: CountryTileProps[] = [];
    data?.pages.forEach((page) =>
      page.countries.edges.forEach((country) => {
        const onPress = () => handleOnPress(country.node.id);
        countries.push({ ...country.node, onPress });
      }),
    );
    return countries;
  }, [data, handleOnPress]);

  const [hasMomentumScrollBegin, setHasMomentumScrollBegin] =
    React.useState(false);

  // necessary to fix a bug in which the onEndReached was being called
  // twice in a roll during the first load
  const handleOnMomentumScrollBegin = React.useCallback((): void => {
    setHasMomentumScrollBegin(true);
  }, []);

  const handleOnEndReached = React.useCallback((): void => {
    if (hasMomentumScrollBegin && !isLoading && hasNextPage) {
      fetchNextPage({
        pageParam: {
          pageCountries: {
            after:
              data?.pages[data.pages.length - 1].countries.pageInfo.endCursor,
            first: GetCountriesConstants.countries.defaultFirst,
          },
        },
      });
      setHasMomentumScrollBegin(false);
    }
  }, [hasMomentumScrollBegin, isLoading, fetchNextPage, hasNextPage, data]);

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
              loading={isLoading}
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
