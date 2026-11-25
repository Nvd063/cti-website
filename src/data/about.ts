import type { AboutPageData } from "@/types/about";

export const aboutData: AboutPageData = {
  hero: {
    eyebrow: "ABOUT CTI",

    title: "Engineering Safety.",

    highlightedTitle: "Building Trust.",

    description:
      "Trusted fire, safety, security, and building system solutions delivered with quality, technical precision, and long-term service commitment.",

    image: "/images/about/hero section.webp",

    imageAlt:
      "Professional CTI engineers working on industrial fire safety systems",

    primaryButton: {
      label: "Explore Solutions",
      href: "/services",
    },

    secondaryButton: {
      label: "Company Overview",
      href: "#ceo-message",
    },
  },

  stats: [
    {
      id: "projects",
      value: 30,
      suffix: "+",
      label: "Projects Delivered",
      icon: "projects",
      sortOrder: 1,
      isVisible: true,
    },
    {
      id: "industries",
      value: 40,
      suffix: "+",
      label: "Industries Served",
      icon: "industries",
      sortOrder: 2,
      isVisible: true,
    },
    {
      id: "clients",
      value: 35,
      suffix: "+",
      label: "Repeat Clients",
      icon: "clients",
      sortOrder: 3,
      isVisible: true,
    },
    {
      id: "cities",
      value: 32,
      suffix: "+",
      label: "Cities Reached",
      icon: "cities",
      sortOrder: 4,
      isVisible: true,
    },
  ],

  ceo: {
    name: "M. Ali Baig",

    designation: "Chief Executive Officer",

    image: "/images/about/ali.webp",

    heading: "CEO MESSAGE",

    message: [
      "Pakistan needs safer, smarter, and more dependable buildings. CTI System & Solutions serves that need through fire safety, surveillance, access control, emergency lighting, and integrated technical systems for clients across Pakistan.",

      "Our work begins with understanding each site properly and continues through planning, installation, testing, and support. We focus on practical solutions, clear responsibility, and systems that perform reliably over time.",

      "We value trust, quality, and consistency because they define long-term partnerships. With a committed team and disciplined standards, we will continue delivering safe, efficient, and dependable environments for clients nationwide.",
    ],
  },

  principles: [
    {
      id: "mission",

      title: "Our Mission",

      description:
        "To provide dependable fire safety, security, automation, and power solutions through proper planning, quality installation, and reliable support for commercial, industrial, healthcare, hospitality, and residential projects.",

      icon: "target",

      sortOrder: 1,

      isVisible: true,
    },
    {
      id: "vision",

      title: "Our Vision",

      description:
        "To become a trusted systems partner in Pakistan by providing practical solutions that improve safety, control, efficiency, and long-term system performance.",

      icon: "lightbulb",

      sortOrder: 2,

      isVisible: true,
    },
    {
      id: "values",

      title: "Our Values",

      description:
        "We work with integrity, accountability, technical discipline, and customer commitment, so every project is handled with clear communication, professional execution, and dependable support.",

      icon: "gem",

      sortOrder: 3,

      isVisible: true,
    },
  ],

  team: [
    {
      id: "ayesha-rahman",
      name: "Ayesha Rahman",
      designation: "Managing Director (MD)",
      image: "/images/about/Ayesha.webp",
      sortOrder: 1,
      isVisible: true,
    },
    {
      id: "nabeel-mughal",
      name: "Nabeel Mughal",
      designation: "Director",
      image: "/images/about/nabeel.webp",
      sortOrder: 2,
      isVisible: true,
    },
    {
      id: "mirza-ehsan",
      name: "Mirza Ehsan",
      designation: "Country Head",
      image: "/images/about/Ehsan.webp",
      sortOrder: 3,
      isVisible: true,
    },
    {
      id: "umar-mehmood",
      name: "Umar Mehmood",
      designation: "Director Finance",
      image: "/images/about/Umer.webp",
      sortOrder: 4,
      isVisible: true,
    },
    {
      id: "amir-mehmood",
      name: "Amir Mehmood",
      designation: "Director Operations",
      image: "/images/about/Amir.webp",
      sortOrder: 5,
      isVisible: true,
    },
    {
      id: "mahnoor-siddiqui",
      name: "Mahnoor Siddiqui",
      designation: "Head of HR Department",
      image: "/images/about/Mahnoor.webp",
      sortOrder: 6,
      isVisible: true,
    },
  ],

  cta: {
    title: "Let's Build a Safer Future Together.",

    description:
      "Connect with our experts to discuss your project requirements.",

    buttonLabel: "Contact Our Team",

    whatsappMessage:
      "Hello CTI System & Solutions, I would like to discuss my project requirements with your technical team.",
  },

  seo: {
    title: "About Us | CTI System & Solutions",

    description:
      "Learn about CTI System & Solutions, our leadership, mission, vision, values and commitment to professional fire safety, security and integrated engineering solutions across Pakistan.",
  },

  sections: {
    hero: true,
    stats: true,
    ceo: true,
    principles: true,
    team: true,
    cta: true,
  },
};