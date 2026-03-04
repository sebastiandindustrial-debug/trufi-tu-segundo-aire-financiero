
import { useParams, Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Calendar, Clock, ArrowLeft, Share2, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogPost = () => {
    const { id } = useParams();
    const post = blogPosts.find((p) => p.id === Number(id));

    if (!post) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col">
                <Header />
                <main className="flex-1 flex flex-col items-center justify-center p-4">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Artículo no encontrado</h1>
                    <p className="text-gray-600 mb-8">Lo sentimos, el artículo que buscas no existe o ha sido movido.</p>
                    <Link to="/blog">
                        <Button>Volver a la Zona de Aprendizaje</Button>
                    </Link>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="pt-24 pb-20">
                {/* Article Header */}
                <div className="container max-w-4xl px-4 md:px-6 mb-12">
                    <Link
                        to="/blog"
                        className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-8 transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Volver a artículos
                    </Link>

                    <div className="flex items-center gap-3 mb-6">
                        <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider">
                            {post.category}
                        </span>
                        <span className="text-sm text-gray-400">•</span>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Calendar className="w-4 h-4" />
                            {new Date(post.created_at).toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </div>
                        <span className="text-sm text-gray-400">•</span>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Clock className="w-4 h-4" />
                            {post.readTime} de lectura
                        </div>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-extrabold text-foreground leading-tight mb-8">
                        {post.title}
                    </h1>

                    {/* Featured Image */}
                    <div className="rounded-3xl overflow-hidden shadow-2xl mb-12 aspect-video relative">
                        <img
                            src={post.cover_image_url}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Article Content */}
                <article className="container max-w-3xl px-4 md:px-6 prose prose-lg prose-headings:font-bold prose-headings:text-foreground prose-p:text-gray-600 prose-a:text-primary prose-strong:text-foreground">
                    {/* Using dangerouslySetInnerHTML slightly cautiously since content is internal */}
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </article>

                {/* Footer of Article */}
                <div className="container max-w-3xl px-4 md:px-6 mt-16 pt-8 border-t border-gray-100 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <Tag className="w-5 h-5 text-gray-400" />
                        <span className="text-sm text-gray-500 font-medium">Temas: {post.category}, Finanzas, TRUFI</span>
                    </div>
                    <Button variant="outline" size="sm" className="gap-2">
                        <Share2 className="w-4 h-4" />
                        Compartir
                    </Button>
                </div>
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default BlogPost;
