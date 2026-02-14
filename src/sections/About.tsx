"use client";

import { Section, Container } from "@/components/Section";
import { MoveRight } from "lucide-react";

export const About = () => {
  return (
    <Section id="about" className="min-h-screen">
      <Container 
        style={{ paddingTop: '160px', paddingBottom: '160px', gap: '120px' }}
        className="flex flex-col items-center justify-center text-center"
      >
        <div className="max-w-4xl">
          <h2 className="text-xs font-black tracking-[0.2em] uppercase text-accent mb-16">
            / OUR VISION
          </h2>
          <h2 
            style={{ marginBottom: '120px' }}
            className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.95] text-primary"
          >
            WE BELIEVE THAT GREAT DESIGN IS <span className="text-secondary/20">INVISIBLE</span>. IT&apos;S THE SEAMLESS HARMONY OF FORM AND FUNCTION.
          </h2>
          
          <div 
            style={{ gap: '80px' }}
            className="flex flex-col items-center"
          >
            <p className="text-base md:text-lg text-secondary leading-relaxed font-medium max-w-2xl">
              Our approach is rooted in intentionality. By stripping away the noise, we illuminate the essence. Every interaction is calculated to serve a purpose and elevate the human experience.
            </p>
            
            <button className="group flex items-center gap-4 text-primary font-black text-base hover:text-accent transition-all duration-300">
              DISCOVER OUR PHILOSOPHY
              <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-all duration-500">
                <MoveRight className="w-5 h-5 group-hover:translate-x-1 hover:text-black transition-transform" />
              </div>
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
};
