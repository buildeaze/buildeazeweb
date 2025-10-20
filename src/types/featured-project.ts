export interface FeaturedProject {
  name: string;
  location: string;
  type: string;
  price: string;
  area: string;
  duration: string;
  image: string;
  description?: string;
  features?: string[];
  amenities?: string[];
  specifications?: {
    [key: string]: string;
  };
}