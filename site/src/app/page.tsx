import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Services from "@/components/Services";
import About from "@/components/About";
import WhyFirepoint from "@/components/WhyFirepoint";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import SmoothScroller from "@/components/SmoothScroller";

export default function Home() {
  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <Navbar />
      <SmoothScroller>
        <main>
          <Hero />
          <StatsBar />
          <Services />
          <About />
          <WhyFirepoint />
          <FAQ />
          <CTA />
        </main>
        <Footer />
      </SmoothScroller>
    </>
  );
}
