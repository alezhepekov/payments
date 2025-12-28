import { Offer } from './offer';
import { Image } from './image';

export interface Product {
  uuid: string;
  name: string;
  description: string;
  slug: string;
  category_uuid: string;
  offers_min_price: string;
  offers: Offer[];
  seo_description: string;
  article: string;
  images: Image[];
  properties: any;
}
