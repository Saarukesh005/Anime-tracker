import Image from 'next/image';
import { Card } from './ui/card';
import type { ImagePlaceholder } from '@/lib/placeholder-images';

export default function AuthForm({ children, authImage }: { children: React.ReactNode, authImage: ImagePlaceholder | undefined }) {
  
  return (
    <div className="w-full lg:grid lg:min-h-[calc(100vh-8rem)] lg:grid-cols-2 xl:min-h-[calc(100vh-8rem)]">
      <div className="hidden bg-muted lg:block relative">
        {authImage && (
            <Image
            src={authImage.imageUrl}
            alt={authImage.description}
            fill
            className="object-cover"
            data-ai-hint={authImage.imageHint}
            />
        )}
      </div>
      <div className="flex items-center justify-center py-12">
        <Card className="mx-auto grid w-[400px] gap-6 p-4 md:p-6 lg:p-8 shadow-2xl">
            {children}
        </Card>
      </div>
    </div>
  );
}
