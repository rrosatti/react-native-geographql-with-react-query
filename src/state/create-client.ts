import { ApolloClient, ApolloLink, HttpLink } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import type { NormalizedCacheObject } from '@apollo/client/cache';
import { InMemoryCache } from '@apollo/client/cache';

export type ClientDestroyer = () => Promise<void>;

export type Client = ApolloClient<NormalizedCacheObject>;

const httpLink = new HttpLink({
  // ideally it would be in an .env file
  uri: 'https://api.geographql.renzooo.com/graphql',
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      // eslint-disable-next-line no-console
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
  // eslint-disable-next-line no-console
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        countries: {
          keyArgs: [],
          merge(existing, incoming) {
            if (existing && existing.edges && incoming.edges) {
              const merged = {
                ...existing,
                ...incoming,
                edges: [...existing.edges, ...incoming.edges],
              };
              return merged;
            }
            return incoming;
          },
        },
      },
    },
  },
});

const init = async (
  client: ApolloClient<NormalizedCacheObject>,
): Promise<() => Promise<void>> => {
  const destroyClient = async (): Promise<void> => {
    await client.stop();
  };
  return destroyClient;
};

const createDefaultClient = (): Client => {
  return new ApolloClient({
    cache,
    connectToDevTools: true,
    defaultOptions: {
      mutate: {
        errorPolicy: 'all',
      },
      query: {
        errorPolicy: 'all',
      },
      watchQuery: {
        errorPolicy: 'all',
      },
    },
    link: ApolloLink.from([errorLink, httpLink]),
  });
};

/* eslint-disable-next-line import/no-mutable-exports */
export let defaultClient = createDefaultClient();

const createClient = async (): Promise<[Client, ClientDestroyer]> => {
  defaultClient = createDefaultClient();
  const destroyClient = await init(defaultClient);
  return [defaultClient, destroyClient];
};

export default createClient;
