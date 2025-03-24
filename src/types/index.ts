export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Package {
  title: string;
  duration: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export interface CaseStudy {
  clientName: string;
  objective: string;
  strategy: string;
  results: string;
}

export interface Testimonial {
  name: string;
  content: string;
  position?: string;
  company?: string;
} 