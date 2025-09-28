
"use client";

import { useState } from 'react';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Image as ImageIcon, Loader2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useToast } from '@/hooks/use-toast';
import { generateImageAction } from '@/lib/actions';
import { Card, CardContent } from './ui/card';

export default function ImageGeneratorForm() {
  
  return (
    <div>
      <form className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="prompt" className="text-lg font-medium">Image Description</label>
            <Textarea
                id="prompt"
                placeholder={"e.g., A majestic dragon soaring over a mystical forest at dawn, cinematic lighting."}
                rows={5}
            />
          </div>
        <Button asChild className="w-full neon-glow-primary">
          <Link href="https://aistudio.google.com/models/gemini-2-5-flash-image?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">
            <ImageIcon className="mr-2 h-4 w-4" />
            Generate Image
          </Link>
        </Button>
      </form>
    </div>
  );
}
