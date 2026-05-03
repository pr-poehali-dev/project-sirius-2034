import { Hero } from "@/components/Hero";
import { Catalog } from "@/components/Catalog";
import { About } from "@/components/About";
import { HowItWorks } from "@/components/HowItWorks";

export default function Index() {
  return (
    <>
      <Hero />
      <Catalog />
      <About />
      <HowItWorks />
    </>
  );
}