"use client";

import { Section, Container } from "@/components/Section";
import { Layers, Shield, Zap, Globe, Cpu, Smartphone } from "lucide-react";

const features = [
  {
    title: "High Performance",
    description: "Built with the latest technologies for lightning-fast load times and smooth interactions.",
    icon: Zap,
  },
  {
    title: "Premium Aesthetics",
    description: "A design that focuses on typography, white space, and subtle animations.",
    icon: Layers,
  },
  {
    title: "Global Scalability",
    description: "Infrastructure that grows with your business, ensuring uptime and reliability.",
    icon: Globe,
  },
  {
    title: "Secure by Design",
    description: "Top-tier security protocols integrated into every layer of your application.",
    icon: Shield,
  },
  {
    title: "AI Integration",
    description: "Leverage the power of artificial intelligence to automate and enhance your workflow.",
    icon: Cpu,
  },
  {
    title: "Mobile First",
    description: "Responsive designs that provide a seamless experience across all devices.",
    icon: Smartphone,
  },
];

export const Features = () => {
  return (
    <Section id="features" className="min-h-screen">
      <Container className="flex flex-col justify-center items-center gap-20 py-24 md:py-32">
        <div className="flex flex-col items-center justify-center w-full gap-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-primary text-center">
            Built for the <span className="text-accent underline decoration-accent/30 underline-offset-8">modern web</span> 
          </h2>
          <p className="text-secondary max-w-2xl text-base md:text-lg font-medium text-center">
            Everything you need to build, launch, and scale your digital products with confidence and style.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {features.map((feature) => (
            <div 
              key={feature.title}
              style={{ padding: '64px', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '24px', border: '1px solid rgba(255, 255, 255, 0.1)' }}
              className="group transition-all duration-500 hover:-translate-y-2 flex flex-col items-start text-left gap-8"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-all duration-500 shadow-xl shadow-accent/5">
                <feature.icon size={26} />
              </div>
              <h3 className="text-xl font-black text-primary">{feature.title}</h3>
              <p className="text-secondary text-sm leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
