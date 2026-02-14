"use client";

import { Section, Container } from "@/components/Section";
import { Button } from "@/components/Button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <Section className="border-none min-h-screen pt-20">
      <Container className="flex flex-col items-center justify-center text-center relative z-10 h-full max-w-5xl gap-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-white/10 text-xs font-semibold text-primary"
        >
          <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_var(--color-accent)] animate-pulse" />
          Redefining Digital Excellence
        </motion.div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter max-w-5xl leading-[0.95] text-primary">
          MINIMALIST <span className="text-secondary/20 block md:inline">CRAFTED</span> FOR YOU.
        </h1>
        
        <p className="text-base md:text-xl text-secondary max-w-2xl leading-relaxed font-medium">
          We bridge the gap between complex technology and intuitive design, creating digital experiences that resonate and convert.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5">
          <Button 
            size="lg" 
            variant="accent"
            className="group"
          >
            Start Project
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="glass" 
            size="lg"
          >
            Our Work
          </Button>
        </div>
      </Container>
      
      {/* Dynamic background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[800px] h-[500px] bg-accent/20 rounded-full blur-[120px] opacity-50 animate-pulse" />
      <div className="absolute top-0 left-0 w-full h-full -z-20 bg-[radial-gradient(circle_at_50%_50%,rgba(15,23,42,1),rgba(10,10,11,1))]" />
    </Section>
  );
};
