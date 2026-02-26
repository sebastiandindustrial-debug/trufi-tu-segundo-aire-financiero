import { Instagram, Linkedin, Twitter, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Custom TikTok Icon (since Lucide doesn't have it standard or it might differ)
const TikTokIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
);

const socialPosts = [
    {
        id: 1,
        platform: "instagram",
        icon: Instagram,
        color: "bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500",
        username: "@trufi_co",
        content: "¡Tu segundo aire financiero empieza hoy! 🚀 Descubre cómo mejorar tu score crediticio con estos 3 tips clave. #FinanzasPersonales #TRUFI #Credito",
        image: "/lovable-uploads/financial_education_lifestyle_1770146202347.png", // Reusing an existing asset as placeholder
        likes: "1.2k",
        date: "Hace 2 horas",
        link: "https://instagram.com"
    },
    {
        id: 2,
        platform: "tiktok",
        icon: TikTokIcon,
        color: "bg-black",
        username: "@trufi_financiera",
        content: "¿Sabías que puedes unificar tus deudas con nosotros? 😱 Mira este caso de éxito real.",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop", // Placeholder
        likes: "850",
        date: "Hace 5 horas",
        link: "https://tiktok.com"
    },
    {
        id: 3,
        platform: "linkedin",
        icon: Linkedin,
        color: "bg-[#0077b5]",
        username: "TRUFI Servicios Financieros",
        content: "Estamos orgullosos de anunciar nuestra nueva alianza para brindar bienestar financiero a más docentes en Colombia. 🇨🇴 #Alianzas #Bienestar #Fintech",
        image: null,
        likes: "450",
        date: "Hace 1 día",
        link: "https://linkedin.com"
    },
    {
        id: 4,
        platform: "twitter",
        icon: Twitter,
        color: "bg-black",
        username: "@ExperienciaTrufi",
        content: "La tranquilidad no tiene precio, pero sí tiene un aliado. 🛡️ Conoce nuestros seguros de desempleo diseñados para ti.",
        image: null,
        likes: "120",
        date: "Hace 1 día",
        link: "https://twitter.com"
    }
];

const SocialMediaFeed = () => {
    return (
        <section className="py-20 bg-muted/20 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="container relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
                            Comunidad Digital
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                            Conectamos contigo en <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                                cada plataforma
                            </span>
                        </h2>
                        <p className="text-muted-foreground mt-4 text-lg">
                            Conocerás tips financieros, noticias y soporte directo para pensionados, docentes y fuerza pública.
                        </p>
                    </div>

                    <Button variant="outline" className="hidden md:flex gap-2">
                        Ver todas las redes
                        <ArrowUpRight className="w-4 h-4" />
                    </Button>
                </div>

                {/* Social Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {socialPosts.map((post) => (
                        <div
                            key={post.id}
                            className="group relative bg-card rounded-3xl p-6 shadow-sm border border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md ${post.color}`}>
                                        <post.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-foreground">{post.username}</p>
                                        <p className="text-[10px] text-muted-foreground">{post.date}</p>
                                    </div>
                                </div>
                                <a href={post.link} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                    <ArrowUpRight className="w-4 h-4" />
                                </a>
                            </div>

                            {/* Content */}
                            <div className="flex-1 space-y-4">
                                <p className="text-sm text-foreground/80 leading-relaxed">
                                    {post.content}
                                </p>

                                {post.image && (
                                    <div className="rounded-xl overflow-hidden aspect-video relative group-hover:shadow-md transition-shadow">
                                        <img
                                            src={post.image}
                                            alt="Social post"
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                                    </div>
                                )}
                            </div>

                            {/* Footer */}
                            <div className="mt-6 pt-4 border-t border-border/50 flex items-center gap-2 text-xs text-muted-foreground font-medium">
                                <span className="text-primary">❤ {post.likes}</span>
                                <span>interacciones</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile Button */}
                <div className="mt-8 text-center md:hidden">
                    <Button variant="outline" className="w-full gap-2">
                        Ver todas las redes
                        <ArrowUpRight className="w-4 h-4" />
                    </Button>
                </div>

            </div>
        </section>
    );
};

export default SocialMediaFeed;
