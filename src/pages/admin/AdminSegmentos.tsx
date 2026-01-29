import { useState } from "react";
import { useSegmentos, useUpdateSegmento, Segmento } from "@/hooks/useSegmentos";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Loader2, Save, Users } from "lucide-react";
import ImageUploader from "@/components/ImageUploader";

const AdminSegmentos = () => {
  const { data: segmentos, isLoading, error } = useSegmentos();
  const updateSegmento = useUpdateSegmento();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<Segmento>>({});

  const handleEdit = (segmento: Segmento) => {
    setEditingId(segmento.id);
    setFormData({
      titulo: segmento.titulo,
      descripcion: segmento.descripcion,
      imagen_url: segmento.imagen_url,
      enlace: segmento.enlace,
    });
  };

  const handleCancel = () => {
    setEditingId(null);
    setFormData({});
  };

  const handleSave = async (id: string) => {
    try {
      await updateSegmento.mutateAsync({ id, ...formData });
      toast.success("Segmento actualizado correctamente");
      setEditingId(null);
      setFormData({});
    } catch (err) {
      toast.error("Error al actualizar el segmento");
    }
  };

  const handleImageUpload = (url: string) => {
    setFormData((prev) => ({ ...prev, imagen_url: url }));
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12 text-destructive">
        Error al cargar los segmentos
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Users className="h-6 w-6 text-primary" />
        <h1 className="text-2xl font-bold">Segmentación de Audiencia</h1>
      </div>
      <p className="text-muted-foreground">
        Edita los textos e imágenes de cada tarjeta de audiencia que aparece en la página principal.
      </p>

      <div className="grid gap-6">
        {segmentos?.map((segmento) => (
          <Card key={segmento.id}>
            <CardHeader>
              <CardTitle className="text-lg">{segmento.titulo}</CardTitle>
            </CardHeader>
            <CardContent>
              {editingId === segmento.id ? (
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="titulo">Título</Label>
                        <Input
                          id="titulo"
                          value={formData.titulo || ""}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, titulo: e.target.value }))
                          }
                        />
                      </div>
                      <div>
                        <Label htmlFor="descripcion">Descripción</Label>
                        <Textarea
                          id="descripcion"
                          value={formData.descripcion || ""}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, descripcion: e.target.value }))
                          }
                          rows={3}
                        />
                      </div>
                      <div>
                        <Label htmlFor="enlace">Enlace (ruta)</Label>
                        <Input
                          id="enlace"
                          value={formData.enlace || ""}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, enlace: e.target.value }))
                          }
                          placeholder="/pensionado"
                        />
                      </div>
                    </div>
                    <div>
                      <Label>Imagen</Label>
                      <ImageUploader
                        value={formData.imagen_url || ""}
                        onChange={handleImageUpload}
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => handleSave(segmento.id)}
                      disabled={updateSegmento.isPending}
                    >
                      {updateSegmento.isPending ? (
                        <Loader2 className="h-4 w-4 animate-spin mr-2" />
                      ) : (
                        <Save className="h-4 w-4 mr-2" />
                      )}
                      Guardar
                    </Button>
                    <Button variant="outline" onClick={handleCancel}>
                      Cancelar
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="flex items-start gap-6">
                  <div className="w-32 h-24 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                    {segmento.imagen_url ? (
                      <img
                        src={segmento.imagen_url}
                        alt={segmento.titulo}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
                        Sin imagen
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-muted-foreground mb-2">{segmento.descripcion}</p>
                    <p className="text-sm text-muted-foreground">
                      Enlace: <code className="bg-muted px-1 rounded">{segmento.enlace}</code>
                    </p>
                  </div>
                  <Button variant="outline" onClick={() => handleEdit(segmento)}>
                    Editar
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminSegmentos;
