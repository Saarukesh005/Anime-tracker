
"use client";

import { useMemo, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { logout, type User } from "@/lib/auth";
import { useToast } from "@/hooks/use-toast";
import { LogOut, CheckCircle, Clock, Heart, Settings, Shield } from "lucide-react";
import { allAnime } from "@/lib/anime";
import { Separator } from "./ui/separator";

export default function ProfileForm({ user }: { user: User }) {
    const { toast } = useToast();
    const [username, setUsername] = useState(user.username);

    const userStats = useMemo(() => {
        const completedAnime = allAnime.filter(a => a.status === 'Completed');
        const episodesWatched = completedAnime.reduce((acc, anime) => acc + anime.totalEpisodes, 0);

        const genreCounts: { [key: string]: number } = {};
        completedAnime.forEach(anime => {
            anime.genres.forEach(genre => {
                genreCounts[genre] = (genreCounts[genre] || 0) + 1;
            });
        });

        const favoriteGenre = Object.entries(genreCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || 'N/A';
        
        return {
            completed: completedAnime.length,
            episodesWatched,
            favoriteGenre,
        };
    }, []);

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
    };

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
                <Avatar className="h-28 w-28 border-4 border-primary shadow-lg">
                    <AvatarImage src={user.avatarUrl} alt={user.username} />
                    <AvatarFallback className="text-4xl">{user.username.charAt(0).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div>
                    <h1 className="text-4xl font-headline font-bold">{username}</h1>
                    <p className="text-muted-foreground">{user.email}</p>
                </div>
            </div>

            {/* User Stats */}
            <div className="grid gap-6 md:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Completed Series</CardTitle>
                        <CheckCircle className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{userStats.completed}</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Episodes Watched</CardTitle>
                        <Clock className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{userStats.episodesWatched.toLocaleString()}</div>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Favorite Genre</CardTitle>
                        <Heart className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{userStats.favoriteGenre}</div>
                    </CardContent>
                </Card>
            </div>
            
            {/* Profile Settings */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Settings className="h-5 w-5"/>
                        Profile Settings
                    </CardTitle>
                    <CardDescription>Manage your public profile and account details.</CardDescription>
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
                        <p className="text-xs text-muted-foreground">Email cannot be changed.</p>
                    </div>
                </CardContent>
                <CardFooter className="border-t px-6 py-4">
                    <Button className="ml-auto neon-glow-primary" onClick={handleSaveChanges}>Save Changes</Button>
                </CardFooter>
            </Card>

            {/* Security */}
            <Card>
                <CardHeader>
                     <CardTitle className="flex items-center gap-2">
                        <Shield className="h-5 w-5"/>
                        Security
                    </CardTitle>
                    <CardDescription>Manage your password and account security.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <Label>Password</Label>
                        <Button variant="outline" className="w-full justify-start mt-2">Change Password</Button>
                    </div>
                </CardContent>
            </Card>

            {/* Danger Zone */}
             <Card className="border-destructive">
                <CardHeader>
                    <CardTitle className="text-destructive">Danger Zone</CardTitle>
                    <CardDescription>Permanent actions that cannot be undone.</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-between items-center">
                   <div>
                        <p className="font-semibold">Log Out</p>
                        <p className="text-sm text-muted-foreground">You will be logged out of your account on this device.</p>
                   </div>
                    <Button variant="destructive" className="neon-glow" onClick={handleLogout}>
                        <LogOut className="mr-2 h-4 w-4" />
                        Log Out
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
