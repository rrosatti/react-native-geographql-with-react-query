import type { ReactChild } from 'react';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

interface ProviderProps {
  children: ReactChild | ReactChild[];
}

const client = new QueryClient();

const Provider = ({ children }: ProviderProps): JSX.Element | null => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default {
  Provider,
};
