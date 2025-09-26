import type { Anime, Season, Episode } from './types';

// Helper function to generate mock seasons and episodes
const generateSeasons = (numSeasons: number, totalEpisodes: number): Season[] => {
  const seasons: Season[] = [];
  let episodeCount = 0;
  // Avoid division by zero
  if (numSeasons === 0) return seasons;
  const episodesPerSeason = Math.ceil(totalEpisodes / numSeasons);

  for (let i = 1; i <= numSeasons; i++) {
    const episodes: Episode[] = [];
    const seasonEpisodeCount = (i === numSeasons) ? (totalEpisodes - episodeCount) : episodesPerSeason;
    
    for (let j = 1; j <= seasonEpisodeCount; j++) {
       episodeCount++;
      episodes.push({
        id: episodeCount,
        title: `Episode ${j}`,
        watched: false,
      });
    }
    seasons.push({ seasonNumber: i, episodes });
  }
  return seasons;
};


export const allAnime: Anime[] = [
  // Anime Series
  {
    id: 1,
    title: "Naruto",
    description: "A young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.",
    coverImageId: "anime-naruto",
    seasons: generateSeasons(9, 220),
    totalEpisodes: 220,
    rating: 8.4,
    genres: ["Action", "Adventure", "Fantasy"],
    status: 'Completed',
    type: 'Anime'
  },
  {
    id: 2,
    title: "Naruto Shippuden",
    description: "Follows Naruto Uzumaki, a powerful ninja, in his quest to save his friend Sasuke Uchiha from the grips of the snake-like Shinobi, Orochimaru.",
    coverImageId: "anime-naruto-shippuden",
    seasons: generateSeasons(21, 500),
    totalEpisodes: 500,
    rating: 8.7,
    genres: ["Action", "Adventure", "Fantasy"],
    status: 'Completed',
    type: 'Anime'
  },
  {
    id: 3,
    title: "Boruto: Naruto Next Generations",
    description: "The adventures of Naruto Uzumaki's son, Boruto Uzumaki, and his friends during their time at the ninja academy.",
    coverImageId: "anime-boruto",
    seasons: generateSeasons(1, 293),
    totalEpisodes: 293,
    rating: 6.8,
    genres: ["Action", "Adventure", "Fantasy"],
    status: 'Watching',
    type: 'Anime'
  },
  {
    id: 4,
    title: "Dragon Ball Z",
    description: "The adventures of the powerful Saiyan Son Goku, who, along with his companions, defends the Earth against an assortment of villains.",
    coverImageId: "anime-dbz",
    seasons: generateSeasons(9, 291),
    totalEpisodes: 291,
    rating: 8.8,
    genres: ["Action", "Adventure", "Fantasy"],
    status: 'Completed',
    type: 'Anime'
  },
  {
    id: 5,
    title: "Dragon Ball Super",
    description: "Years after the defeat of Majin Buu, Son Goku and his friends have to face new, far more powerful threats to the universe.",
    coverImageId: "anime-dbs",
    seasons: generateSeasons(5, 131),
    totalEpisodes: 131,
    rating: 8.4,
    genres: ["Action", "Adventure", "Fantasy"],
    status: 'Watching',
    type: 'Anime'
  },
  {
    id: 6,
    title: "One Piece",
    description: "Follows the adventures of Monkey D. Luffy and his pirate crew in order to find the greatest treasure ever left by the legendary Pirate, Gold Roger.",
    coverImageId: "anime-one-piece",
    seasons: generateSeasons(20, 1076),
    totalEpisodes: 1076,
    rating: 8.9,
    genres: ["Action", "Adventure", "Fantasy"],
    status: 'Watching',
    type: 'Anime'
  },
  {
    id: 7,
    title: "Bleach",
    description: "High school student Ichigo Kurosaki, who has the ability to see ghosts, obtains the powers of a Soul Reaper and takes on the duty of defending humans from evil spirits.",
    coverImageId: "anime-bleach",
    seasons: generateSeasons(16, 366),
    totalEpisodes: 366,
    rating: 8.2,
    genres: ["Action", "Supernatural", "Adventure"],
    status: 'Completed',
    type: 'Anime'
  },
  {
    id: 8,
    title: "Demon Slayer: Kimetsu no Yaiba",
    description: "A young boy becomes a demon slayer after his family is slaughtered and his younger sister is turned into a demon.",
    coverImageId: "anime-demon-slayer",
    seasons: generateSeasons(3, 44),
    totalEpisodes: 44,
    rating: 8.7,
    genres: ["Action", "Dark Fantasy", "Supernatural"],
    status: 'Watching',
    type: 'Anime'
  },
  {
    id: 9,
    title: "Jujutsu Kaisen",
    description: "A boy swallows a cursed talisman - the finger of a demon - and becomes cursed himself. He enters a shaman's school to be able to locate the demon's other body parts and thus exorcise himself.",
    coverImageId: "anime-jujutsu-kaisen",
    seasons: generateSeasons(2, 47),
    totalEpisodes: 47,
    rating: 8.7,
    genres: ["Action", "Dark Fantasy", "Supernatural"],
    status: 'Watching',
    type: 'Anime'
  },
  {
    id: 10,
    title: "Attack on Titan (Shingeki no Kyojin)",
    description: "In a world where humanity resides within enormous walls that protect them from gigantic man-eating humanoids known as Titans, a young boy vows to exterminate the Titans after they breach the walls and bring tragedy to his hometown.",
    coverImageId: "anime-aot",
    seasons: generateSeasons(4, 88),
    totalEpisodes: 88,
    rating: 9.1,
    genres: ["Action", "Dark Fantasy", "Post-apocalyptic"],
    status: 'Completed',
    type: 'Anime'
  },
  {
    id: 11,
    title: "My Hero Academia",
    description: "In a world where people with superpowers are the norm, a boy without them is determined to enroll in a prestigious hero academy and learn what it really means to be a hero.",
    coverImageId: "anime-mha",
    seasons: generateSeasons(6, 138),
    totalEpisodes: 138,
    rating: 8.4,
    genres: ["Action", "Superhero", "Comedy"],
    status: 'Watching',
    type: 'Anime'
  },
  {
    id: 12,
    title: "Fullmetal Alchemist: Brotherhood",
    description: "Two brothers search for the Philosopher's Stone after an attempt to revive their deceased mother goes awry and leaves them in damaged physical forms.",
    coverImageId: "anime-fmab",
    seasons: generateSeasons(1, 64),
    totalEpisodes: 64,
    rating: 9.1,
    genres: ["Action", "Adventure", "Steampunk"],
    status: 'Completed',
    type: 'Anime'
  },
  {
    id: 13,
    title: "Death Note",
    description: "An intelligent high school student goes on a secret crusade to eliminate criminals from the world after discovering a notebook that can kill anyone whose name is written in it.",
    coverImageId: "anime-death-note",
    seasons: generateSeasons(1, 37),
    totalEpisodes: 37,
    rating: 8.6,
    genres: ["Mystery", "Psychological", "Thriller"],
    status: 'Completed',
    type: 'Anime'
  },
  {
    id: 14,
    title: "Hunter x Hunter",
    description: "Gon Freecss aspires to become a Hunter, an exceptional being capable of greatness. With his friends and his potential, he seeks for his father who left him when he was younger.",
    coverImageId: "anime-hxh",
    seasons: generateSeasons(6, 148),
    totalEpisodes: 148,
    rating: 9.0,
    genres: ["Action", "Adventure", "Fantasy"],
    status: 'Completed',
    type: 'Anime'
  },
  {
    id: 15,
    title: "Sword Art Online",
    description: "In the near future, a Virtual Reality Massive Multiplayer Online Role-Playing Game (VRMMORPG) called Sword Art Online is released where players control their avatars with their bodies using a piece of technology called Nerve Gear.",
    coverImageId: "anime-sao",
    seasons: generateSeasons(4, 96),
    totalEpisodes: 96,
    rating: 7.2,
    genres: ["Action", "Adventure", "Romance"],
    status: 'Plan to Watch',
    type: 'Anime'
  },
  {
    id: 16,
    title: "Fairy Tail",
    description: "Lucy, a 17-year-old girl, sets out on a journey to become a full-fledged wizard and joins the strongest and most famous guild in the world, 'Fairy Tail'.",
    coverImageId: "anime-fairy-tail",
    seasons: generateSeasons(9, 328),
    totalEpisodes: 328,
    rating: 7.6,
    genres: ["Action", "Adventure", "Fantasy"],
    status: 'Plan to Watch',
    type: 'Anime'
  },
  {
    id: 17,
    title: "Tokyo Ghoul",
    description: "A Tokyo college student is attacked by a ghoul, a superpowered human who feeds on human flesh. He survives, but has become part ghoul and becomes a fugitive on the run.",
    coverImageId: "anime-tokyo-ghoul",
    seasons: generateSeasons(4, 48),
    totalEpisodes: 48,
    rating: 7.8,
    genres: ["Action", "Dark Fantasy", "Horror"],
    status: 'Dropped',
    type: 'Anime'
  },
  {
    id: 18,
    title: "Black Clover",
    description: "Asta and Yuno were abandoned together at the same church and have been inseparable since. As children, they promised that they would compete against each other to see who would become the next Emperor Magus.",
    coverImageId: "anime-black-clover",
    seasons: generateSeasons(4, 170),
    totalEpisodes: 170,
    rating: 8.1,
    genres: ["Action", "Fantasy", "Comedy"],
    status: 'On-Hold',
    type: 'Anime'
  },
  {
    id: 19,
    title: "Blue Exorcist (Ao no Exorcist)",
    description: "A teenager discovers he is the son of Satan and is determined to become an exorcist in order to defeat his own father.",
    coverImageId: "anime-blue-exorcist",
    seasons: generateSeasons(2, 37),
    totalEpisodes: 37,
    rating: 7.5,
    genres: ["Action", "Supernatural", "Fantasy"],
    status: 'Plan to Watch',
    type: 'Anime'
  },
  {
    id: 20,
    title: "Code Geass: Lelouch of the Rebellion",
    description: "After being given a mysterious power to control others, an exiled prince leads a rebellion against a tyrannical empire.",
    coverImageId: "anime-code-geass",
    seasons: generateSeasons(2, 50),
    totalEpisodes: 50,
    rating: 8.7,
    genres: ["Action", "Mecha", "Military"],
    status: 'Completed',
    type: 'Anime'
  },
  {
    id: 21,
    title: "Steins;Gate",
    description: "A group of friends have customized their microwave into a device that can send text messages to the past.",
    coverImageId: "anime-steins-gate",
    seasons: generateSeasons(1, 24),
    totalEpisodes: 24,
    rating: 9.1,
    genres: ["Sci-Fi", "Thriller", "Psychological"],
    status: 'Completed',
    type: 'Anime'
  },
  {
    id: 22,
    title: "Neon Genesis Evangelion",
    description: "A teenage boy finds himself recruited as a member of an elite team of pilots who control giant bio-machines in a battle against giant alien beings.",
    coverImageId: "anime-evangelion",
    seasons: generateSeasons(1, 26),
    totalEpisodes: 26,
    rating: 8.5,
    genres: ["Mecha", "Psychological", "Sci-Fi"],
    status: 'Completed',
    type: 'Anime'
  },
  {
    id: 23,
    title: "Re:Zero − Starting Life in Another World",
    description: "Natsuki Subaru, an ordinary high school student, is on his way home from the convenience store when he finds himself transported to another world.",
    coverImageId: "anime-rezero",
    seasons: generateSeasons(2, 50),
    totalEpisodes: 50,
    rating: 8.2,
    genres: ["Isekai", "Fantasy", "Thriller"],
    status: 'Plan to Watch',
    type: 'Anime'
  },
  {
    id: 24,
    title: "Konosuba: God’s Blessing on This Wonderful World!",
    description: "After a traffic accident, Kazuma Sato's disappointingly brief life was supposed to be over, but he wakes up to see a beautiful girl before him. She claims to be a goddess, Aqua, and asks if he would like to go to another world.",
    coverImageId: "anime-konosuba",
    seasons: generateSeasons(2, 20),
    totalEpisodes: 20,
    rating: 8.1,
    genres: ["Comedy", "Fantasy", "Isekai"],
    status: 'Completed',
    type: 'Anime'
  },
  {
    id: 25,
    title: "The Rising of the Shield Hero",
    description: "Naofumi Iwatani, an uncharismatic otaku who spends his days on games and manga, suddenly finds himself summoned to a parallel universe.",
    coverImageId: "anime-shield-hero",
    seasons: generateSeasons(2, 38),
    totalEpisodes: 38,
    rating: 7.8,
    genres: ["Isekai", "Fantasy", "Action"],
    status: 'Watching',
    type: 'Anime'
  },
  {
    id: 26,
    title: "Vinland Saga",
    description: "A young boy named Thorfinn finds himself in a quest for revenge against his father's killer.",
    coverImageId: "anime-vinland-saga",
    seasons: generateSeasons(2, 48),
    totalEpisodes: 48,
    rating: 8.8,
    genres: ["Historical", "Action", "Adventure"],
    status: 'Watching',
    type: 'Anime'
  },
  {
    id: 27,
    title: "Solo Leveling",
    description: "In a world where hunters must battle deadly monsters to protect humanity, a notoriously weak hunter gains a new lease on life when a mysterious program grants him the power to level up without limit.",
    coverImageId: "anime-solo-leveling",
    seasons: generateSeasons(1, 12),
    totalEpisodes: 12,
    rating: 8.6,
    genres: ["Action", "Fantasy", "Adventure"],
    status: 'Watching',
    type: 'Anime'
  },
  {
    id: 28,
    title: "Chainsaw Man",
    description: "Following a betrayal, a young man left for dead is reborn as a powerful devil-human hybrid.",
    coverImageId: "anime-chainsaw-man",
    seasons: generateSeasons(1, 12),
    totalEpisodes: 12,
    rating: 8.6,
    genres: ["Action", "Dark Fantasy", "Supernatural"],
    status: 'Watching',
    type: 'Anime'
  },
  {
    id: 29,
    title: "Spy x Family",
    description: "A spy on an undercover mission gets married and adopts a child as part of his cover. His wife and daughter have secrets of their own, and all three must strive to keep together.",
    coverImageId: "anime-spy-family",
    seasons: generateSeasons(2, 37),
    totalEpisodes: 37,
    rating: 8.6,
    genres: ["Comedy", "Action", "Slice of Life"],
    status: 'Completed',
    type: 'Anime'
  },
  {
    id: 30,
    title: "Dr. Stone",
    description: "Several thousand years after a mysterious phenomenon that turns all of humanity to stone, the extraordinarily intelligent, science-driven boy, Senku Ishigami, awakens.",
    coverImageId: "anime-dr-stone",
    seasons: generateSeasons(3, 46),
    totalEpisodes: 46,
    rating: 8.3,
    genres: ["Adventure", "Sci-Fi", "Comedy"],
    status: 'Watching',
    type: 'Anime'
  },
  {
    id: 31,
    title: "The Seven Deadly Sins",
    description: "The feared but revered Holy Knights of Britannia use immensely powerful magic to protect the region of Britannia and its kingdoms. However, a small subset of the Knights supposedly betrayed their homeland and turned their blades against their comrades in an attempt to overthrow the ruler of Liones.",
    coverImageId: "anime-seven-sins",
    seasons: generateSeasons(5, 100),
    totalEpisodes: 100,
    rating: 7.7,
    genres: ["Action", "Adventure", "Fantasy"],
    status: 'Plan to Watch',
    type: 'Anime'
  },
  {
    id: 32,
    title: "Fire Force (En’en no Shōbōtai)",
    description: "In a world where humanity is beset by the terrifying phenomenon of spontaneous human combustion, a new fire brigade, the Fire Force, is formed to combat this threat.",
    coverImageId: "anime-fire-force",
    seasons: generateSeasons(2, 48),
    totalEpisodes: 48,
    rating: 7.6,
    genres: ["Action", "Supernatural", "Sci-Fi"],
    status: 'Plan to Watch',
    type: 'Anime'
  },
  // TV Series
  {
    id: 33,
    title: "Game of Thrones",
    description: "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
    coverImageId: "tv-got",
    seasons: generateSeasons(8, 73),
    totalEpisodes: 73,
    rating: 9.2,
    genres: ["Fantasy", "Drama", "Action"],
    status: 'Completed',
    type: 'TV Series'
  },
  {
    id: 34,
    title: "House of the Dragon",
    description: "The story of the Targaryen civil war that took place about 200 years before the events of Game of Thrones.",
    coverImageId: "tv-hotd",
    seasons: generateSeasons(1, 10),
    totalEpisodes: 10,
    rating: 8.5,
    genres: ["Fantasy", "Drama", "Action"],
    status: 'Watching',
    type: 'TV Series'
  },
  {
    id: 35,
    title: "Stranger Things",
    description: "When a young boy disappears, his mother, a police chief, and his friends must confront terrifying supernatural forces in order to get him back.",
    coverImageId: "tv-stranger-things",
    seasons: generateSeasons(4, 34),
    totalEpisodes: 34,
    rating: 8.7,
    genres: ["Sci-Fi", "Horror", "Drama"],
    status: 'Watching',
    type: 'TV Series'
  },
  {
    id: 36,
    title: "The Witcher",
    description: "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
    coverImageId: "tv-witcher",
    seasons: generateSeasons(2, 16),
    totalEpisodes: 16,
    rating: 8.2,
    genres: ["Fantasy", "Action", "Adventure"],
    status: 'Plan to Watch',
    type: 'TV Series'
  },
  {
    id: 37,
    title: "Money Heist (La Casa de Papel)",
    description: "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.",
    coverImageId: "tv-money-heist",
    seasons: generateSeasons(5, 41),
    totalEpisodes: 41,
    rating: 8.2,
    genres: ["Crime", "Thriller", "Drama"],
    status: 'Completed',
    type: 'TV Series'
  },
  {
    id: 38,
    title: "Breaking Bad",
    description: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
    coverImageId: "tv-breaking-bad",
    seasons: generateSeasons(5, 62),
    totalEpisodes: 62,
    rating: 9.5,
    genres: ["Crime", "Drama", "Thriller"],
    status: 'Completed',
    type: 'TV Series'
  },
  {
    id: 39,
    title: "Better Call Saul",
    description: "The trials and tribulations of criminal lawyer Jimmy McGill in the time before he established his strip-mall law office in Albuquerque, New Mexico.",
    coverImageId: "tv-better-call-saul",
    seasons: generateSeasons(6, 63),
    totalEpisodes: 63,
    rating: 8.9,
    genres: ["Crime", "Drama"],
    status: 'Completed',
    type: 'TV Series'
  },
  {
    id: 40,
    title: "The Boys",
    description: "A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers.",
    coverImageId: "tv-the-boys",
    seasons: generateSeasons(3, 24),
    totalEpisodes: 24,
    rating: 8.7,
    genres: ["Action", "Comedy", "Crime"],
    status: 'Watching',
    type: 'TV Series'
  },
  {
    id: 41,
    title: "The Umbrella Academy",
    description: "A family of former child heroes, now grown apart, must reunite to continue to protect the world.",
    coverImageId: "tv-umbrella-academy",
    seasons: generateSeasons(3, 30),
    totalEpisodes: 30,
    rating: 7.9,
    genres: ["Action", "Adventure", "Comedy"],
    status: 'Watching',
    type: 'TV Series'
  },
  {
    id: 42,
    title: "Loki",
    description: "The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of “Avengers: Endgame.”",
    coverImageId: "tv-loki",
    seasons: generateSeasons(2, 12),
    totalEpisodes: 12,
    rating: 8.2,
    genres: ["Action", "Adventure", "Fantasy"],
    status: 'Watching',
    type: 'TV Series'
  },
  {
    id: 43,
    title: "Moon Knight",
    description: "A former U.S. Marine, struggling with dissociative identity disorder, is granted the powers of an Egyptian moon god.",
    coverImageId: "tv-moon-knight",
    seasons: generateSeasons(1, 6),
    totalEpisodes: 6,
    rating: 7.3,
    genres: ["Action", "Adventure", "Drama"],
    status: 'Completed',
    type: 'TV Series'
  },
  {
    id: 44,
    title: "WandaVision",
    description: "Blends the style of classic sitcoms with the MCU, in which Wanda Maximoff and Vision - two super-powered beings living their ideal suburban lives - begin to suspect that everything is not as it seems.",
    coverImageId: "tv-wandavision",
    seasons: generateSeasons(1, 9),
    totalEpisodes: 9,
    rating: 7.9,
    genres: ["Drama", "Fantasy", "Sci-Fi"],
    status: 'Completed',
    type: 'TV Series'
  },
  {
    id: 45,
    title: "Daredevil",
    description: "A blind lawyer by day, vigilante by night. Matt Murdock fights the crime of New York as Daredevil.",
    coverImageId: "tv-daredevil",
    seasons: generateSeasons(3, 39),
    totalEpisodes: 39,
    rating: 8.6,
    genres: ["Action", "Crime", "Drama"],
    status: 'Completed',
    type: 'TV Series'
  },
  {
    id: 46,
    title: "Arrow",
    description: "Spoiled billionaire playboy Oliver Queen is presumed dead when his yacht is lost at sea. He returns five years later a changed man, determined to clean up the city as a hooded vigilante armed with a bow.",
    coverImageId: "tv-arrow",
    seasons: generateSeasons(8, 170),
    totalEpisodes: 170,
    rating: 7.5,
    genres: ["Action", "Adventure", "Crime"],
    status: 'Completed',
    type: 'TV Series'
  },
  {
    id: 47,
    title: "The Flash",
    description: "After being struck by lightning, Barry Allen wakes up from his coma to discover he's been given the power of super speed, becoming the Flash, fighting crime in Central City.",
    coverImageId: "tv-the-flash",
    seasons: generateSeasons(9, 184),
    totalEpisodes: 184,
    rating: 7.6,
    genres: ["Action", "Adventure", "Drama"],
    status: 'Watching',
    type: 'TV Series'
  },
  {
    id: 48,
    title: "Supernatural",
    description: "Two brothers follow their father's footsteps as hunters, fighting evil supernatural beings of many kinds, including monsters, demons, and gods that roam the earth.",
    coverImageId: "tv-supernatural",
    seasons: generateSeasons(15, 327),
    totalEpisodes: 327,
    rating: 8.4,
    genres: ["Drama", "Fantasy", "Horror"],
    status: 'Completed',
    type: 'TV Series'
  },
  {
    id: 49,
    title: "The Walking Dead",
    description: "Sheriff Deputy Rick Grimes wakes up from a coma to learn the world is in ruins and must lead a group of survivors to stay alive.",
    coverImageId: "tv-walking-dead",
    seasons: generateSeasons(11, 177),
    totalEpisodes: 177,
    rating: 8.1,
    genres: ["Drama", "Horror", "Thriller"],
    status: 'Completed',
    type: 'TV Series'
  },
  {
    id: 50,
    title: "Peaky Blinders",
    description: "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
    coverImageId: "tv-peaky-blinders",
    seasons: generateSeasons(6, 36),
    totalEpisodes: 36,
    rating: 8.8,
    genres: ["Crime", "Drama"],
    status: 'Completed',
    type: 'TV Series'
  },
  {
    id: 51,
    title: "Prison Break",
    description: "A structural engineer installs himself in a prison he helped design, in order to save his falsely accused brother from a death sentence.",
    coverImageId: "tv-prison-break",
    seasons: generateSeasons(5, 90),
    totalEpisodes: 90,
    rating: 8.3,
    genres: ["Action", "Crime", "Drama"],
    status: 'Completed',
    type: 'TV Series'
  },
  {
    id: 52,
    title: "Dark",
    description: "A family saga with a supernatural twist, set in a German town where the disappearance of two young children exposes the relationships among four families.",
    coverImageId: "tv-dark",
    seasons: generateSeasons(3, 26),
    totalEpisodes: 26,
    rating: 8.7,
    genres: ["Crime", "Drama", "Mystery"],
    status: 'Completed',
    type: 'TV Series'
  }
];

export const trendingAnime = allAnime.filter(item => item.type === 'Anime').slice(0, 6);
