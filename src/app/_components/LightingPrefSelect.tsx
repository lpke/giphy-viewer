import { useContext } from 'react';
import { AppContext } from '@/utils/context';
import { LuSun as LightIcon, LuSunDim as DarkIcon } from 'react-icons/lu';

export default function LightingPrefSelect() {
  const { darkMode, setDarkMode } = useContext(AppContext);
  const classes = 'h-[29px] w-[29px]';

  return (
    <button
      className="p-2"
      onClick={() => setDarkMode((prev) => !prev)}
    >
      {darkMode ? (
        <DarkIcon className={classes} />
      ) : (
        <LightIcon className={classes} />
      )}
    </button>
  );
}
