import Gif from '@/components/Gif';
import type { GifData } from '@/types/data';

type DisplayGridProps = {
  gifs: GifData[];
};

export default function DisplayGrid({ gifs = [] }: DisplayGridProps) {
  const hasGifs = gifs.length > 0;

  return (
    <div className="flex flex-row flex-wrap justify-center p-[6px] w-full">
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
