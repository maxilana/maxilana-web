import { CMSFilters } from '~/types/Models/CMSFilters';
import { CMSImage } from '~/types/Models/CMSImage';
import { CMSModel } from '~/types/Models/CMSModel';

export interface CMSCategory extends CMSModel {
  name: string;
  products_page_mkt: number | null;
  filters: CMSFilters;
  image: CMSImage;
}
