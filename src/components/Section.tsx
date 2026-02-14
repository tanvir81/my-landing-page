"use client";

import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}

export const Container = ({ children, className, style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) => (
  <div 
    style={style}
    className={cn("max-w-7xl mx-auto px-6 md:px-8 lg:px-12 w-full", className)}
  >
    {children}
  </div>
);

export const Section = ({ children, className, id, style }: SectionProps) => {
  return (
    <section 
      id={id} 
      style={style}
      className={cn(
        "relative min-h-screen flex items-center justify-center py-20 md:py-24 overflow-hidden bg-background border-t border-white/5", 
        className
      )}
    >
      {children}
    </section>
  );
};
