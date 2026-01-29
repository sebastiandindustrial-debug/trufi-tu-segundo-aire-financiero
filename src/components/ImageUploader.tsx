import React, { useState, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Upload, Loader2, X, Image as ImageIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ImageUploaderProps {
  value: string;
  onChange: (url: string) => void;
  disabled?: boolean;
  bucket?: string;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({
  value,
  onChange,
  disabled = false,
  bucket = 'blog-images',
}) => {
  const [uploading, setUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleUpload = async (file: File) => {
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Solo se permiten archivos de imagen.',
      });
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'La imagen no puede superar los 5MB.',
      });
      return;
    }

    setUploading(true);

    try {
      // Generate unique filename
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = `posts/${fileName}`;

      // Upload to Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from(bucket)
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false,
        });

      if (uploadError) throw uploadError;

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from(bucket)
        .getPublicUrl(filePath);

      onChange(publicUrl);

      toast({
        title: '¡Imagen subida!',
        description: 'La imagen se ha subido correctamente.',
      });
    } catch (error) {
      console.error('Upload error:', error);
      toast({
        variant: 'destructive',
        title: 'Error al subir',
        description: 'No se pudo subir la imagen. Verifica que tienes permisos.',
      });
    } finally {
      setUploading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleUpload(file);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleUpload(file);
    }
  };

  const handleRemove = () => {
    onChange('');
  };

  return (
    <div className="space-y-3">
      {value ? (
        <div className="relative group">
          <img
            src={value}
            alt="Preview"
            className="w-full h-40 object-cover rounded-lg border border-border"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/placeholder.svg';
            }}
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
            <Button
              type="button"
              variant="destructive"
              size="sm"
              onClick={handleRemove}
              disabled={disabled}
            >
              <X className="w-4 h-4 mr-1" />
              Eliminar
            </Button>
          </div>
        </div>
      ) : (
        <div
          className={cn(
            'border-2 border-dashed rounded-lg p-6 text-center transition-colors cursor-pointer',
            dragActive
              ? 'border-primary bg-primary/5'
              : 'border-border hover:border-primary/50',
            disabled && 'opacity-50 cursor-not-allowed'
          )}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={() => !disabled && fileInputRef.current?.click()}
        >
          {uploading ? (
            <div className="flex flex-col items-center gap-2">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
              <p className="text-sm text-muted-foreground">Subiendo imagen...</p>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 rounded-full bg-primary/10">
                <ImageIcon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">
                  Arrastra una imagen o haz clic
                </p>
                <p className="text-sm text-muted-foreground">
                  PNG, JPG o WEBP (máx. 5MB)
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        disabled={disabled || uploading}
        className="hidden"
      />

      {/* Manual URL input as fallback */}
      <div className="flex items-center gap-2">
        <span className="text-xs text-muted-foreground">o pega una URL:</span>
        <Input
          placeholder="https://..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled || uploading}
          className="text-sm"
        />
      </div>
    </div>
  );
};

export default ImageUploader;
