'use client';

import Image from 'next/image';
import { loadingSkeletonXML, toDataURL } from '@/utils/svg';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from 'tailwind.config';
const twConfig = resolveConfig(tailwindConfig);

type GifProps = {
  src: string;
  alt: string;
};

export default function Gif({ src, alt }: GifProps) {
  const width = 200;
  const height = 200;

  return (
    <div
      className="relative m-[6px] overflow-hidden rounded-lg"
      style={{ width: width, height: height }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        placeholder={toDataURL(
          loadingSkeletonXML(
            width,
            height,
            twConfig.theme.colors.gray[700],
            '#323a49',
          ),
        )}
      />
    </div>
  );
}
