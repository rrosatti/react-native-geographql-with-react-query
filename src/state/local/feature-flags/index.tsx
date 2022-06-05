import { makeVar } from '@apollo/client';

export interface FeatureFlags {
  enableFavoriteCountryHighlight: boolean | null;
}

const defaultFeatureFlags: FeatureFlags = {
  enableFavoriteCountryHighlight: null,
};

export const featureFlagsVar = makeVar<FeatureFlags>(defaultFeatureFlags);

export const updateFeatureFlags = (
  partialFeatureFlags: Partial<FeatureFlags>,
): void => {
  const featureFlags = featureFlagsVar();
  featureFlagsVar({ ...featureFlags, ...partialFeatureFlags });
};

export default {
  updateFeatureFlags,
};
