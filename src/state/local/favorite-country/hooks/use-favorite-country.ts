import { useReactiveVar } from '@apollo/client';

import type { FavoriteCountry } from 'state/local/favorite-country';
import FavoriteCountryHandleFunctions, {
  favoriteCountryVar,
} from 'state/local/favorite-country';

interface FavoriteCountryHandler {
  favoriteCountry: FavoriteCountry;
  updateId: (id: number | null) => void;
}

const useFavoriteCountry = (): FavoriteCountryHandler => {
  const favoriteCountry = useReactiveVar(favoriteCountryVar);
  return {
    ...FavoriteCountryHandleFunctions,
    favoriteCountry,
  };
};

export default useFavoriteCountry;
