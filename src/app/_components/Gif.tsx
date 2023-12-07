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
      className="relative m-[6px] overflow-hidden rounded-lg shadow-[0_4px_6px_-1px_rgba(0,_0,_0,_0.3),_0_2px_4px_-1px_rgba(0,_0,_0,_0.1)] transition-all duration-300 hover:z-10 hover:shadow-[rgba(0,_0,_0,_0.56)_0px_22px_70px_4px] md:m-[7px] md:hover:scale-[1.3]"
      style={{
        width: width,
        height: height,
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
            darkMode ? gray[700] : gray[300],
            darkMode ? '#323a49' : '#c2c9d0',
          ),
        )}
      />
    </div>
  );
}
