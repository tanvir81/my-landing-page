"use client";

import { Section, Container } from "@/components/Section";
import { Button } from "@/components/Button";
import Link from "next/link";
import { Github, Facebook, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <Section className="py-20" style={{ minHeight: 'auto' }}>
      <Container className="flex flex-col justify-center">
        <div 
          className="rounded-3xl flex flex-col items-center text-center border border-white/10 relative overflow-hidden"
          style={{ 
            padding: '64px', 
            marginBottom: '64px', 
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/5 -z-10 blur-[120px] rounded-full" />
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.95] text-primary"
            style={{ marginBottom: '40px' }}
          >
            READY TO ELEVATE <br /> YOUR DIGITAL <span className="text-secondary/20">DNA?</span>
          </h2>
          <Button size="lg" variant="accent">
            START YOUR PROJECT
          </Button>
        </div>
        
        <div className="w-full border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12" style={{ paddingTop: '64px' }}>
          <div className="flex flex-col items-center md:items-start" style={{ gap: '24px' }}>
            <Link href="/" className="text-3xl font-black tracking-tighter hover:opacity-80 transition-opacity">
              AXIS<span className="text-accent">/</span>
            </Link>
            <p className="text-secondary text-sm font-semibold tracking-wide">
              © {new Date().getFullYear()} AXIS DESIGN STUDIO. ALL RIGHTS RESERVED.
            </p>
          </div>
          
          <div className="flex items-center" style={{ gap: '24px' }}>
            {[
              { icon: <Twitter className="w-5 h-5" />, label: "Twitter", href: "#" },
              { icon: <Facebook className="w-5 h-5" />, label: "Facebook", href: "#" },
              { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", href: "#" },
              { icon: <Github className="w-5 h-5" />, label: "Github", href: "#" },
            ].map((social) => (
              <Link 
                key={social.label}
                href={social.href} 
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-secondary hover:text-accent hover:border-accent hover:bg-accent/5 transition-all duration-300 group"
                aria-label={social.label}
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};
