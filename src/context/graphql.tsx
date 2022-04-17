import type { ReactChild } from 'react';
import React from 'react';
import { ApolloProvider, ApolloConsumer } from '@apollo/client';

import useApolloClient from 'hooks/use-create-apollo-client';

interface ProviderProps {
  children: ReactChild | ReactChild[];
}

const Provider = ({ children }: ProviderProps): JSX.Element | null => {
  const client = useApolloClient();

  if (!client) {
    return null;
  }

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default {
  Consumer: ApolloConsumer,
  Provider,
};
