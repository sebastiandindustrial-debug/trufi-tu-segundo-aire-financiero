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
        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 1500));

        console.log("Form Data Submitted:", data);

        toast.success("¡Hemos recibido tus datos con éxito!", {
            description: "Uno de nuestros asesores comerciales te contactará muy pronto.",
            duration: 5000,
        });

        reset();
        setIsSubmitting(false);
    };

    return (
        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
            <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">Contáctanos</h3>
                <p className="text-white/70 text-sm">
                    Déjanos tus datos y un asesor se comunicará contigo para brindarte toda la información que necesitas.
                </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="space-y-1">
                    <Input
                        {...register("nombre")}
                        placeholder="Nombre completo"
                        className={`bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:bg-white/20 focus:border-white/40 mb-1 ${errors.nombre ? "border-red-400 focus:border-red-400" : ""
                            }`}
                    />
                    {errors.nombre && (
                        <p className="text-xs text-red-300 ml-1">{errors.nombre.message}</p>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <Input
                            {...register("telefono")}
                            placeholder="Teléfono / Celular"
                            className={`bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:bg-white/20 focus:border-white/40 mb-1 ${errors.telefono ? "border-red-400 focus:border-red-400" : ""
                                }`}
                        />
                        {errors.telefono && (
                            <p className="text-xs text-red-300 ml-1">{errors.telefono.message}</p>
                        )}
                    </div>
                    <div className="space-y-1">
                        <Input
                            {...register("email")}
                            placeholder="Correo electrónico"
                            type="email"
                            className={`bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:bg-white/20 focus:border-white/40 mb-1 ${errors.email ? "border-red-400 focus:border-red-400" : ""
                                }`}
                        />
                        {errors.email && (
                            <p className="text-xs text-red-300 ml-1">{errors.email.message}</p>
                        )}
                    </div>
                </div>

                <div className="space-y-1">
                    <Textarea
                        {...register("mensaje")}
                        placeholder="¿En qué podemos ayudarte? (Opcional)"
                        rows={3}
                        className={`bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:bg-white/20 focus:border-white/40 resize-none mb-1 ${errors.mensaje ? "border-red-400 focus:border-red-400" : ""
                            }`}
                    />
                    {errors.mensaje && (
                        <p className="text-xs text-red-300 ml-1">{errors.mensaje.message}</p>
                    )}
                </div>

                <div className="flex items-start gap-2 pt-2">
                    <Checkbox
                        id="marketing"
                        className="mt-1 border-white/50 data-[state=checked]:bg-trufi-cyan data-[state=checked]:border-trufi-cyan"
                        onCheckedChange={(checked) => setValue("aceptaTerminos", checked === true)}
                        checked={watch("aceptaTerminos")}
                    />
                    <div className="grid gap-1.5 leading-none">
                        <label
                            htmlFor="marketing"
                            className="text-xs text-white/70 font-light cursor-pointer hover:text-white/90 transition-colors"
                        >
                            Acepto la <a href="#" className="underline decoration-white/30 hover:decoration-white/80 transition-all">Política de Tratamiento de Datos</a> y autorizo el contacto por parte de TRUFI.
                        </label>
                        {errors.aceptaTerminos && (
                            <p className="text-xs text-red-300">{errors.aceptaTerminos.message}</p>
                        )}
                    </div>
                </div>

                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white text-trufi-purple-dark hover:bg-white/90 font-bold mt-2"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Enviando...
                        </>
                    ) : (
                        <>
                            <Send className="mr-2 h-4 w-4" />
                            Enviar Mensaje
                        </>
                    )}
                </Button>
            </form>
        </div>
    );
};

export default FooterContactForm;
