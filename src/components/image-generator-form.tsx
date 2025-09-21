"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/hooks/use-toast';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Loader2, Image as ImageIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import Image from 'next/image';
import { generateImageAction } from '@/lib/actions';

const formSchema = z.object({
  prompt: z.string().min(10, "Please provide a more detailed description for the image."),
});

type FormData = z.infer<typeof formSchema>;

export default function ImageGeneratorForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const handleSubmit = async (data: FormData) => {
    setIsLoading(true);
    setGeneratedImage(null);
    try {
      const result = await generateImageAction(data);
      if (result && result.imageUrl) {
        setGeneratedImage(result.imageUrl);
      } else {
        throw new Error("Failed to get image.");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Could not generate image. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="prompt"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Image Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="e.g., A majestic dragon soaring over a mystical forest at dawn, cinematic lighting."
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
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
               <>
                <ImageIcon className="mr-2 h-4 w-4" />
                Generate Image
              </>
            )}
          </Button>
        </form>
      </Form>
      {generatedImage && (
        <Card className="mt-8 bg-background/50">
          <CardHeader>
            <CardTitle className="font-headline text-2xl flex items-center gap-2">
              <ImageIcon className="text-primary"/>
              Here is your generated image!
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative aspect-video">
                <Image
                    src={generatedImage}
                    alt="Generated image"
                    fill
                    className="rounded-md object-contain"
                />
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
