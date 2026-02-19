import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import ServicesGrid from "@/components/ServicesGrid";
import WorkGrid from "@/components/WorkGrid";
import ProcessTimeline from "@/components/ProcessTimeline";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <TrustStrip />
      <ServicesGrid />
      <WorkGrid limit={3} />
      <ProcessTimeline />
      <Pricing />
      <Testimonials />
      <FAQ />
      <ContactCTA />
    </main>
    <Footer />
  </>
);

export default Index;
