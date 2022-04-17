import type { MutableRefObject } from 'react';
import { useRef, useEffect } from 'react';

const useIsMountedRef = (): MutableRefObject<boolean> => {
  const isMountedRef = useRef(true);
  useEffect(
    (): (() => void) => (): void => {
      isMountedRef.current = false;
    },
    [],
  );
  return isMountedRef;
};

export default useIsMountedRef;
