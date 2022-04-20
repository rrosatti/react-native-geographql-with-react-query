import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import useFavoriteCountry from 'state/local/favorite-country/hooks/use-favorite-country';

import { FAVORITE_COUNTRY_KEY } from './constants';

const useGetFavoriteCountryFromAsyncStorage = (): void => {
  const { updateId } = useFavoriteCountry();
  React.useEffect((): void => {
    const readData = async () => {
      try {
        const favoriteCountry = await AsyncStorage.getItem(
          FAVORITE_COUNTRY_KEY,
        );

        if (favoriteCountry !== null) {
          updateId(Number(favoriteCountry));
        }
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(
          'Error when trying to retrieve favorite country from async storage: ',
          e,
        );
      }
    };

    readData();
  }, [updateId]);
};

export default useGetFavoriteCountryFromAsyncStorage;
