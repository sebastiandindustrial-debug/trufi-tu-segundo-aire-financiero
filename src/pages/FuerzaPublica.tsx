import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CreditSimulator from "@/components/CreditSimulator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Check, Shield, Award, Clock, Star, ArrowLeft, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";
import { contactFormFuerzaPublicaSchema, type ContactFormFuerzaPublica } from "@/lib/validations";

import ProductShowcase from "@/components/ProductShowcase";
import Pagadurias from "@/components/Pagadurias";
import { supabase } from "@/integrations/supabase/client";

const benefits = [
  {
    icon: Award,
    title: "Honor que Perdura",
    description: "Tu legado tiene valor. Tasas preferenciales exclusivas para pensionados y asignación de retiro.",
  },
  {
    icon: Clock,
    title: "Disfruta tu Tiempo",
    description: "Desembolso ágil para que inviertas en lo que realmente importa en esta nueva etapa.",
  },
  {
    icon: Shield,
    title: "Respaldo Garantizado",
    description: "Créditos protegidos y seguros, respaldados por tu entidad pagadora (CASUR/CREMIL).",
  },
  {
    icon: Star,
    title: "Bienestar Familiar",
    description: "Beneficios diseñados para mejorar tu calidad de vida y la de los tuyos.",
  },
];

const requirements = [
  "Ser pensionado de las Fuerzas Armadas o Policía Nacional",
  "Tener asignación de retiro activa",
  "Cédula de ciudadanía",
  "Desprendible de pago de los últimos 3 meses (Asignación de retiro)",
  "Sin codeudor",
];

const institutions = [
  "CREMIL (Ejército/Fuerza Aérea/Armada)",
  "CASUR (Policía Nacional)",
  "Caja de Retiro de las FF.MM.",
  "TEGEN (Teso. General)",
];

