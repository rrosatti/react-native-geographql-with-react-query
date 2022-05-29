import React from 'react';
import type { QueryObserverResult } from 'react-query';

import Loader from 'components/Loader';
import Error from 'components/Error';

interface Props<T> {
  data: T;
  error: unknown | undefined;
  loading: boolean;
  refetch: () => Promise<QueryObserverResult<T>>;
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
