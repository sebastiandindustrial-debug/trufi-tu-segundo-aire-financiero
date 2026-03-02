import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Car, Home, Wallet, CheckCircle2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ShowcaseItem {
    title: string;
    highlight: string;
    description: string;
    features: string[];
    image: string;
    badge: string;
    badgeColor: string; // e.g., "bg-blue-50 text-blue-600"
    badgeDotColor: string; // e.g., "bg-blue-600"
    titleColor: string; // e.g., "text-primary"
    checkColor: string; // e.g., "text-green-500 fill-green-50"
    buttonColor: string; // e.g., "bg-primary"
    buttonShadow: string; // e.g., "shadow-primary/25"
    imageClassName?: string;
}

export interface ProductShowcaseProps {
    defaultTab?: string;
    data?: {
        credito: ShowcaseItem;
        vivienda: ShowcaseItem;
        vehiculo: ShowcaseItem;
    };
    accentColor?: string; // Optional global accent color override for tabs
}

const defaultData: {
    credito: ShowcaseItem;
    vivienda: ShowcaseItem;
    vehiculo: ShowcaseItem;
} = {
    credito: {
        title: "Tu libranza para",
        highlight: "Libre Inversión",
        description: "¿Un viaje soñado, remodelar tu espacio o consolidar deudas? Tu cupo de libranza lo hace posible con descuento directo de nómina.",
        features: ["Desembolso en menos de 24 horas", "Plazos flexibles hasta 60 meses", "Sin codeudor (sujeto a estudio)", "Seguro de vida incluido"],
        image: "/lovable-uploads/happy_client_credit.png",
        badge: "Úsalo para lo que quieras",
        badgeColor: "bg-blue-50 text-blue-600",
        badgeDotColor: "bg-blue-600",
        titleColor: "text-primary",
        checkColor: "text-green-500 fill-green-50",
        buttonColor: "bg-primary hover:bg-primary/90",
        buttonShadow: "shadow-primary/25 hover:shadow-primary/40",
    },
    vivienda: {
        title: "Tu libranza para",
        highlight: "Vivienda",
        description: "Utiliza tu capacidad de endeudamiento por libranza para cuota inicial, mejoras locativas o compra de vivienda.",
        features: ["Plazos hasta 20 años", "Tasas fijas en pesos", "Estudio de títulos bonificado", "Asesoría personalizada"],
        image: "/lovable-uploads/happy_client_house.png",
        badge: "Tu nuevo hogar",
        badgeColor: "bg-emerald-50 text-emerald-600",
        badgeDotColor: "bg-emerald-600",
        titleColor: "text-emerald-600",
        checkColor: "text-emerald-500 fill-emerald-50",
        buttonColor: "bg-emerald-600 hover:bg-emerald-700",
        buttonShadow: "shadow-emerald-600/25 hover:shadow-emerald-600/40",
    },
    vehiculo: {
        title: "Tu libranza para",
        highlight: "Vehículo",
        description: "Estrena carro con la facilidad de pago de tu crédito de libranza. Aprobación simplificada.",
        features: ["Aprobación en línea", "Para vehículos particulares y públicos", "Paga tu primera cuota en 60 días", "Sin prenda (según perfil)"],
        image: "/lovable-uploads/happy_client_car.png",
        badge: "Estrena carro ya",
        badgeColor: "bg-violet-50 text-violet-600",
        badgeDotColor: "bg-violet-600",
        titleColor: "text-violet-600",
        checkColor: "text-violet-500 fill-violet-50",
        buttonColor: "bg-violet-600 hover:bg-violet-700",
        buttonShadow: "shadow-violet-600/25 hover:shadow-violet-600/40",
    },
};

const ProductShowcase = ({ defaultTab = "credito", data = defaultData, accentColor }: ProductShowcaseProps) => {

    // Function to determine tab styling based on accentColor or fallback to default
    const getTabStyle = (isActive: boolean) => {
        if (!isActive) return "bg-transparent";
        // If accentColor is provided, we might want to use it, but keeping it simple with white background and colored text is safer for now
        // unless we construct dynamic classes which is tricky with Tailwind.
        // For now, let's keep the reliable white background for active state.
        return "bg-white text-primary shadow-md";
    };

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
                        Úsalo para lo que realmente necesitas en este momento de tu vida.
                    </p>
                </div>

                <Tabs defaultValue={defaultTab} className="w-full max-w-6xl mx-auto">
                    <div className="flex justify-center mb-12">
                        <TabsList className="grid w-full max-w-2xl grid-cols-3 h-auto p-1.5 bg-gray-100/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm">
                            <TabsTrigger
                                value="credito"
                                className="rounded-full py-3 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-md transition-all duration-300 flex items-center justify-center gap-2 group"
                                style={accentColor ? { color: 'inherit' } : {}} // Allow override if needed, but TabsTrigger handles active state
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

                        {/* Dynamic Content Rendering */}
                        {(Object.keys(data) as Array<keyof typeof data>).map((key) => {
                            const item = data[key];
                            return (
                                <TabsContent key={key} value={key} className="focus-visible:outline-none focus-visible:ring-0 mt-0">
                                    <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden">
                                        <div className="grid md:grid-cols-2 gap-0">
                                            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                                                <div className={cn("inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6 w-fit", item.badgeColor)}>
                                                    <span className={cn("w-2 h-2 rounded-full animate-pulse", item.badgeDotColor)} />
                                                    {item.badge}
                                                </div>
                                                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                                                    {item.title} <span className={cn(item.titleColor)}>{item.highlight}</span>
                                                </h3>
                                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                                    {item.description}
                                                </p>

                                                <ul className="space-y-4 mb-10">
                                                    {item.features.map((feature, i) => (
                                                        <li key={i} className="flex items-center gap-3 text-gray-700">
                                                            <CheckCircle2 className={cn("w-5 h-5 flex-shrink-0", item.checkColor)} />
                                                            <span className="font-medium">{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>

                                                <div className="flex flex-col sm:flex-row gap-4">
                                                    <Button
                                                        size="lg"
                                                        className={cn("rounded-xl px-8 h-12 text-base transition-all duration-300", item.buttonColor, item.buttonShadow)}
                                                        asChild
                                                    >
                                                        <a href="https://app.trufi.com.co/" target="_blank" rel="noopener noreferrer">
                                                            Solicita tu crédito
                                                            <ArrowRight className="ml-2 w-4 h-4" />
                                                        </a>
                                                    </Button>
                                                    <Button
                                                        variant="outline"
                                                        size="lg"
                                                        className="rounded-xl px-8 h-12 text-base border-gray-200 hover:bg-gray-50 transition-colors"
                                                        onClick={() => {
                                                            const simulator = document.getElementById('credit-simulator');
                                                            if (simulator) {
                                                                simulator.scrollIntoView({ behavior: 'smooth' });
                                                            }
                                                        }}
                                                    >
                                                        Simular cuotas
                                                    </Button>
                                                </div>
                                            </div>
                                            <div className="relative h-80 md:h-auto overflow-hidden bg-gray-100">
                                                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent z-10" />
                                                <img
                                                    src={item.image}
                                                    alt={`${item.highlight} - TRUFI`}
                                                    className={cn(
                                                        "w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000",
                                                        item.imageClassName
                                                    )}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                            );
                        })}
                    </div>
                </Tabs>
            </div>
        </section>
    );
};

export default ProductShowcase;
