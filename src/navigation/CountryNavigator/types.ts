import type { ComponentType } from 'react';

import type routeNames from 'routes';

import type { CountryDetailNavigationParams } from 'routes/CountryDetail/types';

// eslint-disable-next-line @typescript-eslint/ban-types
export type StandaloneNavigationParams = {
  [routeNames.CountryDetail]: CountryDetailNavigationParams;
};

export type StandaloneRoutes = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [K in keyof StandaloneNavigationParams]: ComponentType<any>;
};
