import { CMSImage } from '~/types/Models/CMSImage';
import { CMSModel } from '~/types/Models/CMSModel';

export interface CMSBanner extends CMSModel {
  title: string;
  link: string;
  image: CMSImage;
  type: 'grande' | 'cuadrado' | 'chico';
}
