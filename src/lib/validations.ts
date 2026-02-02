import { z } from 'zod';

// Contact form validation schema for Pensionado page
export const contactFormPensionadoSchema = z.object({
  nombre: z
    .string()
    .trim()
    .min(1, { message: "El nombre es requerido" })
    .max(100, { message: "El nombre no puede exceder 100 caracteres" })
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/, { message: "El nombre solo puede contener letras" }),
  telefono: z
    .string()
    .trim()
    .min(1, { message: "El teléfono es requerido" })
    .max(20, { message: "El teléfono no puede exceder 20 caracteres" })
    .regex(/^[0-9+\-\s()]+$/, { message: "El teléfono solo puede contener números y caracteres válidos" }),
  email: z
    .string()
    .trim()
    .min(1, { message: "El correo electrónico es requerido" })
    .email({ message: "Ingresa un correo electrónico válido" })
    .max(255, { message: "El correo no puede exceder 255 caracteres" }),
  mensaje: z
    .string()
    .trim()
    .max(1000, { message: "El mensaje no puede exceder 1000 caracteres" })
    .optional()
    .or(z.literal('')),
});

// Contact form validation schema for Docente page (includes institucion field)
export const contactFormDocenteSchema = z.object({
  nombre: z
    .string()
    .trim()
    .min(1, { message: "El nombre es requerido" })
    .max(100, { message: "El nombre no puede exceder 100 caracteres" })
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/, { message: "El nombre solo puede contener letras" }),
  telefono: z
    .string()
    .trim()
    .min(1, { message: "El teléfono es requerido" })
    .max(20, { message: "El teléfono no puede exceder 20 caracteres" })
    .regex(/^[0-9+\-\s()]+$/, { message: "El teléfono solo puede contener números y caracteres válidos" }),
  email: z
    .string()
    .trim()
    .min(1, { message: "El correo electrónico es requerido" })
    .email({ message: "Ingresa un correo electrónico válido" })
    .max(255, { message: "El correo no puede exceder 255 caracteres" }),
  institucion: z
    .string()
    .trim()
    .max(200, { message: "La institución no puede exceder 200 caracteres" })
    .optional()
    .or(z.literal('')),
  mensaje: z
    .string()
    .trim()
    .max(1000, { message: "El mensaje no puede exceder 1000 caracteres" })
    .optional()
    .or(z.literal('')),
});

// Contact form validation schema for FuerzaPublica page (includes institucion field)
export const contactFormFuerzaPublicaSchema = contactFormDocenteSchema;

export type ContactFormPensionado = z.infer<typeof contactFormPensionadoSchema>;
export type ContactFormDocente = z.infer<typeof contactFormDocenteSchema>;
export type ContactFormFuerzaPublica = z.infer<typeof contactFormFuerzaPublicaSchema>;
