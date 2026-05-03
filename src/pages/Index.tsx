import { Hero } from "@/components/Hero";
import { Catalog } from "@/components/Catalog";
import { About } from "@/components/About";
import { HowItWorks } from "@/components/HowItWorks";
import { Footer } from "@/components/Footer";

export default function Index() {
  return (
    <>
      <Hero />
      <Catalog />
      <About />
      <HowItWorks />
      <Footer />
    </>
  );
}