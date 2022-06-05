import React from 'react';
import { useNavigation } from '@react-navigation/native';
import type { NavigationProp } from '@react-navigation/native';

import { Constants as GetCountriesConstants } from 'state/remote/use-get-countries';

import { client } from 'state/graphql-config';

import { useInfiniteGetCountriesQuery } from 'state/remote/__generated__/default';

import routes from 'routes';

import type { StandaloneNavigationParams } from 'navigation/CountryNavigator/types';

import CountryList from 'components/CountryList';
import type { CountryTileProps } from 'components/CountryTile/types';
import LoadingOrTapToRefresh from 'components/LoadingOrTapToRefresh';

import {
  StyledContainerSafeAreaView,
  StyledContentContainerView,
  StyledHeaderTextContainerView,
  StyledHeaderText,
} from './styled-components';

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
    <StyledContainerSafeAreaView>
      <StyledContentContainerView>
        <StyledHeaderTextContainerView>
          <StyledHeaderText>Countries</StyledHeaderText>
        </StyledHeaderTextContainerView>
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
      </StyledContentContainerView>
    </StyledContainerSafeAreaView>
  );
};

export default Countries;
