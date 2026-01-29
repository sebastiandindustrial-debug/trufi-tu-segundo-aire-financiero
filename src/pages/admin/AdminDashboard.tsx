import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAllPosts } from '@/hooks/usePosts';
import { usePaymentLink } from '@/hooks/useSettings';
import { FileText, Link as LinkIcon, Plus, Eye } from 'lucide-react';

const AdminDashboard = () => {
  const { data: posts, isLoading: postsLoading } = useAllPosts();
  const { data: paymentLink } = usePaymentLink();

  const publishedCount = posts?.filter((p) => p.published).length || 0;
  const draftCount = posts?.filter((p) => !p.published).length || 0;

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">Bienvenido al panel de administración de TRUFI</p>
        </div>
        <Link to="/admin/posts/new">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Nuevo Artículo
          </Button>
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Artículos
            </CardTitle>
            <FileText className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {postsLoading ? '...' : posts?.length || 0}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Publicados
            </CardTitle>
            <Eye className="w-4 h-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{publishedCount}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Borradores
            </CardTitle>
            <FileText className="w-4 h-4 text-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-secondary">{draftCount}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Link de Pago
            </CardTitle>
            <LinkIcon className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-sm font-medium text-foreground truncate" title={paymentLink}>
              {paymentLink ? 'Configurado ✓' : 'Sin configurar'}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Posts */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Últimos Artículos</CardTitle>
          <Link to="/admin/posts">
            <Button variant="ghost" size="sm">
              Ver todos
            </Button>
          </Link>
        </CardHeader>
        <CardContent>
          {postsLoading ? (
            <p className="text-muted-foreground">Cargando...</p>
          ) : posts && posts.length > 0 ? (
            <div className="space-y-4">
              {posts.slice(0, 5).map((post) => (
                <div
                  key={post.id}
                  className="flex items-center justify-between p-4 rounded-xl bg-muted/50"
                >
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-foreground truncate">{post.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {post.category} • {new Date(post.created_at).toLocaleDateString('es-CO')}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        post.published
                          ? 'bg-primary/10 text-primary'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {post.published ? 'Publicado' : 'Borrador'}
                    </span>
                    <Link to={`/admin/posts/${post.id}`}>
                      <Button variant="ghost" size="sm">
                        Editar
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground mb-4">No hay artículos aún</p>
              <Link to="/admin/posts/new">
                <Button>Crear primer artículo</Button>
              </Link>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
