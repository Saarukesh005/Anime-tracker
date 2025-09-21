import RecommendationsForm from "@/components/recommendations-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

export default function RecommendationsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <Sparkles className="mx-auto h-12 w-12 text-primary" />
        <h1 className="text-4xl font-headline font-bold mt-4">AI-Powered Recommendations</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Discover your next favorite anime. Tell our AI what you've watched and what you like, and get tailored recommendations in seconds.
        </p>
      </div>

      <Card className="shadow-2xl">
        <CardHeader>
          <CardTitle>Your Anime Profile</CardTitle>
          <CardDescription>The more details you provide, the better the recommendations will be.</CardDescription>
        </CardHeader>
        <CardContent>
          <RecommendationsForm />
        </CardContent>
      </Card>
    </div>
  );
}
