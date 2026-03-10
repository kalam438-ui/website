import { Product, DesignProject } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Elegant Gypsum Ceiling',
    description: 'Modern gypsum board design with integrated LED lighting.',
    price: 'Contact for Quote',
    image: 'https://picsum.photos/seed/gypsum1/800/600',
    category: 'gypsum',
  },
  {
    id: '2',
    name: 'Luxury Wall Decor',
    description: 'Customized wall panels with gold leaf finish.',
    price: 'OMR 45.000',
    image: 'https://picsum.photos/seed/decor1/800/600',
    category: 'decor',
  },
  {
    id: '3',
    name: 'Classic Majlis Design',
    description: 'Traditional Omani Majlis with modern touch.',
    price: 'Contact for Quote',
    image: 'https://picsum.photos/seed/majlis/800/600',
    category: 'decor',
  },
  {
    id: '4',
    name: '3D Gypsum Wall Art',
    description: 'Intricate 3D patterns for feature walls.',
    price: 'OMR 120.000',
    image: 'https://picsum.photos/seed/gypsum2/800/600',
    category: 'gypsum',
  },
  {
    id: '5',
    name: 'Cove Lighting Ceiling',
    description: 'Elegant false ceiling with hidden LED cove lighting.',
    price: 'Contact for Quote',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800',
    category: 'gypsum',
  },
  {
    id: '6',
    name: 'Modern TV Unit',
    description: 'Custom gypsum TV wall unit with shelving.',
    price: 'OMR 250.000',
    image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=800',
    category: 'gypsum',
  },
  {
    id: '7',
    name: 'Decorative Cornice',
    description: 'Classical gypsum cornice for luxury room borders.',
    price: 'OMR 5.000 / meter',
    image: 'https://images.unsplash.com/photo-1628592102751-ba83b0314276?q=80&w=800',
    category: 'gypsum',
  },
];

export const PROJECTS: DesignProject[] = [
  {
    id: '1',
    title: 'Modern Villa Muscat',
    description: 'Full interior design and gypsum work for a luxury villa.',
    image: 'https://picsum.photos/seed/villa1/800/600',
    type: 'interior',
  },
  {
    id: '2',
    title: 'Corporate Office Decor',
    description: 'Minimalist gypsum ceilings for a high-end office space.',
    image: 'https://picsum.photos/seed/office1/800/600',
    type: 'commercial',
  },
  {
    id: '3',
    title: 'Royal Gypsum Hall',
    description: 'Grand hall gypsum design with classical motifs.',
    image: 'https://picsum.photos/seed/hall1/800/600',
    type: 'gypsum',
  },
];

export const CONTACT_INFO = {
  name: 'AK Decor and Design',
  phone: '96893245138',
  email: 'kalam438@gmail.com',
  address: 'Muscat, Oman',
  whatsapp: 'https://wa.me/96893245138',
};
