
"use client";

import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Label } from './ui/label';

export default function RecommendationsForm() {

  return (
    <div>
      <div className="space-y-6">
          <div className="space-y-2">
            <Label className="text-lg">Viewing History</Label>
             <Textarea
                placeholder="e.g., I've watched Attack on Titan (loved it), My Hero Academia (enjoyed the action), and Fruits Basket (a bit slow for me)."
                rows={5}
              />
          </div>
           <div className="space-y-2">
            <Label className="text-lg">Preferences</Label>
            <Textarea
                placeholder="e.g., I love fast-paced action, complex characters, and sci-fi themes. Not a big fan of romance or slow-burn stories."
                rows={5}
              />
          </div>
          <Button asChild className="w-full neon-glow-primary">
            <Link href="https://gemini.google.com/" target="_blank" rel="noopener noreferrer">
              <Sparkles className="mr-2 h-4 w-4" />
              Get Recommendations
            </Link>
          </Button>
      </div>
    </div>
  );
}
