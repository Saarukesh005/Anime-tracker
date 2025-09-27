
import AuthForm from '@/components/auth-form';
import { Button } from '@/components/ui/button';
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { getPlaceholderImage } from '@/lib/placeholder-images';
import Link from 'next/link';
import { login } from '@/lib/auth';
import { redirect } from 'next/navigation';

export async function loginAction(formData: FormData) {
  'use server';
  const username = formData.get('username') as string;
  const result = await login(username);
  
  if (result.success) {
    redirect('/dashboard');
  } else {
    // In a real app, we would handle the error message here.
    // For now, we simply don't redirect, and the user can try again.
  }
}

export default async function LoginPage() {
  const authImage = await getPlaceholderImage('auth-background');

  return (
    <AuthForm authImage={authImage}>
      <form action={loginAction}>
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-headline">Welcome Back!</CardTitle>
          <CardDescription>Enter your credentials to log in.</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input 
              id="username" 
              name="username" 
              placeholder="Your username" 
              required 
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="********"
              defaultValue="password"
              required
            />
             <p className="text-xs text-muted-foreground">Hint: Any password will work for this demo.</p>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-4">
          <Button type="submit" className="w-full neon-glow-primary">
            Log In
          </Button>
          <div className="text-sm text-center text-muted-foreground">
            <Link href="/forgot-password">
              <span className="underline hover:text-primary">Forgot password?</span>
            </Link>
            {' | '}
            <Link href="/signup">
              <span className="underline hover:text-primary">Don&apos;t have an account?</span>
            </Link>
          </div>
        </CardFooter>
      </form>
    </AuthForm>
  );
}
