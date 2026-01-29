import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { usePost, useCreatePost, useUpdatePost } from '@/hooks/usePosts';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, Loader2, Save, Eye } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const categories = [
  'Planificación Financiera',
  'Créditos',
  'Ahorro',
  'Inversiones',
  'Educación',
  'Docentes',
  'Pensionados',
  'Fuerza Pública',
  'General',
];

const PostEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const isEditing = !!id && id !== 'new';

  const { data: existingPost, isLoading: loadingPost } = usePost(id || '');
  const createPost = useCreatePost();
  const updatePost = useUpdatePost();

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    cover_image_url: '',
    category: 'General',
    published: false,
  });

  useEffect(() => {
    if (existingPost) {
      setFormData({
        title: existingPost.title,
        content: existingPost.content,
        excerpt: existingPost.excerpt || '',
        cover_image_url: existingPost.cover_image_url || '',
        category: existingPost.category,
        published: existingPost.published,
      });
    }
  }, [existingPost]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title.trim() || !formData.content.trim()) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'El título y contenido son requeridos.',
      });
      return;
    }

    try {
      if (isEditing && id) {
        await updatePost.mutateAsync({
          id,
          ...formData,
        });
        toast({
          title: 'Artículo actualizado',
          description: 'Los cambios han sido guardados correctamente.',
        });
      } else {
        await createPost.mutateAsync(formData);
        toast({
          title: 'Artículo creado',
          description: 'El artículo ha sido creado correctamente.',
        });
      }
      navigate('/admin/posts');
    } catch {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'No se pudo guardar el artículo. Inténtalo de nuevo.',
      });
    }
  };

  const isLoading = createPost.isPending || updatePost.isPending;

  if (isEditing && loadingPost) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => navigate('/admin/posts')}>
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            {isEditing ? 'Editar Artículo' : 'Nuevo Artículo'}
          </h1>
          <p className="text-muted-foreground">
            {isEditing ? 'Modifica el contenido del artículo' : 'Crea un nuevo artículo para el blog'}
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Contenido</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Título *</Label>
                <Input
                  id="title"
                  placeholder="Título del artículo"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="excerpt">Resumen</Label>
                <Textarea
                  id="excerpt"
                  placeholder="Breve descripción del artículo (opcional)"
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  disabled={isLoading}
                  rows={2}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Contenido (Markdown) *</Label>
                <Textarea
                  id="content"
                  placeholder="Escribe el contenido del artículo en formato Markdown..."
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  disabled={isLoading}
                  rows={15}
                  className="font-mono text-sm"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Publicación</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="published">Estado</Label>
                  <p className="text-sm text-muted-foreground">
                    {formData.published ? 'Visible públicamente' : 'Solo visible para admins'}
                  </p>
                </div>
                <Switch
                  id="published"
                  checked={formData.published}
                  onCheckedChange={(checked) => setFormData({ ...formData, published: checked })}
                  disabled={isLoading}
                />
              </div>

              <div className="flex items-center gap-2 pt-2">
                <Button type="submit" className="flex-1" disabled={isLoading}>
                  {isLoading ? (
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  ) : (
                    <Save className="w-4 h-4 mr-2" />
                  )}
                  {isEditing ? 'Guardar Cambios' : 'Crear Artículo'}
                </Button>
              </div>

              {formData.published && (
                <Button type="button" variant="outline" className="w-full" onClick={() => window.open('/blog', '_blank')}>
                  <Eye className="w-4 h-4 mr-2" />
                  Ver en Blog
                </Button>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Detalles</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="category">Categoría</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => setFormData({ ...formData, category: value })}
                  disabled={isLoading}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona una categoría" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cover_image">URL de Imagen de Portada</Label>
                <Input
                  id="cover_image"
                  placeholder="https://ejemplo.com/imagen.jpg"
                  value={formData.cover_image_url}
                  onChange={(e) => setFormData({ ...formData, cover_image_url: e.target.value })}
                  disabled={isLoading}
                />
                {formData.cover_image_url && (
                  <img
                    src={formData.cover_image_url}
                    alt="Preview"
                    className="w-full h-32 object-cover rounded-lg mt-2"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </form>
    </div>
  );
};

export default PostEditor;
