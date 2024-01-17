import { z } from 'zod';
import { textStyleSchema } from './TextStyleT';

const templateSchema = z.object({
  id: z.number(),
  name: z.string(),
  category: z.string(),
  price: z.number(),
  background: z.string(),
  textStyle: textStyleSchema,
});

export const templatesSchema = z.array(templateSchema);
export interface TemplateT extends z.infer<typeof templateSchema> {}
