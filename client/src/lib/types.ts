export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface ProductDetail {
  title: string;
  description: string;
  benefits: string[];
}

export interface PricingPlan {
  title: string;
  price: number;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export interface Testimonial {
  stars: number;
  quote: string;
  avatar: string;
  name: string;
  position: string;
}

export interface ContactInfo {
  address: string;
  email: string;
  phone: string;
  hours: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NewsletterData {
  email: string;
}
