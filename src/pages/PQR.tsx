import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { FileText, Send, Loader2, AlertCircle } from "lucide-react";
import { Label } from "@/components/ui/label";

const PQR = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        telefono: "",
        tipo: "", // Petición, Queja, Reclamo, Sugerencia
        mensaje: "",
        aceptaTerminos: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSelectChange = (value: string) => {
        setFormData({ ...formData, tipo: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.tipo) {
            toast.error("Por favor selecciona el tipo de solicitud");
            return;
        }

        if (!formData.aceptaTerminos) {
            toast.error("Debes aceptar la política de tratamiento de datos");
            return;
        }

        setLoading(true);

        try {
            const { error } = await supabase
                .from('pqrs')
                .insert([
                    {
                        nombre: formData.nombre,
                        email: formData.email,
                        telefono: formData.telefono,
                        tipo: formData.tipo,
                        mensaje: formData.mensaje,
                        estado: 'Pendiente' // Default state
                    }
                ]);

            if (error) throw error;

            toast.success("¡Tu solicitud ha sido radicada con éxito!", {
                description: "Hemos recibido tu PQR. Te contactaremos pronto.",
            });

            setFormData({
                nombre: "",
                email: "",
                telefono: "",
                tipo: "",
                mensaje: "",
                aceptaTerminos: false,
            });

        } catch (error: any) {
            console.error('Error submitting PQR:', error);
            toast.error("Hubo un error al enviar tu solicitud", {
                description: "Por favor intenta nuevamente o contáctanos por WhatsApp.",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen relative font-sans">
            <Header />

            <div className="absolute inset-0 z-0 h-[60vh] lg:h-[70vh]">
                <img
                    src="/pqr_support.png"
                    alt="Atención al cliente"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-slate-50" />
            </div>

            <main className="pt-28 pb-16 md:pt-36">
                <div className="container px-4 md:px-6 max-w-4xl mx-auto">

                    <div className="text-center mb-12 relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/20">
                            <FileText className="w-4 h-4 text-emerald-400" />
                            <span className="text-emerald-100 font-semibold text-sm tracking-wide">Centro de Ayuda</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-sm">
                            Peticiones, Quejas y Reclamos
                        </h1>
                        <p className="text-lg text-slate-100 max-w-2xl mx-auto drop-shadow-sm font-medium">
                            Tu opinión es fundamental para nosotros. Utiliza este formulario para radicar tus solicitudes y daremos respuesta en los tiempos establecidos por la ley.
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 md:p-12 relative z-10">
                        <form onSubmit={handleSubmit} className="space-y-6">

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="nombre">Nombre Completo</Label>
                                    <Input
                                        id="nombre"
                                        name="nombre"
                                        placeholder="Tu nombre completo"
                                        required
                                        value={formData.nombre}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="tipo">Tipo de Solicitud</Label>
                                    <Select onValueChange={handleSelectChange} value={formData.tipo} required>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Selecciona una opción" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Peticion">Petición</SelectItem>
                                            <SelectItem value="Queja">Queja</SelectItem>
                                            <SelectItem value="Reclamo">Reclamo</SelectItem>
                                            <SelectItem value="Sugerencia">Sugerencia</SelectItem>
                                            <SelectItem value="Felicitacion">Felicitación</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="email">Correo Electrónico</Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="tucorreo@ejemplo.com"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="telefono">Teléfono de Contacto</Label>
                                    <Input
                                        id="telefono"
                                        name="telefono"
                                        type="tel"
                                        placeholder="300 123 4567"
                                        required
                                        value={formData.telefono}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="mensaje">Detalle de tu solicitud</Label>
                                <Textarea
                                    id="mensaje"
                                    name="mensaje"
                                    placeholder="Describe detalladamente tu solicitud, queja o reclamo..."
                                    className="min-h-[150px] resize-none"
                                    required
                                    value={formData.mensaje}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="flex items-start gap-2 pt-2">
                                <Checkbox
                                    id="terminos"
                                    className="mt-1"
                                    checked={formData.aceptaTerminos}
                                    onCheckedChange={(checked) => setFormData({ ...formData, aceptaTerminos: checked === true })}
                                />
                                <div className="grid gap-1.5 leading-none">
                                    <label
                                        htmlFor="terminos"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-600"
                                    >
                                        Acepto la política de tratamiento de datos personales
                                    </label>
                                    <p className="text-xs text-slate-500">
                                        Al marcar esta casilla, autorizas a TRUFI para el tratamiento de tus datos personales conforme a nuestra política de privacidad.
                                    </p>
                                </div>
                            </div>

                            <Button
                                type="submit"
                                className="w-full h-12 text-base font-bold bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20"
                                disabled={loading}
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Enviando Solicitud...
                                    </>
                                ) : (
                                    <>
                                        <Send className="mr-2 h-4 w-4" />
                                        Radicar PQR
                                    </>
                                )}
                            </Button>

                        </form>
                    </div>

                </div>
            </main>

            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default PQR;
