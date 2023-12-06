'use client';

import useSWR from 'swr';
import Image from 'next/image';

export default function Home() {
  const { data, error, isLoading } = useSWR('/api/trending?limit=20');
  const gifs = (data?.data as any[]) || [];

  return (
    <div className="flex flex-row flex-wrap">
      {gifs.length > 0 &&
        gifs.map((gif) => (
          <Image
            key={gif?.slug}
            src={gif?.images?.fixed_height?.url}
            alt={gif?.title}
            height={200}
            width={200}
          />
        ))}
    </div>
  );
}
