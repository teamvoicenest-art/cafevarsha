import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About, Menu, Highlights, Gallery, Reviews, Visit, FinalCTA, Footer } from "@/components/Sections";
import { MobileBar } from "@/components/MobileBar";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Highlights />
      <Gallery />
      <Reviews />
      <Visit />
      <FinalCTA />
      <Footer />
      <MobileBar />
    </main>
  );
}
