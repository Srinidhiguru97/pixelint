import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-[#E2E8F0] selection:bg-white selection:text-black">
      {/* Sticky Editorial Header */}
      <Navbar />

      {/* Main Page Content Flow */}
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <WhyUs />
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}
