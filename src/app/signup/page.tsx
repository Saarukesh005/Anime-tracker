import AuthForm from '@/components/auth-form';
import { Button } from '@/components/ui/button';
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { getPlaceholderImage } from '@/lib/placeholder-images';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function SignupPage() {
  const handleSubmit = async () => {
    'use server';
    redirect('/dashboard');
  };

  const authImage = await getPlaceholderImage('auth-background');

  return (
    <AuthForm authImage={authImage}>
      <form action={handleSubmit}>
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-headline">Join the Anime World!</CardTitle>
          <CardDescription>Create an account to start tracking your favorite series.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="you@example.com" type="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" placeholder="your_username" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="********" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button type="submit" className="w-full neon-glow-primary">Create Account</Button>
          <div className="text-sm text-center text-muted-foreground">
            <Link href="/login" passHref>
              <span className="underline hover:text-primary">Already have an account? Log In</span>
            </Link>
          </div>
        </CardFooter>
      </form>
    </AuthForm>
  );
}
