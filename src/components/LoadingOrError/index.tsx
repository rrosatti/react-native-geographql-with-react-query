import React from 'react';
import type { QueryObserverResult } from 'react-query';

import Loader from 'components/Loader';
import Error from 'components/Error';

interface Props<T> {
  data: T;
  error: unknown | undefined;
  loading: boolean;
  children: JSX.Element;
  refetch: () => Promise<QueryObserverResult<T>>;
}

const hasDataAndNoError = <T,>(data: T, error: unknown | undefined) => {
  return !!data && !error;
};

const LoadingOrError = <T,>({
  data,
  loading,
  error,
  children,
  refetch,
}: Props<T>): JSX.Element => {
  if (loading) return <Loader />;

  if (!hasDataAndNoError(data, error)) return <Error refetch={refetch} />;

  return children;
};

export default LoadingOrError;
