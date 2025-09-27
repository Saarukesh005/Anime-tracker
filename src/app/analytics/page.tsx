
'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { allAnime } from '@/lib/anime';
import { useMemo } from 'react';
import { TrendingUp, CheckCircle, Clock } from 'lucide-react';

const COLORS = ['hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))', 'hsl(var(--chart-4))', 'hsl(var(--chart-5))'];

export default function AnalyticsPage() {
    const analyticsData = useMemo(() => {
        const completedAnime = allAnime.filter(a => a.status === 'Completed');
        const watchingAnime = allAnime.filter(a => a.status === 'Watching');

        const genreCounts: { [key: string]: number } = {};
        completedAnime.forEach(anime => {
            anime.genres.forEach(genre => {
                genreCounts[genre] = (genreCounts[genre] || 0) + 1;
            });
        });

        const genreChartData = Object.entries(genreCounts)
            .map(([name, count]) => ({ name, count }))
            .sort((a, b) => b.count - a.count)
            .slice(0, 10);
        
        const favoriteGenre = genreChartData[0]?.name || 'N/A';

        const totalEpisodesWatched = completedAnime.reduce((acc, anime) => acc + anime.totalEpisodes, 0);

        const statusDistribution = allAnime.reduce((acc, anime) => {
            const status = anime.status;
            const existing = acc.find(item => item.name === status);
            if (existing) {
                existing.value += 1;
            } else {
                acc.push({ name: status, value: 1 });
            }
            return acc;
        }, [] as { name: string; value: number }[]);


        return {
            totalCompleted: completedAnime.length,
            totalWatching: watchingAnime.length,
            totalEpisodesWatched,
            favoriteGenre,
            genreChartData,
            statusDistribution,
        };
    }, []);

    return (
        <div className="space-y-8">
             <div className="text-center">
                <h1 className="text-4xl font-headline font-bold">Your Analytics Dashboard</h1>
                <p className="mt-2 text-lg text-muted-foreground">Insights into your anime journey.</p>
            </div>

            {/* Stat Cards */}
            <div className="grid gap-6 md:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Completed Series</CardTitle>
                        <CheckCircle className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{analyticsData.totalCompleted}</div>
                        <p className="text-xs text-muted-foreground">Total anime you've finished</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Episodes Watched</CardTitle>
                        <Clock className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{analyticsData.totalEpisodesWatched.toLocaleString()}</div>
                         <p className="text-xs text-muted-foreground">Estimated from your completed series</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Favorite Genre</CardTitle>
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{analyticsData.favoriteGenre}</div>
                         <p className="text-xs text-muted-foreground">Based on completed series</p>
                    </CardContent>
                </Card>
            </div>

            {/* Charts */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                 <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle>Top Genres Watched</CardTitle>
                        <CardDescription>
                            Number of completed series by genre.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                         <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={analyticsData.genreChartData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                                <XAxis dataKey="name" stroke="hsl(var(--foreground))" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis stroke="hsl(var(--foreground))" fontSize={12} tickLine={false} axisLine={false} />
                                <Tooltip
                                    contentStyle={{ 
                                        backgroundColor: "hsl(var(--card))",
                                        borderColor: "hsl(var(--border))"
                                    }}
                                 />
                                <Legend wrapperStyle={{fontSize: "14px"}} />
                                <Bar dataKey="count" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                 <Card>
                    <CardHeader>
                        <CardTitle>Watchlist Status</CardTitle>
                        <CardDescription>
                            How your list is distributed.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={analyticsData.statusDistribution}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    outerRadius={100}
                                    fill="#8884d8"
                                    dataKey="value"
                                    nameKey="name"
                                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                >
                                    {analyticsData.statusDistribution.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                 <Tooltip
                                    contentStyle={{ 
                                        backgroundColor: "hsl(var(--card))",
                                        borderColor: "hsl(var(--border))"
                                    }}
                                 />
                                 <Legend wrapperStyle={{fontSize: "14px"}} />
                            </PieChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </div>

        </div>
    );
}
