import React from 'react';
import remoteConfig from '@react-native-firebase/remote-config';

import { updateFeatureFlags } from 'state/local/feature-flags';

const useFirebase = (): void => {
  const fetch = React.useCallback(async (): Promise<void> => {
    try {
      await remoteConfig().setConfigSettings({
        minimumFetchIntervalMillis: 3000,
      });
      await remoteConfig().setDefaults({
        enableFavoriteCountryHighlight: true,
      });
      const fetchedRemotely = remoteConfig().fetchAndActivate();
      if (fetchedRemotely !== null) {
        const enableFavoriteCountryHighlight = remoteConfig().getBoolean(
          'enableFavoriteCountryHighlight',
        );
        updateFeatureFlags({ enableFavoriteCountryHighlight });
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(`[Firebase] Error when trying to get remote config: ${e}`);
    }
  }, []);

  React.useEffect((): void => {
    fetch();
  }, [fetch]);
};

export default useFirebase;
