import React from 'react';
import type { ApolloClient } from '@apollo/client';
import type { NormalizedCacheObject } from '@apollo/client/cache';

import createClient from 'state/create-client';
import type { ClientDestroyer } from 'state/create-client';

import useIsMountedRef from 'hooks/use-is-mounted-ref';

const useCreateApolloClient = ():
  | ApolloClient<NormalizedCacheObject>
  | undefined => {
  const [client, setClient] = React.useState<
    ApolloClient<NormalizedCacheObject> | undefined
  >(undefined);

  const isMountedRef = useIsMountedRef();

  React.useEffect((): (() => void) => {
    let destroyClient: ClientDestroyer | undefined;

    createClient()
      .then(([c, destroy]): void => {
        if (isMountedRef.current) {
          setClient(c);
          destroyClient = destroy;
        }
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(
          `Error when trying to create an Apollo Client instance: ${err}`,
        );
        setClient(undefined);
      });

    return (): void => {
      if (destroyClient) {
        destroyClient();
      }
    };
  }, [isMountedRef]);
  return client;
};

export default useCreateApolloClient;
