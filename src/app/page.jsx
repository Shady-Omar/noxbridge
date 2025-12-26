import { Hero } from "@/components/homepage/Hero";
import { SectionTwo } from "@/components/homepage/SectionTwo";
import "@/styles/homepage/hero.css";

export default function Home() {
  return (
    <section className="w-full mx-auto bg-[#F2F2F2]">
      <Hero />
      <SectionTwo />
    </section>
  );
}
