import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getAuth } from "@/lib/auth";
import { LogOut } from "lucide-react";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
    const user = await getAuth();

    if (!user) {
        redirect('/login');
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
                        <Input id="username" defaultValue={user.username} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue={user.email} disabled />
                    </div>

                    <div className="flex justify-between items-center pt-4">
                        <Button variant="destructive" className="neon-glow">
                           <LogOut className="mr-2" />
                            Log Out
                        </Button>
                        <Button className="neon-glow-primary">Save Changes</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
