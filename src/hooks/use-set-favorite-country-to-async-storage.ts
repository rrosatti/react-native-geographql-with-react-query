import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import useFavoriteCountry from 'state/local/favorite-country/hooks/use-favorite-country';

import { FAVORITE_COUNTRY_KEY } from './constants';

interface UseSetFavoriteCountryToAsyncStorageInput {
  id: number | null | undefined;
}

interface UseSetFavoriteCountryToAsyncStorageResult {
  saveData: () => Promise<void>;
}

const useSetFavoriteCountryToAsyncStorage = ({
  id,
}: UseSetFavoriteCountryToAsyncStorageInput): UseSetFavoriteCountryToAsyncStorageResult => {
  const { updateId } = useFavoriteCountry();

  const saveFavoriteCountryOnAsyncStorage =
    React.useCallback(async (): Promise<void> => {
      if (!id) return;

      try {
        await AsyncStorage.setItem(FAVORITE_COUNTRY_KEY, String(id));
        updateId(id);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(
          'Error when trying to save the favorite country id on async storage: ',
          e,
        );
      }
    }, [id, updateId]);

  return { saveData: saveFavoriteCountryOnAsyncStorage };
};

export default useSetFavoriteCountryToAsyncStorage;
