'use client';

import { useState } from 'react';

// To be used for any global app state/context
export default function Providers({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(true);

  const lightClasses = 'bg-white text-gray-950 selection:bg-indigo-300';
  const darkClasses =
    'dark:bg-gray-800 dark:text-gray-100 dark:selection:bg-indigo-900';

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <main className={darkMode ? darkClasses : lightClasses}>{children}</main>
    </div>
  );
}
