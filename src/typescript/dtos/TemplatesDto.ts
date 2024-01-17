export interface CreateTemplateDto {
  name: string;
  category: string;
  background: string;
  price: number;
  textStyleId: number;
}

export interface UpdateTemplateDto {
  id: number;
  name?: string;
  category?: string;
  background?: string;
  price?: number;
  textStyleId?: number;
}
