import { z } from 'zod';

// Esquema para crear un reporte
export const reportSchema = z.object({
  category_id: z.string().transform((val) => Number(val)), // Convierte a número
  location_id: z.string().transform((val) => Number(val)),
  title: z.string().min(1, 'El título es requerido'),
  description: z.string().optional(),
  status: z.enum(['perdido', 'encontrado']),
  date_lost_or_found: z.coerce.date(),
  contact_method: z.enum(['email', 'phone', 'both']),
});

// Exportar funciones de validación
export function validateCreateReport(input: unknown) {
  return reportSchema.safeParse(input);
}

export function validateUpdateReport(input: unknown) {
  return reportSchema.partial().safeParse(input);
}
