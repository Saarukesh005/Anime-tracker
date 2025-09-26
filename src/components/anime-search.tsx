"use client";

import { useState } from 'react';
import { Input } from './ui/input';
import { allAnime } from '@/lib/anime';
import type { Anime } from '@/lib/types';
import AnimeCard from './anime-card';
import { SearchIcon } from 'lucide-react';
import Link from 'next/link';

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

  const handleBlur = () => {
    // Delay hiding the results to allow for click events
    setTimeout(() => {
      setIsFocused(false);
    }, 200);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  return (
    <div className="relative">
      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search for an anime or TV series..."
          value={searchTerm}
          onChange={handleSearch}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="w-full pl-9"
        />
      </div>

      {isFocused && searchTerm.length > 2 && (
        <div className="absolute top-full mt-2 w-full md:w-[400px] bg-card border rounded-md shadow-lg z-50 max-h-96 overflow-y-auto">
          {results.length > 0 ? (
            <div className="p-2 space-y-2">
              {results.map((anime) => (
                <Link href={`/anime/${anime.id}`} key={anime.id} className="block hover:bg-muted/50 p-2 rounded-md">
                   <div className="flex items-start gap-4">
                     <div>
                       <p className="font-semibold">{anime.title}</p>
                       <p className="text-sm text-muted-foreground">{anime.type} &middot; {anime.genres[0]}</p>
                     </div>
                   </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground p-4">No results found for &quot;{searchTerm}&quot;.</p>
          )}
        </div>
      )}
    </div>
  );
}
