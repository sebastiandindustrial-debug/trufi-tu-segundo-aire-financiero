import { Armchair, BookOpen, Shield } from "lucide-react";

const audiences = [
  {
    id: "pensionado",
    title: "Soy Pensionado",
    description: "Créditos diseñados para tu tranquilidad",
    icon: Armchair,
    color: "from-primary to-primary/80",
  },
  {
    id: "docente",
    title: "Soy Docente",
    description: "Beneficios exclusivos para educadores",
    icon: BookOpen,
    color: "from-primary/90 to-primary/70",
  },
  {
    id: "fuerza-publica",
    title: "Soy Fuerza Pública",
    description: "Condiciones especiales para héroes",
    icon: Shield,
    color: "from-primary/80 to-primary/60",
  },
];

const AudienceSegmentation = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            ¿A qué grupo perteneces?
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Selecciona tu perfil para ver beneficios personalizados
          </p>
        </div>

        {/* Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {audiences.map((audience) => (
            <button
              key={audience.id}
              className="group relative bg-card border-2 border-border hover:border-primary rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-primary/30 text-left min-h-[180px] md:min-h-[200px]"
              aria-label={`Seleccionar ${audience.title}`}
            >
              {/* Icon Container */}
              <div
                className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${audience.color} flex items-center justify-center mb-4 shadow-trufi group-hover:scale-110 transition-transform duration-300`}
              >
                <audience.icon className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {audience.title}
              </h3>
              <p className="text-muted-foreground text-sm md:text-base">
                {audience.description}
              </p>

              {/* Hover Arrow */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-primary-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSegmentation;
