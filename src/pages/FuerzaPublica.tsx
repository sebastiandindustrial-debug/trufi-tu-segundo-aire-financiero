import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CreditSimulator from "@/components/CreditSimulator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, Shield, Award, Clock, Users, ArrowLeft, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";
import { contactFormFuerzaPublicaSchema, type ContactFormFuerzaPublica } from "@/lib/validations";
import segmentImage from "@/assets/segment-fuerza-publica.jpg";
import ProductShowcase from "@/components/ProductShowcase";
import Pagadurias from "@/components/Pagadurias";

const benefits = [
  {
    icon: Award,
    title: "Reconocemos tu servicio",
    description: "Condiciones especiales como agradecimiento a tu labor por Colombia",
  },
  {
    icon: Clock,
    title: "Desembolso express",
    description: "Aprobación y desembolso en tiempo récord",
  },
  {
    icon: Shield,
    title: "Respaldo institucional",
    description: "Convenios directos con las fuerzas armadas y de policía",
  },
  {
    icon: Users,
    title: "Beneficios familiares",
    description: "Extensibles a cónyuge e hijos dependientes",
  },
];

const requirements = [
  "Ser miembro activo o retirado de las Fuerzas Armadas o Policía Nacional",
  "Cédula de ciudadanía o tarjeta militar vigente",
  "Certificado de ingresos y retenciones",
  "Desprendible de pago de los últimos 3 meses",
  "Para retirados: Resolución de asignación de retiro",
];

const institutions = [
  "Ejército Nacional",
  "Armada Nacional",
  "Fuerza Aérea Colombiana",
  "Policía Nacional",
  "INPEC",
];

const FuerzaPublica = () => {
  const [formData, setFormData] = useState<ContactFormFuerzaPublica>({
    nombre: "",
    telefono: "",
    email: "",
    institucion: "",
    mensaje: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormFuerzaPublica, string>>>({});

  const handleSubmit = (e: React.FormEvent) => {
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

    setErrors({});
    toast.success("¡Solicitud enviada! Un asesor te contactará pronto.");
    setFormData({ nombre: "", telefono: "", email: "", institucion: "", mensaje: "" });
  };

  // Color de acento para Fuerza Pública: Verde oliva
  const accentBg = "bg-emerald-600/10";
  const accentText = "text-emerald-700";
  const accentBorder = "border-emerald-600/30";

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
              <Link to="/docente">
                <Button variant="outline" size="sm" className="text-xs">Zona Docentes</Button>
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
              alt="Miembro de la Fuerza Pública"
              className="w-full h-full object-cover opacity-15"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-background to-background" />
          </div>

          <div className="container relative">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-6">
                {/* Badge con color distintivo */}
                <div className={`inline-flex items-center gap-2 px-4 py-2 ${accentBg} ${accentBorder} border rounded-full`}>
                  <Shield className={`w-4 h-4 ${accentText}`} />
                  <span className={`${accentText} font-semibold text-sm`}>
                    Créditos para Fuerza Pública
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Respaldamos a quienes{" "}
                  <span className={accentText}>protegen a Colombia</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground">
                  Tu compromiso con la patria merece condiciones financieras especiales.
                  Créditos diseñados para personal activo y retirado de las Fuerzas Armadas y Policía Nacional.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    variant="cta"
                    size="xl"
                    className="bg-emerald-600 hover:bg-emerald-700"
                  >
                    Solicitar Ahora
                  </Button>
                  <Button variant="outline" size="xl">
                    Contactar Asesor
                  </Button>
                </div>
              </div>
              <div className="lg:justify-self-end w-full max-w-md mx-auto lg:mx-0">
                <CreditSimulator />
              </div>
            </div>
          </div>
        </section>

        {/* Institutions Section - Unificada con color verde */}
        <section className="py-8 bg-emerald-700">
          <div className="container">
            <p className="text-center text-white/80 mb-4 text-sm">
              Convenios activos para personal activo y retirado:
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {institutions.map((inst, index) => (
                <div
                  key={index}
                  className="px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-white"
                >
                  {inst}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section - Mayor padding */}
        <section className="py-14 md:py-20">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Beneficios para toda la Fuerza Pública
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
        <section className="py-14 md:py-20 bg-emerald-50/50">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
                Requisitos para Miembros de la Fuerza Pública
              </h2>
              <p className="text-center text-muted-foreground mb-10">
                Aplica tanto para personal activo como retirado
              </p>
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
                    <label className="text-sm font-medium text-foreground">Institución</label>
                    <Input
                      placeholder="Ej: Ejército Nacional"
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

        {/* CTA Section */}
        <section className="py-14 md:py-20 bg-gradient-to-br from-emerald-600 to-emerald-700">
          <div className="container text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Tu servicio a Colombia tiene recompensa
            </h2>
            <p className="text-white/90 mb-8 max-w-xl mx-auto">
              Miles de miembros de la Fuerza Pública ya confían en TRUFI. Únete y descubre
              por qué somos su aliado financiero preferido.
            </p>
            <Button
              size="xl"
              className="bg-white text-emerald-700 hover:bg-white/90 font-bold"
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

export default FuerzaPublica;
