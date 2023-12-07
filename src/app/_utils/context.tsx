import { useContextValue } from '@/hooks/useContextValue';
import { createContext } from 'react';

export type ContextProviderProps<T extends { [key: string]: any }> = {
  children: React.ReactNode;
  value: T;
  deps: any[];
};

/**
 * App Context
 */
export type AppContextProps = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};
export const AppContext = createContext<AppContextProps>({} as AppContextProps);
export const AppContextProvider = ({
  children,
  value,
  deps,
}: ContextProviderProps<AppContextProps>) => {
  const appContextValue = useContextValue(value, deps);

  return (
    <AppContext.Provider value={appContextValue}>
      {children}
    </AppContext.Provider>
  );
};
