'use client';

import { useState } from 'react';
import { SWRConfig } from 'swr';
import swrFetcher from '@/utils/swrFetcher';

// To be used for any global app state/context
export default function Providers({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(true);

  const swrGlobalConfig = {
    fetcher: swrFetcher,
  };

  return (
    <SWRConfig value={swrGlobalConfig}>
      <div className={darkMode ? 'dark' : 'light'}>
        <main className="min-h-[100svh] w-screen bg-white text-gray-950 selection:bg-indigo-300 dark:bg-gray-800 dark:text-gray-100 dark:selection:bg-indigo-900">
          {children}
        </main>
      </div>
    </SWRConfig>
  );
}
