import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AudienceSegmentation from "@/components/AudienceSegmentation";
import ValueProposition from "@/components/ValueProposition";
import HowItWorks from "@/components/HowItWorks";
import BlogPreview from "@/components/BlogPreview";
import PaymentSection from "@/components/PaymentSection";
import InvestorsSection from "@/components/InvestorsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AudienceSegmentation />
        <ValueProposition />
        <HowItWorks />
        <BlogPreview />
        <PaymentSection />
        <InvestorsSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
