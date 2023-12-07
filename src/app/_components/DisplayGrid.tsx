import Gif from '@/components/Gif';
import type { GifData } from '@/types/data';

type DisplayGridProps = {
  gifs: GifData[];
};

/**
 * Container that holds all rendered gifs.
 * Given more time, I would make the page more dynamic by showing gifs in
 * varying aspect ratios, and avoid cropping where possible.
 */
export default function DisplayGrid({ gifs = [] }: DisplayGridProps) {
  const hasGifs = gifs.length > 0;

  return (
    <div className="flex w-full flex-row flex-wrap justify-center p-[6px] !pt-2 md:p-6">
      {hasGifs
        ? gifs.map((gif) => (
            <Gif
              src={gif?.images?.fixed_height?.url}
              alt={gif?.title}
              key={gif?.slug}
            />
          ))
        : null}
    </div>
  );
}
