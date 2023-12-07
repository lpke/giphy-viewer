import { useEffect } from 'react';

/**
 * Intended to be used in a similar way to `useEffect`.
 */
export const useOnClickOutide = (
  callback: () => void,
  ref: React.RefObject<HTMLElement>,
) => {
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    }
    document.addEventListener('mouseup', handleClickOutside);
    return () => {
      document.removeEventListener('mouseup', handleClickOutside);
    };
  }, [ref]);
};
