import AuthForm from '@/components/auth-form';
import { Button } from '@/components/ui/button';
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { getPlaceholderImage } from '@/lib/placeholder-images';
import Link from 'next/link';
import { login } from '@/lib/auth';
import { redirect } from 'next/navigation';

async function loginAction(formData: FormData) {
  'use server';
  const username = formData.get('username') as string;
  
  if (!username) {
    // In a real app, you'd handle this more gracefully
    console.error('Username is required');
    return;
  }
  
  const success = await login(username);
  
  if (success) {
    redirect('/dashboard');
  } else {
    // Redirect back to login with an error query param
    // In a real app, you would show a toast or error message
    redirect('/login?error=InvalidCredentials');
  }
}

export default async function LoginPage() {
  const authImage = await getPlaceholderImage('auth-background');

  return (
    <AuthForm authImage={authImage}>
      <form action={loginAction}>
        <CardHeader className="text-center">
          <CardTitle>Welcome Back!</CardTitle>
          <CardDescription>Enter your credentials to access your watchlist.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" name="username" placeholder="your_username" defaultValue="AnimeFan_22" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" placeholder="********" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button type="submit" className="w-full neon-glow-primary">Log In</Button>
          <div className="text-sm text-center text-muted-foreground">
            <Link href="/forgot-password" passHref>
              <span className="underline hover:text-primary">Forgot password?</span>
            </Link>
            {' | '}
            <Link href="/signup" passHref>
              <span className="underline hover:text-primary">Don&apos;t have an account?</span>
            </Link>
          </div>
        </CardFooter>
      </form>
    </AuthForm>
  );
}
