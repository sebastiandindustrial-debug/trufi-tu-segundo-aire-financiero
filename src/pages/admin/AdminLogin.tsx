import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Lock, UserPlus } from 'lucide-react';
import trufiLogo from '@/assets/trufi_logo.png';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [checkingAdmin, setCheckingAdmin] = useState(true);
  const [hasAdmin, setHasAdmin] = useState(true);
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  const from = (location.state as { from?: { pathname: string } })?.from?.pathname || '/admin';

  // Check if there are any admins in the system
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
        setCheckingAdmin(false);
      }
    };

    checkForAdmin();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await signIn(email, password);

    if (error) {
      toast({
        variant: 'destructive',
        title: 'Error de autenticación',
        description: 'Credenciales incorrectas. Por favor verifica tu email y contraseña.',
      });
      setLoading(false);
      return;
    }

    toast({
      title: '¡Bienvenido!',
      description: 'Has iniciado sesión correctamente.',
    });
    navigate(from, { replace: true });
  };

  if (checkingAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-background">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-background p-4">
      <Card className="w-full max-w-md shadow-elevated">
        <CardHeader className="text-center">
          <img src={trufiLogo} alt="TRUFI" className="h-16 mx-auto mb-4" />
          <CardTitle className="text-2xl font-bold text-foreground flex items-center justify-center gap-2">
            <Lock className="w-5 h-5 text-primary" />
            Panel de Administración
          </CardTitle>
          <CardDescription>
            Ingresa tus credenciales para acceder al panel de administración.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
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
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Iniciando sesión...
                </>
              ) : (
                'Iniciar Sesión'
              )}
            </Button>

            {!hasAdmin && (
              <div className="w-full pt-2 border-t border-border">
                <p className="text-sm text-center text-muted-foreground mb-3">
                  ¿Primera vez configurando TRUFI?
                </p>
                <Link to="/admin/setup" className="block">
                  <Button type="button" variant="outline" className="w-full">
                    <UserPlus className="w-4 h-4 mr-2" />
                    Crear Primer Administrador
                  </Button>
                </Link>
              </div>
            )}
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default AdminLogin;
