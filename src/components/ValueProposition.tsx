import { Zap, Eye, Users, Shield } from "lucide-react";
const values = [{
  icon: Zap,
  title: "Agilidad sin Complicaciones",
  description: "Proceso 100% digital. Sin filas, sin papeleos innecesarios. Tu tiempo es valioso y lo respetamos."
}, {
  icon: Eye,
  title: "Transparencia Total",
  description: "Conoce tu tasa, cuota y condiciones desde el primer momento. Sin letras pequeñas ni sorpresas."
}, {
  icon: Users,
  title: "Acompañamiento Personalizado",
  description: "Un asesor dedicado te guía en cada paso. Porque entendemos que cada situación es única."
}, {
  icon: Shield,
  title: "Seguridad Certificada",
  description: "Validación biométrica avanzada protege tu identidad. Tu tranquilidad es nuestra prioridad."
}];
const ValueProposition = () => {
  return <section id="beneficios" className="py-20 md:py-28 bg-[#413659] text-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            ¿Por qué elegirnos?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
            Crédito de libranza pensado{" "}
            <span className="text-gradient text-primary-foreground">para ti</span>
          </h2>
          <p className="text-lg text-primary-foreground">
            En TRUFI creemos en la inclusión financiera con un enfoque humano. 
            Te acompañamos para que recuperes tu tranquilidad económica.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => <div key={index} className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </div>)}
        </div>

        {/* Trust Statement */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            Más de <span className="font-bold text-foreground">5,000 colombianos</span> han 
            recuperado su segundo aire financiero con TRUFI
          </p>
        </div>
      </div>
    </section>;
};
export default ValueProposition;