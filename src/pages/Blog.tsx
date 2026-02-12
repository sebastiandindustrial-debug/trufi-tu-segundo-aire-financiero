import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { usePublishedPosts } from "@/hooks/usePosts";
import { Play, BookOpen, Headphones, Calendar, Clock, ArrowRight, Loader2, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import segmentImage from "@/assets/segment-pensionado.jpg";

const categories = [
  "Todos",
  "Noticias",
  "Educación Financiera",
  "Productos Y Servicios",
  "Aumentos 2026",
  "Bienestar Y Estilo De Vida",
];

// Mock data to supplement real posts for demonstration of specific categories if needed
// or to be used if no posts are returned.
const MOCK_POSTS = [
  {
    id: 101,
    title: "Score Crediticio y Datacrédito: lo que todo pensionado debe saber",
    excerpt: "Conoce cómo funciona tu historial en Datacrédito y descubre alternativas de crédito incluso si estás reportado.",
    category: "Educación Financiera",
    cover_image_url: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800",
    created_at: new Date().toISOString(),
    content: "...",
    readTime: "5 min",
    spotify_url: null
  },
  {
    id: 102,
    title: "Tu Respaldo Seguro en el Duatlón POWERMAN 2026",
    excerpt: "Como patrocinadores del Duatlón POWERMAN 2026, promovemos el bienestar físico y financiero ofreciendo un 40% de descuento.",
    category: "Bienestar Y Estilo De Vida",
    cover_image_url: "https://images.unsplash.com/photo-1517649763965-4d37a2a1ebf3?auto=format&fit=crop&q=80&w=800",
    created_at: new Date().toISOString(),
    content: "...",
    readTime: "3 min",
    spotify_url: null
  },
  {
    id: 103,
    title: "Términos y Condiciones de la Estrategia Comercial “Aumentos 2026”",
    excerpt: "Lineamientos, alcances y reglas de la estrategia “Aumentos 2026”, para el anticipo de solicitudes de crédito basadas en...",
    category: "Aumentos 2026",
    cover_image_url: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
    created_at: new Date().toISOString(),
    content: "...",
    readTime: "7 min",
    spotify_url: null
  }
];


const Blog = () => {
  const { data: realPosts, isLoading, error } = usePublishedPosts();
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  // Merge real posts with mock posts for visual completeness during dev
  // In production, you might only want realPosts.
  const posts = [...(realPosts || []), ...MOCK_POSTS];

  const filteredPosts = selectedCategory === "Todos"
    ? posts
    : posts.filter(post => post.category === selectedCategory);

  // Find the latest podcast or a default one
  const featuredPodcast = posts.find(p => p.spotify_url) || {
    title: "Inversiones para Principiantes",
    excerpt: "Carlos Martínez • Asesor Financiero",
    spotify_url: "https://open.spotify.com/embed/episode/43eH2bWvb4A4w9A2B2XoXf?utm_source=generator",
  };

  return (
    <div className="min-h-screen bg-gray-50/50">
      <Header />
      <main className="pt-0">
        {/* Hero Section */}
        <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src={segmentImage}
              alt="Pensionados felices"
              className="w-full h-full object-cover"
            />
            {/* Dark Overlay for text contrast */}
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="container relative z-10 text-center max-w-4xl px-4">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Explora Nuestra Zona de Aprendizaje
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              En nuestra zona de aprendizaje, te invitamos a explorar una amplia gama de temas relacionados con finanzas personales, créditos, inversiones y mucho más. Únete a nuestra comunidad y potenciar tu conocimiento financiero.
            </p>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 md:py-12 bg-white sticky top-16 md:top-20 z-20 border-b border-gray-100 shadow-sm">
          <div className="container overflow-x-auto pb-2 md:pb-0">
            <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-2 md:gap-3 min-w-max px-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap
                                ${selectedCategory === category
                      ? "bg-gray-500 text-white shadow-md transform scale-105"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                    }
                            `}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Loading State */}
        {isLoading && (
          <section className="py-20">
            <div className="container flex justify-center">
              <Loader2 className="w-10 h-10 animate-spin text-primary" />
            </div>
          </section>
        )}

        {/* Error State */}
        {error && (
          <section className="py-20">
            <div className="container text-center">
              <p className="text-muted-foreground">No se pudieron cargar los artículos por el momento.</p>
            </div>
          </section>
        )}

        {/* Articles Grid */}
        {!isLoading && !error && (
          <section className="py-12 md:py-20">
            <div className="container px-4 md:px-6">
              {filteredPosts.length > 0 ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 row-gap-12">
                  {filteredPosts.map((article: any, index) => (
                    <article
                      key={index}
                      className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      {/* Image Container */}
                      <div className="relative h-60 overflow-hidden">
                        {/* Category Badge overlaying the image */}
                        <div className="absolute top-4 right-4 z-10">
                          <span className="px-3 py-1 bg-orange-500 text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm">
                            {article.category || "General"}
                          </span>
                        </div>

                        {article.cover_image_url ? (
                          <img
                            src={article.cover_image_url}
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                            <BookOpen className="w-12 h-12 text-gray-300" />
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-6 md:p-8 flex flex-col flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 leading-tight group-hover:text-primary transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 mb-6 line-clamp-3 text-sm leading-relaxed flex-1">
                          {article.excerpt || (typeof article.content === 'string' ? article.content.substring(0, 120) + '...' : 'Leer artículo completo...')}
                        </p>

                        {/* Footer: Date & Read Time */}
                        <div className="flex items-center justify-between text-xs text-gray-400 border-t border-gray-100 pt-4 mt-auto">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            {new Date(article.created_at).toLocaleDateString('es-CO', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5" />
                            {article.readTime || "5 min"}
                          </span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                    <BookOpen className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">No hay artículos en esta categoría</h3>
                  <p className="text-gray-500 mt-2">Intenta seleccionar otra categoría.</p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Podcast Promo Section (Dynamic) */}
        <section className="py-16 md:py-24 bg-gray-900 text-white overflow-hidden relative">
          {/* Abstract Background Shapes */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl opacity-50"></div>

          <div className="container relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full mb-6 border border-white/10">
                  <Headphones className="w-4 h-4 text-primary-300" />
                  <span className="text-xs font-medium text-gray-300 uppercase tracking-wider">Podcast Exclusivo</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Finanzas con TRUFI</h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  Escucha a nuestros expertos analizar el mercado, dar consejos de inversión y desmitificar el mundo de los créditos.
                  {!featuredPodcast.spotify_url && " Próximamente nuevos episodios."}
                </p>
                <Button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-6 text-lg rounded-full font-bold" onClick={() => window.open("https://open.spotify.com/show/...", "_blank")}>
                  Escuchar en Spotify <ArrowUpRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
              {/* Visual Representation of Podcast or Spotify Embed */}
              <div className="relative w-full max-w-md">
                {featuredPodcast.spotify_url ? (
                  <iframe
                    style={{ borderRadius: "12px" }}
                    src={featuredPodcast.spotify_url}
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    title="Spotify Embed"
                    className="shadow-2xl"
                  ></iframe>
                ) : (
                  <div className="w-full aspect-square bg-gradient-to-tr from-gray-800 to-gray-700 rounded-3xl border border-gray-700 p-8 flex flex-col justify-between shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <div className="flex justify-between items-start">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <Headphones className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-xs font-mono text-gray-400">EP. 12</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Inversiones para Principiantes</h3>
                      <p className="text-gray-400 text-sm">Carlos Martínez • Asesor Financiero</p>
                    </div>
                    <div className="w-full bg-gray-600 h-1.5 rounded-full overflow-hidden mt-6">
                      <div className="bg-primary w-2/3 h-full rounded-full"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Blog;
