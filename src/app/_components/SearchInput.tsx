import { useContext } from "react";
import { AppContext } from "@/utils/context";

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
  const { darkMode, setDarkMode } = useContext(AppContext);

  return (
    <div className="">
      <input className={`${darkMode ? 'bg-gray-600' : 'bg-white'}`} type="text" onChange={onChange} onKeyDown={onKeyDown} />
      <button type="button" onClick={onButtonClick}>
        submit
      </button>
    </div>
  );
}
