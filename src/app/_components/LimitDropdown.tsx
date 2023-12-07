import { useRef, useState } from 'react';
import { useOnClickOutide } from '@/hooks/useOnClickOutside';
import { MdOutlineSettings as SettingIcon } from 'react-icons/md';

const MenuItem = ({
  value,
  limit,
  onClick,
}: {
  value: number;
  limit: number;
  onClick: () => void;
}) => {
  return (
    <button
      className={`py-3 first-of-type:mt-3 hover:bg-gray-200 dark:hover:bg-gray-700 ${
        value === limit
          ? 'bg-gray-100 font-bold text-black dark:bg-gray-500 dark:bg-opacity-50 dark:text-white'
          : ''
      }`}
      type="button"
      onClick={onClick}
    >
      {value}
    </button>
  );
};

type LimitDropdownProps = {
  limit: number;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
};

/**
 * I would ususally abstract a component like this down into smaller parts and
 * keep the naming more generic. However, for the sake of this app, I've given
 * it a specific label.
 */
export default function LimitDropdown({ limit, setLimit }: LimitDropdownProps) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const values = [10, 20, 30, 40, 50];

  const handleIconClick = () => {
    setOpen((prev) => !prev);
  };

  useOnClickOutide(() => {
    setOpen(false);
  }, menuRef);

  return (
    <div className="relative">
      <button
        className="rounded-full p-2 transition-all duration-500 hover:bg-gray-100 dark:hover:bg-gray-700"
        type="button"
        onClick={handleIconClick}
      >
        <SettingIcon className="h-7 w-7" />
      </button>

      <div
        ref={menuRef}
        className={`absolute left-0 top-11 z-50 flex w-[110px] flex-col overflow-hidden rounded-lg bg-white shadow-[rgba(0,_0,_0,_0.56)_0px_22px_70px_4px] transition-all dark:bg-gray-600 ${
          open ? 'h-[285px]' : 'h-0'
        }`}
      >
        {values.map((value) => (
          <MenuItem
            key={value}
            value={value}
            limit={limit}
            onClick={() => {
              setLimit(value);
              setOpen(false);
            }}
          />
        ))}
      </div>
    </div>
  );
}
