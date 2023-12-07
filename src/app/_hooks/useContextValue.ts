import { useMemo } from 'react';

export const useContextValue = <T extends { [key: string]: any }>(
  obj: T,
  deps: any[],
): T => {
  const contextValue = useMemo(() => obj, deps);
  return contextValue;
};
