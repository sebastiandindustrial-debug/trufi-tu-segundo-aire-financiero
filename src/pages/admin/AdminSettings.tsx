import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { usePaymentLink, useUpdateSetting } from '@/hooks/useSettings';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Save, ExternalLink, Link as LinkIcon } from 'lucide-react';

const AdminSettings = () => {
  const { data: paymentLink, isLoading } = usePaymentLink();
  const updateSetting = useUpdateSetting();
  const { toast } = useToast();
  const [newPaymentLink, setNewPaymentLink] = useState('');

  React.useEffect(() => {
    if (paymentLink) {
      setNewPaymentLink(paymentLink);
    }
  }, [paymentLink]);

  const handleSavePaymentLink = async () => {
    if (!newPaymentLink.trim()) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'El link de pago no puede estar vacío.',
      });
      return;
    }

    // Basic URL validation
    try {
      new URL(newPaymentLink);
    } catch {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Por favor ingresa una URL válida.',
      });
      return;
    }

    try {
      await updateSetting.mutateAsync({
        key: 'payment_link',
        value: newPaymentLink,
      });
      toast({
        title: 'Configuración guardada',
        description: 'El link de pago ha sido actualizado correctamente.',
      });
    } catch {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'No se pudo guardar la configuración.',
      });
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">Configuración</h1>
        <p className="text-muted-foreground">Gestiona la configuración global del sitio</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <LinkIcon className="w-5 h-5 text-primary" />
            Zona de Pagos
          </CardTitle>
          <CardDescription>
            Configura el enlace externo al que serán redirigidos los usuarios cuando quieran realizar un pago (ej: PSE, pasarela de pagos, etc.)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {isLoading ? (
            <div className="flex items-center gap-2 text-muted-foreground">
              <Loader2 className="w-4 h-4 animate-spin" />
              Cargando configuración...
            </div>
          ) : (
            <>
              <div className="space-y-2">
                <Label htmlFor="payment_link">URL de la Pasarela de Pago</Label>
                <Input
                  id="payment_link"
                  type="url"
                  placeholder="https://www.pse.com.co/..."
                  value={newPaymentLink}
                  onChange={(e) => setNewPaymentLink(e.target.value)}
                />
                <p className="text-xs text-muted-foreground">
                  Este enlace aparecerá en la Zona de Pagos del sitio público.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={handleSavePaymentLink}
                  disabled={updateSetting.isPending || newPaymentLink === paymentLink}
                >
                  {updateSetting.isPending ? (
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  ) : (
                    <Save className="w-4 h-4 mr-2" />
                  )}
                  Guardar Cambios
                </Button>

                {newPaymentLink && (
                  <Button
                    variant="outline"
                    onClick={() => window.open(newPaymentLink, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Probar Enlace
                  </Button>
                )}
              </div>
            </>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Información del Sistema</CardTitle>
          <CardDescription>
            Detalles técnicos de la plataforma
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 text-sm">
            <div className="flex justify-between py-2 border-b border-border">
              <span className="text-muted-foreground">Plataforma</span>
              <span className="font-medium text-foreground">TRUFI S.A.S.</span>
            </div>
            <div className="flex justify-between py-2 border-b border-border">
              <span className="text-muted-foreground">Versión</span>
              <span className="font-medium text-foreground">1.0.0</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-muted-foreground">Backend</span>
              <span className="font-medium text-foreground">Lovable Cloud</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminSettings;
