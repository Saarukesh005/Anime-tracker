"use server";

import { recommendAnime, type RecommendAnimeInput, type RecommendAnimeOutput } from "@/ai/flows/recommend-anime";

export async function recommendAnimeAction(input: RecommendAnimeInput): Promise<RecommendAnimeOutput | null> {
  try {
    const result = await recommendAnime(input);
    return result;
  } catch (error) {
    console.error("Error in recommendAnimeAction:", error);
    return null;
  }
}
