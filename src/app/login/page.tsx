
import { Button } from '@/components/ui/button';
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { login } from '@/lib/auth';
import { redirect } from 'next/navigation';
import AuthForm from '@/components/auth-form';
import { getPlaceholderImage } from '@/lib/placeholder-images';

export async function loginAction(formData: FormData) {
  'use server';
  const email = formData.get('email') as string;
  // In a real app, you'd also get and validate the password.
  
  if (!email) {
    // Handle error appropriately
    return;
  }

  const result = await login(email);
  if (result.success) {
    redirect('/dashboard');
  } else {
    // In a real app, you would redirect to the login page with an error message.
    // For this mock app, we'll just redirect back.
    redirect('/login');
  }
}

export default async function LoginPage() {
  const authImage = await getPlaceholderImage('auth-background');

  return (
    <AuthForm authImage={authImage}>
      <form action={loginAction}>
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-headline">Welcome Back!</CardTitle>
          <CardDescription>Enter your credentials to access your account.</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" placeholder="you@example.com" type="email" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" placeholder="********" required />
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
