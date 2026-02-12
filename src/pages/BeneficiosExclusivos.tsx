import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BeneficiosTrufi from "@/components/BeneficiosTrufi";
import TrufiAdelantaYGana from "@/components/TrufiAdelantaYGana";
import CTASection from "@/components/CTASection";

const BeneficiosExclusivos = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                {/* Custom Hero Section for Benefits */}
                <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
                    {/* Background Image - using a generic happy/lifestyle image */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
                            alt="Personas felices disfrutando beneficios"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60 mix-blend-multiply" />
                    </div>

                    <div className="container relative z-10 text-center max-w-4xl px-4">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 text-sm font-semibold mb-6 animate-fade-in">
                            Club de Privilegios Trufi
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-slide-up">
                            Más que un crédito, <br />
                            <span className="text-secondary">un estilo de vida</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: "100ms" }}>
                            Accede a un ecosistema de bienestar, protección y recompensas diseñado exclusivamente para nuestros clientes.
                        </p>
                    </div>
                </section>

                {/* Reusing existing benefits components */}
                <BeneficiosTrufi />

                <TrufiAdelantaYGana />

                <CTASection />
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default BeneficiosExclusivos;
