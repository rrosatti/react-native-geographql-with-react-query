import { gql } from '@apollo/client';

import { useGetCountryQuery as useGetCountry } from './__generated__/default';

export const query = gql`
  query GetCountry($id: Int) {
    country(id: $id) {
      id
      name
      capital
      emoji
      phone_code
      currency
      currency_symbol
      tld
      native
      region
      subregion
      timezones {
        zone_name
        abbreviation
      }
      latitude
      longitude
    }
  }
`;

export default useGetCountry;
