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
    
    // Validate form data using zod schema
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
              <Link to="/docente">
                <Button variant="outline" size="sm">Zona Docentes</Button>
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
                    Créditos para Fuerza Pública
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Respaldamos a quienes{" "}
                  <span className="text-primary">protegen a Colombia</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground">
                  Tu compromiso con la patria merece condiciones financieras especiales. 
                  Créditos diseñados para personal activo y retirado de las Fuerzas Armadas y Policía Nacional.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="xl">
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

        {/* Institutions Section - Unificada */}
        <section className="py-8 bg-primary">
          <div className="container">
            <p className="text-center text-primary-foreground/80 mb-4 text-sm">
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

        {/* Benefits Section */}
        <section className="py-12 md:py-16">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              Beneficios para toda la Fuerza Pública
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

        {/* Requirements Section - Unificada para Activos y Retirados */}
        <section className="py-12 md:py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
                Requisitos para Miembros de la Fuerza Pública
              </h2>
              <p className="text-center text-muted-foreground mb-8">
                Aplica tanto para personal activo como retirado
              </p>
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
                    <label className="text-sm font-medium text-foreground">Institución</label>
                    <Input 
                      placeholder="Ej: Ejército Nacional"
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

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-primary to-primary/80">
          <div className="container text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Tu servicio a Colombia tiene recompensa
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Miles de miembros de la Fuerza Pública ya confían en TRUFI. Únete y descubre 
              por qué somos su aliado financiero preferido.
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

export default FuerzaPublica;
