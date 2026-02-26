import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Shield, Heart, Zap, Play, UserCheck, Target, Eye, Users, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const QuienesSomos = () => {
  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      <Header />
      <main>
        {/* --- Hero Section: El Impacto --- */}
        <section className="relative h-screen overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <video
              src="/lovable-uploads/videoquienessomos2.mp4"
              className="w-full h-full object-cover object-center animate-in fade-in duration-1000"
              autoPlay
              loop
              muted
              playsInline
            />
            {/* Gradient Overlay for "Nexo Dinámico" feel: Blue to Transparent to Warm */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-primary/30 to-transparent mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
          </div>

          <div className="container relative z-10 px-4 h-full flex flex-col justify-end pb-20">
            <div className="max-w-4xl text-white animate-in slide-in-from-left-10 fade-in duration-1000 delay-300 fill-mode-both text-left">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-archive leading-tight mb-4 drop-shadow-lg">
                Bienvenido a Trufi
              </h1>
            </div>
          </div>

          {/* Marquee Footer */}
          <div className="absolute bottom-0 left-0 right-0 bg-primary/90 backdrop-blur-md py-4 z-20 overflow-hidden border-t border-white/10">
            <div className="animate-marquee whitespace-nowrap flex gap-8 items-center">
              <span className="text-lg md:text-xl text-white font-medium px-4">
                Dejar de ser "un crédito más" para ser <span className="text-secondary font-bold">"Tu segunda oportunidad real"</span>.
              </span>
              <span className="text-white/30">•</span>
              <span className="text-lg md:text-xl text-white font-medium px-4">
                En TRUFI, no miramos cifras, miramos historias.
              </span>
              <span className="text-white/30">•</span>
              <span className="text-lg md:text-xl text-white font-medium px-4">
                Somos el puente para que pensionados y docentes recuperen su tranquilidad financiera.
              </span>
              <span className="text-white/30">•</span>
              <span className="text-lg md:text-xl text-white font-medium px-4">
                Dejar de ser "un crédito más" para ser <span className="text-secondary font-bold">"Tu segunda oportunidad real"</span>.
              </span>
              <span className="text-white/30">•</span>
              <span className="text-lg md:text-xl text-white font-medium px-4">
                En TRUFI, no miramos cifras, miramos historias.
              </span>
            </div>
          </div>
        </section>

        {/* --- Nuestra Tesis: Reincorporación Humana --- */}
        <section className="py-20 bg-background relative overflow-hidden">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center animate-in zoom-in-95 fade-in duration-1000 delay-200 viewport-trigger">
              <h2 className="text-3xl md:text-4xl font-bold font-archive text-primary mb-8">
                Nuestra Tesis: <span className="text-secondary-foreground">Reincorporación Humana</span>
              </h2>
              <div className="relative group cursor-default">
                <div className="absolute -left-2 -top-2 text-6xl text-primary/10 select-none group-hover:text-primary/20 transition-colors duration-500">"</div>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium transition-all duration-300 group-hover:text-foreground">
                  Si la banca tradicional te cerró la puerta, nosotros te damos la mano.
                  Nacimos para combatir la exclusión, no solo para hacer negocios.
                  Queremos llegar a ayudar a más colombianos a limpiar su historial crediticio.
                </p>
                <div className="absolute -right-2 -bottom-2 text-6xl text-primary/10 select-none transform rotate-180 group-hover:text-primary/20 transition-colors duration-500">"</div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Diferencial: El Asesor Humano (Cero Fricción) --- */}
        <section className="py-20 bg-muted/30 overflow-hidden">
          <div className="container px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative animate-in slide-in-from-left-10 fade-in duration-1000 delay-300">
                {/* Abstract Visual Representation of Human Connection */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-secondary/20 to-primary/20 rounded-full blur-3xl opacity-70 animate-pulse duration-3000"></div>
                <div className="relative bg-card border border-border/50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <UserCheck className="w-8 h-8 text-primary animate-bounce-slow" />
                    </div>
                    <div>
                      <h4 className="font-bold font-archive text-lg">Cero Complicaciones, Máxima Empatía</h4>
                      <p className="text-sm text-muted-foreground">Te escuchamos, no te juzgamos</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Olvídate de procesos fríos y burocráticos. En Trufi, combinamos tecnología avanzada con un toque humano para destrabar tu proceso y guiarte paso a paso.
                  </p>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-[1.02]">
                    Hablar con un asesor real
                  </Button>
                </div>
              </div>
              <div className="order-1 md:order-2 animate-in slide-in-from-right-10 fade-in duration-1000 delay-500">
                <h2 className="text-3xl md:text-4xl font-bold font-archive text-foreground mb-6">
                  El Diferencial del <span className="text-primary">Asesor Humano</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Tecnología para agilizar, humanos para comprender. En Trufi, la tecnología
                  es la herramienta, pero la empatía es el motor. Entendemos que cada reporte,
                  cada deuda, tiene una historia detrás.
                </p>
                <ul className="space-y-4">
                  {[
                    "Atención personalizada sin juicios.",
                    "Procesos claros explicados en tu idioma.",
                    "Acompañamiento hasta el desembolso."
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 group">
                      <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 group-hover:bg-green-500/40 transition-colors">
                        <div className="w-2 h-2 rounded-full bg-green-500 group-hover:scale-125 transition-transform"></div>
                      </div>
                      <span className="text-foreground font-medium group-hover:translate-x-1 transition-transform">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* --- Propósito y Estructura (Humanizado) --- */}
        <section className="py-20 bg-background">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold font-archive text-foreground mb-4">
                  Lo que nos mueve
                </h2>
                <p className="text-lg text-muted-foreground">
                  Más que una empresa, somos un equipo de personas trabajando para personas.
                </p>
              </div>

              <Tabs defaultValue="proposito" className="w-full">
                <TabsList className="grid w-full grid-cols-3 h-auto p-1 bg-muted rounded-xl mb-8">
                  <TabsTrigger value="proposito" className="py-3 text-sm md:text-base font-medium data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all">
                    Nuestro Propósito
                  </TabsTrigger>
                  <TabsTrigger value="equipo" className="py-3 text-sm md:text-base font-medium data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all">
                    Quiénes te Respaldan
                  </TabsTrigger>
                  <TabsTrigger value="reglas" className="py-3 text-sm md:text-base font-medium data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all">
                    Transparencia Total
                  </TabsTrigger>
                </TabsList>

                {/* Tab: Propósito (Misión/Visión) */}
                <TabsContent value="proposito" className="space-y-6 animate-in fade-in-50 slide-in-from-bottom-2 duration-300">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-card border border-border/60 rounded-2xl p-6 hover:shadow-md transition-shadow">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                        <Target className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold font-archive mb-2 text-foreground">Más que una Misión</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        No solo damos créditos. Trabajamos cada día para que un "no" del pasado se convierta en el "sí" que necesitas hoy.
                        Democratizamos las oportunidades para quienes han servido al país.
                      </p>
                    </div>
                    <div className="bg-card border border-border/60 rounded-2xl p-6 hover:shadow-md transition-shadow">
                      <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mb-4">
                        <Eye className="w-6 h-6 text-secondary-foreground" />
                      </div>
                      <h3 className="text-xl font-bold font-archive mb-2 text-foreground">Nuestra Visión</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Soñamos con un país donde tu historial pasado no condene tu futuro.
                        Queremos ser la primera mano amiga en la que pienses cuando necesites un respiro financiero.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                {/* Tab: Equipo (Estructura) */}
                <TabsContent value="equipo" className="space-y-6 animate-in fade-in-50 slide-in-from-bottom-2 duration-300">
                  <div className="bg-card border border-border/60 rounded-2xl p-8">
                    <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                        <Users className="w-8 h-8 text-blue-600" />
                      </div>
                      <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold font-archive text-foreground">Humanos respaldando Humanos</h3>
                        <p className="text-muted-foreground">
                          Detrás de nuestra plataforma digital, hay un equipo real estructurado para protegerte y servirte.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        { area: "Dirección", icon: "🧠", focus: "Estrategia Humana" },
                        { area: "Servicio", icon: "🤝", focus: "Tu Bienestar" },
                        { area: "Tecnología", icon: "💻", focus: "Simplicidad" },
                        { area: "Legal", icon: "⚖️", focus: "Tu Seguridad" },
                      ].map((item, idx) => (
                        <div key={idx} className="bg-muted/40 rounded-xl p-4 text-center hover:bg-muted/60 transition-colors">
                          <div className="text-3xl mb-2">{item.icon}</div>
                          <h4 className="font-bold text-sm text-foreground">{item.area}</h4>
                          <p className="text-xs text-muted-foreground">{item.focus}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                {/* Tab: Reglas (Políticas) */}
                <TabsContent value="reglas" className="space-y-6 animate-in fade-in-50 slide-in-from-bottom-2 duration-300">
                  <div className="bg-card border border-border/60 rounded-2xl p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                        <FileText className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold font-archive text-foreground">Reglas claras, amistad larga</h3>
                        <p className="text-muted-foreground text-sm">
                          Nuestras políticas no son letra pequeña para confundirte, son compromisos para protegerte.
                        </p>
                      </div>
                    </div>

                    <div className="grid gap-4">
                      {[
                        { title: "Tus Datos son Sagrados", desc: "Cumplimos estrictamente la Ley 1581. Tu información es tuya, nosotros solo la custodiamos." },
                        { title: "Crédito Responsable", desc: "No te prestamos para que te ahogues. Analizamos tu capacidad real para que vivas tranquilo." },
                        { title: "Cero Tolerancia al Fraude", desc: "Controles rigurosos para que nadie use tu nombre indebidamente." }
                      ].map((policy, i) => (
                        <div key={i} className="flex gap-3 items-start p-3 rounded-lg hover:bg-muted/30 transition-colors">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                          <div>
                            <h4 className="font-bold text-sm text-foreground">{policy.title}</h4>
                            <p className="text-sm text-muted-foreground">{policy.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-4 border-t border-border text-center">
                      <Button variant="link" className="text-primary h-auto p-0 text-sm">
                        Ver todas las políticas oficiales completas &rarr;
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* --- Valores: El Sello de Confianza --- */}
        <section className="py-24 bg-gradient-to-b from-background to-primary/5">
          <div className="container px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-in slide-in-from-bottom-5 fade-in duration-700">
              <h2 className="text-3xl md:text-4xl font-bold font-archive text-foreground mb-4">
                Nuestro Sello de Confianza
              </h2>
              <p className="text-lg text-muted-foreground">
                Construimos relaciones duraderas basadas en tres pilares fundamentales
                que garantizan tu tranquilidad.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Value 1: Seguridad */}
              <div className="bg-card hover:bg-card/50 border border-border/50 p-8 rounded-2xl transition-all duration-300 hover:shadow-xl group hover:-translate-y-2 animate-in slide-in-from-bottom-8 fade-in duration-700 delay-100 fill-mode-both">
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold font-archive mb-3 text-foreground">Seguridad Total</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Procesos transparentes y claros. Sin letra pequeña ni costos ocultos.
                  Tu información y tu dinero están protegidos con los más altos estándares.
                </p>
              </div>

              {/* Value 2: Empatía */}
              <div className="bg-card hover:bg-card/50 border border-border/50 p-8 rounded-2xl transition-all duration-300 hover:shadow-xl group hover:-translate-y-2 animate-in slide-in-from-bottom-8 fade-in duration-700 delay-200 fill-mode-both">
                <div className="w-14 h-14 bg-rose-100 dark:bg-rose-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-7 h-7 text-rose-600 dark:text-rose-400" />
                </div>
                <h3 className="text-xl font-bold font-archive mb-3 text-foreground">Empatía Profunda</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Entendemos tu esfuerzo de años en el magisterio o las fuerzas armadas.
                  Valoramos tu pasado y financiamos tu futuro.
                </p>
              </div>

              {/* Value 3: Agilidad */}
              <div className="bg-card hover:bg-card/50 border border-border/50 p-8 rounded-2xl transition-all duration-300 hover:shadow-xl group hover:-translate-y-2 animate-in slide-in-from-bottom-8 fade-in duration-700 delay-300 fill-mode-both">
                <div className="w-14 h-14 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-7 h-7 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="text-xl font-bold font-archive mb-3 text-foreground">Agilidad Moderna</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Tecnología moderna de 2026 puesta al servicio de tu tiempo.
                  Menos trámites, respuestas más rápidas y desembolsos ágiles.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- Social Proof: Historias Reales --- */}
        <section className="py-20 bg-background">
          <div className="container px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold font-archive text-foreground mb-4">
                  Historias que nos inspiran
                </h2>
                <p className="text-lg text-muted-foreground">
                  No se trata de créditos, se trata de cumplir sueños. Escucha a quienes ya dieron el paso.
                </p>
              </div>
              <Button variant="outline" className="shrink-0 group hover:border-primary hover:text-primary transition-colors">
                Ver todas las historias
                <Play className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Carlos M.", role: "Docente Pensionado", quote: "Finalmente reformé mi casa después de años posponiéndolo.", image: "/assets/segment-docente.jpg", delay: "delay-100" },
                { name: "María F.", role: "Pensionada de Colpensiones", quote: "Trufi me dio la oportunidad de viajar con mi familia, algo que parecía imposible.", image: "/assets/segment-pensionado.jpg", delay: "delay-200" },
                { name: "Jorge R.", role: "Retirado de las Fuerzas Públicas", quote: "Gracias a Trufi, pude sanear mis deudas y recuperar mi paz financiera.", image: "/assets/segment-fuerza-publica.jpg", delay: "delay-300" },
              ].map((story, i) => (
                <div key={i} className={`group relative overflow-hidden rounded-2xl aspect-[9/16] md:aspect-[4/5] shadow-md cursor-pointer animate-in fade-in zoom-in-95 duration-700 fill-mode-both ${story.delay}`}>
                  <img
                    src={story.image}
                    alt={`Testimonio de ${story.name}`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                      <Play className="w-8 h-8 text-white fill-white ml-1" />
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300 group-hover:translate-y-0 translate-y-2">
                    <p className="text-lg font-medium leading-snug mb-3 opacity-90 group-hover:opacity-100">"{story.quote}"</p>
                    <div>
                      <h4 className="font-bold text-lg">{story.name}</h4>
                      <p className="text-sm opacity-80 group-hover:text-secondary transition-colors">{story.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default QuienesSomos;

