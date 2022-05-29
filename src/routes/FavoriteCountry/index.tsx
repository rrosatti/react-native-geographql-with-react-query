import React from 'react';
import { Text, ScrollView } from 'react-native';

import useGetCountry from 'state/remote/use-get-country';
import useFavoriteCountry from 'state/local/favorite-country/hooks/use-favorite-country';
import { client } from 'state/graphql-config';

import useRemoveFavoriteCountryFromAsyncStorage from 'hooks/use-remove-favorite-country-from-async-storage';

import LoadingOrError from 'components/LoadingOrError';
import CountryInfo from 'components/CountryInfo';
import FavoriteUnfavoriteButton from 'components/FavoriteUnfavoriteButton';

import {
  StyledEmptyInfoContainerView,
  StyledContainerSafeAreaView,
  StyledContentContainerView,
  StyledHeaderContainerView,
  StyledHeaderLeftAccessoryView,
  StyledHeaderTextContainerView,
  StyledHeaderText,
  StyledHeaderRightAccessoryView,
  StyledInfoItemsContainerView,
} from './styled-components';

const FavoriteCountry = (): JSX.Element => {
  const {
    favoriteCountry: { id },
  } = useFavoriteCountry();

  const { data, isLoading, error, refetch } = useGetCountry(
    client,
    {
      id,
    },
    { enabled: !!id },
  );

  const country = React.useMemo(() => data?.country, [data]);

  const { removeData: removeFavoriteCountry } =
    useRemoveFavoriteCountryFromAsyncStorage();

  const EmptyInfo = React.useCallback((): JSX.Element => {
    return (
      <StyledEmptyInfoContainerView>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <Text>You haven't favorite any country so far!!</Text>
      </StyledEmptyInfoContainerView>
    );
  }, []);

  return !id && !data && !isLoading ? (
    <EmptyInfo />
  ) : (
    <LoadingOrError
      loading={isLoading}
      error={error}
      data={data}
      refetch={refetch}
    >
      <ScrollView>
        <StyledContainerSafeAreaView>
          {country && (
            <StyledContentContainerView>
              <StyledHeaderContainerView>
                <StyledHeaderLeftAccessoryView />
                <StyledHeaderTextContainerView>
                  <StyledHeaderText>{country && country.name}</StyledHeaderText>
                </StyledHeaderTextContainerView>
                <StyledHeaderRightAccessoryView />
              </StyledHeaderContainerView>
              <StyledInfoItemsContainerView>
                <CountryInfo country={country} />
              </StyledInfoItemsContainerView>
              <FavoriteUnfavoriteButton
                onPress={removeFavoriteCountry}
                type="unfavorite"
              />
            </StyledContentContainerView>
          )}
        </StyledContainerSafeAreaView>
      </ScrollView>
    </LoadingOrError>
  );
};

export default FavoriteCountry;
