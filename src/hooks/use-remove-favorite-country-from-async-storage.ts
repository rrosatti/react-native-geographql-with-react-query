import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import useFavoriteCountry from 'state/local/favorite-country/hooks/use-favorite-country';

import { FAVORITE_COUNTRY_KEY } from './constants';

interface UseRemoveFavoriteCountryFromAsyncStorageResult {
  removeData: () => Promise<void>;
}

const useRemoveFavoriteCountryFromAsyncStorage =
  (): UseRemoveFavoriteCountryFromAsyncStorageResult => {
    const { updateId } = useFavoriteCountry();

    const removeFavoriteCountryFromAsyncStorage =
      React.useCallback(async (): Promise<void> => {
        try {
          await AsyncStorage.removeItem(FAVORITE_COUNTRY_KEY);
          updateId(null);
        } catch (e) {
          // eslint-disable-next-line no-console
          console.log(
            'Error when trying to remove the favorite country id from async storage: ',
            e,
          );
        }
      }, [updateId]);

    return { removeData: removeFavoriteCountryFromAsyncStorage };
  };

export default useRemoveFavoriteCountryFromAsyncStorage;
