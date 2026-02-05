import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AudienceSegmentation from "@/components/AudienceSegmentation";
import BeneficiosTrufi from "@/components/BeneficiosTrufi";
import FinancialAcademySection from "@/components/FinancialAcademySection";
import SocialMediaFeed from "@/components/SocialMediaFeed";


import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* 1. Hero Section - Impactante con imagen de fondo */}
        <HeroSection />

        {/* 2. Selección de Perfil - ANTES del simulador */}
        <AudienceSegmentation />

        {/* 3. Beneficios Trufi - Nueva sección de seguros */}
        <BeneficiosTrufi />





        {/* 4. Zona de Aprendizaje Financiero */}
        <FinancialAcademySection />

        {/* 5. Banner de Cierre (CTA) - Ahora tipo Listón */}
        <CTASection />

        {/* 6. Redes Sociales */}
        <SocialMediaFeed />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
