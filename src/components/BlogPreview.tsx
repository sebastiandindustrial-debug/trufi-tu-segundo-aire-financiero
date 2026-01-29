import { Link } from "react-router-dom";
import { usePublishedPosts } from "@/hooks/usePosts";
import { BookOpen, Calendar, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogPreview = () => {
  const { data: posts, isLoading, error } = usePublishedPosts();

  // Only show first 3 posts
  const displayPosts = posts?.slice(0, 3) || [];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-primary font-semibold text-sm">
              Educación Financiera
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Aprende con Nuestro Blog
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Artículos, guías y consejos de nuestros expertos en finanzas para ayudarte
            a tomar mejores decisiones económicas.
          </p>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No se pudieron cargar los artículos.</p>
          </div>
        ) : displayPosts.length > 0 ? (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {displayPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-elevated transition-all duration-300 group"
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                    {post.cover_image_url ? (
                      <img
                        src={post.cover_image_url}
                        alt={post.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    ) : (
                      <BookOpen className="w-12 h-12 text-primary/30" />
                    )}
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <h3 className="font-bold text-foreground mt-3 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                        {post.excerpt}
                      </p>
                    )}
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      <span>
                        {new Date(post.created_at).toLocaleDateString('es-CO', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center">
              <Link to="/blog">
                <Button variant="outline" size="lg">
                  Ver todos los artículos
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center py-12 bg-card rounded-2xl border border-border">
            <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Próximamente
            </h3>
            <p className="text-muted-foreground">
              Estamos preparando contenido educativo de calidad para ti.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogPreview;
