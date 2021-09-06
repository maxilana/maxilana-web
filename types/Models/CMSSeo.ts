import { CMSImage } from '~/types/Models/CMSImage';

export interface CMSSeo {
  id: number;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  shareImage: CMSImage;
}
