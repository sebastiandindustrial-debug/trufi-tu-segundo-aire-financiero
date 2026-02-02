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
    
    // Validate form data using zod schema
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
    
    // Clear errors on successful validation
    setErrors({});
    toast.success("¡Solicitud enviada! Un asesor te contactará pronto.");
    setFormData({ nombre: "", telefono: "", email: "", institucion: "", mensaje: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 md:pt-28">
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
                <Button variant="outline" size="sm">Zona Pensionados</Button>
              </Link>
              <Link to="/fuerza-publica">
                <Button variant="outline" size="sm">Zona Fuerza Pública</Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-primary/5 to-background">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                  <span className="text-primary font-semibold text-sm">
                    Créditos para Docentes
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Apoyamos a quienes{" "}
                  <span className="text-primary">transforman vidas</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground">
                  Como educador, inspiras el futuro de Colombia. En TRUFI creemos en tu 
                  segundo aire financiero, incluso si estás reportado.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="xl">
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

        {/* Benefits Section */}
        <section className="py-12 md:py-16">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              Beneficios Exclusivos para Educadores
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-elevated transition-shadow"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-12 md:py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                Requisitos para Docentes
              </h2>
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
                <ul className="space-y-4">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Formulario de Asistencia */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Solicita Asistencia Personalizada
                </h2>
                <p className="text-muted-foreground">
                  Déjanos tus datos y un asesor especializado te contactará
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Nombre completo</label>
                    <Input 
                      placeholder="Tu nombre"
                      value={formData.nombre}
                      onChange={(e) => {
                        setFormData({...formData, nombre: e.target.value});
                        if (errors.nombre) setErrors({...errors, nombre: undefined});
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
                        setFormData({...formData, telefono: e.target.value});
                        if (errors.telefono) setErrors({...errors, telefono: undefined});
                      }}
                      className={errors.telefono ? "border-destructive" : ""}
                      maxLength={20}
                    />
                    {errors.telefono && <p className="text-xs text-destructive">{errors.telefono}</p>}
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Correo electrónico</label>
                    <Input 
                      placeholder="tu@email.com"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({...formData, email: e.target.value});
                        if (errors.email) setErrors({...errors, email: undefined});
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
                        setFormData({...formData, institucion: e.target.value});
                        if (errors.institucion) setErrors({...errors, institucion: undefined});
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
                      setFormData({...formData, mensaje: e.target.value});
                      if (errors.mensaje) setErrors({...errors, mensaje: undefined});
                    }}
                    className={errors.mensaje ? "border-destructive" : ""}
                    rows={4}
                    maxLength={1000}
                  />
                  {errors.mensaje && <p className="text-xs text-destructive">{errors.mensaje}</p>}
                </div>
                <Button type="submit" variant="cta" size="lg" className="w-full gap-2">
                  <Send className="w-4 h-4" />
                  Solicitar Asistencia
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* Special Offer Section */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container">
            <div className="bg-gradient-to-br from-secondary/20 to-secondary/5 border border-secondary/30 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                🎓 Crédito para Estudios de Posgrado
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Financia tu maestría o especialización con condiciones especiales. 
                Invierte en tu desarrollo profesional y aumenta tu impacto como educador.
              </p>
              <Button variant="gold" size="xl">
                Conocer Más
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-primary to-primary/80">
          <div className="container text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Tu dedicación merece reconocimiento
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Únete a miles de docentes que ya confían en TRUFI para su segundo aire financiero.
            </p>
            <Button variant="secondary" size="xl">
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
