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
  const [isFocused, setIsFocused] = useState(false);

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
    <div className="relative">
      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search for an anime..."
          value={searchTerm}
          onChange={handleSearch}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          className="w-full pl-9"
        />
      </div>

      {isFocused && searchTerm.length > 2 && (
        <div className="absolute top-full mt-2 w-full md:w-[400px] bg-card border rounded-md shadow-lg z-50 max-h-96 overflow-y-auto">
          {results.length > 0 ? (
            <div className="p-2">
              {results.map((anime) => (
                <div key={anime.id} className="p-2">
                   <AnimeCard anime={anime} />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground p-4">No anime found for &quot;{searchTerm}&quot;.</p>
          )}
        </div>
      )}
    </div>
  );
}
