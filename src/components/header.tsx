
import Link from 'next/link';
import { Logo } from './logo';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { Flame, ListVideo, Sparkles, Image as ImageIcon, LineChart, ShieldCheck } from 'lucide-react';
import AnimeSearch from './anime-search';
import { UserNav } from './user-nav';
import { getAuth } from '@/lib/auth';
import { ModeToggle } from './mode-toggle';

const navItems = [
  { href: '/dashboard', label: 'Home', icon: Flame },
  { href: '/watchlist', label: 'Watchlist', icon: ListVideo },
  { href: '/recommendations', label: 'AI Recs', icon: Sparkles },
  { href: '/image-generator', label: 'Image Gen', icon: ImageIcon },
  { href: '/analytics', label: 'Analytics', icon: LineChart },
  { href: '/admin', label: 'Admin', icon: ShieldCheck, adminOnly: true },
];

export async function Header() {
  const user = await getAuth();
  // In a real app, this would come from a usePathname hook on the client
  const pathname = '/dashboard';

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href={user ? "/dashboard" : "/"} className="mr-6 flex items-center space-x-2">
            <Logo />
            <span className="font-bold font-headline">AnimeVerse</span>
          </Link>
          {user && (
            <nav className="hidden md:flex items-center gap-4 text-sm lg:gap-6">
              {navItems.map((item) => {
                // Simplified admin check since role is removed
                if (item.adminOnly) {
                  return null;
                }
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'transition-colors hover:text-foreground/80 flex items-center gap-2 font-medium',
                      pathname === item.href ? 'text-foreground' : 'text-foreground/60'
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          )}
        </div>
        
        <div className="flex flex-1 items-center justify-end space-x-4">
           <div className="w-full flex-1 md:w-auto md:flex-none">
              <AnimeSearch />
            </div>
            <ModeToggle />
           {user ? (
            <UserNav user={user} />
           ) : (
            <div className='hidden md:flex items-center gap-4'>
              <Button asChild variant="ghost">
                <Link href="/login" className="font-bold">Log In</Link>
              </Button>
              <Button asChild className="neon-glow-primary">
                <Link href="/signup" className="font-bold">Sign Up</Link>
              </Button>
            </div>
           )}
        </div>
      </div>
    </header>
  );
}
