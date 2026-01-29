import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Pensionado from "./pages/Pensionado";
import Docente from "./pages/Docente";
import FuerzaPublica from "./pages/FuerzaPublica";
import QuienesSomos from "./pages/QuienesSomos";
import Servicios from "./pages/Servicios";
import TrufiPlus from "./pages/TrufiPlus";
import TrufiFlex from "./pages/TrufiFlex";
import Blog from "./pages/Blog";
import ZonaPagos from "./pages/ZonaPagos";

// Admin Pages
import AdminLogin from "./pages/admin/AdminLogin";
import AdminSetup from "./pages/admin/AdminSetup";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminPosts from "./pages/admin/AdminPosts";
import PostEditor from "./pages/admin/PostEditor";
import AdminSettings from "./pages/admin/AdminSettings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/pensionado" element={<Pensionado />} />
            <Route path="/docente" element={<Docente />} />
            <Route path="/fuerza-publica" element={<FuerzaPublica />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/servicios/trufi-plus" element={<TrufiPlus />} />
            <Route path="/servicios/trufi-flex" element={<TrufiFlex />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/zona-pagos" element={<ZonaPagos />} />
            
            {/* Admin Routes (Public) */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/setup" element={<AdminSetup />} />
            
            {/* Admin Routes (Protected) */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute requireAdmin>
                  <AdminLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<AdminDashboard />} />
              <Route path="posts" element={<AdminPosts />} />
              <Route path="posts/new" element={<PostEditor />} />
              <Route path="posts/:id" element={<PostEditor />} />
              <Route path="settings" element={<AdminSettings />} />
            </Route>
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
