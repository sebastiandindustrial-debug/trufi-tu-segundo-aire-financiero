import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Copy, Check, MessageCircle, Phone, HelpCircle, CreditCard, ChevronDown } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Cuándo se aplica mi pago?",
    answer: "Los pagos con tarjeta y PSE se aplican inmediatamente. Los pagos en efectivo pueden tardar hasta 24 horas hábiles en reflejarse."
  },
  {
    question: "¿Puedo pagar más de una cuota?",
    answer: "Sí, puedes realizar abonos extraordinarios o pagar varias cuotas anticipadas sin ningún recargo adicional."
  },
  {
    question: "¿Qué pasa si pago después de la fecha límite?",
    answer: "Se generan intereses de mora. Te recomendamos configurar recordatorios o activar el débito automático para evitar olvidos."
  },
  {
    question: "¿Cómo activo el débito automático?",
    answer: "Puedes activarlo contactando a nuestros asesores por WhatsApp o llamando a nuestra línea de atención."
  },
];

const ZonaPagos = () => {
  const [copied, setCopied] = useState("");

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    toast.success(`${label} copiado al portapapeles`);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden font-sans">
      <Header />

      {/* Peaceful Background */}
      <div className="absolute inset-0 z-0 h-[70vh] lg:h-[80vh]">
        <img
          src="/happy_customer_payment.png"
          alt="Cliente feliz al día"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-slate-50" />
      </div>

      <main className="relative z-10 pt-28 pb-16 md:pt-36">
        <div className="container px-4 md:px-6">

          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/20 shadow-lg animate-fade-in">
              <CreditCard className="w-4 h-4 text-emerald-400" />
              <span className="text-white font-semibold text-sm tracking-wide">Zona de Pagos</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              Tranquilidad en tus <span className="text-emerald-400">Pagos</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Gestiona tus cuotas de manera sencilla y segura. Elige la opción que mejor se adapte a ti y vive sin preocupaciones.
            </p>
          </div>

          {/* Cards Section */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto mb-20 items-stretch">

            {/* 1. Bank Transfer Info Card */}
            <div className="bg-white/80 backdrop-blur-xl border border-white/50 rounded-[2.5rem] p-8 md:p-10 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary/40 to-primary/10" />

              <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                  <Building2Icon className="w-5 h-5" />
                </span>
                Información para Transferencias
              </h3>

              <div className="space-y-6">
                <InfoRow label="Banco" value="Bancolombia" />
                <InfoRow label="Tipo de Cuenta" value="Ahorros" />

                <div className="flex flex-col gap-1 group/copy">
                  <span className="text-sm font-medium text-slate-400 uppercase tracking-wider text-[11px]">Número de Cuenta</span>
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-mono font-semibold text-slate-700">XXX-XXX-XXXXXX</span>
                    <button
                      onClick={() => copyToClipboard("XXX-XXX-XXXXXX", "Número de cuenta")}
                      className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-primary"
                    >
                      {copied === "Número de cuenta" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <InfoRow label="Titular" value="TRUFI S.A.S." />
                <InfoRow label="NIT" value="900.XXX.XXX-X" />
              </div>

              <div className="mt-8 p-4 bg-amber-50 rounded-2xl border border-amber-100/50 flex gap-3 text-amber-800 text-sm leading-relaxed">
                <div className="w-1 bg-amber-200 rounded-full flex-shrink-0" />
                <p><span className="font-bold">Importante:</span> Por favor, incluye tu número de cédula en la referencia o descripción del pago para identificarlo correctamente.</p>
              </div>
            </div>

            {/* 2. Auto-Debit Card */}
            <div className="bg-gradient-to-br from-[#F5F3FF] to-white border border-primary/10 rounded-[2.5rem] p-8 md:p-10 shadow-xl shadow-primary/5 hover:transform hover:scale-[1.01] transition-all duration-300 relative overflow-hidden flex flex-col justify-between">
              {/* Decorative background circle */}
              {/* Decorative background image */}
              <div className="absolute -bottom-10 -right-10 w-64 h-64 md:w-72 md:h-72 opacity-20 md:opacity-100 mix-blend-multiply pointer-events-none">
                <img
                  src="/asesora_pagos.png"
                  alt="Asesora de servicio"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4 tracking-tight leading-8">
                  ¿Cansado de recordar <br /> las fechas de pago?
                </h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Activa el débito automático y olvídate de los pagos manuales. Tu cuota se descontará automáticamente cada mes.
                </p>

                <ul className="space-y-4 mb-10">
                  {["Sin cargos adicionales", "Evita intereses de mora", "Cancela cuando quieras"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-primary stroke-[3]" />
                      </span>
                      <span className="text-slate-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto relative z-10">
                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-14 rounded-2xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all text-base"
                >
                  Activar Débito Automático
                </Button>
                <p className="text-center text-xs text-slate-400 mt-4">
                  Contactarás a un asesor para la activación
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-slate-800 mb-8 flex items-center justify-center gap-2">
              <HelpCircle className="w-6 h-6 text-primary/60" />
              Preguntas Frecuentes
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white/60 backdrop-blur-sm border border-slate-200/60 rounded-2xl px-6 data-[state=open]:bg-white data-[state=open]:shadow-md transition-all duration-300"
                >
                  <AccordionTrigger className="text-slate-700 hover:text-primary font-semibold text-left py-5 text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed pb-6 text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

// Helper component for Bank Info rows
const InfoRow = ({ label, value }: { label: string, value: string }) => (
  <div className="flex flex-col gap-1 border-b border-slate-100 pb-3 last:border-0 last:pb-0">
    <span className="text-sm font-medium text-slate-400 uppercase tracking-wider text-[11px]">{label}</span>
    <span className="text-lg font-medium text-slate-700">{value}</span>
  </div>
);

// Helper Icon
const Building2Icon = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
    <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
    <path d="M10 6h4" />
    <path d="M10 10h4" />
    <path d="M10 14h4" />
    <path d="M10 18h4" />
  </svg>
)

export default ZonaPagos;

