import { Carousel } from './carousel';
export interface Project {
  name: string;
  size: string;
  price: number;
  project_id: string;
  address: string;
  tags: string[];
  follow_amount: number;
  deal_amount: number;
  reason: string;
  detail: string;
  location: string;
  telephone: string;
  house_type_ids: string[];
  carousels: Carousel[];
}
