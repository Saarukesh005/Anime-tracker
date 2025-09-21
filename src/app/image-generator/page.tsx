import ImageGeneratorForm from "@/components/image-generator-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Image as ImageIcon } from "lucide-react";

export default function ImageGeneratorPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <ImageIcon className="mx-auto h-12 w-12 text-primary" />
        <h1 className="text-4xl font-headline font-bold mt-4">AI Image Generator</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Create stunning images from your imagination. Just describe what you want to see, and let our AI bring it to life.
        </p>
      </div>

      <Card className="shadow-2xl">
        <CardHeader>
          <CardTitle>Image Prompt</CardTitle>
          <CardDescription>Describe the image you want to generate. Be as specific as you like.</CardDescription>
        </CardHeader>
        <CardContent>
          <ImageGeneratorForm />
        </CardContent>
      </Card>
    </div>
  );
}
