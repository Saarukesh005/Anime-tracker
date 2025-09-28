
"use client";

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Image as ImageIcon } from 'lucide-react';
import Link from 'next/link';

const formSchema = z.object({
  prompt: z.string(),
});

type FormData = z.infer<typeof formSchema>;

export default function ImageGeneratorForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  // The onSubmit function is no longer needed as the button is now a link.
  // We keep the form structure in case we want to use the prompt for other purposes later.

  return (
    <div>
      <Form {...form}>
        <form className="space-y-6">
          <FormField
            control={form.control}
            name="prompt"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Image Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={"e.g., A majestic dragon soaring over a mystical forest at dawn, cinematic lighting."}
                    rows={5}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button asChild className="w-full neon-glow-primary">
            <Link href="https://aistudio.google.com/models/gemini-2-5-flash-image?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">
              <ImageIcon className="mr-2 h-4 w-4" />
              Generate Image
            </Link>
          </Button>
        </form>
      </Form>
    </div>
  );
}
