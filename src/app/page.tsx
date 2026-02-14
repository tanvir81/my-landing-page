import { Hero } from "@/sections/Hero";
import { Features } from "@/sections/Features";
import { About } from "@/sections/About";
import { Pricing } from "@/sections/Pricing";
import { FAQ } from "@/sections/FAQ";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <About />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
}
