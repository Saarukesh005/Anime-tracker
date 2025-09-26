import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal, ShieldCheck } from "lucide-react";

// Mock data for demonstration
const mockUsers = [
  { id: 1, name: "AnimeFan_22", email: "user@example.com", status: "Active", role: "Admin" },
  { id: 2, name: "SakuraChan", email: "sakura@example.com", status: "Active", role: "User" },
  { id: 3, name: "GokuFan99", email: "goku@example.com", status: "Banned", role: "User" },
  { id: 4, name: "OtakuLife", email: "otaku@example.com", status: "Active", role: "User" },
];

const mockComments = [
    { id: 1, user: "SakuraChan", anime: "Attack on Titan", comment: "That last episode was insane! I can't believe...", timestamp: "2 hours ago" },
    { id: 2, user: "GokuFan99", anime: "Dragon Ball Z", comment: "This is spam.", timestamp: "5 hours ago" },
    { id: 3, user: "AnimeFan_22", anime: "Jujutsu Kaisen", comment: "The animation is top-tier. Every frame is a work of art.", timestamp: "1 day ago" },
];


export default function AdminPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <ShieldCheck className="mx-auto h-12 w-12 text-primary" />
        <h1 className="text-4xl font-headline font-bold mt-4">Admin Panel</h1>
        <p className="mt-2 text-lg text-muted-foreground">Manage users, comments, and site settings.</p>
      </div>

      {/* Manage Users Card */}
      <Card>
        <CardHeader>
          <CardTitle>Manage Users</CardTitle>
          <CardDescription>View and manage all registered users.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Role</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Badge variant={user.status === "Active" ? "default" : "destructive"}>{user.status}</Badge>
                  </TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit User</DropdownMenuItem>
                        <DropdownMenuItem>Ban User</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">Delete User</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

       {/* Recent Comments Card */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Comments</CardTitle>
          <CardDescription>Moderate the latest discussions.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            {mockComments.map(comment => (
                <div key={comment.id} className="flex items-start justify-between p-3 rounded-md border bg-muted/20">
                    <div>
                        <p className="font-semibold">{comment.user} on <span className="text-primary">{comment.anime}</span></p>
                        <p className="text-sm text-muted-foreground mt-1">&quot;{comment.comment}&quot;</p>
                        <p className="text-xs text-muted-foreground mt-2">{comment.timestamp}</p>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" size="sm">Approve</Button>
                        <Button variant="destructive" size="sm">Delete</Button>
                    </div>
                </div>
            ))}
        </CardContent>
      </Card>
    </div>
  );
}
