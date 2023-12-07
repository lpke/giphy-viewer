import { GifProps } from "./Gif";


export default function Gif({ key }: GifProps) {
    return (
        <div>
            <Image
                src={gif?.images?.fixed_height?.url}
                alt={gif?.title}
                fill
                className="object-cover"
                placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`} />
        </div>
    );
}

