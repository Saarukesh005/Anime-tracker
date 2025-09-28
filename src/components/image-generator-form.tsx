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
import { generateImageAction } from '@/lib/actions';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  prompt: z.string().min(10, "Please provide a more detailed description for the image."),
});

type FormData = z.infer<typeof formSchema>;

export default function ImageGeneratorForm() {
  const [generatedImages, setGeneratedImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      const result = await generateImageAction({
        prompt: data.prompt,
        baseImageUrl: selectedImage || undefined,
      });
      setGeneratedImages(prev => [result.imageUrl, ...prev]);
      setSelectedImage(result.imageUrl); // Select the new image
    } catch (error) {
        console.error(error);
      toast({
        title: "Error Generating Image",
        description: "Could not generate the image. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
          <Button type="submit" disabled={isLoading} className="w-full neon-glow-primary">
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : selectedImage ? (
              <Sparkles className="mr-2 h-4 w-4" />
            ) : (
              <ImageIcon className="mr-2 h-4 w-4" />
            )}
            {isLoading ? 'Generating...' : selectedImage ? 'Generate Variation' : 'Generate Image'}
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
                            sizes="(max-width: 768px) 50vw, 25vw"
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
