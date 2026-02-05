import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CreditSimulator from "@/components/CreditSimulator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, BookOpen, GraduationCap, Percent, Calendar, ArrowLeft, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";
import { contactFormDocenteSchema, type ContactFormDocente } from "@/lib/validations";
import segmentImage from "@/assets/segment-docente.jpg";
import ProductShowcase from "@/components/ProductShowcase";
import Pagadurias from "@/components/Pagadurias";

const benefits = [
  {
    icon: Percent,
    title: "Condiciones especiales",
    description: "Créditos diseñados para educadores del sector público y privado",
  },
  {
    icon: Calendar,
    title: "Plazos flexibles",
    description: "Hasta 144 meses para que tu cuota se ajuste a tu presupuesto",
  },
  {
    icon: GraduationCap,
    title: "Sin papeleos",
    description: "Proceso 100% digital, sin filas ni trámites presenciales",
  },
  {
    icon: BookOpen,
    title: "Crédito educativo",
    description: "Financiamiento para estudios de posgrado o especialización",
  },
];

const requirements = [
  "Ser docente activo del sector público o privado",
  "Cédula de ciudadanía vigente",
  "Certificado laboral con fecha reciente (máximo 30 días)",
  "Desprendibles de nómina de los últimos 3 meses",
  "Antigüedad mínima de 1 año en la institución",
];

