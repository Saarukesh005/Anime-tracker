import AuthForm from '@/components/auth-form';
import { Button } from '@/components/ui/button';
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { getPlaceholderImage } from '@/lib/placeholder-images';
import Link from 'next/link';
import { redirect } from 'next/navigation';
// Assuming you have a login function in '@/lib/auth'
import { login } from '@/lib/auth'; 
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

/**
 * Server Action to handle the login form submission.
 */
async function loginAction(formData: FormData) {
  'use server';

  const username = formData.get('username') as string;
  const password = formData.get('password') as string;

  // 1. Attempt to log in using the external function
  // Assume 'login' returns a truthy value (e.g., user object) on success, and a falsy value (e.g., null) on failure.
  const result = await login(username, password);
  
  // 2. Handle the result
  if (result) {
    // Success: Redirect to the dashboard
    redirect('/dashboard');
  } else {
    // Failure: Redirect back to login with an error query parameter
    redirect('/login?error=InvalidCredentials');
  }
}

// ---

export default async function LoginPage({ searchParams }: { searchParams: { error?: string } }) {
  const authImage = await getPlaceholderImage('auth-background');
  const isError = searchParams.error === 'InvalidCredentials';

  return (
    <AuthForm authImage={authImage}>
      {/* The form action links directly to the server action */}
      <form action={loginAction}>
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-headline">Welcome Back!</CardTitle>
          <CardDescription>Enter your credentials to continue tracking your anime.</CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {/* Conditional Error Alert based on URL parameter */}
          {isError && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Login Failed</AlertTitle>
              <AlertDescription>
                Invalid username or password. Please check your credentials and try again.
              </AlertDescription>
            </Alert>
          )}

          {/* Username Field */}
          <div className="space-y-2">
            <Label htmlFor="username">Username / Email</Label>
            <Input 
              id="username" 
              name="username" // Important for formData
              placeholder="your_username_or_email" 
              required 
            />
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password" // Important for formData
              type="password"
              placeholder="********"
              required
            />
             <p className="text-xs text-muted-foreground pt-1">
                Hint: Any password will work for this demo.
             </p>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-4">
          <Button type="submit" className="w-full neon-glow-primary">
            Log In
          </Button>

          <div className="text-sm text-center text-muted-foreground">
            <Link href="/forgot-password" passHref>
              <span className="underline hover:text-primary">Forgot password?</span>
            </Link>
            {' | '}
            <Link href="/signup" passHref>
              <span className="underline hover:text-primary">Don't have an account? Sign Up</span>
            </Link>
          </div>
        </CardFooter>
      </form>
    </AuthForm>
  );
}
