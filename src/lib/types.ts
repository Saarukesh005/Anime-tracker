export type Anime = {
  id: number;
  title: string;
  description: string;
  coverImageId: string;
  seasons: number;
  episodes: number;
  rating: number;
  genres: string[];
  status: 'Watching' | 'Completed' | 'On-Hold' | 'Dropped' | 'Plan to Watch';
};
