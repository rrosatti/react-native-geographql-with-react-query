import React from 'react';
import type { ApolloError, ApolloQueryResult } from '@apollo/client';

import Loader from 'components/Loader';
import Error from 'components/Error';

interface Props<T> {
  data: T;
  error: ApolloError | undefined;
  loading: boolean;
  refetch: () => Promise<ApolloQueryResult<T>>;
}

const LoadingOrTapToRefresh = <T,>({
  data,
  error,
  loading,
  refetch,
}: Props<T>): JSX.Element | null => {
  if (loading) return <Loader />;
  if (!data || error) return <Error refetch={refetch} />;
  return null;
};

export default LoadingOrTapToRefresh;
