import { gql } from '@apollo/client';

import { useGetCountriesQuery as useGetCountries } from './__generated__/default';

export const Constants = {
  cities: {
    defaultFirst: 10,
  },
  countries: {
    defaultFirst: 10,
  },
  states: {
    defaultFirst: 10,
  },
};

export const query = gql`
  query GetCountries(
    $pageCountries: PaginationInput
    $pageCities: PaginationInput
    $pageStates: PaginationInput
  ) {
    countries(page: $pageCountries) {
      edges {
        node {
          id
          name
          currency
          currency_symbol
          native
          region
          subregion
          translations
          emoji
          latitude
          longitude
          states(page: $pageStates) {
            totalCount
          }
          cities(page: $pageCities) {
            totalCount
          }
        }
      }
    }
  }
`;

export default useGetCountries;
