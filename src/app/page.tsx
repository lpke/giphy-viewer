'use client';

import { useState } from 'react';
import useSWR from 'swr';
import DisplayGrid from '@/components/DisplayGrid';

/**
 * Home page - where all the gifs are shown!
 */
export default function Home() {
  const [searchMode, setSearchMode] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [limit, setLimit] = useState(40);

  // Fetching data 'from the client' because Giphy requires it.
  // This is actually making an API call to a Next.js route handler, which is
  // acting as a proxy endpoint so that the API key is kept safe.
  const { data, error, isLoading } = useSWR(
    `/api/${
      searchMode ? `search?q=${searchQuery}` : 'trending?'
    }&limit=${limit}`,
  );
  const dataReady = !isLoading && !error;

  return (
    <div className="">
      {dataReady ? <DisplayGrid gifs={data?.data} /> : null}
    </div>
  );
}
