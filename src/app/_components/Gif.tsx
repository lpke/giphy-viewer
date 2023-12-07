'use client';

import { useContext } from 'react';
import Image from 'next/image';
import { AppContext } from '@/utils/context';
import { loadingSkeletonXML, toDataURL } from '@/utils/svg';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from 'tailwind.config';

const twConfig = resolveConfig(tailwindConfig);
const gray = twConfig.theme.colors.gray;

type GifProps = {
  src: string;
  alt: string;
};

export default function Gif({ src, alt }: GifProps) {
  const { darkMode } = useContext(AppContext);

  // given more time - I would make this dynamic or user-controllable
  const width = 168;
  const height = 168;

  return (
    <div
      className="relative m-[6px] md:m-[7px] overflow-hidden rounded-lg shadow-md transition-all hover:z-10 md:hover:scale-[1.3]"
      style={{
        width: width,
        height: height,
        boxShadow:
          '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Image
        src={src}
        alt={alt}
        className="object-cover"
        sizes="300"
        fill
        placeholder={toDataURL(
          loadingSkeletonXML(
            width,
            height,
            darkMode ? gray[700] : gray[200],
            darkMode ? '#323a49' : '#dcdfe4',
          ),
        )}
      />
    </div>
  );
}
