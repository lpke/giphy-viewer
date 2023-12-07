'use client';

import { useState } from 'react';
import useSWR from 'swr';
import SearchInput from '@/components/SearchInput';
import LimitDropdown from '@/components/LimitDropdown';
import LightingPrefSelect from '@/components/LightingPrefSelect';
import DisplayGrid from '@/components/DisplayGrid';

/**
 * Home page - where the action happens!
 */
export default function Home() {
  const [searchMode, setSearchMode] = useState<boolean>(false);
  const [activeSearchQuery, setActiveSearchQuery] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [limit, setLimit] = useState(30);

  // Fetching data 'from the client' because Giphy requires it.
  // This is actually making an API call to a Next.js route handler, which is
  // acting as a proxy endpoint so that the API key is kept safe.
  const { data, error, isLoading } = useSWR(
    `/api/${
      searchMode ? `search?q=${activeSearchQuery}` : 'trending?'
    }&limit=${limit}`,
  );
  const dataReady = !isLoading && !error;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
  };

  const handleSubmit = () => {
    if (searchQuery === '') {
      setActiveSearchQuery('');
      setSearchMode(false);
    } else {
      setActiveSearchQuery(searchQuery);
      setSearchMode(true);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex h-[100px] w-full flex-row items-center justify-between px-5 py-2 md:px-10">
        <LimitDropdown limit={limit} setLimit={setLimit} />

        <SearchInput
          id="search"
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />

        <LightingPrefSelect />
      </div>

      {dataReady ? <DisplayGrid gifs={data?.data} /> : null}
    </div>
  );
}
