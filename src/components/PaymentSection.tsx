import { Link } from "react-router-dom";
import { usePaymentLink } from "@/hooks/useSettings";
import { CreditCard, Shield, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const PaymentSection = () => {
  const { data: paymentLink } = usePaymentLink();

  const handlePaymentClick = () => {
    if (paymentLink) {
      window.open(paymentLink, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary/80">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
            <CreditCard className="w-4 h-4 text-primary-foreground" />
            <span className="text-primary-foreground font-semibold text-sm">
              Zona de Pagos
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            Realiza tus Pagos de Forma Segura
          </h2>

          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Accede a nuestra pasarela de pagos segura para realizar tus abonos y pagos
            de cuotas. Serás redirigido a una plataforma certificada.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button
              onClick={handlePaymentClick}
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 font-semibold"
            >
              <CreditCard className="w-5 h-5 mr-2" />
              Ir a Zona de Pagos
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>

            <Link to="/zona-pagos">
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-white/10"
              >
                Más información
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-primary-foreground/70">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Transacción segura</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="w-4 h-4" />
              <span>Compatible con PSE</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Datos encriptados</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;
