import routeNames from 'routes';

import CountryDetail from 'routes/CountryDetail';

import type { StandaloneRoutes } from './types';

export const standaloneRoutes: StandaloneRoutes = {
  [routeNames.CountryDetail]: CountryDetail,
};

export default { standaloneRoutes };
