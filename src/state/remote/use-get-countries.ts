import { gql } from '@apollo/client';

import { useGetCountriesQuery as useGetCountries } from './__generated__/default';

export const Constants = {
  countries: {
    defaultFirst: 10,
  },
};

export const query = gql`
  query GetCountries($pageCountries: PaginationInput) {
    countries(page: $pageCountries) {
      edges {
        node {
          id
          name
          capital
          emoji
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

export default useGetCountries;
