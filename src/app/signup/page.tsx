import AuthForm from '@/components/auth-form';
import { Button } from '@/components/ui/button';
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { getPlaceholderImage } from '@/lib/placeholder-images';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { createUser, login } from '@/lib/auth';

async function signupAction(formData: FormData) {
  'use server';

  const email = formData.get('email') as string;
  const username = formData.get('username') as string;
  // In a real app, you would hash the password
  // const password = formData.get('password') as string;

  if (!email || !username) {
    // Handle error appropriately
    return;
  }
  
  const newUser = await createUser({ email, username });
  await login(newUser.id);
  redirect('/dashboard');
}

export default async function SignupPage() {
  const authImage = await getPlaceholderImage('auth-background');

  return (
    <AuthForm authImage={authImage}>
      <form action={signupAction}>
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-headline">Join the Anime World!</CardTitle>
          <CardDescription>Create an account to start tracking your favorite series.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" placeholder="you@example.com" type="email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" name="username" placeholder="your_username" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" placeholder="********" required />
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
