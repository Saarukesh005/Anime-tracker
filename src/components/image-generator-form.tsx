"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/hooks/use-toast';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Image as ImageIcon, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const formSchema = z.object({
  prompt: z.string().min(10, "Please provide a more detailed description for the image."),
});

type FormData = z.infer<typeof formSchema>;

export default function ImageGeneratorForm() {
  const [generatedImages, setGeneratedImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  return (
    <div>
      <Form {...form}>
        <form className="space-y-6">
          <FormField
            control={form.control}
            name="prompt"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Image Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={selectedImage ? "Describe what you want to change or add to the selected image..." : "e.g., A majestic dragon soaring over a mystical forest at dawn, cinematic lighting."}
                    rows={5}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button asChild className="w-full neon-glow-primary">
            <Link href="https://aistudio.google.com/models/gemini-2-5-flash-image?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">
                {selectedImage ? <Sparkles className="mr-2 h-4 w-4" /> : <ImageIcon className="mr-2 h-4 w-4" />}
                {selectedImage ? 'Generate Variation' : 'Generate Image'}
            </Link>
          </Button>
        </form>
      </Form>
      
      {generatedImages.length > 0 && (
         <Card className="mt-8">
            <CardHeader>
                <CardTitle>Your Creations</CardTitle>
                <CardDescription>Click an image to select it as a base for a new generation.</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {generatedImages.map((img, index) => (
                    <div 
                        key={index} 
                        className="relative aspect-square cursor-pointer group"
                        onClick={() => setSelectedImage(img === selectedImage ? null : img)}
                    >
                        <Image
                            src={img}
                            alt={`Generated image ${index + 1}`}
                            fill
                            className={cn(
                                "rounded-md object-cover transition-all",
                                selectedImage === img ? 'ring-4 ring-primary ring-offset-2' : 'ring-0'
                            )}
                        />
                         <div className={cn(
                            "absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity",
                            selectedImage === img && "opacity-100"
                         )}>
                           <Sparkles className="h-8 w-8 text-white drop-shadow-lg" />
                        </div>
                    </div>
                ))}
            </CardContent>
         </Card>
      )}
    </div>
  );
}
