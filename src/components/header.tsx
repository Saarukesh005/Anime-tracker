import Link from 'next/link';
import { Logo } from './logo';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { Flame, ListVideo, Sparkles, Image as ImageIcon } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Home', icon: Flame },
  { href: '/watchlist', label: 'Watchlist', icon: ListVideo },
  { href: '/recommendations', label: 'AI Recs', icon: Sparkles },
  { href: '/image-generator', label: 'Image Gen', icon: ImageIcon },
];

export function Header() {
  // In a real app, this would come from a usePathname hook
  const pathname = '/';

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo />
            <span className="font-bold font-headline">AnimeVerse</span>
          </Link>
        </div>
        <nav className="flex items-center gap-4 text-sm lg:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'transition-colors hover:text-foreground/80 flex items-center gap-2',
                pathname === item.href ? 'text-foreground' : 'text-foreground/60'
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
           <Button asChild variant="ghost">
              <Link href="/login">Log In</Link>
            </Button>
            <Button asChild className="neon-glow-primary">
              <Link href="/signup">Sign Up</Link>
            </Button>
        </div>
      </div>
    </header>
  );
}
