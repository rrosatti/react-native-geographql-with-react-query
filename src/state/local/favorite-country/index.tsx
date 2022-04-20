import { makeVar } from '@apollo/client';

export interface FavoriteCountry {
  id: number | null;
}

const defaultFavoriteCountry: FavoriteCountry = {
  id: null,
};

export const favoriteCountryVar = makeVar<FavoriteCountry>(
  defaultFavoriteCountry,
);

export const updateId = (id: number | null): void => {
  const favoriteCountry = favoriteCountryVar();
  favoriteCountryVar({ ...favoriteCountry, id });
};

export default {
  updateId,
};
