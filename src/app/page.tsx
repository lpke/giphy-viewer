'use client';

import Gif from '@/components/Gif';
import useSWR from 'swr';

/**
 * Home page - where all the gifs are shown!
 */
export default function Home() {
  const { data, error, isLoading } = useSWR('/api/trending?limit=10');
  const gifs = (data?.data as any[]) || [];

  return (
    <div className="flex flex-row flex-wrap">
      {!isLoading &&
        !error &&
        gifs.length > 0 &&
        gifs.map((gif) => (
          <Gif
            src={gif?.images?.fixed_height?.url}
            alt={gif?.title}
            key={gif?.slug}
          />
        ))}
    </div>
  );
}
