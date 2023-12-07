import { useMemo } from 'react';

/**
 * Wrapper for `useMemo` that reduces boilerplate.
 */
export const useMemoizedObj = (obj: { [key: string]: any }, deps: any) => {
  const memoizedObj = useMemo(() => obj, deps);

  return memoizedObj;
};
