
'use client';

import { useState, useMemo } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { allAnime } from "@/lib/anime";
import AnimeCard from "@/components/anime-card";
import type { Anime } from "@/lib/types";
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';

const WatchlistGrid = ({ animes }: { animes: Anime[] }) => {
  if (animes.length === 0) {
    return <p className="text-muted-foreground text-center py-8">No anime match the current filters in this list.</p>
  }
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {animes.map(anime => (
        <AnimeCard key={anime.id} anime={anime} />
      ))}
    </div>
  );
};

export default function WatchlistPage() {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  
  const genres = useMemo(() => {
    const allGenres = new Set<string>();
    allAnime.forEach(anime => {
      anime.genres.forEach(genre => allGenres.add(genre));
    });
    return Array.from(allGenres).sort();
  }, []);

  const handleGenreChange = (genre: string) => {
    setSelectedGenres(prev => 
      prev.includes(genre) 
        ? prev.filter(g => g !== genre)
        : [...prev, genre]
    );
  };

  const filterAnime = (status: Anime['status']) => {
    let filtered = allAnime.filter(a => a.status === status);
    if (selectedGenres.length > 0) {
      filtered = filtered.filter(anime => 
        selectedGenres.every(genre => anime.genres.includes(genre))
      );
    }
    return filtered;
  };

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <aside className="w-full md:w-1/4 lg:w-1/5">
        <Card>
          <CardContent className="p-4">
            <h3 className="text-lg font-headline font-semibold mb-4">Filter by Genre</h3>
            <div className="space-y-2">
              {genres.map(genre => (
                <div key={genre} className="flex items-center space-x-2">
                  <Checkbox 
                    id={genre} 
                    onCheckedChange={() => handleGenreChange(genre)}
                    checked={selectedGenres.includes(genre)}
                  />
                  <Label htmlFor={genre} className="font-normal text-sm">{genre}</Label>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </aside>
      <div className="flex-1">
        <h1 className="text-4xl font-headline font-bold mb-8">My Watchlist</h1>
        <Tabs defaultValue="watching" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-6">
            <TabsTrigger value="watching">Watching</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="on-hold">On-Hold</TabsTrigger>
            <TabsTrigger value="dropped">Dropped</TabsTrigger>
            <TabsTrigger value="plan-to-watch">Plan to Watch</TabsTrigger>
          </TabsList>
          <TabsContent value="watching">
            <WatchlistGrid animes={filterAnime("Watching")} />
          </TabsContent>
          <TabsContent value="completed">
            <WatchlistGrid animes={filterAnime("Completed")} />
          </TabsContent>
          <TabsContent value="on-hold">
            <WatchlistGrid animes={filterAnime("On-Hold")} />
          </TabsContent>
          <TabsContent value="dropped">
            <WatchlistGrid animes={filterAnime("Dropped")} />
          </TabsContent>
          <TabsContent value="plan-to-watch">
            <WatchlistGrid animes={filterAnime("Plan to Watch")} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
