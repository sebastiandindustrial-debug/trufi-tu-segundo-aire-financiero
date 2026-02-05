import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Car, Home, Wallet, CheckCircle2, ChevronRight, ArrowRight } from "lucide-react";

const ProductShowcase = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
            <div className="container px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <Badge variant="secondary" className="px-4 py-1.5 text-primary text-sm font-semibold tracking-wide uppercase bg-primary/10">
                        Tu Crédito de Libranza
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
                        Un crédito, múltiples destinos
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                        Docentes, Pensionados y Fuerza Pública: usen su cupo de libranza para vivienda, vehículo o lo que deseen.
                    </p>
                </div>

                <Tabs defaultValue="credito" className="w-full max-w-6xl mx-auto">
                    <div className="flex justify-center mb-12">
                        <TabsList className="grid w-full max-w-2xl grid-cols-3 h-auto p-1.5 bg-gray-100/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm">
                            <TabsTrigger
                                value="credito"
                                className="rounded-full py-3 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-md transition-all duration-300 flex items-center justify-center gap-2 group"
                            >
                                <div className="p-1.5 rounded-full bg-gray-200/50 group-data-[state=active]:bg-primary/10 transition-colors">
                                    <Wallet className="w-4 h-4 md:w-5 md:h-5" />
                                </div>
                                <span className="font-bold text-sm md:text-base">Libre Inversión</span>
                            </TabsTrigger>
                            <TabsTrigger
                                value="vivienda"
                                className="rounded-full py-3 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-md transition-all duration-300 flex items-center justify-center gap-2 group"
                            >
                                <div className="p-1.5 rounded-full bg-gray-200/50 group-data-[state=active]:bg-primary/10 transition-colors">
                                    <Home className="w-4 h-4 md:w-5 md:h-5" />
                                </div>
                                <span className="font-bold text-sm md:text-base">Vivienda</span>
                            </TabsTrigger>
                            <TabsTrigger
                                value="vehiculo"
                                className="rounded-full py-3 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-md transition-all duration-300 flex items-center justify-center gap-2 group"
                            >
                                <div className="p-1.5 rounded-full bg-gray-200/50 group-data-[state=active]:bg-primary/10 transition-colors">
                                    <Car className="w-4 h-4 md:w-5 md:h-5" />
                                </div>
                                <span className="font-bold text-sm md:text-base">Vehículo</span>
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    <div className="relative">
                        {/* Background decorative elements */}
                        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10" />
                        <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl -z-10" />

                        {/* Crédito Content */}
                        <TabsContent value="credito" className="focus-visible:outline-none focus-visible:ring-0 mt-0">
                            <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden">
                                <div className="grid md:grid-cols-2 gap-0">
                                    <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6 w-fit">
                                            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                                            Úsalo para lo que quieras
                                        </div>
                                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                                            Tu libranza para <span className="text-primary">Libre Inversión</span>
                                        </h3>
                                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                            ¿Un viaje soñado, remodelar tu espacio o consolidar deudas? Tu cupo de libranza lo hace posible con descuento directo de nómina.
                                        </p>

                                        <ul className="space-y-4 mb-10">
                                            {[
                                                "Desembolso en menos de 24 horas",
                                                "Plazos flexibles hasta 60 meses",
                                                "Sin codeudor (sujeto a estudio)",
                                                "Seguro de vida incluido"
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-center gap-3 text-gray-700">
                                                    <CheckCircle2 className="w-5 h-5 text-green-500 fill-green-50 flex-shrink-0" />
                                                    <span className="font-medium">{item}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="flex flex-col sm:flex-row gap-4">
                                            <Button size="lg" className="rounded-xl px-8 h-12 text-base shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300">
                                                Solicita tu crédito
                                                <ArrowRight className="ml-2 w-4 h-4" />
                                            </Button>
                                            <Button variant="outline" size="lg" className="rounded-xl px-8 h-12 text-base border-gray-200 hover:bg-gray-50 hover:text-primary transition-colors">
                                                Simular cuotas
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="relative h-80 md:h-auto overflow-hidden bg-gray-100">
                                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent z-10" />
                                        <img
                                            src="/lovable-uploads/happy_client_credit.png"
                                            alt="Pareja feliz revisando documentos de crédito aprobado"
                                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
                                        />
                                    </div>
                                </div>
                            </div>
                        </TabsContent>

                        {/* Vivienda Content */}
                        <TabsContent value="vivienda" className="focus-visible:outline-none focus-visible:ring-0 mt-0">
                            <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden">
                                <div className="grid md:grid-cols-2 gap-0">
                                    <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold uppercase tracking-wider mb-6 w-fit">
                                            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                                            Tu nuevo hogar
                                        </div>
                                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                                            Tu libranza para <span className="text-emerald-600">Vivienda</span>
                                        </h3>
                                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                            Utiliza tu capacidad de endeudamiento por libranza para cuota inicial, mejoras locativas o compra de vivienda.
                                        </p>

                                        <ul className="space-y-4 mb-10">
                                            {[
                                                "Plazos hasta 20 años",
                                                "Tasas fijas en pesos",
                                                "Estudio de títulos bonificado",
                                                "Asesoría personalizada"
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-center gap-3 text-gray-700">
                                                    <CheckCircle2 className="w-5 h-5 text-emerald-500 fill-emerald-50 flex-shrink-0" />
                                                    <span className="font-medium">{item}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="flex flex-col sm:flex-row gap-4">
                                            <Button size="lg" className="rounded-xl px-8 h-12 text-base bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/40 transition-all duration-300">
                                                Solicita tu estudio
                                                <ArrowRight className="ml-2 w-4 h-4" />
                                            </Button>
                                            <Button variant="outline" size="lg" className="rounded-xl px-8 h-12 text-base border-gray-200 hover:bg-gray-50 hover:text-emerald-600 transition-colors">
                                                Ver proyectos
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="relative h-80 md:h-auto overflow-hidden bg-gray-100">
                                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent z-10" />
                                        <img
                                            src="/lovable-uploads/happy_client_house.png"
                                            alt="Familia feliz frente a su casa nueva"
                                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
                                        />
                                    </div>
                                </div>
                            </div>
                        </TabsContent>

                        {/* Vehículo Content */}
                        <TabsContent value="vehiculo" className="focus-visible:outline-none focus-visible:ring-0 mt-0">
                            <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden">
                                <div className="grid md:grid-cols-2 gap-0">
                                    <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 text-violet-600 text-xs font-bold uppercase tracking-wider mb-6 w-fit">
                                            <span className="w-2 h-2 rounded-full bg-violet-600 animate-pulse" />
                                            Estrena carro ya
                                        </div>
                                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                                            Tu libranza para <span className="text-violet-600">Vehículo</span>
                                        </h3>
                                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                            Estrena carro con la facilidad de pago de tu crédito de libranza. Aprobación simplificada.
                                        </p>

                                        <ul className="space-y-4 mb-10">
                                            {[
                                                "Aprobación en línea",
                                                "Para vehículos particulares y públicos",
                                                "Paga tu primera cuota en 60 días",
                                                "Sin prenda (según perfil)"
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-center gap-3 text-gray-700">
                                                    <CheckCircle2 className="w-5 h-5 text-violet-500 fill-violet-50 flex-shrink-0" />
                                                    <span className="font-medium">{item}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="flex flex-col sm:flex-row gap-4">
                                            <Button size="lg" className="rounded-xl px-8 h-12 text-base bg-violet-600 hover:bg-violet-700 shadow-lg shadow-violet-600/25 hover:shadow-violet-600/40 transition-all duration-300">
                                                Simula tu crédito
                                                <ArrowRight className="ml-2 w-4 h-4" />
                                            </Button>
                                            <Button variant="outline" size="lg" className="rounded-xl px-8 h-12 text-base border-gray-200 hover:bg-gray-50 hover:text-violet-600 transition-colors">
                                                Concesionarios aliados
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="relative h-80 md:h-auto overflow-hidden bg-gray-100">
                                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent z-10" />
                                        <img
                                            src="/lovable-uploads/happy_client_car.png"
                                            alt="Pareja feliz con su carro nuevo"
                                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
                                        />
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </section>
    );
};

export default ProductShowcase;
