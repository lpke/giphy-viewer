import Providers from '@/Providers';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Giphy Viewer',
  description:
    'A simple React app built with Next.js for viewing and searching GIFs using the Giphy API.',
};

/**
 * Next.js Root Layout server component.
 * Providers requiring client-side code are in `Providers`.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
