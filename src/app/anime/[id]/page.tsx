import { allAnime } from '@/lib/anime';
import { placeholderImages } from '@/lib/placeholder-images.json';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Clapperboard, Star, Tv } from 'lucide-react';

type Props = {
  params: { id: string };
};

export default function AnimeDetailPage({ params }: Props) {
  const anime = allAnime.find((a) => a.id.toString() === params.id);

  if (!anime) {
    notFound();
  }

  const coverImage = placeholderImages.find(p => p.id === anime.coverImageId);
  const progress = (12 / anime.episodes) * 100; // Mocked progress

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
                <p className="text-sm text-muted-foreground text-center">12 / {anime.episodes} episodes watched</p>
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
            <div className="flex items-center gap-1"><Tv className="w-4 h-4" /> <span>{anime.seasons} Season(s)</span></div>
            <div className="flex items-center gap-1"><Clapperboard className="w-4 h-4" /> <span>{anime.episodes} Episodes</span></div>
          </div>
          <div className="flex flex-wrap gap-2 my-4">
            {anime.genres.map((genre) => <Badge key={genre} variant="secondary">{genre}</Badge>)}
          </div>
          <p className="text-lg leading-relaxed">{anime.description}</p>
          
          <Separator className="my-8" />

          <div>
            <h2 className="text-3xl font-bold font-headline mb-6">Community Discussions</h2>
            <Card>
              <CardHeader>
                <CardTitle>Join the Conversation</CardTitle>
                <CardDescription>Share your thoughts, but please tag spoilers!</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Textarea placeholder={`What are your thoughts on ${anime.title}?`} rows={4} />
                  <div className="flex justify-end">
                    <Button className="neon-glow">Post Comment</Button>
                  </div>
                </div>

                <div className="mt-8 space-y-6">
                  {/* Mocked Comments */}
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarImage src="https://picsum.photos/seed/user1/40/40" />
                      <AvatarFallback>U1</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-semibold">AnimeFan_22</p>
                      <p className="text-sm text-muted-foreground">2 hours ago</p>
                      <p className="mt-2">That last episode was insane! I can't believe <Button variant="link" className="p-0 h-auto">(show spoiler)</Button></p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarImage src="https://picsum.photos/seed/user2/40/40" />
                      <AvatarFallback>U2</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-semibold">SakuraChan</p>
                      <p className="text-sm text-muted-foreground">5 hours ago</p>
                      <p className="mt-2">The animation in this series is top-tier. Every frame is a work of art.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
