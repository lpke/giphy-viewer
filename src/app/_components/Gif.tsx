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

  // One way I'd like to improve this is to make the sizing dynamic
  const width = 168;
  const height = 168;

  return (
    <div
      className="relative m-[6px] overflow-hidden rounded-lg"
      style={{ width: width, height: height }}
    >
      <Image
        src={src}
        alt={alt}
        className="object-cover"
        sizes="200"
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
