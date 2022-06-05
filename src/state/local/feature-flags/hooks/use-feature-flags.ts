import { useReactiveVar } from '@apollo/client';

import type { FeatureFlags } from 'state/local/feature-flags';
import FeatureFlagsHandleFunctions, {
  featureFlagsVar,
} from 'state/local/feature-flags';

interface FeatureFlagsHandler {
  featureFlags: FeatureFlags;
  updateFeatureFlags: (partialFeatureFlags: Partial<FeatureFlags>) => void;
}

const useFeatureFlags = (): FeatureFlagsHandler => {
  const featureFlags = useReactiveVar(featureFlagsVar);
  return {
    ...FeatureFlagsHandleFunctions,
    featureFlags,
  };
};

export default useFeatureFlags;
