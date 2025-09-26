
'use client';

import { allAnime } from '@/lib/anime';
import { placeholderImages } from '@/lib/placeholder-images.json';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Clapperboard, Star, Tv, CheckCircle2 } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useState } from 'react';

type Props = {
  params: { id: string };
};

type Comment = {
  id: number;
  user: string;
  avatarSeed: string;
  timestamp: string;
  text: string;
};

const initialComments: Comment[] = [
  { id: 1, user: "AnimeFan_22", avatarSeed: "user1", timestamp: "2 hours ago", text: "That last episode was insane! I can't believe <Button variant=\"link\" className=\"p-0 h-auto\">(show spoiler)</Button>" },
  { id: 2, user: "SakuraChan", avatarSeed: "user2", timestamp: "5 hours ago", text: "The animation in this series is top-tier. Every frame is a work of art." },
];

export default function AnimeDetailPage({ params }: Props) {
  const anime = allAnime.find((a) => a.id.toString() === params.id);
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [newComment, setNewComment] = useState("");

  if (!anime) {
    notFound();
  }

  const handlePostComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      const newCommentObj: Comment = {
        id: Date.now(),
        user: "CurrentUser", // This would be the logged-in user
        avatarSeed: "user3",
        timestamp: "Just now",
        text: newComment,
      };
      setComments([newCommentObj, ...comments]);
      setNewComment("");
    }
  };

  const coverImage = placeholderImages.find(p => p.id === anime.coverImageId);
  const progress = (12 / anime.totalEpisodes) * 100; // Mocked progress

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
                <p className="text-sm text-muted-foreground text-center">12 / {anime.totalEpisodes} episodes watched</p>
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
                                <span>{episode.title}</span>
                                <Button variant="ghost" size="sm">
                                    <CheckCircle2 className="w-5 h-5 text-muted-foreground hover:text-primary" />
                                </Button>
                            </li>
                        ))}
                        </ul>
                    </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
          </div>

          <Separator className="my-8" />

          <div>
            <h2 className="text-3xl font-bold font-headline mb-6">Community Discussions</h2>
            <Card>
              <CardHeader>
                <CardTitle>Join the Conversation</CardTitle>
                <CardDescription>Share your thoughts, but please tag spoilers!</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handlePostComment}>
                  <div className="space-y-4">
                    <textarea 
                      placeholder={`What are your thoughts on ${anime.title}?`} 
                      rows={4} 
                      className="w-full p-2 border rounded-md bg-input"
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                    />
                    <div className="flex justify-end">
                      <Button type="submit" className="neon-glow" disabled={!newComment.trim()}>Post Comment</Button>
                    </div>
                  </div>
                </form>

                <div className="mt-8 space-y-6">
                  {comments.map(comment => (
                    <div className="flex items-start gap-4" key={comment.id}>
                      <Avatar>
                        <AvatarImage src={`https://picsum.photos/seed/${comment.avatarSeed}/40/40`} />
                        <AvatarFallback>{comment.user.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-semibold">{comment.user}</p>
                        <p className="text-sm text-muted-foreground">{comment.timestamp}</p>
                        <p className="mt-2">{comment.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
