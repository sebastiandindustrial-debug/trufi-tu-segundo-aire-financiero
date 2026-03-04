import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { usePublishedPosts } from "@/hooks/usePosts";
import { Play, BookOpen, Headphones, Calendar, Clock, ArrowRight, Loader2, ArrowUpRight, LayoutGrid, Newspaper, GraduationCap, CreditCard, TrendingUp, Heart } from "lucide-react";
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

import { blogPosts } from "@/data/blogPosts";
import { Link } from "react-router-dom";


const Blog = () => {
  const { data: realPosts, isLoading, error } = usePublishedPosts();
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  // Merge real posts with mock posts for visual completeness during dev
  // In production, you might only want realPosts.
  // Merge real posts with shared posts data
  // In production, you might only want realPosts.
  const posts = [...(realPosts || []), ...blogPosts];

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
              Academia TRUFI - Tu Beneficio Exclusivo como Cliente
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Por tener un crédito con TRUFI, accedes SIN COSTO ADICIONAL a nuestra plataforma. En nuestra zona de aprendizaje, te invitamos a explorar una amplia gama de temas relacionados con finanzas personales, créditos, inversiones y mucho más. Únete a nuestra comunidad y potencia tu conocimiento financiero.
            </p>
          </div>
        </section>

        {/* Categories Filter - Revamped for "Ganas de Estudiar" */}
        <section className="py-8 md:py-10 bg-white sticky top-16 md:top-20 z-20 border-b border-gray-100 shadow-sm/50 backdrop-blur-md bg-white/90 supports-[backdrop-filter]:bg-white/60">
          <div className="container overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
            <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-3 md:gap-4 min-w-max px-2 p-1">
              {[
                { id: "Todos", label: "Ver todo", icon: LayoutGrid },
                { id: "Noticias", label: "Noticias", icon: Newspaper },
                { id: "Educación Financiera", label: "Aprende Finanzas", icon: GraduationCap },
                { id: "Productos Y Servicios", label: "Productos", icon: CreditCard },
                { id: "Aumentos 2026", label: "Aumentos 2026", icon: TrendingUp },
                { id: "Bienestar Y Estilo De Vida", label: "Bienestar", icon: Heart },
              ].map((cat) => {
                const isActive = selectedCategory === cat.id;
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`
                      group relative px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-500 ease-out flex items-center gap-2.5 overflow-hidden
                      ${isActive
                        ? "bg-primary text-white shadow-lg shadow-primary/30 scale-105 ring-offset-2 ring-2 ring-primary/20"
                        : "bg-gray-50 text-gray-500 hover:bg-primary/5 hover:text-primary hover:shadow-md border border-gray-100"
                      }
                    `}
                  >
                    {/* Background Animation for Active State */}
                    {isActive && (
                      <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    )}

                    <Icon className={`w-4 h-4 transition-transform duration-300 ${isActive ? "scale-110" : "group-hover:scale-110 group-hover:-rotate-12"}`} />
                    <span className="relative z-10">{cat.label}</span>

                    {/* Active Dot Indicator */}
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse ml-1" />}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Loading State */}
        {isLoading && (
          <section className="py-20">
            <div className="container flex justify-center">
              <Loader2 className="w-12 h-12 animate-spin text-primary" />
            </div>
          </section>
        )}

        {/* Error State */}
        {error && (
          <section className="py-20">
            <div className="container text-center max-w-md mx-auto">
              <div className="bg-red-50 text-red-600 p-6 rounded-2xl border border-red-100">
                <p>No se pudieron cargar los artículos por el momento.</p>
                <Button variant="outline" className="mt-4 border-red-200 text-red-700 hover:bg-red-100" onClick={() => window.location.reload()}>Reintentar</Button>
              </div>
            </div>
          </section>
        )}

        {/* Articles Grid */}
        {!isLoading && !error && (
          <section className="py-12 md:py-20 bg-gray-50/50">
            <div className="container px-4 md:px-6">
              {filteredPosts.length > 0 ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 row-gap-12">
                  {filteredPosts.map((article: any, index) => (
                    <Link to={`/blog/${article.id}`} key={index} className="block h-full">
                      <article
                        className="group flex flex-col bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 h-full"
                      >
                        {/* Image Container */}
                        <div className="relative h-64 overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                          {/* Category Badge */}
                          <div className="absolute top-4 right-4 z-20">
                            <span className="px-3 py-1.5 bg-white/90 backdrop-blur-md text-primary text-xs font-bold uppercase tracking-wider rounded-full shadow-lg flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
                              {article.category || "General"}
                            </span>
                          </div>

                          {article.cover_image_url ? (
                            <img
                              src={article.cover_image_url}
                              alt={article.title}
                              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                            />
                          ) : (
                            <div className="w-full h-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                              <BookOpen className="w-12 h-12 text-gray-300 group-hover:text-primary/50 transition-colors duration-500" />
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="p-6 md:p-8 flex flex-col flex-1 relative">
                          {/* Decorative background accent */}
                          <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[4rem] -z-0 transition-all duration-500 group-hover:bg-primary/10" />

                          <div className="relative z-10 flex flex-col h-full">
                            <div className="flex items-center gap-2 mb-3 text-xs font-medium text-gray-400">
                              <Calendar className="w-3.5 h-3.5" />
                              {new Date(article.created_at).toLocaleDateString('es-CO', { month: 'short', day: 'numeric', year: 'numeric' })}
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 leading-tight group-hover:text-primary transition-colors duration-300">
                              {article.title}
                            </h3>

                            <p className="text-gray-600 mb-6 line-clamp-3 text-sm leading-relaxed flex-1 group-hover:text-gray-700">
                              {article.excerpt || (typeof article.content === 'string' ? article.content.substring(0, 120) + '...' : 'Leer artículo completo...')}
                            </p>

                            <div className="pt-4 border-t border-gray-100 mt-auto flex items-center justify-between">
                              <div className="flex items-center gap-1.5 text-xs text-secondary font-semibold">
                                <Clock className="w-3.5 h-3.5" />
                                {article.readTime || "5 min"} de lectura
                              </div>
                              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:rotate-[-45deg]">
                                <ArrowRight className="w-4 h-4" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 flex flex-col items-center animate-in fade-in zoom-in duration-500">
                  <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6 relative">
                    <div className="absolute inset-0 bg-primary/10 rounded-full animate-ping opacity-20"></div>
                    <BookOpen className="w-10 h-10 text-primary/40" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Explora otras categorías</h3>
                  <p className="text-gray-500 max-w-xs mx-auto">No encontramos artículos en esta sección por ahora, pero hay mucho más por descubrir.</p>
                  <Button
                    variant="ghost"
                    className="mt-6 text-primary hover:text-primary/80 hover:bg-primary/5"
                    onClick={() => setSelectedCategory("Todos")}
                  >
                    Ver todos los artículos
                  </Button>
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
