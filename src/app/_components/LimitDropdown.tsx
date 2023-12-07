import { MdOutlineSettings as SettingIcon } from 'react-icons/md';

type LimitDropdownProps = {
  limit: number;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
};

export default function LimitDropdown({ limit, setLimit }: LimitDropdownProps) {
  return (
    <button className="">
      <SettingIcon className="w-7 h-7" />
    </button>
  );
}
