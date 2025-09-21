import type { Anime } from './types';

export const allAnime: Anime[] = [
  {
    id: 1,
    title: "Titan's Wrath",
    description: "In a world where humanity is on the brink of extinction, giant titans roam the land. A young boy vows to exterminate them all after they destroy his hometown.",
    coverImageId: "anime-1",
    seasons: 4,
    episodes: 75,
    rating: 9.1,
    genres: ["Action", "Dark Fantasy", "Post-apocalyptic"],
    status: 'Completed'
  },
  {
    id: 2,
    title: "Mystic Academy",
    description: "A seemingly ordinary student discovers he possesses immense magical powers and is enrolled in a prestigious academy for mages.",
    coverImageId: "anime-2",
    seasons: 2,
    episodes: 24,
    rating: 8.5,
    genres: ["Fantasy", "School", "Magic"],
    status: 'Watching'
  },
  {
    id: 3,
    title: "CyberRonin",
    description: "In the neon-drenched streets of Neo-Kyoto, a lone cyborg samurai seeks revenge on the corporation that betrayed him.",
    coverImageId: "anime-3",
    seasons: 1,
    episodes: 12,
    rating: 8.8,
    genres: ["Cyberpunk", "Action", "Sci-Fi"],
    status: 'Plan to Watch'
  },
  {
    id: 4,
    title: "Galaxy Drifters",
    description: "A ragtag crew of space explorers travels the cosmos in search of ancient alien artifacts, evading galactic empires and rival treasure hunters.",
    coverImageId: "anime-4",
    seasons: 3,
    episodes: 50,
    rating: 8.2,
    genres: ["Space Opera", "Adventure", "Sci-Fi"],
    status: 'Watching'
  },
  {
    id: 5,
    title: "Slice of Life Cafe",
    description: "The heartwarming stories of the staff and patrons of a small, cozy cafe in a quiet neighborhood of Tokyo.",
    coverImageId: "anime-5",
    seasons: 2,
    episodes: 24,
    rating: 7.9,
    genres: ["Slice of Life", "Comedy"],
    status: 'Completed'
  },
  {
    id: 6,
    title: "The Last Summoner",
    description: "In a land where summoning magic is forbidden, a young girl discovers she is the last of her kind and must master her powers to save the world.",
    coverImageId: "anime-6",
    seasons: 1,
    episodes: 13,
    rating: 8.6,
    genres: ["Fantasy", "Magic", "Adventure"],
    status: 'Plan to Watch'
  },
  {
    id: 7,
    title: "Neon Tokyo",
    description: "Exploring the vibrant and often dangerous nightlife of a futuristic Tokyo through the eyes of a disillusioned detective.",
    coverImageId: "anime-7",
    seasons: 1,
    episodes: 10,
    rating: 8.1,
    genres: ["Mystery", "Cyberpunk", "Psychological"],
    status: 'On-Hold'
  },
  {
    id: 8,
    title: "Forest Spirit",
    description: "A girl raised by forest spirits must bridge the gap between the encroaching human world and the sacred woods she calls home.",
    coverImageId: "anime-8",
    seasons: 1,
    episodes: 12,
    rating: 8.9,
    genres: ["Fantasy", "Slice of Life", "Supernatural"],
    status: 'Completed'
  },
  {
    id: 9,
    title: "Mecha Warriors",
    description: "Teenage pilots must command giant robots to defend Earth from an alien invasion.",
    coverImageId: "anime-9",
    seasons: 5,
    episodes: 150,
    rating: 7.8,
    genres: ["Mecha", "Action", "Sci-Fi"],
    status: 'Dropped'
  },
  {
    id: 10,
    title: "Vampire Requiem",
    description: "A tragic love story between a human and a vampire, set against the backdrop of a centuries-old war between their species.",
    coverImageId: "anime-10",
    seasons: 2,
    episodes: 24,
    rating: 8.4,
    genres: ["Romance", "Supernatural", "Drama"],
    status: 'Watching'
  },
  {
    id: 11,
    title: "Detective K",
    description: "A brilliant but eccentric high school detective solves impossible cases while juggling school life.",
    coverImageId: "anime-11",
    seasons: 3,
    episodes: 36,
    rating: 8.7,
    genres: ["Mystery", "Comedy", "School"],
    status: 'Plan to Watch'
  },
  {
    id: 12,
    title: "Idol Stage",
    description: "A group of aspiring idols work together to achieve their dream of becoming top stars.",
    coverImageId: "anime-12",
    seasons: 2,
    episodes: 25,
    rating: 7.5,
    genres: ["Music", "Slice of Life"],
    status: 'Completed'
  },
  {
    id: 13,
    title: "Samurai's Path",
    description: "A wandering ronin in feudal Japan seeks redemption by protecting the innocent.",
    coverImageId: "anime-13",
    seasons: 1,
    episodes: 12,
    rating: 8.3,
    genres: ["Historical", "Action", "Samurai"],
    status: 'Watching'
  },
  {
    id: 14,
    title: "Gourmet Journey",
    description: "A young chef travels the world to discover rare ingredients and create the ultimate dish.",
    coverImageId: "anime-14",
    seasons: 2,
    episodes: 24,
    rating: 8.0,
    genres: ["Food", "Adventure"],
    status: 'Plan to Watch'
  },
  {
    id: 15,
    title: "Time Traveler's Diary",
    description: "A scientist invents a time machine and must fix the paradoxes he creates while exploring history.",
    coverImageId: "anime-15",
    seasons: 1,
    episodes: 13,
    rating: 8.8,
    genres: ["Sci-Fi", "Thriller"],
    status: 'Completed'
  },
  {
    id: 16,
    title: "Cursed Blade",
    description: "A warrior wields a sentient, demonic sword that grants immense power at a terrible cost.",
    coverImageId: "anime-16",
    seasons: 2,
    episodes: 24,
    rating: 9.0,
    genres: ["Dark Fantasy", "Action", "Supernatural"],
    status: 'Watching'
  },
  {
    id: 17,
    title: "Sports Dream",
    description: "An underdog high school basketball team aims for the national championship.",
    coverImageId: "anime-17",
    seasons: 3,
    episodes: 64,
    rating: 8.5,
    genres: ["Sports", "School", "Drama"],
    status: 'Completed'
  },
  {
    id: 18,
    title: "Kingdom of Ash",
    description: "A princess must reclaim her throne from a usurper with the help of a loyal knight.",
    coverImageId: "anime-18",
    seasons: 1,
    episodes: 12,
    rating: 7.9,
    genres: ["Fantasy", "Adventure", "Medieval"],
    status: 'On-Hold'
  },
  {
    id: 19,
    title: "Parallel World",
    description: "A group of friends is transported to a fantasy world and must find a way back home.",
    coverImageId: "anime-19",
    seasons: 1,
    episodes: 25,
    rating: 8.1,
    genres: ["Isekai", "Adventure", "Fantasy"],
    status: 'Plan to Watch'
  },
  {
    id: 20,
    title: "Silent Voice",
    description: "A former bully tries to make amends with the deaf girl he tormented in elementary school.",
    coverImageId: "anime-20",
    seasons: 1,
    episodes: 1,
    rating: 9.0,
    genres: ["Drama", "School", "Slice of Life"],
    status: 'Completed'
  },
  {
    id: 21,
    title: "Ghost Hunter",
    description: "A cynical college student who can see ghosts partners with a ghost girl to solve supernatural incidents.",
    coverImageId: "anime-21",
    seasons: 2,
    episodes: 24,
    rating: 8.4,
    genres: ["Supernatural", "Comedy", "Mystery"],
    status: 'Watching'
  },
  {
    id: 22,
    title: "The Alchemist's Secret",
    description: "Two brothers search for the Philosopher's Stone to restore their bodies after a failed alchemical experiment.",
    coverImageId: "anime-22",
    seasons: 1,
    episodes: 51,
    rating: 9.1,
    genres: ["Adventure", "Fantasy", "Action"],
    status: 'Completed'
  },
  {
    id: 23,
    title: "Ocean's Lullaby",
    description: "The story of a friendship between a human girl and a mermaid, exploring the beauty and dangers of the sea.",
    coverImageId: "anime-23",
    seasons: 1,
    episodes: 12,
    rating: 8.2,
    genres: ["Fantasy", "Slice of Life"],
    status: 'Plan to Watch'
  },
  {
    id: 24,
    title: "Code Zero",
    description: "A team of hackers fights against a corrupt global surveillance system.",
    coverImageId: "anime-24",
    seasons: 2,
    episodes: 22,
    rating: 8.6,
    genres: ["Thriller", "Sci-Fi", "Action"],
    status: 'Watching'
  },
  {
    id: 25,
    title: "Love in Spring",
    description: "A shy high school girl falls in love with the popular boy in her class, leading to a sweet and awkward romance.",
    coverImageId: "anime-25",
    seasons: 2,
    episodes: 24,
    rating: 7.8,
    genres: ["Romance", "Comedy", "School"],
    status: 'Completed'
  },
  {
    id: 26,
    title: "War Chronicles",
    description: "A historical epic depicting a brutal war from the perspective of two soldiers on opposing sides.",
    coverImageId: "anime-26",
    seasons: 1,
    episodes: 13,
    rating: 8.9,
    genres: ["Military", "Historical", "Drama"],
    status: 'Plan to Watch'
  },
  {
    id: 27,
    title: "Pet Friends",
    description: "A heartwarming comedy about a veterinarian and the quirky pets and owners she encounters.",
    coverImageId: "anime-27",
    seasons: 3,
    episodes: 36,
    rating: 7.6,
    genres: ["Comedy", "Slice of Life"],
    status: 'On-Hold'
  },
  {
    id: 28,
    title: "Dragon's Peak",
    description: "A young dragon tamer must prove his worth to his clan by climbing the treacherous Dragon's Peak.",
    coverImageId: "anime-28",
    seasons: 1,
    episodes: 12,
    rating: 8.3,
    genres: ["Fantasy", "Adventure"],
    status: 'Watching'
  },
  {
    id: 29,
    title: "Sky Pirates",
    description: "In a world of floating islands and airships, a young girl joins a crew of sky pirates to find her long-lost father.",
    coverImageId: "anime-29",
    seasons: 2,
    episodes: 26,
    rating: 8.5,
    genres: ["Steampunk", "Adventure", "Fantasy"],
    status: 'Completed'
  },
  {
    id: 30,
    title: "Ninja Scroll Redux",
    description: "A masterless ninja wanders a war-torn land, battling demons and corrupt lords.",
    coverImageId: "anime-30",
    seasons: 1,
    episodes: 13,
    rating: 8.7,
    genres: ["Action", "Adventure", "Historical"],
    status: 'Plan to Watch'
  }
];

export const trendingAnime = allAnime.slice(0, 6);
