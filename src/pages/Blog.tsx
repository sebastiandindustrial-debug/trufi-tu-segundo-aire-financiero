import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { usePublishedPosts } from "@/hooks/usePosts";
import { Play, BookOpen, Headphones, Calendar, Clock, ArrowRight, Loader2 } from "lucide-react";

const podcasts = [
  {
    id: 1,
    title: "Episodio 12: Inversiones para Principiantes",
    guest: "Carlos Martínez, Asesor Financiero",
    duration: "45 min",
  },
  {
    id: 2,
    title: "Episodio 11: Planificando el 2025",
    guest: "María López, Economista",
    duration: "38 min",
  },
  {
    id: 3,
    title: "Episodio 10: Mitos sobre los Créditos",
    guest: "Juan Rodríguez, Experto en Crédito",
    duration: "42 min",
  },
];

const Blog = () => {
  const { data: posts, isLoading, error } = usePublishedPosts();

  const featuredPost = posts?.[0];
  const remainingPosts = posts?.slice(1, 5) || [];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-primary/5 to-background">
          <div className="container text-center max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-primary font-semibold text-sm">
                Blog de Aprendizaje Financiero
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Aprende con nuestro{" "}
              <span className="text-primary">Experto en Finanzas</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Artículos, podcasts y recursos educativos para tomar mejores decisiones financieras.
              Contenido creado por expertos, pensado para ti.
            </p>
          </div>
        </section>

        {/* Loading State */}
        {isLoading && (
          <section className="py-16">
            <div className="container flex justify-center">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          </section>
        )}

        {/* Error State */}
        {error && (
          <section className="py-16">
            <div className="container text-center">
              <p className="text-muted-foreground">No se pudieron cargar los artículos.</p>
            </div>
          </section>
        )}

        {/* Featured Article */}
        {featuredPost && (
          <section className="py-12 md:py-16">
            <div className="container">
              <h2 className="text-xl font-bold text-foreground mb-6">Artículo Destacado</h2>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-3xl overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="bg-primary/10 flex items-center justify-center p-12 md:p-16">
                    {featuredPost.cover_image_url ? (
                      <img
                        src={featuredPost.cover_image_url}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    ) : (
                      <BookOpen className="w-24 h-24 text-primary/30" />
                    )}
                  </div>
                  <div className="p-6 md:p-10 flex flex-col justify-center">
                    <span className="text-primary font-semibold text-sm mb-2">
                      {featuredPost.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {featuredPost.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {featuredPost.excerpt || featuredPost.content.substring(0, 150) + '...'}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(featuredPost.created_at).toLocaleDateString('es-CO', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {Math.ceil(featuredPost.content.split(' ').length / 200)} min de lectura
                      </span>
                    </div>
                    <Button variant="hero" className="w-fit">
                      Leer Artículo
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Articles Grid */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold text-foreground">Últimos Artículos</h2>
            </div>
            {remainingPosts.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {remainingPosts.map((article) => (
                  <article
                    key={article.id}
                    className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-elevated transition-shadow group cursor-pointer"
                  >
                    <div className="bg-muted h-32 flex items-center justify-center">
                      {article.cover_image_url ? (
                        <img
                          src={article.cover_image_url}
                          alt={article.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <BookOpen className="w-10 h-10 text-muted-foreground/50" />
                      )}
                    </div>
                    <div className="p-5">
                      <span className="text-xs font-semibold text-primary">{article.category}</span>
                      <h3 className="font-bold text-foreground mt-1 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                        {article.excerpt || article.content.substring(0, 80) + '...'}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span>
                          {new Date(article.created_at).toLocaleDateString('es-CO', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                          })}
                        </span>
                        <span>•</span>
                        <span>{Math.ceil(article.content.split(' ').length / 200)} min</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : !isLoading && (
              <div className="text-center py-12 bg-card rounded-2xl border border-border">
                <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Próximamente</h3>
                <p className="text-muted-foreground">
                  Estamos preparando contenido educativo de calidad para ti.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Podcasts Section */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Headphones className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground">Podcast: Finanzas con TRUFI</h2>
                <p className="text-sm text-muted-foreground">
                  Escucha a nuestros expertos donde quieras
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {podcasts.map((podcast) => (
                <div
                  key={podcast.id}
                  className="bg-card border border-border rounded-2xl p-5 hover:shadow-elevated transition-shadow cursor-pointer group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                      <Play className="w-6 h-6 text-primary-foreground ml-1" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-foreground mb-1 line-clamp-2">
                        {podcast.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">{podcast.guest}</p>
                      <span className="text-xs text-primary font-medium">{podcast.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button variant="outline">Ver todos los episodios</Button>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-primary to-primary/80">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Recibe consejos financieros en tu correo
              </h2>
              <p className="text-primary-foreground/80 mb-8">
                Suscríbete a nuestro newsletter semanal y recibe contenido exclusivo para mejorar
                tu salud financiera.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <Button variant="secondary" className="px-8">
                  Suscribirse
                </Button>
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
