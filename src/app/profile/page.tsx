'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getAuth, logout, type User } from "@/lib/auth";
import { useToast } from "@/hooks/use-toast";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProfilePage() {
    const router = useRouter();
    const { toast } = useToast();
    const [user, setUser] = useState<User | null>(null);
    const [username, setUsername] = useState('');

    useEffect(() => {
        getAuth().then(currentUser => {
            if (!currentUser) {
                router.push('/login');
            } else {
                setUser(currentUser);
                setUsername(currentUser.username);
            }
        });
    }, [router]);

    const handleLogout = async () => {
        await logout();
        router.push('/login');
        router.refresh();
    };

    const handleSaveChanges = () => {
        // In a real app, you would send this data to your backend to save it.
        // For this mock app, we'll just show a success message.
        if (user) {
            toast({
              title: "Profile Updated!",
              description: `Your username has been changed to "${username}".`,
            });
            // Update the local user state to reflect the change
            setUser({ ...user, username: username });
        }
    };

    if (!user) {
        return null; // or a loading spinner
    }

    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-headline font-bold mb-8">My Profile</h1>
            <Card>
                <CardHeader>
                    <div className="flex items-center gap-4">
                        <Avatar className="h-20 w-20">
                            <AvatarImage src={user.avatarUrl} alt={user.username} />
                            <AvatarFallback>{user.username.charAt(0).toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <div>
                            <CardTitle className="text-3xl">{user.username}</CardTitle>
                            <CardDescription>Manage your profile settings.</CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="username">Username</Label>
                        <Input 
                            id="username" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue={user.email} disabled />
                    </div>

                    <div className="flex justify-between items-center pt-4">
                        <Button variant="destructive" className="neon-glow" onClick={handleLogout}>
                           <LogOut className="mr-2" />
                            Log Out
                        </Button>
                        <Button className="neon-glow-primary" onClick={handleSaveChanges}>Save Changes</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
