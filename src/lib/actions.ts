
'use server';

import {recommendAnime} from '@/ai/flows/recommend-anime';
import {generateImage, type GenerateImageInput, type GenerateImageOutput} from '@/ai/flows/generate-image';
import type {RecommendAnimeInput, RecommendAnimeOutput} from '@/ai/flows/recommend-anime';

export async function recommendAnimeAction(
  input: RecommendAnimeInput
): Promise<RecommendAnimeOutput | null> {
  try {
    const result = await recommendAnime(input);
    return result;
  } catch (error) {
    console.error('Error in recommendAnimeAction:', error);
    return null;
  }
}

export async function generateImageAction(input: GenerateImageInput): Promise<GenerateImageOutput> {
  try {
    return await generateImage(input);
  } catch (error) {
    console.error('Error in generateImageAction:', error);
    // Re-throw a more specific error to be caught by the client
    if (error instanceof Error && error.message.includes('429')) {
      throw new Error(
        'Rate limit exceeded. Please wait a moment and try again.'
      );
    }
    throw new Error('Failed to generate image due to a server error.');
  }
}
