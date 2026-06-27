// src/data/servicesData.ts
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import type { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'google-ads',
    title: 'Google Ads',
    description: 'Drive targeted traffic with Google Search, Shopping, Display, and Performance Max campaigns.',
    icon: <FaGoogle />,
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600',
    category: 'Marketing',
    features: ['Search Ads', 'Shopping Ads', 'Display Ads', 'Performance Max', 'Lead Generation']
  },
  {
    id: 'meta-ads',
    title: 'Meta Ads',
    description: 'Reach your audience effectively through Facebook and Instagram advertising platforms.',
    icon: <FaFacebook />,
    image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=600',
    category: 'Marketing',
    features: ['Facebook Ads', 'Instagram Ads', 'Retargeting', 'Lookalike Audiences']
  },
  // ... Add all 20+ services
];