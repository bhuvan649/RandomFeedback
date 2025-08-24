'use client';

import { Mail } from 'lucide-react'; // Assuming you have an icon for messages
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Autoplay from 'embla-carousel-autoplay';
import messages from '@/messages.json';
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import {
  Carousel,
  CarouselContent,
  CarouselItem,

} from '@/components/ui/carousel';

export default function Home() {
  return (
      <>
    {/* Main content */}

    <BackgroundBeamsWithCollision className="flex-grow flex flex-col items-center justify-center px-6 md:px-24 py-16 bg-background text-foreground transition-colors duration-300">
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">
            Dive into the World of Anonymous Feedback
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            True Feedback — Where your identity remains a secret.
          </p>
        </section>

      {/* Carousel for Messages */}
      <Carousel
        plugins={[Autoplay({ delay: 2000 })]}
        className="w-full max-w-lg md:max-w-xl"
      >
        <CarouselContent>
          {messages.map((message, index) => (
            <CarouselItem key={index} className="p-4">
              <Card>
                <CardHeader>
                  <CardTitle>{message.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col md:flex-row items-start space-y-2 md:space-y-0 md:space-x-4">
                  <Mail className="flex-shrink-0" />
                  <div>
                    <p>{message.content}</p>
                    <p className="text-xs text-muted-foreground">
                      {message.received}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </BackgroundBeamsWithCollision>

    {/* Footer */}
      <footer className="text-center p-6 bg-background border-t border-border/40 text-muted-foreground">
        © 2025 True Feedback. All rights reserved.
      </footer>
  </>

  );
}