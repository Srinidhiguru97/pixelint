import Navbar from "@/components/Navbar";
import BackgroundEffects from "@/components/BackgroundEffects";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import ComingSoon from "@/components/ComingSoon";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#08090D] text-slate-100 flex flex-col justify-between selection:bg-[#397BFF]/30 selection:text-white">
      {/* Background ambient lighting and subtle grid */}
      <BackgroundEffects />

      {/* Sticky top navigation bar */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="relative z-10 flex-1">
        <Hero />
        <Services />
        <About />
        <ComingSoon />
      </main>

      {/* Global studio footer */}
      <Footer />
    </div>
  );
}
