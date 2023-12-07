'use client';

import { useState } from 'react';
import { SWRConfig } from 'swr';
import swrFetcher from '@/utils/swrFetcher';
import { AppContextProvider } from '@/utils/context';

/**
 * Client component for wrapping the app in providers/context that require client-only code.
 */
export default function Providers({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(true);

  const swrGlobalConfig = {
    fetcher: swrFetcher,
  };

  return (
    <SWRConfig value={swrGlobalConfig}>
      <AppContextProvider value={{ darkMode, setDarkMode }} deps={[darkMode]}>
        <div className={darkMode ? 'dark' : 'light'}>
          <main className="min-h-[100svh] w-full bg-gray-200 text-gray-950 transition-colors selection:bg-indigo-300 dark:bg-gray-800 dark:text-gray-100 dark:selection:bg-indigo-900">
            {children}
          </main>
        </div>
      </AppContextProvider>
    </SWRConfig>
  );
}
