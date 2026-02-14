"use client";

import { Section, Container } from "@/components/Section";
import { Button } from "@/components/Button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    price: "$99",
    description: "Perfect for individuals and small startups.",
    features: ["Single User", "500GB Storage", "Basic Support", "Standard Speed"],
    popular: false,
  },
  {
    name: "Business",
    price: "$299",
    description: "Ideal for growing companies and teams.",
    features: ["Unlimited Users", "2TB Storage", "Priority Support", "High Speed"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Scale your business with ease.",
    features: ["Dedicated Server", "Unlimited Storage", "24/7 Support", "Ultra High Speed"],
    popular: false,
  },
];

export const Pricing = () => {
  return (
    <Section id="pricing" className="min-h-screen">
      <Container className="flex flex-col items-center justify-center gap-20 py-24 md:py-32">
        <div className="flex flex-col items-center justify-center w-full text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 text-primary">
            Simple, <span className="text-secondary/30">transparent</span> pricing.
          </h2>
          <p 
            style={{ marginTop: '32px', marginBottom: '64px' }}
            className="text-secondary max-w-2xl text-base md:text-lg font-medium text-center"
          >
            Investment strategies designed for clarity and growth. No hidden complexities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto w-full mt-12">
          {plans.map((plan) => (
            <div
              key={plan.name}
              style={{ padding: '64px', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '32px', border: '1px solid rgba(255, 255, 255, 0.1)', gap: '40px' }}
              className={cn(
                "transition-all duration-500 flex flex-col relative",
                plan.popular && "md:scale-105 z-10 shadow-2xl shadow-accent/20 border-accent/50"
              )}
            >
              {plan.popular && (
                <div 
                  style={{ padding: '16px 40px' }}
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-accent-foreground text-sm font-black uppercase tracking-widest rounded-full shadow-xl shadow-accent/40 border border-white/20 whitespace-nowrap z-20"
                >
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-accent">{plan.name}</h3>
              <div 
                style={{ marginTop: '16px', marginBottom: '16px' }}
                className="flex items-baseline gap-2"
              >
                <span className="text-4xl font-black text-primary">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-secondary font-bold text-base">/mo</span>}
              </div>
              <p className="text-secondary text-sm font-medium leading-relaxed">{plan.description}</p>
              
              <ul 
                style={{ marginTop: '32px', marginBottom: '32px', display: 'flex', flexDirection: 'column', gap: '24px' }}
                className="flex-1"
              >
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm font-semibold text-primary/80">
                    <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Check className="text-accent w-3 h-3" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.popular ? "accent" : "glass"} 
                className="w-full"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
