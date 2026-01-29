import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { usePaymentLink } from "@/hooks/useSettings";
import { CreditCard, Smartphone, Building2, QrCode, Shield, Clock, HelpCircle, ExternalLink } from "lucide-react";

const paymentMethods = [
  {
    icon: CreditCard,
    title: "Tarjeta de Crédito/Débito",
    description: "Visa, Mastercard, American Express",
    action: "Pagar con Tarjeta",
  },
  {
    icon: Building2,
    title: "PSE - Transferencia Bancaria",
    description: "Débito directo desde tu banco",
    action: "Pagar con PSE",
  },
  {
    icon: Smartphone,
    title: "Nequi o Daviplata",
    description: "Paga desde tu billetera digital",
    action: "Pagar con Billetera",
  },
  {
    icon: QrCode,
    title: "Pago en Efectivo",
    description: "Efecty, Baloto, Punto Red",
    action: "Generar Código",
  },
];

const faqs = [
  {
    question: "¿Cuándo se aplica mi pago?",
    answer:
      "Los pagos con tarjeta y PSE se aplican inmediatamente. Los pagos en efectivo pueden tardar hasta 24 horas hábiles en reflejarse.",
  },
  {
    question: "¿Puedo pagar más de una cuota?",
    answer:
      "Sí, puedes realizar abonos extraordinarios o pagar varias cuotas anticipadas sin ningún recargo adicional.",
  },
  {
    question: "¿Qué pasa si pago después de la fecha límite?",
    answer:
      "Se generan intereses de mora. Te recomendamos configurar recordatorios o activar el débito automático para evitar olvidos.",
  },
  {
    question: "¿Cómo activo el débito automático?",
    answer:
      "Puedes activarlo contactando a nuestros asesores por WhatsApp o llamando a nuestra línea de atención.",
  },
];

const ZonaPagos = () => {
  const { data: paymentLink } = usePaymentLink();

  const handleExternalPayment = () => {
    if (paymentLink) {
      window.open(paymentLink, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-primary/5 to-background">
          <div className="container text-center max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <CreditCard className="w-4 h-4 text-primary" />
              <span className="text-primary font-semibold text-sm">Zona de Pagos</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Paga tu cuota de forma <span className="text-primary">rápida y segura</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Múltiples opciones de pago para tu comodidad. Elige el método que prefieras.
            </p>
          </div>
        </section>

        {/* Quick Access */}
        <section className="py-8 bg-muted/30">
          <div className="container">
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              <div className="flex items-center gap-2 text-sm">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-foreground font-medium">Pagos 100% seguros</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-foreground font-medium">Aplicación inmediata</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CreditCard className="w-5 h-5 text-primary" />
                <span className="text-foreground font-medium">Sin costos adicionales</span>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="py-12 md:py-16">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              Selecciona tu método de pago
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              Ingresa tu número de cédula para consultar tu saldo y realizar el pago
            </p>

            {/* ID Input */}
            <div className="max-w-md mx-auto mb-12">
              <div className="bg-card border border-border rounded-2xl p-6">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Número de Cédula
                </label>
                <input
                  type="text"
                  placeholder="Ingresa tu número de cédula"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                />
                <Button variant="hero" className="w-full mt-4" onClick={handleExternalPayment}>
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Ir a Pasarela de Pago Segura
                </Button>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  Serás redirigido a una plataforma de pago certificada
                </p>
              </div>
            </div>

            {/* Payment Options Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {paymentMethods.map((method, index) => (
                <div
                  key={index}
                  className="bg-card border-2 border-border hover:border-primary rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-elevated group cursor-pointer"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <method.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{method.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{method.description}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    {method.action}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Payment Info */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Payment Details */}
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Información para Transferencias
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Banco</span>
                    <span className="font-medium text-foreground">Bancolombia</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Tipo de Cuenta</span>
                    <span className="font-medium text-foreground">Ahorros</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Número</span>
                    <span className="font-medium text-foreground">XXX-XXX-XXXXX</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Titular</span>
                    <span className="font-medium text-foreground">TRUFI S.A.S.</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">NIT</span>
                    <span className="font-medium text-foreground">XXX.XXX.XXX-X</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-4 p-3 bg-muted/50 rounded-lg">
                  Importante: Incluye tu número de cédula en la referencia del pago.
                </p>
              </div>

              {/* Auto Debit */}
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  ¿Cansado de recordar fechas?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Activa el débito automático y olvídate de los pagos manuales. Tu cuota se
                  descontará automáticamente de tu cuenta o tarjeta cada mes.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "Sin cargos adicionales",
                    "Evita intereses de mora",
                    "Cancela cuando quieras",
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2 text-foreground">
                      <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center">
                        <span className="text-primary text-xs">✓</span>
                      </div>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Button variant="hero" className="w-full">
                  Activar Débito Automático
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <HelpCircle className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-foreground">Preguntas Frecuentes</h2>
              </div>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-card border border-border rounded-xl p-5">
                    <h3 className="font-bold text-foreground mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Support CTA */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-primary to-primary/80">
          <div className="container text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              ¿Necesitas ayuda con tu pago?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Nuestro equipo de soporte está disponible para asistirte en cualquier momento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="xl">
                Escribir por WhatsApp
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Llamar a Soporte
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ZonaPagos;
