export type Episode = {
  id: number;
  title: string;
  watched: boolean;
};

export type Season = {
  seasonNumber: number;
  episodes: Episode[];
};

export type Anime = {
  id: number;
  title: string;
  description: string;
  coverImageId: string;
  seasons: Season[];
  totalEpisodes: number;
  rating: number;
  genres: string[];
  status: 'Watching' | 'Completed' | 'On-Hold' | 'Dropped' | 'Plan to Watch';
  type: 'Anime' | 'TV Series';
};
