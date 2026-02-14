"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./Button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "About", href: "#about" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-2xl shadow-black/50 border-b border-white/5"
          : "bg-background/40 backdrop-blur-sm"
      )}
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12 flex items-center justify-between h-20 relative">
        {/* Navbar Start: Logo */}
        <div className="flex-1 flex items-center justify-start">
          <Link href="/" className="text-2xl font-black tracking-tighter hover:opacity-80 transition-opacity">
            AXIS<span className="text-accent">/</span>
          </Link>
        </div>

        {/* Navbar Center: Desktop Links */}
        <div className="hidden lg:flex flex-none items-center justify-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-secondary hover:text-primary transition-all duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Navbar End: Action Button & Mobile Toggle */}
        <div className="flex-1 flex items-center justify-end gap-4">
          <div className="hidden md:block">
            <Button
              variant="accent"
              className="px-6 h-11 text-sm font-bold rounded-md"
            >
              Get Started
            </Button>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-20 left-0 right-0 bg-background/95 backdrop-blur-md border-t border-white/10 overflow-hidden shadow-2xl lg:hidden"
            >
              <div className="flex flex-col gap-4 p-6 max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-lg font-bold hover:text-accent transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <Button 
                  variant="accent" 
                  size="lg" 
                  className="w-full mt-2"
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
