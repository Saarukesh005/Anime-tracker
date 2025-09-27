
'use client';

import { allAnime } from '@/lib/anime';
import { placeholderImages } from '@/lib/placeholder-images.json';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Clapperboard, Star, Tv } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import CommentSection from '@/components/comment-section';
import { useEffect, useMemo, useState } from 'react';
import type { Anime } from '@/lib/types';
import { Checkbox } from '@/components/ui/checkbox';

type Props = {
  params: { id: string };
};

export default function AnimeDetailPage({ params }: Props) {
  const [anime, setAnime] = useState<Anime | undefined>(() => allAnime.find((a) => a.id.toString() === params.id));

  useEffect(() => {
    // If the params.id changes, we need to find the new anime.
    // This is useful for client-side navigations between dynamic route segments.
    const currentAnime = allAnime.find((a) => a.id.toString() === params.id);
    setAnime(currentAnime);
  }, [params.id]);

  const watchedEpisodesCount = useMemo(() => {
    if (!anime) return 0;
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

  if (!anime) {
    // This can happen if the ID is invalid and no anime is found.
    notFound();
  }

  const coverImage = placeholderImages.find(p => p.id === anime.coverImageId);
  const progress = (watchedEpisodesCount / anime.totalEpisodes) * 100;

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          {coverImage && (
            <Image
              src={coverImage.imageUrl}
              alt={`Cover of ${anime.title}`}
              width={400}
              height={600}
              className="rounded-xl shadow-2xl w-full"
              data-ai-hint={coverImage.imageHint}
            />
          )}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="font-headline">Watch Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Progress value={progress} />
                <p className="text-sm text-muted-foreground text-center">{watchedEpisodesCount} / {anime.totalEpisodes} episodes watched</p>
                <Button className="w-full neon-glow-primary mt-2">Mark Next Episode</Button>
              </div>
            </CardContent>
          </Card>
           <Card className="mt-6">
            <CardHeader>
              <CardTitle className="font-headline">Stream on</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Button variant="outline" asChild><a href="#" target="_blank">Crunchyroll</a></Button>
              <Button variant="outline" asChild><a href="#" target="_blank">Netflix</a></Button>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">{anime.title}</h1>
          <div className="flex items-center gap-4 mt-2 mb-4 text-muted-foreground">
            <div className="flex items-center gap-1"><Star className="w-4 h-4 text-amber-400" /> <span>{anime.rating}/10</span></div>
            <div className="flex items-center gap-1"><Tv className="w-4 h-4" /> <span>{anime.seasons.length} Season(s)</span></div>
            <div className="flex items-center gap-1"><Clapperboard className="w-4 h-4" /> <span>{anime.totalEpisodes} Episodes</span></div>
          </div>
          <div className="flex flex-wrap gap-2 my-4">
            {anime.genres.map((genre) => <Badge key={genre} variant="secondary">{genre}</Badge>)}
          </div>
          <p className="text-lg leading-relaxed">{anime.description}</p>
          
          <Separator className="my-8" />

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

          <Separator className="my-8" />

          <CommentSection animeTitle={anime.title} />

        </div>
      </div>
    </div>
  );
}
