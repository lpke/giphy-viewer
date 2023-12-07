import { useEffect, useState } from 'react';

type SearchInputProps = {
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export default function SearchInput({
  id,
  onChange,
  onKeyDown,
}: SearchInputProps) {
  const defaultPlaceholder = 'search giphy';
  const [placeholder, setPlaceholder] = useState(defaultPlaceholder);

  return (
    <div className="min-w-[150px] rounded-full shadow-gray-950 transition-all duration-700 focus-within:shadow-[rgba(0,_0,_0,_0.12)_0px_54px_55px,_rgba(0,_0,_0,_0.09)_0px_-12px_30px,_rgba(0,_0,_0,_0.09)_0px_4px_6px,_rgba(0,_0,_0,_0.11)_0px_12px_13px,_rgba(0,_0,_0,_0.05)_0px_-3px_5px] hover:shadow-[rgba(0,_0,_0,_0.12)_0px_54px_55px,_rgba(0,_0,_0,_0.09)_0px_-12px_30px,_rgba(0,_0,_0,_0.09)_0px_4px_6px,_rgba(0,_0,_0,_0.11)_0px_12px_13px,_rgba(0,_0,_0,_0.05)_0px_-3px_5px] dark:focus-within:shadow-[rgba(0,_0,_0,_0.25)_0px_54px_55px,_rgba(0,_0,_0,_0.12)_0px_-12px_30px,_rgba(0,_0,_0,_0.12)_0px_4px_6px,_rgba(0,_0,_0,_0.18)_0px_12px_13px,_rgba(0,_0,_0,_0.09)_0px_-3px_5px] dark:hover:shadow-[rgba(0,_0,_0,_0.25)_0px_54px_55px,_rgba(0,_0,_0,_0.12)_0px_-12px_30px,_rgba(0,_0,_0,_0.12)_0px_4px_6px,_rgba(0,_0,_0,_0.18)_0px_12px_13px,_rgba(0,_0,_0,_0.09)_0px_-3px_5px] md:min-w-[300px]">
      <div className="rounded-full transition-all duration-300 focus-within:bg-teal-500 focus-within:p-[2px]">
        <input
          id={id}
          className="w-full rounded-full border-none bg-white px-5 py-3 text-center text-gray-950 outline-none transition-all duration-[400ms] placeholder:text-slate-400 dark:bg-gray-600 dark:text-gray-100 dark:placeholder:text-slate-300 dark:placeholder:text-opacity-50"
          type="text"
          placeholder={placeholder}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onFocus={() => setPlaceholder('')}
          onBlur={() => setPlaceholder(defaultPlaceholder)}
        />
      </div>
    </div>
  );
}
