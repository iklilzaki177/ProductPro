import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useToast } from '@/hooks/use-toast';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { NewsletterData } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const newsletterSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" })
});

export default function NewsletterSection() {
  const { toast } = useToast();
  
  const form = useForm<NewsletterData>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: ""
    }
  });
  
  const { mutate, isPending } = useMutation({
    mutationFn: async (data: NewsletterData) => {
      const response = await apiRequest('POST', '/api/newsletter', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
        variant: "default"
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error subscribing",
        description: error.message || "Please try again later.",
        variant: "destructive"
      });
    }
  });

  const onSubmit = (data: NewsletterData) => {
    mutate(data);
  };

  return (
    <section className="py-12 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold text-dark mb-2 font-heading">Stay Updated</h3>
              <p className="text-gray-600 mb-0">
                Sign up for our newsletter to receive product updates, special offers, and more.
              </p>
            </div>
            
            <div>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col sm:flex-row">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="Your email address" 
                            className="h-10 rounded-md sm:rounded-r-none mb-3 sm:mb-0" 
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    className="bg-primary hover:bg-blue-600 text-white h-10 rounded-md sm:rounded-l-none whitespace-nowrap"
                    disabled={isPending}
                  >
                    {isPending ? "Subscribing..." : "Subscribe"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
