import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAllPosts, useDeletePost } from '@/hooks/usePosts';
import { useToast } from '@/hooks/use-toast';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  EyeOff,
  Loader2,
  FileText
} from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

const AdminPosts = () => {
  const { data: posts, isLoading } = useAllPosts();
  const deletePost = useDeletePost();
  const { toast } = useToast();

  const handleDelete = async (id: string, title: string) => {
    try {
      await deletePost.mutateAsync(id);
      toast({
        title: 'Artículo eliminado',
        description: `"${title}" ha sido eliminado correctamente.`,
      });
    } catch {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'No se pudo eliminar el artículo.',
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">Artículos del Blog</h1>
          <p className="text-muted-foreground">Gestiona el contenido de educación financiera</p>
        </div>
        <Link to="/admin/posts/new">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Nuevo Artículo
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Todos los Artículos</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : posts && posts.length > 0 ? (
            <div className="space-y-4">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-muted/50 border border-border"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      {post.published ? (
                        <Eye className="w-4 h-4 text-primary flex-shrink-0" />
                      ) : (
                        <EyeOff className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      )}
                      <h3 className="font-semibold text-foreground truncate">{post.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {post.category} • {new Date(post.created_at).toLocaleDateString('es-CO', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                    {post.excerpt && (
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-1">
                        {post.excerpt}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        post.published
                          ? 'bg-primary/10 text-primary'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {post.published ? 'Publicado' : 'Borrador'}
                    </span>
                    <Link to={`/admin/posts/${post.id}`}>
                      <Button variant="outline" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                    </Link>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="outline" size="sm" className="text-destructive hover:text-destructive">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>¿Eliminar artículo?</AlertDialogTitle>
                          <AlertDialogDescription>
                            Esta acción no se puede deshacer. El artículo "{post.title}" será eliminado permanentemente.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancelar</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => handleDelete(post.id, post.title)}
                            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                          >
                            Eliminar
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                No hay artículos aún
              </h3>
              <p className="text-muted-foreground mb-6">
                Comienza creando tu primer artículo de educación financiera.
              </p>
              <Link to="/admin/posts/new">
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Crear primer artículo
                </Button>
              </Link>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminPosts;
