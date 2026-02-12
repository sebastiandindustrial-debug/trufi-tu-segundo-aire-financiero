import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CreditSimulator from "@/components/CreditSimulator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, Shield, Award, Clock, Star, ArrowLeft, Send } from "lucide-react";
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
    title: "Honor que Cuenta",
    description: "Tu servicio a la patria tiene valor. Tasas preferenciales por convenio.",
  },
  {
    icon: Clock,
    title: "Agilidad Táctica",
    description: "Desembolso express. Procesos claros y sin rodeos, como debe ser.",
  },
  {
    icon: Shield,
    title: "Respaldo Total",
    description: "Protegemos tus finanzas con la misma firmeza con la que tú proteges al país.",
  },
  {
    icon: Star,
    title: "Familias Seguras",
    description: "Beneficios extensibles a tu núcleo familiar. Bienestar para los tuyos.",
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
      <main className="pt-0">

        {/* Hero Section - Fuerza Pública */}
        <section className="relative min-h-[600px] lg:min-h-[80vh] pt-20 md:pt-28 pb-8 md:pb-12 overflow-hidden flex flex-col justify-center">
          {/* Background con imagen del segmento */}
          <div className="absolute inset-0 z-0">
            <img
              src={segmentImage}
              alt="Miembro de la Fuerza Pública"
              className="w-full h-full object-cover"
            />
            {/* Dark Emerald Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-900/60 to-transparent" />
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
                <div className={`inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 backdrop-blur-md border border-emerald-500/20 rounded-full`}>
                  <Shield className={`w-4 h-4 text-emerald-300`} />
                  <span className={`text-emerald-100 font-semibold text-sm tracking-wide`}>
                    Fuerza Pública
                  </span>
                </div>

                <div className="space-y-3">
                  <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight">
                    Honor y <br />
                    Respaldo para ti
                  </h1>
                  <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-lg">
                    Proteger al país es tu misión, proteger tu estabilidad financiera es la nuestra. Créditos diseñados con el respeto que mereces.
                  </p>
                </div>

                {/* Highlight: Convenio Especial */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 flex items-center gap-4 hover:bg-white/10 transition-colors cursor-default">
                  <div className="bg-emerald-600 rounded-full p-2.5 text-white shadow-lg">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Convenio Especial Casur y Cremil</h4>
                    <p className="text-xs text-white/70">Tasas preferenciales y descuetos exclusivos por libranza.</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-1">
                  <Button
                    variant="cta"
                    size="lg"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base px-8 py-6 shadow-xl shadow-emerald-900/20"
                  >
                    Solicitar con Honor
                  </Button>
                </div>
              </div>
              <div className="lg:justify-self-end w-full max-w-md mx-auto lg:mx-0 scale-90 md:scale-100 origin-top">
                <CreditSimulator />
              </div>
            </div>
          </div>
        </section>

        {/* Institutions Section - Unificada con color verde */}
        <section className="py-6 bg-emerald-800">
          <div className="container">
            <p className="text-center text-white/80 mb-3 text-xs md:text-sm">
              Convenios activos para personal activo y retirado:
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
        <section className="py-10 md:py-14 bg-emerald-50/50 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-200/20 rounded-fullblur-3xl translate-x-1/2 translate-y-1/2"></div>
          <div className="container">
            <div className="max-w-4xl mx-auto bg-card border border-emerald-100 shadow-xl rounded-3xl p-6 md:p-10 relative">
              <div className="absolute top-4 left-4 text-5xl text-emerald-200 font-serif opacity-50">"</div>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="shrink-0">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-emerald-100 shadow-inner">
                    <img src="/assets/segment-fuerza-publica.jpg" alt="Jorge R" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <p className="text-base md:text-lg text-foreground font-medium italic mb-3">
                    Serví 25 años a mi patria y cuando necesité apoyo, la banca tradicional me cerró las puertas. En TRUFI valoraron mi hoja de vida y me apoyaron para iniciar mi negocio de seguridad. ¡Firmeza y cumplimiento!
                  </p>
                  <div>
                    <h4 className="font-bold text-emerald-800">Sargento Mayor (r) Jorge R.</h4>
                    <p className="text-xs text-muted-foreground">Ejército Nacional</p>
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
                Requisitos para Miembros de la Fuerza Pública
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
          <ProductShowcase />
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
                <Button type="submit" variant="outline" size="sm" className="w-full gap-2 py-5">
                  <Send className="w-4 h-4" />
                  Solicitar Asistencia
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-10 md:py-14 bg-gradient-to-br from-emerald-600 to-emerald-700 relative overflow-hidden">
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
              className="bg-white text-emerald-700 hover:bg-white/90 font-bold shadow-xl"
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
