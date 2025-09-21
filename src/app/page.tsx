import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { placeholderImages } from '@/lib/placeholder-images.json';
import { Card, CardContent } from '@/components/ui/card';

export default function GetStartedPage() {
  const famousAnimeImage = placeholderImages.find(p => p.id === "hero-banner-1")!;

  return (
     <div className="space-y-12">
      <section className="relative w-full h-[60vh] rounded-xl overflow-hidden shadow-2xl flex items-center justify-center text-center">
        <Image
          src={famousAnimeImage.imageUrl}
          alt={famousAnimeImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={famousAnimeImage.imageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="relative z-10 p-8 text-white">
          <h1 className="text-4xl md:text-6xl font-headline font-bold drop-shadow-lg">
            Welcome to AnimeVerse
          </h1>
          <p className="mt-4 text-lg max-w-2xl drop-shadow-md">
            Your vibrant world to track, discuss, and discover anime.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild className="neon-glow-primary" size="lg">
              <Link href="/login">Log In</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      </section>

       <section className="text-center">
        <h2 className="text-3xl font-headline font-semibold mb-6">How it works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold font-headline mb-2">Track Your Anime</h3>
              <p className="text-muted-foreground">Keep a record of every series you've watched, are currently watching, or plan to watch in the future.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold font-headline mb-2">Get AI Recommendations</h3>
              <p className="text-muted-foreground">Our smart AI suggests new anime based on your unique taste and viewing history.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold font-headline mb-2">Join the Community</h3>
              <p className="text-muted-foreground">Discuss your favorite shows, share reviews, and connect with other anime fans from around the world.</p>
            </CardContent>
          </Card>
        </div>
      </section>

    </div>
  );
}
