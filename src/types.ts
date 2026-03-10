export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: 'decor' | 'gypsum' | 'furniture';
}

export interface DesignProject {
  id: string;
  title: string;
  description: string;
  image: string;
  type: 'interior' | 'gypsum' | 'commercial';
}
