import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { usePost, useCreatePost, useUpdatePost } from '@/hooks/usePosts';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, Loader2, Save, Eye, HelpCircle } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import ImageUploader from '@/components/ImageUploader';

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
              <CardTitle>Contenido del Artículo</CardTitle>
              <CardDescription>
                Completa los campos para crear o editar tu artículo. Los campos con * son obligatorios.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title" className="text-base font-semibold">
                  Título del Artículo *
                </Label>
                <Input
                  id="title"
                  placeholder="Ej: 5 Consejos para Mejorar tu Historial Crediticio"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  disabled={isLoading}
                  className="text-lg"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Label htmlFor="excerpt" className="text-base font-semibold">
                    Resumen / Descripción Corta
                  </Label>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <HelpCircle className="w-4 h-4 text-muted-foreground cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs">
                      <p>Este texto aparecerá en las tarjetas del blog. Mantenlo breve (1-2 oraciones).</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <Textarea
                  id="excerpt"
                  placeholder="Ej: Aprende estrategias prácticas para mejorar tu puntaje crediticio y acceder a mejores tasas."
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  disabled={isLoading}
                  rows={2}
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Label htmlFor="content" className="text-base font-semibold">
                    Cuerpo del Artículo *
                  </Label>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <HelpCircle className="w-4 h-4 text-muted-foreground cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs">
                      <p>Puedes usar formato Markdown: **negrita**, *cursiva*, # títulos, - listas</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <Textarea
                  id="content"
                  placeholder="Escribe aquí el contenido completo de tu artículo...

Puedes usar:
- **texto en negrita**
- *texto en cursiva*
- # Títulos grandes
- ## Subtítulos
- Listas con guiones"
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  disabled={isLoading}
                  rows={18}
                  className="text-base leading-relaxed"
                />
                <p className="text-xs text-muted-foreground">
                  Tip: Usa **texto** para negrita, *texto* para cursiva, y # para títulos.
                </p>
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
                <Label className="text-base font-semibold">Imagen de Portada</Label>
                <ImageUploader
                  value={formData.cover_image_url}
                  onChange={(url) => setFormData({ ...formData, cover_image_url: url })}
                  disabled={isLoading}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </form>
    </div>
  );
};

export default PostEditor;
