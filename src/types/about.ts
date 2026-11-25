export interface AboutHeroData {
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;
  image: string;
  imageAlt: string;
  primaryButton: {
    label: string;
    href: string;
  };
  secondaryButton: {
    label: string;
    href: string;
  };
}

export interface CompanyStat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  icon: "projects" | "industries" | "clients" | "cities";
  sortOrder: number;
  isVisible: boolean;
}

export interface CEOMessageData {
  name: string;
  designation: string;
  image: string;
  heading: string;
  message: string[];
}

export interface CompanyPrinciple {
  id: string;
  title: string;
  description: string;
  icon: "target" | "lightbulb" | "gem";
  sortOrder: number;
  isVisible: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  image: string;
  sortOrder: number;
  isVisible: boolean;
}

export interface AboutCTAData {
  title: string;
  description: string;
  buttonLabel: string;
  whatsappMessage: string;
}

export interface AboutPageData {
  hero: AboutHeroData;
  stats: CompanyStat[];
  ceo: CEOMessageData;
  principles: CompanyPrinciple[];
  team: TeamMember[];
  cta: AboutCTAData;
  seo: {
    title: string;
    description: string;
  };
  sections: {
    hero: boolean;
    stats: boolean;
    ceo: boolean;
    principles: boolean;
    team: boolean;
    cta: boolean;
  };
}