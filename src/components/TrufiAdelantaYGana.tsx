import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Zap, Ticket, Star, Trophy, ArrowRight, CheckCircle2 } from "lucide-react";

const TrufiAdelantaYGana = () => {
    return (
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-white to-secondary/5 overflow-hidden relative">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            <div className="absolute -left-20 top-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl mix-blend-multiply" />
            <div className="absolute -right-20 bottom-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl mix-blend-multiply" />

            <div className="container relative z-10 px-4 md:px-6">

                {/* Header Content */}
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 text-secondary-foreground rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-secondary/20">
                        <Trophy className="w-3.5 h-3.5" />
                        Nueva Zona de Beneficios
                    </div>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
                        Trufi <span className="text-primary">Adelanta y Gana</span>
                    </h2>
                    <p className="text-lg text-muted-foreground/90 leading-relaxed">
                        Tu puntualidad abre puertas. Adelanta tus cuotas y <span className="font-semibold text-foreground">desbloquea tu próximo nivel financiero</span>.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto mb-16">

                    {/* Left Column: Visual Hero */}
                    <div className="relative order-2 lg:order-1">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl rotate-1 hover:rotate-0 transition-all duration-500 border-4 border-white group">
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent z-10" />
                            <img
                                src="https://images.unsplash.com/photo-1543714850-2ac3689cbfa7?q=80&w=2070&auto=format&fit=crop"
                                alt="Persona tranquila revisando su celular"
                                className="w-full h-full object-cover min-h-[400px] group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute bottom-6 left-6 right-6 z-20 text-white">
                                <p className="font-medium text-lg leading-snug">
                                    "Desde que adelanto mis cuotas, duermo más tranquilo y hasta me gané un descuento."
                                </p>
                                <p className="text-sm opacity-80 mt-2">— Carlos M., Cliente Trufi</p>
                            </div>
                        </div>
                        {/* Floating Badge */}
                        <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce-slow z-30 max-w-[200px] border border-gray-100">
                            <div className="bg-secondary/20 p-2 rounded-full text-secondary-foreground">
                                <CheckCircle2 className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground font-semibold uppercase">Estado Actual</p>
                                <p className="text-sm font-bold text-foreground">Paz Mental: 100%</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Gamification Module */}
                    <div className="order-1 lg:order-2 bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-primary/10 relative overflow-hidden">

                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <span className="text-sm font-medium text-muted-foreground">Tu reputación en Trufi</span>
                                <div className="flex items-center gap-2 mt-1">
                                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                    <h3 className="text-xl font-bold text-foreground">Excelente Cliente</h3>
                                </div>
                            </div>
                            <div className="bg-secondary/10 text-secondary-foreground px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1">
                                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                                Activo
                            </div>
                        </div>

                        {/* Progress Bar Area */}
                        <div className="space-y-4 mb-8">
                            <div className="flex justify-between text-sm font-medium">
                                <span className="text-primary font-bold">Nivel Actual</span>
                                <span className="text-muted-foreground">Próximo Nivel: Renovación VIP</span>
                            </div>
                            <div className="relative pt-2">
                                <Progress value={80} className="h-4 bg-secondary/10" indicatorClassName="bg-gradient-to-r from-primary to-primary/80 transition-all duration-1000 ease-out" />
                                {/* Tooltip-like marker */}
                                <div className="absolute top-0 right-[20%] -mt-1 w-0.5 h-6 bg-gray-300"></div>
                            </div>
                            <p className="text-sm text-foreground/80 bg-primary/5 p-3 rounded-lg border border-primary/10">
                                🚀 Estás a solo <span className="font-bold text-primary">2 cuotas</span> de desbloquear tu renovación inmediata por mayor monto.
                            </p>
                        </div>

                        {/* CTA */}
                        <Button className="w-full h-auto py-4 text-base md:text-lg bg-primary hover:bg-primary/90 text-white font-bold shadow-lg shadow-primary/20 transition-all hover:scale-[1.02]">
                            Adelantar cuota y subir de nivel <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                        <p className="text-center text-xs text-muted-foreground mt-3">
                            Pagos seguros vía PSE y corresponsales bancarios.
                        </p>

                    </div>
                </div>

                {/* Benefits Grid - Bottom */}
                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {/* Card 1 */}
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-secondary/30 shadow-sm hover:shadow-md transition-all group">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <TrendingUp className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="font-bold text-foreground mb-2">Mejora tu Datacrédito</h4>
                        <p className="text-sm text-muted-foreground">
                            Reportamos tu comportamiento positivo para que tu puntaje crediticio suba como espuma.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-secondary/30 shadow-sm hover:shadow-md transition-all group">
                        <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Zap className="w-6 h-6 text-secondary" />
                        </div>
                        <h4 className="font-bold text-foreground mb-2">Renovación Instantánea</h4>
                        <p className="text-sm text-muted-foreground">
                            Cero papeleos. Al terminar este crédito, tu próximo desembolso ya estará pre-aprobado.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-secondary/30 shadow-sm hover:shadow-md transition-all group">
                        <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Ticket className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="font-bold text-foreground mb-2">Participa y Gana</h4>
                        <p className="text-sm text-muted-foreground">
                            Los pagos realizados antes de la fecha límite entran automáticamente a nuestros sorteos mensuales.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TrufiAdelantaYGana;
