import { CMSFilters } from '~/types/Models/CMSFilters';
import { CMSImage } from '~/types/Models/CMSImage';

export interface CMSCategory {
  id: number;
  name: string;
  products_page_mkt: number | null;
  create_at: string;
  updated_at: string;
  filters: CMSFilters;
  image: CMSImage;
}
