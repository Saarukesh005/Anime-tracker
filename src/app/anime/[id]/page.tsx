
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
import CommentSection from '@/components/comment-section';
import EpisodeList from '@/components/episode-list';
import type { Anime } from '@/lib/types';

type Props = {
  params: { id: string };
};

export default function AnimeDetailPage({ params }: Props) {
  const anime: Anime | undefined = allAnime.find((a) => a.id.toString() === params.id);

  if (!anime) {
    notFound();
  }

  const coverImage = placeholderImages.find(p => p.id === anime.coverImageId);
  
  // Note: Progress calculation will now be handled within the client component
  const watchedEpisodesCount = anime.seasons.reduce((count, season) => {
    return count + season.episodes.filter(ep => ep.watched).length;
  }, 0);
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

          <EpisodeList initialAnime={anime} />

          <Separator className="my-8" />

          <CommentSection animeTitle={anime.title} />

        </div>
      </div>
    </div>
  );
}
