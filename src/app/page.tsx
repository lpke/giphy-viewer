'use client';

import useSWR from 'swr';
import Image from 'next/image';

const shimmer = (w: number, h: number) => {
  const bg = '#374151';
  const swipe = '#323a49';

  return `
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="g">
          <stop stop-color="${bg}" offset="20%" />
          <stop stop-color="${swipe}" offset="50%" />
          <stop stop-color="${bg}" offset="70%" />
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="${bg}" />
      <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
      <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
    </svg>
  `;
};

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

export default function Home() {
  const { data, error, isLoading } = useSWR('/api/trending?limit=30');
  const gifs = (data?.data as any[]) || [];

  return (
    <div className="flex flex-row flex-wrap">
      {!isLoading &&
        !error &&
        gifs.length > 0 &&
        gifs.map((gif) => (
          <div
            key={gif?.slug}
            className="relative m-[6px] h-[200px] w-[200px] overflow-hidden rounded-lg"
          >
            <Image
              src={gif?.images?.fixed_height?.url}
              alt={gif?.title}
              fill
              className="object-cover"
              placeholder={`data:image/svg+xml;base64,${toBase64(
                shimmer(700, 475),
              )}`}
            />
          </div>
        ))}
    </div>
  );
}
