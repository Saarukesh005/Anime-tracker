
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
    // Re-throw the original error to be caught by the client
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error('An unknown error occurred during image generation.');
  }
}
