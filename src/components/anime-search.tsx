"use client";

import { useState } from 'react';
import { Input } from './ui/input';
import { allAnime } from '@/lib/anime';
import type { Anime } from '@/lib/types';
import AnimeCard from './anime-card';
import { SearchIcon } from 'lucide-react';

export default function AnimeSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<Anime[]>([]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    if (term.length > 2) {
      const filtered = allAnime.filter((anime) =>
        anime.title.toLowerCase().includes(term.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-headline font-semibold mb-6 text-center">Find Your Next Favorite Anime</h2>
      <div className="relative max-w-2xl mx-auto">
        <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search for an anime..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full text-lg pl-12 py-6 rounded-full shadow-lg focus-visible:ring-primary focus-visible:ring-offset-4"
        />
      </div>

      {searchTerm.length > 2 && (
        <div className="mt-8">
          {results.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {results.map((anime) => (
                <AnimeCard key={anime.id} anime={anime} />
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground mt-8">No anime found for &quot;{searchTerm}&quot;.</p>
          )}
        </div>
      )}
    </div>
  );
}