const FuerzaPublica = () => {
  const [formData, setFormData] = useState<ContactFormFuerzaPublica>({
    nombre: "",
    telefono: "",
    email: "",
    institucion: "",
    mensaje: "",
    aceptaTerminos: false,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormFuerzaPublica, string>>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = contactFormFuerzaPublicaSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormFuerzaPublica, string>> = {};
      result.error.errors.forEach((error) => {
        const field = error.path[0] as keyof ContactFormFuerzaPublica;
        fieldErrors[field] = error.message;
      });
      setErrors(fieldErrors);
      toast.error("Por favor corrige los errores en el formulario");
      return;
    }

    try {
      const { error } = await supabase
        .from('leads')
        .insert([
          {
            nombre: formData.nombre,
            email: formData.email,
            telefono: formData.telefono,
            mensaje: formData.mensaje,
            segmento: 'Fuerza Publica',
            acepta_terminos: true
          }
        ]);

      if (error) throw error;

      setErrors({});
      toast.success("¡Solicitud enviada! Un asesor te contactará pronto.");
      setFormData({ nombre: "", telefono: "", email: "", institucion: "", mensaje: "" });

    } catch (error: any) {
      console.error('Error submitting form:', error);
      toast.error("Hubo un error al enviar tus datos", {
        description: "Por favor intenta nuevamente.",
      });
    }
  };

  // Color de acento para Fuerza Pública: Verde Militar (#5D6532)
  const accentBg = "bg-[#5D6532]/10";
  const accentText = "text-[#5D6532]";
  const accentBorder = "border-[#5D6532]/30";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-0">

        {/* Hero Section - Fuerza Pública */}
        <section className="relative min-h-[600px] lg:min-h-[80vh] pt-20 md:pt-28 pb-8 md:pb-12 overflow-hidden flex flex-col justify-center">
          {/* Background con imagen del segmento */}
          <div className="absolute inset-0 z-0">
            <img
              src="/lovable-uploads/policiamujer2.jpg"
              alt="Miembro de la Fuerza Pública"
              className="w-full h-full object-cover object-top"
            />
            {/* Military Green Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#5D6532]/65 via-[#5D6532]/35 to-transparent" />
          </div>

          <div className="container relative z-10 h-full flex flex-col">
            {/* Navegación rápida - Inside Hero */}
            <div className="mb-6 md:mb-8">
              <div className="flex items-center gap-4 flex-wrap">
                <Link to="/">
                  <Button variant="ghost" size="sm" className="gap-2 text-white/90 hover:text-white hover:bg-white/10 transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                    Volver al inicio
                  </Button>
                </Link>
                <div className="h-4 w-px bg-white/20 hidden sm:block" />
                <div className="flex gap-2 flex-wrap">
                  <Link to="/pensionado">
                    <Button variant="outline" size="sm" className="text-xs border-white/20 bg-white/5 text-white/90 hover:bg-white/10 hover:text-white backdrop-blur-sm transition-all">Zona Pensionados</Button>
                  </Link>
                  <Link to="/docente">
                    <Button variant="outline" size="sm" className="text-xs border-white/20 bg-white/5 text-white/90 hover:bg-white/10 hover:text-white backdrop-blur-sm transition-all">Zona Docentes</Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center flex-1">
              <div className="space-y-6 max-w-xl">
                {/* Badge con color distintivo */}
                <div className={`inline-flex items-center gap-2 px-4 py-1.5 bg-[#5D6532]/20 backdrop-blur-md border border-[#5D6532]/30 rounded-full`}>
                  <Shield className={`w-4 h-4 text-white`} />
                  <span className={`text-white font-semibold text-sm tracking-wide`}>
                    Pensionados Fuerza Pública
                  </span>
                </div>

                <div className="space-y-3">
                  <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight">
                    Honor y Tranquilidad <br />
                    en tu Retiro
                  </h1>
                  <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-lg">
                    Serviste a la patria con honor, ahora es nuestro turno de servirte a ti. Créditos exclusivos para veteranos y pensionados de la Fuerza Pública.
                  </p>
                </div>

                {/* Highlight: Convenio Especial */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 flex items-center gap-4 hover:bg-white/10 transition-colors cursor-default">
                  <div className="bg-[#5D6532] rounded-full p-2.5 text-white shadow-lg">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Convenio Especial CREMIL y CASUR</h4>
                    <p className="text-xs text-white/70">Descuentos exclusivos directo de tu asignación de retiro.</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-1">
                  <Button
                    variant="cta"
                    size="lg"
                    className="bg-[#5D6532] hover:bg-[#5D6532]/90 text-white font-bold text-base px-8 py-6 shadow-xl shadow-[#5D6532]/30"
                  >
                    Solicitar con Honor
                  </Button>
                </div>
              </div>
              <div id="credit-simulator" className="lg:justify-self-end w-full max-w-md mx-auto lg:mx-0 scale-90 md:scale-100 origin-top">
                <CreditSimulator />
              </div>
            </div>
          </div>
        </section>

        {/* Institutions Section - Unificada con color verde militar */}
        <section className="py-6 bg-[#5D6532]">
          <div className="container">
            <p className="text-center text-white/80 mb-3 text-xs md:text-sm">
              Convenios directos con las principales cajas de retiro:
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-5">
              {institutions.map((inst, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs md:text-sm font-medium text-white"
                >
                  {inst}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section - Facilidades para ti */}
        <section className="py-10 md:py-14">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Facilidades para ti
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`bg-card border ${accentBorder} rounded-2xl p-5 text-center hover:shadow-elevated transition-all duration-300 group`}
                >
                  <div className={`w-16 h-16 ${accentBg} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <benefit.icon className={`w-8 h-8 ${accentText}`} />
                  </div>
                  <h3 className="font-bold text-foreground mb-2 text-base">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof - Específico Fuerza Pública */}
        <section className="py-10 md:py-14 bg-[#5D6532]/5 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#5D6532]/10 rounded-fullblur-3xl translate-x-1/2 translate-y-1/2"></div>
          <div className="container">
            <div className="max-w-4xl mx-auto bg-card border border-[#5D6532]/20 shadow-xl rounded-3xl p-6 md:p-10 relative">
              <div className="absolute top-4 left-4 text-5xl text-[#5D6532]/20 font-serif opacity-50">"</div>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="shrink-0">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[#5D6532]/20 shadow-inner">
                    <img src="/assets/segment-fuerza-publica.jpg" alt="Jorge R" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <p className="text-base md:text-lg text-foreground font-medium italic mb-3">
                    Serví 25 años a mi patria y cuando necesité apoyo, la banca tradicional me cerró las puertas. En TRUFI valoraron mi hoja de vida y me apoyaron para iniciar mi negocio de seguridad. ¡Firmeza y cumplimiento!
                  </p>
                  <div>
                    <h4 className="font-bold text-[#5D6532]">Sargento Mayor (r) Jorge R.</h4>
                    <p className="text-xs text-muted-foreground">Pensionado Ejército Nacional</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-10 md:py-14">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                Requisitos para Pensionados Fuerza Pública
              </h2>
              <div className={`bg-card border ${accentBorder} rounded-2xl p-6 md:p-8`}>
                <ul className="space-y-4">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className={`w-6 h-6 ${accentBg} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <Check className={`w-3.5 h-3.5 ${accentText}`} />
                      </div>
                      <span className="text-foreground text-sm md:text-base leading-relaxed">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Product Showcase */}
        <div className="py-4">
          <ProductShowcase
            accentColor="#5D6532"
            data={{
              credito: {
                title: "Crédito para",
                highlight: "Héroes",
                description: "¿Un proyecto personal, negocio familiar o unificación de deudas? Reconocemos tu servicio con tasas preferenciales.",
                features: ["Descuento directo de nómina/asignación", "Sin codeudor (según grado/rango)", "Atención prioritaria", "Plazos extendidos"],
                image: "/lovable-uploads/policialibreinver.jpg",
                imageClassName: "object-right-bottom",
                badge: "Honor y Servicio",
                badgeColor: "bg-[#5D6532]/10 text-[#5D6532]",
                badgeDotColor: "bg-[#5D6532]",
                titleColor: "text-[#5D6532]",
                checkColor: "text-[#5D6532] fill-[#5D6532]/10",
                buttonColor: "bg-[#5D6532] hover:bg-[#5D6532]/90",
                buttonShadow: "shadow-[#5D6532]/25 hover:shadow-[#5D6532]/40",
              },
              vivienda: {
                title: "Vivienda digna para",
                highlight: "Ti y tu Familia",
                description: "Haz realidad el sueño de tener vivienda propia o mejorar la actual. Tu estabilidad laboral es tu mejor garantía.",
                features: ["Financiación de vivienda nueva/usada", "Remodelación y acabados", "Estudio de títulos ágil", "Acompañamiento jurídico"],
                image: "/lovable-uploads/policiavivienda.jpg",
                badge: "Tu Hogar Seguro",
                badgeColor: "bg-[#5D6532]/10 text-[#5D6532]",
                badgeDotColor: "bg-[#5D6532]",
                titleColor: "text-[#5D6532]",
                checkColor: "text-[#5D6532] fill-[#5D6532]/10",
                buttonColor: "bg-[#5D6532] hover:bg-[#5D6532]/90",
                buttonShadow: "shadow-[#5D6532]/25 hover:shadow-[#5D6532]/40",
              },
              vehiculo: {
                title: "Vehículo para tu",
                highlight: "Movilidad",
                description: "Facilitamos la compra de tu vehículo particular o para negocio. Disfruta de la libertad que te mereces.",
                features: ["Vehículos comerciales y particulares", "Aprobación simplificada", "Tasas competitivas", "Plazos cómodos"],
                image: "/lovable-uploads/policiavehiculo.jpg",
                imageClassName: "object-center",
                badge: "Vehículo Propio",
                badgeColor: "bg-[#5D6532]/10 text-[#5D6532]",
                badgeDotColor: "bg-[#5D6532]",
                titleColor: "text-[#5D6532]",
                checkColor: "text-[#5D6532] fill-[#5D6532]/10",
                buttonColor: "bg-[#5D6532] hover:bg-[#5D6532]/90",
                buttonShadow: "shadow-[#5D6532]/25 hover:shadow-[#5D6532]/40",
              },
            }}
          />
        </div>

        {/* Pagadurias */}
        <div className="py-4">
          <Pagadurias segment="fuerza-publica" />
        </div>

        {/* Formulario de Asistencia */}
        <section className="py-10 md:py-14 bg-muted/40">
          <div className="container">
            <div className="max-w-xl mx-auto">
              <div className="text-center mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                  ¿Necesitas ayuda personalizada?
                </h2>
                <p className="text-muted-foreground text-sm">
                  Déjanos tus datos y un asesor especializado te contactará
                </p>
              </div>

              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-4 shadow-lg">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-foreground">Nombre completo</label>
                    <Input
                      placeholder="Tu nombre"
                      value={formData.nombre}
                      onChange={(e) => {
                        setFormData({ ...formData, nombre: e.target.value });
                        if (errors.nombre) setErrors({ ...errors, nombre: undefined });
                      }}
                      className={`h-9 ${errors.nombre ? "border-destructive" : ""}`}
                      maxLength={100}
                    />
                    {errors.nombre && <p className="text-xs text-destructive">{errors.nombre}</p>}
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-foreground">Teléfono</label>
                    <Input
                      placeholder="Tu teléfono"
                      type="tel"
                      value={formData.telefono}
                      onChange={(e) => {
                        setFormData({ ...formData, telefono: e.target.value });
                        if (errors.telefono) setErrors({ ...errors, telefono: undefined });
                      }}
                      className={`h-9 ${errors.telefono ? "border-destructive" : ""}`}
                      maxLength={20}
                    />
                    {errors.telefono && <p className="text-xs text-destructive">{errors.telefono}</p>}
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-foreground">Correo electrónico</label>
                    <Input
                      placeholder="tu@email.com"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      className={`h-9 ${errors.email ? "border-destructive" : ""}`}
                      maxLength={255}
                    />
                    {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-foreground">Institución que representas</label>
                    <Input
                      placeholder="Ej: Ejército Nacional"
                      value={formData.institucion}
                      onChange={(e) => {
                        setFormData({ ...formData, institucion: e.target.value });
                        if (errors.institucion) setErrors({ ...errors, institucion: undefined });
                      }}
                      className={`h-9 ${errors.institucion ? "border-destructive" : ""}`}
                      maxLength={200}
                    />
                    {errors.institucion && <p className="text-xs text-destructive">{errors.institucion}</p>}
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-foreground">Mensaje (opcional)</label>
                  <Textarea
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                    value={formData.mensaje}
                    onChange={(e) => {
                      setFormData({ ...formData, mensaje: e.target.value });
                      if (errors.mensaje) setErrors({ ...errors, mensaje: undefined });
                    }}
                    className={errors.mensaje ? "border-destructive" : ""}
                    rows={2}
                    maxLength={1000}
                  />
                  {errors.mensaje && <p className="text-xs text-destructive">{errors.mensaje}</p>}
                </div>

                <div className="flex items-start gap-2">
                  <Checkbox
                    id="terminos"
                    checked={formData.aceptaTerminos}
                    onCheckedChange={(checked) => {
                      setFormData({ ...formData, aceptaTerminos: checked === true });
                      if (errors.aceptaTerminos) setErrors({ ...errors, aceptaTerminos: undefined });
                    }}
                    className="mt-1"
                  />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="terminos"
                      className="text-xs text-muted-foreground font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Acepto la política de tratamiento de datos personales
                    </label>
                    {errors.aceptaTerminos && <p className="text-xs text-destructive">{errors.aceptaTerminos}</p>}
                  </div>
                </div>

                <Button type="submit" variant="outline" size="sm" className="w-full gap-2 py-5">
                  <Send className="w-4 h-4" />
                  Solicitar Asistencia
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-10 md:py-14 bg-[#5D6532] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/10 skew-x-12 translate-x-12"></div>
          <div className="container text-center relative z-10">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
              Tu servicio a Colombia tiene recompensa
            </h2>
            <p className="text-white/90 mb-6 max-w-lg mx-auto text-sm">
              Miles de miembros de la Fuerza Pública ya confían en TRUFI.
            </p>
            <Button
              size="lg"
              className="bg-white text-[#5D6532] hover:bg-white/90 font-bold shadow-xl"
            >
              Solicitar con Honor
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default FuerzaPublica;
