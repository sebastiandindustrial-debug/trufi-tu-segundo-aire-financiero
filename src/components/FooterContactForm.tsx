import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { footerContactFormSchema, type FooterContactForm } from "@/lib/validations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { Send, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const FooterContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        watch,
        formState: { errors },
    } = useForm<FooterContactForm>({
        resolver: zodResolver(footerContactFormSchema),
        defaultValues: {
            nombre: "",
            telefono: "",
            email: "",
            mensaje: "",
            aceptaTerminos: false,
        },
    });

    const onSubmit = async (data: FooterContactForm) => {
        setIsSubmitting(true);

        try {
            const { error } = await supabase
                .from('leads')
                .insert([
                    {
                        nombre: data.nombre,
                        email: data.email,
                        telefono: data.telefono,
                        mensaje: data.mensaje,
                        segmento: 'General - Footer',
                        acepta_terminos: data.aceptaTerminos
                    }
                ]);

            if (error) throw error;

            toast.success("¡Hemos recibido tus datos con éxito!", {
                description: "Uno de nuestros asesores comerciales te contactará muy pronto.",
                duration: 5000,
            });

            reset();
        } catch (error: any) {
            console.error('Error submitting form:', error);
            toast.error("Hubo un error al enviar tus datos", {
                description: "Por favor intenta nuevamente.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white/5 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
            <div className="mb-3">
                <h3 className="text-base font-bold text-white mb-1">Contáctanos</h3>
                <p className="text-white/70 text-xs leading-tight">
                    Déjanos tus datos y un asesor te contactará pronto.
                </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-2.5">
                <div className="space-y-0.5">
                    <Input
                        {...register("nombre")}
                        placeholder="Nombre completo"
                        className={`h-8 text-xs bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:bg-white/20 focus:border-white/40 ${errors.nombre ? "border-red-400 focus:border-red-400" : ""
                            }`}
                    />
                    {errors.nombre && (
                        <p className="text-[10px] text-red-300 ml-1">{errors.nombre.message}</p>
                    )}
                </div>

                <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-0.5">
                        <Input
                            {...register("telefono")}
                            placeholder="Teléfono"
                            className={`h-8 text-xs bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:bg-white/20 focus:border-white/40 ${errors.telefono ? "border-red-400 focus:border-red-400" : ""
                                }`}
                        />
                        {errors.telefono && (
                            <p className="text-[10px] text-red-300 ml-1">{errors.telefono.message}</p>
                        )}
                    </div>
                    <div className="space-y-0.5">
                        <Input
                            {...register("email")}
                            placeholder="Email"
                            type="email"
                            className={`h-8 text-xs bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:bg-white/20 focus:border-white/40 ${errors.email ? "border-red-400 focus:border-red-400" : ""
                                }`}
                        />
                        {errors.email && (
                            <p className="text-[10px] text-red-300 ml-1">{errors.email.message}</p>
                        )}
                    </div>
                </div>

                <div className="space-y-0.5">
                    <Textarea
                        {...register("mensaje")}
                        placeholder="¿En qué podemos ayudarte?"
                        rows={2}
                        className={`min-h-[60px] text-xs bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:bg-white/20 focus:border-white/40 resize-none ${errors.mensaje ? "border-red-400 focus:border-red-400" : ""
                            }`}
                    />
                    {errors.mensaje && (
                        <p className="text-[10px] text-red-300 ml-1">{errors.mensaje.message}</p>
                    )}
                </div>

                <div className="flex items-start gap-2 pt-1">
                    <Checkbox
                        id="marketing"
                        className="mt-0.5 h-3 w-3 border-white/50 data-[state=checked]:bg-trufi-cyan data-[state=checked]:border-trufi-cyan"
                        onCheckedChange={(checked) => setValue("aceptaTerminos", checked === true)}
                        checked={watch("aceptaTerminos")}
                    />
                    <div className="grid gap-0.5 leading-none">
                        <label
                            htmlFor="marketing"
                            className="text-[10px] text-white/60 font-light cursor-pointer hover:text-white/90 transition-colors leading-tight"
                        >
                            Acepto política de datos y contacto.
                        </label>
                        {errors.aceptaTerminos && (
                            <p className="text-[10px] text-red-300">{errors.aceptaTerminos.message}</p>
                        )}
                    </div>
                </div>

                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-8 text-xs bg-white text-trufi-purple-dark hover:bg-white/90 font-bold mt-1"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="mr-2 h-3 w-3 animate-spin" />
                            Enviando...
                        </>
                    ) : (
                        <>
                            <Send className="mr-2 h-3 w-3" />
                            Enviar
                        </>
                    )}
                </Button>
            </form>
        </div>
    );
};

export default FooterContactForm;
