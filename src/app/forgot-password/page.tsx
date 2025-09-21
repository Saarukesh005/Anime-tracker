import AuthForm from '@/components/auth-form';
import { Button } from '@/components/ui/button';
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  return (
    <AuthForm>
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-headline">Forgot Password?</CardTitle>
        <CardDescription>Enter your email and we&apos;ll send you a reset link.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="you@example.com" type="email"/>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <Button className="w-full neon-glow-primary">Send Reset Link</Button>
         <div className="text-sm text-center text-muted-foreground">
           <Link href="/login" passHref>
            <span className="underline hover:text-primary">Back to Log In</span>
          </Link>
        </div>
      </CardFooter>
    </AuthForm>
  );
}
