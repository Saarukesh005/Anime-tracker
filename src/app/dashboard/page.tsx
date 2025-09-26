
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { trendingAnime } from '@/lib/anime';
import AnimeCard from '@/components/anime-card';
import { placeholderImages } from '@/lib/placeholder-images.json';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import React from 'react';

export default function DashboardPage() {
  const heroImages = placeholderImages.filter(p => p.id.startsWith("hero-banner"));

  const plugin = React.useRef(
    Autoplay({ delay: 10000, stopOnInteraction: true })
  )

  return (
    <div className="space-y-12">
      <section className="relative w-full shadow-2xl">
        <Carousel
            plugins={[plugin.current]}
            opts={{
                loop: true,
            }}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {heroImages.map((image) => (
                <CarouselItem key={image.id}>
                    <div className="relative w-full h-[50vh] rounded-xl overflow-hidden">
                        <Image
                        src={image.imageUrl}
                        alt={image.description}
                        fill
                        className="object-cover"
                        priority
                        data-ai-hint={image.imageHint}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-8 text-white">
                        <h1 className="text-4xl md:text-6xl font-headline font-bold drop-shadow-lg">
                            Your Next Obsession Awaits
                        </h1>
                        <p className="mt-2 text-lg max-w-2xl drop-shadow-md">
                            Dive into a universe of stories. Track your progress, discover new series, and connect with fellow fans.
                        </p
>
                        <Button asChild className="mt-4 neon-glow-primary" size="lg">
                            <Link href="/watchlist">My Watchlist</Link>
                        </Button>
                        </div>
                    </div>
                </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
        </Carousel>
      </section>

      <section>
        <h2 className="text-3xl font-headline font-semibold mb-6">Trending Now</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {trendingAnime.map((anime) => (
            <AnimeCard key={anime.id} anime={anime} />
          ))}
        </div>
      </section>

    </div>
  );
}
