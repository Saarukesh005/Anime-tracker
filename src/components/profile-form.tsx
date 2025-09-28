"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { logout, type User } from "@/lib/auth";
import { useToast } from "@/hooks/use-toast";
import { LogOut } from "lucide-react";

export default function ProfileForm({ user }: { user: User }) {
    const { toast } = useToast();
    const [username, setUsername] = useState(user.username);

    const handleLogout = async () => {
        await logout();
        // A full refresh is needed to re-render server components like the header
        window.location.href = '/login';
    };

    const handleSaveChanges = () => {
        toast({
            title: "Profile Updated!",
            description: `Your username has been changed to "${username}".`,
        });
        // In a real app, you would also update the user data in the database.
    };

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
                            <CardTitle className="text-3xl">{username}</CardTitle>
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