const Docente = () => {
  const [formData, setFormData] = useState<ContactFormDocente>({
    nombre: "",
    telefono: "",
    email: "",
    institucion: "",
    mensaje: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormDocente, string>>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = contactFormDocenteSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormDocente, string>> = {};
      result.error.errors.forEach((error) => {
        const field = error.path[0] as keyof ContactFormDocente;
        fieldErrors[field] = error.message;
      });
      setErrors(fieldErrors);
      toast.error("Por favor corrige los errores en el formulario");
      return;
    }

    setErrors({});
    toast.success("¡Solicitud enviada! Un asesor te contactará pronto.");
    setFormData({ nombre: "", telefono: "", email: "", institucion: "", mensaje: "" });
  };

  // Color de acento para Docentes: Azul educativo
  const accentBg = "bg-blue-500/10";
  const accentText = "text-blue-600";
  const accentBorder = "border-blue-500/30";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Navegación rápida */}
        <div className="container py-4">
          <div className="flex items-center gap-4 flex-wrap">
            <Link to="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Volver al inicio
              </Button>
            </Link>
            <div className="h-4 w-px bg-border hidden sm:block" />
            <div className="flex gap-2 flex-wrap">
              <Link to="/pensionado">
                <Button variant="outline" size="sm" className="text-xs">Zona Pensionados</Button>
              </Link>
              <Link to="/fuerza-publica">
                <Button variant="outline" size="sm" className="text-xs">Zona Fuerza Pública</Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Section - Con imagen y color distintivo */}
        <section className="py-12 md:py-20 relative overflow-hidden">
          {/* Background con imagen del segmento */}
          <div className="absolute inset-0">
            <img
              src={segmentImage}
              alt="Docente en aula"
              className="w-full h-full object-cover opacity-15"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-background to-background" />
          </div>

          <div className="container relative">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-6">
                {/* Badge con color distintivo */}
                <div className={`inline-flex items-center gap-2 px-4 py-2 ${accentBg} ${accentBorder} border rounded-full`}>
                  <GraduationCap className={`w-4 h-4 ${accentText}`} />
                  <span className={`${accentText} font-semibold text-sm`}>
                    Créditos para Docentes
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Apoyamos a quienes{" "}
                  <span className={accentText}>transforman vidas</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground">
                  Como educador, inspiras el futuro de Colombia. En TRUFI creemos en tu
                  segundo aire financiero, incluso si estás reportado.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    variant="cta"
                    size="xl"
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Solicitar Ahora
                  </Button>
                  <Button variant="outline" size="xl">
                    Hablar con un Asesor
                  </Button>
                </div>
              </div>
              <div className="lg:justify-self-end w-full max-w-md mx-auto lg:mx-0">
                <CreditSimulator />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section - Mayor padding */}
        <section className="py-14 md:py-20">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Beneficios Exclusivos para Educadores
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`bg-card border ${accentBorder} rounded-2xl p-7 text-center hover:shadow-elevated transition-all duration-300`}
                >
                  <div className={`w-14 h-14 ${accentBg} rounded-xl flex items-center justify-center mx-auto mb-5`}>
                    <benefit.icon className={`w-7 h-7 ${accentText}`} />
                  </div>
                  <h3 className="font-bold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements Section - Mayor padding */}
        <section className="py-14 md:py-20 bg-blue-50/50">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
                Requisitos para Docentes
              </h2>
              <div className={`bg-card border ${accentBorder} rounded-2xl p-8 md:p-10`}>
                <ul className="space-y-5">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className={`w-7 h-7 ${accentBg} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <Check className={`w-4 h-4 ${accentText}`} />
                      </div>
                      <span className="text-foreground text-base leading-relaxed">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Product Showcase */}
        <ProductShowcase />

        {/* Pagadurias */}
        <Pagadurias />

        {/* Formulario de Asistencia - Más discreto */}
        <section className="py-14 md:py-20 bg-muted/40">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                  ¿Necesitas ayuda personalizada?
                </h2>
                <p className="text-muted-foreground text-sm">
                  Déjanos tus datos y un asesor especializado te contactará
                </p>
              </div>

              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-7 md:p-9 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Nombre completo</label>
                    <Input
                      placeholder="Tu nombre"
                      value={formData.nombre}
                      onChange={(e) => {
                        setFormData({ ...formData, nombre: e.target.value });
                        if (errors.nombre) setErrors({ ...errors, nombre: undefined });
                      }}
                      className={errors.nombre ? "border-destructive" : ""}
                      maxLength={100}
                    />
                    {errors.nombre && <p className="text-xs text-destructive">{errors.nombre}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Teléfono</label>
                    <Input
                      placeholder="Tu teléfono"
                      type="tel"
                      value={formData.telefono}
                      onChange={(e) => {
                        setFormData({ ...formData, telefono: e.target.value });
                        if (errors.telefono) setErrors({ ...errors, telefono: undefined });
                      }}
                      className={errors.telefono ? "border-destructive" : ""}
                      maxLength={20}
                    />
                    {errors.telefono && <p className="text-xs text-destructive">{errors.telefono}</p>}
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Correo electrónico</label>
                    <Input
                      placeholder="tu@email.com"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      className={errors.email ? "border-destructive" : ""}
                      maxLength={255}
                    />
                    {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Institución educativa</label>
                    <Input
                      placeholder="Nombre de tu institución"
                      value={formData.institucion}
                      onChange={(e) => {
                        setFormData({ ...formData, institucion: e.target.value });
                        if (errors.institucion) setErrors({ ...errors, institucion: undefined });
                      }}
                      className={errors.institucion ? "border-destructive" : ""}
                      maxLength={200}
                    />
                    {errors.institucion && <p className="text-xs text-destructive">{errors.institucion}</p>}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Mensaje (opcional)</label>
                  <Textarea
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                    value={formData.mensaje}
                    onChange={(e) => {
                      setFormData({ ...formData, mensaje: e.target.value });
                      if (errors.mensaje) setErrors({ ...errors, mensaje: undefined });
                    }}
                    className={errors.mensaje ? "border-destructive" : ""}
                    rows={3}
                    maxLength={1000}
                  />
                  {errors.mensaje && <p className="text-xs text-destructive">{errors.mensaje}</p>}
                </div>
                <Button type="submit" variant="outline" size="lg" className="w-full gap-2">
                  <Send className="w-4 h-4" />
                  Solicitar Asistencia
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* Special Offer Section */}
        <section className="py-14 md:py-20 bg-muted/30">
          <div className="container">
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 border border-blue-200 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                🎓 Crédito para Estudios de Posgrado
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Financia tu maestría o especialización con condiciones especiales.
                Invierte en tu desarrollo profesional y aumenta tu impacto como educador.
              </p>
              <Button
                size="xl"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Conocer Más
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-14 md:py-20 bg-gradient-to-br from-blue-600 to-blue-700">
          <div className="container text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Tu dedicación merece reconocimiento
            </h2>
            <p className="text-white/90 mb-8 max-w-xl mx-auto">
              Únete a miles de docentes que ya confían en TRUFI para su segundo aire financiero.
            </p>
            <Button
              size="xl"
              className="bg-white text-blue-600 hover:bg-white/90 font-bold"
            >
              Solicitar Crédito Ahora
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Docente;
