
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
    
    if (error instanceof Error) {
      // Check for the specific 429 rate limit error
      if (error.message.includes('429')) {
        throw new Error('You have exceeded the request limit. Please wait a moment and try again.');
      }
      // Re-throw the original error for other cases
      throw new Error(error.message);
    }
    
    throw new Error('An unknown error occurred during image generation.');
  }
}
