
'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

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

export default function CommentSection({ animeTitle }: { animeTitle: string }) {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [newComment, setNewComment] = useState("");

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

  return (
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
                placeholder={`What are your thoughts on ${animeTitle}?`} 
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
  );
}
