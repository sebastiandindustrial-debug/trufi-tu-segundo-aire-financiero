import { Button } from "@/components/ui/button";
import { BookOpen, TrendingUp, ArrowRight, Headphones } from "lucide-react";
import { Link } from "react-router-dom";

const FinancialAcademySection = () => {
    return (
        <section className="py-20 md:py-32 bg-background overflow-hidden relative">
            {/* Background Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container px-4 md:px-6 relative z-10">
                <div className="group relative bg-gradient-to-br from-[#1A0B3B] via-[#2D1B69] to-[#120529] rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 transition-transform duration-500 hover:scale-[1.01] hover:shadow-primary/30 min-h-[550px] flex flex-col lg:flex-row">

                    {/* Animated Border Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] pointer-events-none z-20" />

                    {/* Image Side (Left) - Enhanced */}
                    <div className="lg:w-5/12 relative h-[350px] lg:h-auto overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#1A0B3B]/80 via-transparent to-transparent z-10 lg:bg-gradient-to-r lg:from-transparent lg:to-[#1A0B3B]/90" />
                        <img
                            src="/lovable-uploads/financial_education_lifestyle_1770146202347.png"
                            alt="Educación Financiera Trufi"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                    </div>

                    {/* Content Side (Right) */}
                    <div className="lg:w-7/12 p-8 md:p-14 lg:p-20 flex flex-col justify-center text-white relative">

                        {/* Blob Decoration */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none mix-blend-screen" />

                        <div className="relative z-10 space-y-8">
                            {/* Badger pulsing */}
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 w-fit backdrop-blur-md animate-pulse shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                                <BookOpen className="w-4 h-4 text-emerald-400" />
                                <span className="text-xs font-bold text-emerald-400 tracking-wider uppercase">
                                    Zona de Aprendizaje
                                </span>
                            </div>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70">
                                Tu Futuro Financiero <br />
                                <span className="text-emerald-400 drop-shadow-[0_0_20px_rgba(52,211,153,0.4)]">Comienza Aquí</span>
                            </h2>

                            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl font-light">
                                Más que crédito, te damos el conocimiento. Accede a herramientas exclusivas que transformarán tu relación con el dinero.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-5 pt-2">
                                <Link to="/blog">
                                    <Button
                                        size="lg"
                                        className="relative overflow-hidden bg-emerald-500 hover:bg-emerald-400 text-white border-0 font-bold text-lg h-14 px-10 rounded-2xl shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(16,185,129,0.6)] group/btn"
                                    >
                                        <span className="relative z-10 flex items-center">
                                            Explorar Academy
                                            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                                        </span>
                                    </Button>
                                </Link>

                                <div className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
                                    <TrendingUp className="w-5 h-5 text-emerald-400" />
                                    <span className="text-sm font-medium text-white/90">Acceso Gratuito</span>
                                </div>
                            </div>

                            {/* Featured Resources - Modern List */}
                            <div className="pt-10 mt-6 border-t border-white/10">
                                <p className="text-xs font-bold text-white/40 mb-5 uppercase tracking-widest">
                                    Lo más visto hoy
                                </p>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {/* Resource 1 */}
                                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-white/5 to-transparent border border-white/5 hover:border-emerald-500/30 transition-all hover:bg-white/10 cursor-pointer group/item">
                                        <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center shadow-inner">
                                            <Headphones className="w-5 h-5 text-orange-300" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-white group-hover/item:text-emerald-300 transition-colors">
                                                Inversiones Simples
                                            </p>
                                            <p className="text-[10px] text-white/50 uppercase tracking-wide">Podcast • Ep. 12</p>
                                        </div>
                                    </div>

                                    {/* Resource 2 */}
                                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-white/5 to-transparent border border-white/5 hover:border-blue-500/30 transition-all hover:bg-white/10 cursor-pointer group/item">
                                        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shadow-inner">
                                            <BookOpen className="w-5 h-5 text-blue-300" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-white group-hover/item:text-emerald-300 transition-colors">
                                                Mitos de Crédito
                                            </p>
                                            <p className="text-[10px] text-white/50 uppercase tracking-wide">Blog • 3 min</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FinancialAcademySection;
