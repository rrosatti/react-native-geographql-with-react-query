/* eslint-disable */
import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, useInfiniteQuery, UseQueryOptions, UseInfiniteQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables, headers?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables, headers);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
};

export type City = {
  __typename?: 'City';
  /**
   * The ISO Alpha-2 code designated to the
   * country where the city is located.
   */
  country_code: Scalars['String'];
  /** The id of the country where the city is located. */
  country_id: Scalars['Int'];
  /** The id of the city. */
  id: Scalars['Int'];
  /** The latitude coordinate of the city. */
  latitude: Scalars['Float'];
  /** The longitude coordinate of the city. */
  longitude: Scalars['Float'];
  /** The name of the city. */
  name: Scalars['String'];
  /**
   * The code designated to the state where
   * the city is located.
   */
  state_code: Scalars['String'];
  /** The id of the state where the city is located. */
  state_id: Scalars['Int'];
};

export type CityConnection = {
  __typename?: 'CityConnection';
  edges: Array<CityEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CityEdge = {
  __typename?: 'CityEdge';
  /** A cursor for use in the pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: City;
};

export type CityFilterInput = {
  /** Filter by country ISO Alpha-2 code. */
  ciso2: Scalars['ID'];
  /** Filter by state id within the supplied csio2. */
  sid?: InputMaybe<Scalars['Int']>;
  /** Filter by state code within the supplied csio2. */
  siso?: InputMaybe<Scalars['String']>;
};

export type Country = {
  __typename?: 'Country';
  /** The capital city of the country. */
  capital: Scalars['String'];
  /** Get a list of cities within the country. */
  cities: CityConnection;
  /** The currency of the country. */
  currency: Scalars['String'];
  /** The currency symbol of the country. */
  currency_symbol: Scalars['String'];
  /** The emoji flag of the country. */
  emoji: Scalars['String'];
  /** The unicode of the country's emoji flag. */
  emojiU: Scalars['String'];
  /** The id of the country. */
  id: Scalars['Int'];
  /**
   * The two-letter code (ISO Alpha-2) designated to the country.
   * Examples: US (for United States), and PH (for Philippines).
   */
  iso2: Scalars['ID'];
  /**
   * The three-letter code (ISO Alpha-2) designated to the country.
   * Examples: USA (for United States), and PHL (for Philippines).
   */
  iso3: Scalars['ID'];
  /** The latitude coordinate of the country. */
  latitude: Scalars['Float'];
  /** The longitude coordinate of the country. */
  longitude: Scalars['Float'];
  /** The name of the country. */
  name: Scalars['String'];
  /** The native name of the country. */
  native: Scalars['String'];
  /**
   * The three-digit code (ISO numeric) designated to the country.
   * Examples: 236 (for United States), and 020 (for Andora).
   */
  numeric_code: Scalars['ID'];
  /** The dialing code of the country. */
  phone_code: Scalars['String'];
  /** The region where the country is located. */
  region: Scalars['String'];
  /** Get a list of states/provinces/regions within the country. */
  states: StateConnection;
  /** The subregion where the country is located. */
  subregion: Scalars['String'];
  /** The timezones in the country. */
  timezones: Array<Timezone>;
  /** The top-level domain of the country. */
  tld: Scalars['String'];
  /** The translation of the country's name in several languages. */
  translations: Scalars['JSONObject'];
};


export type CountryCitiesArgs = {
  filter?: InputMaybe<CountryCitiesFilterInput>;
  page?: InputMaybe<PaginationInput>;
};


export type CountryStatesArgs = {
  page?: InputMaybe<PaginationInput>;
};

export type CountryCitiesFilterInput = {
  /** Filter by state id. */
  sid?: InputMaybe<Scalars['Int']>;
  /** Filter by state code. */
  siso?: InputMaybe<Scalars['String']>;
};

export type CountryConnection = {
  __typename?: 'CountryConnection';
  edges: Array<CountryEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CountryEdge = {
  __typename?: 'CountryEdge';
  /** A cursor for use in the pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Country;
};

export type CountryFilterInput = {
  /** Filter by region. */
  region?: InputMaybe<Region>;
  /** Filter by subregion. */
  subregion?: InputMaybe<Subregion>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  /** The cursor to continue when paginating forward. */
  endCursor?: Maybe<Scalars['String']>;
  /**
   * Indicates whether more edges exist,
   * when paginating forward.
   */
  hasNextPage: Scalars['Boolean'];
  /**
   * Indicates whether more edges exist,
   * when paginating backwards.
   */
  hasPreviousPage: Scalars['Boolean'];
  /** The cursor to continue when paginating backward. */
  startCursor?: Maybe<Scalars['String']>;
};

export type PaginationInput = {
  /** Returns the elements that come after the specified cursor. */
  after?: InputMaybe<Scalars['String']>;
  /** Returns the elements that come before the specified cursor. */
  before?: InputMaybe<Scalars['String']>;
  /** Returns the first n elements. */
  first?: InputMaybe<Scalars['Int']>;
  /** Returns the last n elements. */
  last?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  /** Get a list of cities. */
  cities: CityConnection;
  /** Get a specific city by id. */
  city?: Maybe<City>;
  /** Get a list of countries. */
  countries: CountryConnection;
  /** Get a specific country by id, iso2, iso3, or numeric_code. */
  country?: Maybe<Country>;
  /** Get a specific state by id or by state_code and country_code pair. */
  state?: Maybe<State>;
  /** Get a list of states/provinces/regions. */
  states: StateConnection;
};


export type QueryCitiesArgs = {
  filter?: InputMaybe<CityFilterInput>;
  page?: InputMaybe<PaginationInput>;
};


export type QueryCityArgs = {
  id: Scalars['Int'];
};


export type QueryCountriesArgs = {
  filter?: InputMaybe<CountryFilterInput>;
  page?: InputMaybe<PaginationInput>;
};


export type QueryCountryArgs = {
  id?: InputMaybe<Scalars['Int']>;
  iso2?: InputMaybe<Scalars['ID']>;
  iso3?: InputMaybe<Scalars['ID']>;
  numeric_code?: InputMaybe<Scalars['ID']>;
};


export type QueryStateArgs = {
  id?: InputMaybe<Scalars['Int']>;
  locationCode?: InputMaybe<StateCountryCodeInput>;
};


export type QueryStatesArgs = {
  filter?: InputMaybe<StateFilterInput>;
  page?: InputMaybe<PaginationInput>;
};

export enum Region {
  Africa = 'Africa',
  Americas = 'Americas',
  Antarctica = 'Antarctica',
  Asia = 'Asia',
  Europe = 'Europe',
  Oceania = 'Oceania'
}

export type State = {
  __typename?: 'State';
  /** Get a list of cities within the state. */
  cities: CityConnection;
  /**
   * The ISO Alpha-2 code designated to the
   * country where the state is located.
   */
  country_code: Scalars['String'];
  /**
   * The id of the country where the
   * state is located.
   */
  country_id: Scalars['Int'];
  /** The id of the state. */
  id: Scalars['Int'];
  /** The latitude coordinate of the state. */
  latitude?: Maybe<Scalars['Float']>;
  /** The longitude coordinate of the state. */
  longitude?: Maybe<Scalars['Float']>;
  /** The name of the state. */
  name: Scalars['String'];
  /**
   * The code designated to the state.
   * Code is unique within the country.
   */
  state_code: Scalars['String'];
};


export type StateCitiesArgs = {
  page?: InputMaybe<PaginationInput>;
};

export type StateConnection = {
  __typename?: 'StateConnection';
  edges: Array<StateEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type StateCountryCodeInput = {
  country_code: Scalars['String'];
  state_code: Scalars['String'];
};

export type StateEdge = {
  __typename?: 'StateEdge';
  /** A cursor for use in the pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: State;
};

export type StateFilterInput = {
  /** Filter by country id */
  cid?: InputMaybe<Scalars['Int']>;
  /** Filter by country code */
  ciso2?: InputMaybe<Scalars['String']>;
};

export enum Subregion {
  Antarctica = 'Antarctica',
  AustraliaAndNewZealand = 'Australia_and_New_Zealand',
  Caribbean = 'Caribbean',
  CentralAmerica = 'Central_America',
  CentralAsia = 'Central_Asia',
  EasternAfrica = 'Eastern_Africa',
  EasternAsia = 'Eastern_Asia',
  EasternEurope = 'Eastern_Europe',
  IndianOcean = 'Indian_Ocean',
  Melanesia = 'Melanesia',
  Micronesia = 'Micronesia',
  MiddleAfrica = 'Middle_Africa',
  NorthernAfrica = 'Northern_Africa',
  NorthernAmerica = 'Northern_America',
  NorthernEurope = 'Northern_Europe',
  Polynesia = 'Polynesia',
  SouthAmerica = 'South_America',
  SouthAtlanticOcean = 'South_Atlantic_Ocean',
  SouthEasternAsia = 'South_Eastern_Asia',
  SouthernAfrica = 'Southern_Africa',
  SouthernAsia = 'Southern_Asia',
  SouthernEurope = 'Southern_Europe',
  WesternAfrica = 'Western_Africa',
  WesternAsia = 'Western_Asia',
  WesternEurope = 'Western_Europe'
}

export type Timezone = {
  __typename?: 'Timezone';
  /** The abbreviation of the timezone name. */
  abbreviation: Scalars['String'];
  /** The id of the country under the timezone. */
  country_id: Scalars['Int'];
  /** The Greenwich Mean Time offset in seconds. */
  gmt_offset: Scalars['Int'];
  /** Greenwich Mean Time offset name. */
  gmt_offset_name: Scalars['String'];
  /** The name of the timezone. */
  timezone_name: Scalars['String'];
  /** The zone name. */
  zone_name: Scalars['String'];
};

export type GetCountriesQueryVariables = Exact<{
  pageCountries?: InputMaybe<PaginationInput>;
}>;


export type GetCountriesQuery = { __typename?: 'Query', countries: { __typename?: 'CountryConnection', edges: Array<{ __typename?: 'CountryEdge', node: { __typename?: 'Country', id: number, name: string, capital: string, emoji: string } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } } };

export type GetCountryQueryVariables = Exact<{
  id?: InputMaybe<Scalars['Int']>;
}>;


export type GetCountryQuery = { __typename?: 'Query', country?: { __typename?: 'Country', id: number, name: string, capital: string, emoji: string, phone_code: string, currency: string, currency_symbol: string, tld: string, native: string, region: string, subregion: string, latitude: number, longitude: number, timezones: Array<{ __typename?: 'Timezone', zone_name: string, abbreviation: string }> } | null };

export namespace GetCountries {
  export type Variables = GetCountriesQueryVariables;
  export type Query = GetCountriesQuery;
  export type Countries = (NonNullable<GetCountriesQuery['countries']>);
  export type Edges = NonNullable<(NonNullable<(NonNullable<GetCountriesQuery['countries']>)['edges']>)[number]>;
  export type Node = (NonNullable<NonNullable<(NonNullable<(NonNullable<GetCountriesQuery['countries']>)['edges']>)[number]>['node']>);
  export type PageInfo = (NonNullable<(NonNullable<GetCountriesQuery['countries']>)['pageInfo']>);
}

export namespace GetCountry {
  export type Variables = GetCountryQueryVariables;
  export type Query = GetCountryQuery;
  export type Country = (NonNullable<GetCountryQuery['country']>);
  export type Timezones = NonNullable<(NonNullable<(NonNullable<GetCountryQuery['country']>)['timezones']>)[number]>;
}


export const GetCountriesDocument = `
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
export const useGetCountriesQuery = <
      TData = GetCountriesQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetCountriesQueryVariables,
      options?: UseQueryOptions<GetCountriesQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetCountriesQuery, TError, TData>(
      variables === undefined ? ['GetCountries'] : ['GetCountries', variables],
      fetcher<GetCountriesQuery, GetCountriesQueryVariables>(client, GetCountriesDocument, variables, headers),
      options
    );
export const useInfiniteGetCountriesQuery = <
      TData = GetCountriesQuery,
      TError = unknown
    >(
      pageParamKey: keyof GetCountriesQueryVariables,
      client: GraphQLClient,
      variables?: GetCountriesQueryVariables,
      options?: UseInfiniteQueryOptions<GetCountriesQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useInfiniteQuery<GetCountriesQuery, TError, TData>(
      variables === undefined ? ['GetCountries.infinite'] : ['GetCountries.infinite', variables],
      (metaData) => fetcher<GetCountriesQuery, GetCountriesQueryVariables>(client, GetCountriesDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    );

export const GetCountryDocument = `
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
export const useGetCountryQuery = <
      TData = GetCountryQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetCountryQueryVariables,
      options?: UseQueryOptions<GetCountryQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetCountryQuery, TError, TData>(
      variables === undefined ? ['GetCountry'] : ['GetCountry', variables],
      fetcher<GetCountryQuery, GetCountryQueryVariables>(client, GetCountryDocument, variables, headers),
      options
    );
export const useInfiniteGetCountryQuery = <
      TData = GetCountryQuery,
      TError = unknown
    >(
      pageParamKey: keyof GetCountryQueryVariables,
      client: GraphQLClient,
      variables?: GetCountryQueryVariables,
      options?: UseInfiniteQueryOptions<GetCountryQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useInfiniteQuery<GetCountryQuery, TError, TData>(
      variables === undefined ? ['GetCountry.infinite'] : ['GetCountry.infinite', variables],
      (metaData) => fetcher<GetCountryQuery, GetCountryQueryVariables>(client, GetCountryDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    );
