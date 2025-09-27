
import AuthForm from '@/components/auth-form';
import { Button } from '@/components/ui/button';
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { getPlaceholderImage } from '@/lib/placeholder-images';
import Link from 'next/link';
import { login, getMockUsersForLogin } from '@/lib/auth';
import { redirect } from 'next/navigation';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default async function LoginPage() {
  const authImage = await getPlaceholderImage('auth-background');
  const mockUsers = await getMockUsersForLogin();

  const handleLogin = async (formData: FormData) => {
    'use server';
    const userId = formData.get('userId') as string;
    await login(userId);
    redirect('/dashboard');
  }

  return (
    <AuthForm authImage={authImage}>
      <form action={handleLogin}>
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-headline">Welcome Back!</CardTitle>
          <CardDescription>Select a user to log in.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
           <div className="space-y-2">
            <Label htmlFor="user-select">Select User</Label>
            <Select name="userId" required defaultValue={mockUsers[0].id}>
                <SelectTrigger id="user-select">
                    <SelectValue placeholder="Select a user to log in" />
                </SelectTrigger>
                <SelectContent>
                    {mockUsers.map((user) => (
                        <SelectItem key={user.id} value={user.id}>
                            {user.username} ({user.role})
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="********" defaultValue="password" />
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
