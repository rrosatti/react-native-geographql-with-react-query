import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/core';
import type { RouteProp } from '@react-navigation/core';
import FastImage from 'react-native-fast-image';

import type { StandaloneNavigationParams } from 'navigation/CountryNavigator/types';

import type routes from 'routes';

import useGetCountry from 'state/remote/use-get-country';
import useFavoriteCountry from 'state/local/favorite-country/hooks/use-favorite-country';
import { client } from 'state/graphql-config';

import useSetFavoriteCountryToAsyncStorage from 'hooks/use-set-favorite-country-to-async-storage';
import useRemoveFavoriteCountryFromAsyncStorage from 'hooks/use-remove-favorite-country-from-async-storage';

import LoadingOrError from 'components/LoadingOrError';
import FavoriteUnfavoriteButton from 'components/FavoriteUnfavoriteButton';
import CountryInfo from 'components/CountryInfo';

import {
  styles,
  StyledContainerSafeAreaView,
  StyledContentContainerView,
  StyledHeaderContainerView,
  StyledHeaderTextContainerView,
  StyledHeaderText,
  StyledRightAccessoryHeaderView,
  StyledInfoItemsContainerView,
} from './styled-components';

type CountryDetailRouteProp = RouteProp<
  StandaloneNavigationParams,
  typeof routes.CountryDetail
>;

const CountryDetail = (): JSX.Element => {
  const { id = undefined } = useRoute<CountryDetailRouteProp>()?.params;
  const { data, isLoading, error, refetch } = useGetCountry(
    client,
    {
      id,
    },
    { enabled: !!id },
  );

  const { goBack } = useNavigation();

  const country = React.useMemo(() => data?.country, [data]);

  const {
    favoriteCountry: { id: favoriteCountryId },
  } = useFavoriteCountry();

  const { saveData: saveFavoriteCountry } = useSetFavoriteCountryToAsyncStorage(
    {
      id: country?.id,
    },
  );

  const { removeData: removeFavoriteCountry } =
    useRemoveFavoriteCountryFromAsyncStorage();

  return (
    <LoadingOrError
      loading={isLoading}
      error={error}
      data={data}
      refetch={refetch}
    >
      <StyledContainerSafeAreaView>
        <StyledContentContainerView>
          <StyledHeaderContainerView>
            <TouchableOpacity onPress={goBack}>
              <FastImage
                // eslint-disable-next-line global-require
                source={require('assets/left-arrow.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
            <StyledHeaderTextContainerView>
              <StyledHeaderText>{country && country.name}</StyledHeaderText>
            </StyledHeaderTextContainerView>
            <StyledRightAccessoryHeaderView />
          </StyledHeaderContainerView>
          <StyledInfoItemsContainerView>
            <CountryInfo country={country} />
          </StyledInfoItemsContainerView>
          <FavoriteUnfavoriteButton
            onPress={
              favoriteCountryId === country?.id
                ? removeFavoriteCountry
                : saveFavoriteCountry
            }
            type={favoriteCountryId === country?.id ? 'unfavorite' : 'favorite'}
          />
        </StyledContentContainerView>
      </StyledContainerSafeAreaView>
    </LoadingOrError>
  );
};

export default CountryDetail;
