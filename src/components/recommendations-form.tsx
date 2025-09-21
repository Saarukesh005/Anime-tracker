"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { recommendAnimeAction } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Loader2, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const formSchema = z.object({
  viewingHistory: z.string().min(10, "Please provide more details about your viewing history."),
  preferences: z.string().min(10, "Please provide more details about your preferences."),
});

type FormData = z.infer<typeof formSchema>;

export default function RecommendationsForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      viewingHistory: "",
      preferences: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    setRecommendations(null);
    try {
      const result = await recommendAnimeAction(data);
      if (result) {
        setRecommendations(result.recommendations);
      } else {
        throw new Error("Failed to get recommendations.");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Could not generate recommendations. Please try again.",
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
            name="viewingHistory"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Viewing History</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="e.g., I've watched Attack on Titan (loved it), My Hero Academia (enjoyed the action), and Fruits Basket (a bit slow for me)."
                    rows={5}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="preferences"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Preferences</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="e.g., I love fast-paced action, complex characters, and sci-fi themes. Not a big fan of romance or slow-burn stories."
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
                <Sparkles className="mr-2 h-4 w-4" />
                Get Recommendations
              </>
            )}
          </Button>
        </form>
      </Form>
      {recommendations && (
        <Card className="mt-8 bg-background/50">
          <CardHeader>
            <CardTitle className="font-headline text-2xl flex items-center gap-2">
              <Sparkles className="text-primary"/>
              Here are your recommendations!
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-sm md:prose-base dark:prose-invert whitespace-pre-wrap">
              {recommendations}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
