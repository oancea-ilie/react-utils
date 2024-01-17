import { z } from 'zod';

enum FontWeight {
  Thin = 100,
  ExtraLight = 200,
  Light = 300,
  Normal = 400,
  Medium = 500,
  SemiBold = 600,
  Bold = 700,
  ExtraBold = 800,
  Black = 900,
}
const FontWeightEnum = z.nativeEnum(FontWeight);

export const textStyleSchema = z.object({
  id: z.number(),
  titleSize: z.number(),
  titleFamily: z.string(),
  titleColor: z.string(),
  titleWeight: FontWeightEnum,
  descriptionSize: z.number(),
  descriptionFamily: z.string(),
  descriptionColor: z.string(),
  descriptionWeight: FontWeightEnum,
});

const textStylesSchema = z.array(textStyleSchema);
interface TextStyleT extends z.infer<typeof textStylesSchema> {}
