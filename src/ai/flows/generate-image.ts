'use server';

/**
 * @fileOverview A Genkit flow for generating images from text prompts, with optional image-to-image support.
 *
 * - generateImage - A function that generates an image based on a text prompt and an optional base image.
 * - GenerateImageInput - The input type for the generateImage function.
 * - GenerateImageOutput - The return type for the generateImage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import {Part} from 'genkit';

const GenerateImageInputSchema = z.object({
  prompt: z.string().describe('The text prompt to generate an image from.'),
  baseImageUrl: z
    .string()
    .optional()
    .describe(
      "An optional base image to use for image-to-image generation, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type GenerateImageInput = z.infer<typeof GenerateImageInputSchema>;

const GenerateImageOutputSchema = z.object({
  imageUrl: z.string().describe('The data URI of the generated image.'),
});
export type GenerateImageOutput = z.infer<typeof GenerateImageOutputSchema>;

export async function generateImage(input: GenerateImageInput): Promise<GenerateImageOutput> {
  return generateImageFlow(input);
}

const generateImageFlow = ai.defineFlow(
  {
    name: 'generateImageFlow',
    inputSchema: GenerateImageInputSchema,
    outputSchema: GenerateImageOutputSchema,
  },
  async (input) => {
    const prompt: Part[] = [{ text: input.prompt }];

    if (input.baseImageUrl) {
      prompt.unshift({ media: { url: input.baseImageUrl } });
    }
    
    const { media } = await ai.generate({
        model: 'googleai/gemini-2.5-flash-image-preview',
        prompt: prompt,
        config: {
          responseModalities: ['IMAGE'],
        }
    });
    
    if (!media?.url) {
      throw new Error('Image generation failed to return a valid image URL.');
    }
    
    return {
        imageUrl: media.url,
    };
  }
);
