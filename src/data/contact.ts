import type { ContactPageData } from "@/types/contact";

export const contactPageData: ContactPageData = {
  hero: {
    eyebrow: "Get In Touch",
    title: "Great Solutions Begin",
    highlight: "With a Conversation.",
    description:
      "Connect with our technical experts to discuss your safety, security, automation and infrastructure requirements.",
    image: "/images/contact/contact-hero.webp",
  },

  whatsapp: "923008443454",

  channels: [
    {
      id: "phone",
      title: "Call Our Experts",
      value: "+92 300 8443454",
      description: "Speak directly with our technical team.",
      href: "tel:+923008443454",
      icon: "phone",
      enabled: true,
    },
    {
      id: "email",
      title: "Email Us",
      value: "",
      description: "Send your project requirements.",
      href: "",
      icon: "email",
      enabled: false,
    },
    {
      id: "whatsapp",
      title: "WhatsApp Support",
      value: "Start a Conversation",
      description: "Connect with our team on WhatsApp.",
      href: "https://wa.me/923008443454",
      icon: "whatsapp",
      enabled: true,
    },
  ],

  offices: [
    {
      id: "islamabad",
      city: "Islamabad",
      address: "Blue Area, Islamabad, Pakistan",
      enabled: true,
      sortOrder: 1,
    },
    {
      id: "rawalpindi",
      city: "Rawalpindi",
      address: "Bank Road, Rawalpindi, Pakistan",
      enabled: true,
      sortOrder: 2,
    },
    {
      id: "lahore",
      city: "Lahore",
      address:
        "Quaid-e-Azam Industrial Estate, Kot Lakhpat, Lahore, Pakistan",
      enabled: true,
      sortOrder: 3,
    },
    {
      id: "faisalabad",
      city: "Faisalabad",
      address:
        "West Canal Road, Faisalabad, Pakistan",
      enabled: true,
      sortOrder: 4,
    },
  ],

  services: [
    "Fire Detection & Safety",
    "Emergency Lighting",
    "Building Automation",
    "PA & Sound Systems",
    "Access Control Systems",
    "CCTV & Security",
    "Guest Room Management",
    "Nurse Call Systems",
    "UPS & Solar Solutions",
    "General Inquiry",
  ],

  seo: {
    title: "Contact Us | CTI System & Solutions",
    description:
      "Contact CTI System & Solutions for professional fire safety, security, automation and integrated building solutions across Pakistan.",
  },
};