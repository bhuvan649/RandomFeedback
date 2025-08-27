'use client';

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import messages from '@/messages.json';
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function Home() {
  const [emblaRef] = useEmblaCarousel(
    {
      axis: 'y',   // 👈 vertical scroll
      loop: true,  // 👈 infinite
    },
    [Autoplay({ delay: 2000 })] // autoplay plugin
  );

  return (
    <>
      <BackgroundBeamsWithCollision className="flex-grow flex flex-col items-center justify-center px-6 md:px-24 py-16 bg-background text-foreground transition-colors duration-300">
        
        {/* Heading */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">
            Step into the world of unexpected feedback
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Random Feedback — Where your identity remains a secret.
          </p>
        </section>

        {/* Vertical Carousel */}
        <div className="w-full max-w-lg md:max-w-xl h-48 overflow-hidden" ref={emblaRef}>
          <div className="flex flex-col h-full">
            {messages.map((message, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] h-full flex items-center justify-center"
              >
                <Card className="w-full shadow-lg">
                  <CardHeader>
                    <CardTitle>{message.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-row items-start space-x-4">
                    <Mail className="flex-shrink-0" />
                    <div>
                      <p>{message.content}</p>
                      <p className="text-xs text-muted-foreground">
                        {message.received}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </BackgroundBeamsWithCollision>

      {/* Footer */}
      <footer className="text-center p-6 bg-background border-t border-border/40 text-muted-foreground">
        © 2025 Random Feedback. All rights reserved.
      </footer>
    </>
  );
}
