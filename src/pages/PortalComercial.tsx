import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, ArrowRight, Lock, Calculator } from "lucide-react";
import { useState } from "react";

const PortalComercial = () => {
    // Simulator dummy state
    const [simulationDone, setSimulationDone] = useState(false);

    const handleSimulation = () => {
        // Mocking a simulation process
        setSimulationDone(true);
    };

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <main className="flex-1 pt-24 pb-12">
                <section className="container max-w-4xl mx-auto space-y-12">

                    {/* Header Section */}
                    <div className="text-center space-y-4">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm">
                            <Briefcase className="w-4 h-4" />
                            Portal Comercial
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground">
                            Simula tu gestión comercial
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Bienvenido al portal de asesores. Por favor realiza la simulación preliminar para habilitar el acceso al formulario de gestión.
                        </p>
                    </div>

                    {/* Placeholder Simulator Area */}
                    <Card className="border-2 border-dashed border-primary/20 bg-muted/30 shadow-none">
                        <CardContent className="p-12 flex flex-col items-center justify-center text-center space-y-6">
                            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                                <Calculator className="w-10 h-10 text-primary" />
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-xl font-bold text-foreground">Espacio para Simulador Comercial</h3>
                                <p className="text-sm text-muted-foreground max-w-md mx-auto">
                                    Aquí se integrará el simulador basado en el Excel. <br />
                                    (Funcionalidad pendiente de implementación)
                                </p>
                            </div>

                            {/* Temporary Button to Mimic Simulation Completion */}
                            <Button
                                onClick={handleSimulation}
                                variant="outline"
                                className={`mt-4 ${simulationDone ? 'bg-green-100 text-green-700 border-green-200 pointer-events-none' : ''}`}
                            >
                                {simulationDone ? 'Simulación Completada ✅' : 'Probar Simulación (Demo)'}
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Protected CTA Section */}
                    <div className={`transition-all duration-700 ease-in-out ${simulationDone ? 'opacity-100 translate-y-0' : 'opacity-50 translate-y-4 grayscale blur-[2px] pointer-events-none'}`}>
                        <div className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                            <div className="relative z-10 space-y-6">
                                <h2 className="text-2xl md:text-3xl font-bold">
                                    Resultados listos
                                </h2>
                                <p className="text-primary-foreground/80 max-w-lg mx-auto">
                                    Has completado la pre-validación. Ahora puedes continuar al formulario comercial para registrar la solicitud.
                                </p>

                                <Button
                                    className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-8 py-6 rounded-full shadow-xl hover:scale-105 transition-transform"
                                    asChild
                                >
                                    <a href="https://sales.trufi.com.co/formCredits" target="_blank" rel="noopener noreferrer">
                                        Ir al Portal de Gestión
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </a>
                                </Button>
                            </div>

                            {/* Decorative lock if locked (though visual style handles transparency) */}
                            {!simulationDone && (
                                <div className="absolute inset-0 z-20 flex items-center justify-center bg-background/10 backdrop-blur-sm">
                                    <div className="flex flex-col items-center gap-2 text-white/50">
                                        <Lock className="w-8 h-8" />
                                        <span className="text-sm font-medium">Bloqueado hasta simular</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                </section>
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default PortalComercial;
