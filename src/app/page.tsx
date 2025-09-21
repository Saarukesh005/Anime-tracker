import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { trendingAnime } from '@/lib/anime';
import AnimeCard from '@/components/anime-card';
import AnimeSearch from '@/components/anime-search';
import { placeholderImages } from '@/lib/placeholder-images.json';

export default function Home() {
  const famousAnimeImage = placeholderImages.find(p => p.id === "hero-banner")!;

  return (
    <div className="space-y-12">
      <section className="relative w-full h-[50vh] rounded-xl overflow-hidden shadow-2xl">
        <Image
          src={famousAnimeImage.imageUrl}
          alt={famousAnimeImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={famousAnimeImage.imageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 p-8 text-white">
          <h1 className="text-4xl md:text-6xl font-headline font-bold drop-shadow-lg">
            Your Next Obsession Awaits
          </h1>
          <p className="mt-2 text-lg max-w-2xl drop-shadow-md">
            Dive into a universe of stories. Track your progress, discover new series, and connect with fellow fans.
          </p>
          <Button asChild className="mt-4 neon-glow-primary" size="lg">
            <Link href="/watchlist">Get Started</Link>
          </Button>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-headline font-semibold mb-6">Trending Now</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {trendingAnime.map((anime) => (
            <AnimeCard key={anime.id} anime={anime} />
          ))}
        </div>
      </section>

      <section>
        <AnimeSearch />
      </section>
    </div>
  );
}
