import { useContext } from 'react';
import { AppContext } from '@/utils/context';

export default function LightingPrefSelect() {
  const { darkMode, setDarkMode } = useContext(AppContext);

  return (
    <div className="">
      <button onClick={() => setDarkMode((prev) => !prev)}>
        Lighting toggle
      </button>
    </div>
  );
}
