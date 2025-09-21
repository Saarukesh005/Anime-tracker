import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { allAnime } from "@/lib/anime";
import AnimeCard from "@/components/anime-card";
import type { Anime } from "@/lib/types";

const WatchlistGrid = ({ status }: { status: Anime['status'] }) => {
  const filteredAnime = allAnime.filter(a => a.status === status);
  if (filteredAnime.length === 0) {
    return <p className="text-muted-foreground text-center py-8">No anime in this list yet!</p>
  }
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {filteredAnime.map(anime => (
        <AnimeCard key={anime.id} anime={anime} />
      ))}
    </div>
  );
};

export default function WatchlistPage() {
  return (
    <div>
      <h1 className="text-4xl font-headline font-bold mb-8">My Watchlist</h1>
      <Tabs defaultValue="watching" className="w-full">
        <TabsList className="grid w-full grid-cols-5 mb-6">
          <TabsTrigger value="watching">Watching</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="on-hold">On-Hold</TabsTrigger>
          <TabsTrigger value="dropped">Dropped</TabsTrigger>
          <TabsTrigger value="plan-to-watch">Plan to Watch</TabsTrigger>
        </TabsList>
        <TabsContent value="watching">
          <WatchlistGrid status="Watching" />
        </TabsContent>
        <TabsContent value="completed">
          <WatchlistGrid status="Completed" />
        </TabsContent>
        <TabsContent value="on-hold">
          <WatchlistGrid status="On-Hold" />
        </TabsContent>
        <TabsContent value="dropped">
          <WatchlistGrid status="Dropped" />
        </TabsContent>
        <TabsContent value="plan-to-watch">
          <WatchlistGrid status="Plan to Watch" />
        </TabsContent>
      </Tabs>
    </div>
  );
}
