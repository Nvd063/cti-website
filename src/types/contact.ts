export type ContactChannelIcon =
  | "phone"
  | "email"
  | "whatsapp";

export interface ContactChannel {
  id: string;
  title: string;
  value: string;
  description: string;
  href: string;
  icon: ContactChannelIcon;
  enabled: boolean;
}

export interface ContactOffice {
  id: string;
  city: string;
  address: string;
  phone?: string;
  email?: string;
  mapUrl?: string;
  isHeadOffice?: boolean;
  enabled: boolean;
  sortOrder: number;
}

export interface ContactInquiry {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export type ContactFormErrors = Partial<
  Record<keyof ContactInquiry, string>
>;

export interface ContactPageData {
  hero: {
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
    image: string;
  };

  channels: ContactChannel[];
  offices: ContactOffice[];
  services: string[];
  whatsapp: string;

  seo: {
    title: string;
    description: string;
  };
}