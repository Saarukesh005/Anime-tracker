
'use client';

import { useState, useMemo } from 'react';
import type { Anime } from '@/lib/types';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';

export default function EpisodeList({ initialAnime }: { initialAnime: Anime }) {
  const [anime, setAnime] = useState<Anime>(initialAnime);

  const watchedEpisodesCount = useMemo(() => {
    return anime.seasons.reduce((count, season) => {
      return count + season.episodes.filter(ep => ep.watched).length;
    }, 0);
  }, [anime]);

  const handleWatchToggle = (seasonNumber: number, episodeId: number) => {
    setAnime(prevAnime => {
      if (!prevAnime) return prevAnime;

      const newSeasons = prevAnime.seasons.map(season => {
        if (season.seasonNumber === seasonNumber) {
          const newEpisodes = season.episodes.map(episode => {
            if (episode.id === episodeId) {
              return { ...episode, watched: !episode.watched };
            }
            return episode;
          });
          return { ...season, episodes: newEpisodes };
        }
        return season;
      });

      return { ...prevAnime, seasons: newSeasons };
    });
  };

  return (
    <div>
      <h2 className="text-3xl font-bold font-headline mb-6">Seasons & Episodes</h2>
      <Accordion type="single" collapsible className="w-full">
        {anime.seasons.map((season) => (
          <AccordionItem value={`season-${season.seasonNumber}`} key={season.seasonNumber}>
            <AccordionTrigger>
              <h3 className="text-xl font-semibold">Season {season.seasonNumber}</h3>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2 pl-4 text-foreground">
                {season.episodes.map((episode) => (
                  <li key={episode.id} className="flex items-center justify-between p-2 rounded-md hover:bg-muted/50">
                    <label htmlFor={`ep-${episode.id}`} className="flex-grow cursor-pointer">{episode.title}</label>
                    <Checkbox
                      id={`ep-${episode.id}`}
                      checked={episode.watched}
                      onCheckedChange={() => handleWatchToggle(season.seasonNumber, episode.id)}
                    />
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
