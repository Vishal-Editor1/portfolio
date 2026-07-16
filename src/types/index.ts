export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  software: string;
  vimeoLink: string;
  thumbnail: string;
}

export interface Skill {
  name: string;
  percentage: number;
  icon: string;
}

export interface SiteData {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    badges: string[];
  };
}

export interface ServicesData {
  services: string[];
  expertise: string[];
}

export interface ContactData {
  title: string;
  description: string;
  email: string;
  whatsapp: string;
}
