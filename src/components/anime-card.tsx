import Link from 'next/link';
import Image from 'next/image';
import type { Anime } from '@/lib/types';
import { placeholderImages } from '@/lib/placeholder-images.json';
import { Card, CardContent } from './ui/card';

type Props = {
  anime: Anime;
};

export default function AnimeCard({ anime }: Props) {
  const image = placeholderImages.find(p => p.id === anime.coverImageId);

  return (
    <Link href={`/anime/${anime.id}`} className="group block">
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2">
        <CardContent className="p-0">
          {image && (
            <Image
              src={image.imageUrl}
              alt={`Cover of ${anime.title}`}
              width={400}
              height={600}
              className="aspect-[2/3] object-cover w-full"
              data-ai-hint={image.imageHint}
            />
          )}
          <div className="p-4">
            <h3 className="font-semibold font-headline truncate group-hover:text-primary transition-colors">
              {anime.title}
            </h3>
            <p className="text-xs text-muted-foreground">{anime.seasons.length} Season(s)</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
