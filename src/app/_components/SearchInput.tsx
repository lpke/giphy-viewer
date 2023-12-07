import { useState } from 'react';

type SearchInputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onButtonClick: () => void;
};

export default function SearchInput({
  onChange,
  onKeyDown,
  onButtonClick,
}: SearchInputProps) {
  const defaultPlaceholder = 'search giphy';
  const [placeholder, setPlaceholder] = useState(defaultPlaceholder);

  return (
    <input
      className="min-w-[150px] rounded-full bg-white px-5 py-3 text-center
      text-gray-950 shadow-gray-950 outline-none transition-all duration-500
      hover:shadow-xl focus:shadow-xl dark:bg-gray-600 dark:text-gray-100
      md:min-w-[300px]"
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onFocus={() => setPlaceholder('')}
      onBlur={() => setPlaceholder(defaultPlaceholder)}
    />
  );
}
