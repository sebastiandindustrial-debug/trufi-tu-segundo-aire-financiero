import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Shield, CheckCircle } from 'lucide-react';
import trufiLogo from '@/assets/trufi_logo.png';

const AdminSetup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);
  const [hasAdmin, setHasAdmin] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Check if there's already an admin
  useEffect(() => {
    const checkForAdmin = async () => {
      try {
        const { count, error } = await supabase
          .from('user_roles')
          .select('*', { count: 'exact', head: true })
          .eq('role', 'admin');

        if (error) throw error;
        setHasAdmin((count || 0) > 0);
      } catch (err) {
        console.error('Error checking admin:', err);
      } finally {
        setChecking(false);
      }
    };

    checkForAdmin();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Las contraseñas no coinciden.',
      });
      return;
    }

    if (password.length < 6) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'La contraseña debe tener al menos 6 caracteres.',
      });
      return;
    }

    setLoading(true);

    try {
      // 1. Create the user account
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: window.location.origin,
          data: {
            full_name: fullName,
          },
        },
      });

      if (authError) throw authError;

      if (!authData.user) {
        throw new Error('No se pudo crear el usuario');
      }

      // 2. Assign admin role (using service role via edge function or direct insert)
      // Since we're the first user, we need a special flow
      const { error: roleError } = await supabase
        .from('user_roles')
        .insert({
          user_id: authData.user.id,
          role: 'admin',
        });

      if (roleError) {
        console.error('Role assignment error:', roleError);
        // If RLS blocks this, we'll handle it differently
        toast({
          variant: 'destructive',
          title: 'Cuenta creada',
          description: 'Tu cuenta fue creada, pero necesitas asignar el rol de admin manualmente. Ve a Cloud → Run SQL.',
        });
        setLoading(false);
        return;
      }

      toast({
        title: '¡Administrador creado!',
        description: 'Tu cuenta de Super Admin ha sido configurada correctamente.',
      });

      // Sign in the user
      await supabase.auth.signInWithPassword({ email, password });
      
      navigate('/admin');
    } catch (err: unknown) {
      console.error('Setup error:', err);
      const errorMessage = err instanceof Error ? err.message : 'Error desconocido';
      toast({
        variant: 'destructive',
        title: 'Error',
        description: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  };

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-background">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (hasAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-background p-4">
        <Card className="w-full max-w-md shadow-elevated text-center">
          <CardHeader>
            <img src={trufiLogo} alt="TRUFI" className="h-16 mx-auto mb-4" />
            <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
            <CardTitle className="text-2xl font-bold text-foreground">
              Administrador ya configurado
            </CardTitle>
            <CardDescription>
              Ya existe un administrador en el sistema. Si necesitas acceder, usa la página de login.
            </CardDescription>
          </CardHeader>
          <CardFooter className="justify-center">
            <Button onClick={() => navigate('/admin/login')}>
              Ir a Iniciar Sesión
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-background p-4">
      <Card className="w-full max-w-md shadow-elevated">
        <CardHeader className="text-center">
          <img src={trufiLogo} alt="TRUFI" className="h-16 mx-auto mb-4" />
          <div className="flex items-center justify-center gap-2 mb-2">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold text-foreground">
            Crear Primer Administrador
          </CardTitle>
          <CardDescription>
            Configura tu cuenta de Super Admin para gestionar TRUFI. Esta opción solo está disponible una vez.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Nombre completo</Label>
              <Input
                id="fullName"
                type="text"
                placeholder="Juan Pérez"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                disabled={loading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@trufi.com.co"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                type="password"
                placeholder="Mínimo 6 caracteres"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirmar contraseña</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Repite tu contraseña"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                disabled={loading}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Creando cuenta...
                </>
              ) : (
                <>
                  <Shield className="w-4 h-4 mr-2" />
                  Crear Cuenta de Administrador
                </>
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default AdminSetup;
