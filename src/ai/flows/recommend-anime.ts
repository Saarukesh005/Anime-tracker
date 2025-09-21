'use server';

/**
 * @fileOverview Provides personalized anime recommendations based on user viewing history and preferences.
 *
 * - recommendAnime - A function that generates anime recommendations.
 * - RecommendAnimeInput - The input type for the recommendAnime function.
 * - RecommendAnimeOutput - The return type for the recommendAnime function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecommendAnimeInputSchema = z.object({
  viewingHistory: z
    .string()
    .describe(
      'A detailed history of anime the user has watched, including titles, genres, and ratings.'
    ),
  preferences: z
    .string()
    .describe(
      'A description of the user’s anime preferences, including preferred genres, themes, and art styles.'
    ),
});
export type RecommendAnimeInput = z.infer<typeof RecommendAnimeInputSchema>;

const RecommendAnimeOutputSchema = z.object({
  recommendations: z
    .string()
    .describe(
      'A list of recommended anime titles with brief descriptions, tailored to the user’s viewing history and preferences.'
    ),
});
export type RecommendAnimeOutput = z.infer<typeof RecommendAnimeOutputSchema>;

export async function recommendAnime(input: RecommendAnimeInput): Promise<RecommendAnimeOutput> {
  return recommendAnimeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recommendAnimePrompt',
  input: {schema: RecommendAnimeInputSchema},
  output: {schema: RecommendAnimeOutputSchema},
  prompt: `You are an AI anime recommendation engine. Given a user's viewing history and preferences,
you will provide a list of anime recommendations tailored to their taste.

Consider the following viewing history and preferences when making your recommendations:

Viewing History: {{{viewingHistory}}}
Preferences: {{{preferences}}}

Based on this information, provide a list of anime recommendations with brief descriptions:
`,
});

const recommendAnimeFlow = ai.defineFlow(
  {
    name: 'recommendAnimeFlow',
    inputSchema: RecommendAnimeInputSchema,
    outputSchema: RecommendAnimeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
