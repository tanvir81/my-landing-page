"use client";

import { Section, Container } from "@/components/Section";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What makes your service premium?",
    answer: "We focus on quality over quantity. Every project is handled with extreme attention to detail, from the visual design to the underlying code performance.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on complexity, but most landing pages are completed within 2-4 weeks from initial consultation to launch.",
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Yes, we provide maintenance and support packages to ensure your digital products remain updated and performant long after launch.",
  },
  {
    question: "Can you help with branding as well?",
    answer: "Absolutely. We offer comprehensive branding services, including logo design, color palette development, and typography selection.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section id="faq" className="min-h-screen">
      <Container className="flex flex-col items-center justify-center h-full">
        <div className="text-center max-w-3xl" style={{ marginBottom: '80px' }}>
          <h2 className="text-xs font-black tracking-[0.2em] uppercase text-accent" style={{ marginBottom: '32px' }}>
            / FAQ
          </h2>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-primary leading-[0.95]" style={{ marginBottom: '32px' }}>
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-base md:text-lg text-secondary leading-relaxed font-medium">
            Everything you need to know about our process and services. Can&apos;t find what you&apos;re looking for? Reach out to our team.
          </p>
        </div>
        
        <div className="w-full max-w-3xl" style={{ display: 'flex', flexDirection: 'column',  }}>
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border-b border-white/10"
           
            >
              <button
                className="w-full flex items-center justify-between text-left focus:outline-none group"
                style={{ paddingTop: '16px', paddingBottom: '16px' }}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-bold text-primary group-hover:text-accent transition-all duration-300">
                  {faq.question}
                </span>
                <div className={cn(
                  "w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all duration-500 flex-shrink-0 ml-4",
                  openIndex === index ? "bg-accent border-accent rotate-180" : "group-hover:border-accent"
                )}>
                  <ChevronDown className={cn(
                    "w-4 h-4 text-secondary transition-colors",
                    openIndex === index ? "text-white" : "group-hover:text-accent"
                  )} />
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
                    className="overflow-hidden"
                  >
                    <p 
                      className="text-base text-secondary leading-relaxed font-medium"
                      style={{ paddingBottom: '24px', paddingTop: '8px' }}
                    >
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
