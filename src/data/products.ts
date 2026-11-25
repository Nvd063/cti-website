import type {
  Product,
  ProductCategory,
} from "@/types/product";

// ========================================
// PRODUCT CATEGORIES
// ========================================

export const productCategories: ProductCategory[] = [
  {
    id: "cat-01",
    name: "Fire & Safety",
    slug: "fire-safety",
    sortOrder: 1,
    status: "PUBLISHED",
  },
  {
    id: "cat-02",
    name: "Emergency Lighting",
    slug: "emergency-lighting",
    sortOrder: 2,
    status: "PUBLISHED",
  },
  {
    id: "cat-03",
    name: "Building Automation",
    slug: "building-automation",
    sortOrder: 3,
    status: "PUBLISHED",
  },
  {
    id: "cat-04",
    name: "PA & Sound Systems",
    slug: "sound-system",
    sortOrder: 4,
    status: "PUBLISHED",
  },
  {
    id: "cat-05",
    name: "Access Control",
    slug: "access-control",
    sortOrder: 5,
    status: "PUBLISHED",
  },
  {
    id: "cat-06",
    name: "CCTV & Surveillance",
    slug: "cctv-security",
    sortOrder: 6,
    status: "PUBLISHED",
  },
  {
    id: "cat-07",
    name: "Guest Room Management",
    slug: "guest-room",
    sortOrder: 7,
    status: "PUBLISHED",
  },
  {
    id: "cat-08",
    name: "Nurse Call Systems",
    slug: "nurse-call",
    sortOrder: 8,
    status: "PUBLISHED",
  },
  {
    id: "cat-09",
    name: "Industrial UPS & Solar",
    slug: "ups-solar",
    sortOrder: 9,
    status: "PUBLISHED",
  },
];

// ========================================
// PRODUCTS
// Temporary demonstration inventory
// ========================================

export const products: Product[] = [
  {
    id: "prod-001",
    name: "Fire Alarm Control Panel",
    slug: "fire-alarm-control-panel",

    shortDescription:
      "Professional fire detection and alarm control equipment.",

    description:
      "Fire alarm control equipment designed for centralized detection, monitoring and emergency notification in commercial and industrial facilities.",

    categoryId: "cat-01",

    image:
      "/images/services/fire-detection-safety (1) (1).webp",

    price: 45000,
    showPrice: true,
    currency: "PKR",

    featured: true,
    status: "PUBLISHED",
    sortOrder: 1,
  },

  {
    id: "prod-002",
    name: "Fire Hydrant System",
    slug: "fire-hydrant-system",

    shortDescription:
      "Professional firefighting and hydrant equipment.",

    description:
      "Fire hydrant equipment for commercial, residential and industrial fire protection infrastructure.",

    categoryId: "cat-01",

    image:
      "/images/services/fire-detection-safety (1) (1).webp",

    price: null,
    showPrice: false,
    currency: "PKR",

    featured: true,
    status: "PUBLISHED",
    sortOrder: 2,
  },

  {
    id: "prod-003",
    name: "Emergency Exit Sign",
    slug: "emergency-exit-sign",

    shortDescription:
      "Emergency signage for clearly identified evacuation routes.",

    description:
      "Emergency exit signage for offices, hospitals, shopping malls and commercial buildings.",

    categoryId: "cat-02",

    image:
      "/images/services/central-battery-emergency-lighting (1) (1).webp",

    price: 8500,
    showPrice: true,
    currency: "PKR",

    featured: false,
    status: "PUBLISHED",
    sortOrder: 3,
  },

  {
    id: "prod-004",
    name: "Smart Home Automation Controller",
    slug: "smart-home-automation-controller",

    shortDescription:
      "Intelligent centralized control for modern buildings.",

    description:
      "Automation equipment supporting centralized management of lighting, climate and connected building systems.",

    categoryId: "cat-03",

    image:
      "/images/services/smart-home-building-automation (1) (1).webp",

    price: null,
    showPrice: false,
    currency: "PKR",

    featured: true,
    status: "PUBLISHED",
    sortOrder: 4,
  },

  {
    id: "prod-005",
    name: "Professional PA Amplifier",
    slug: "professional-pa-amplifier",

    shortDescription:
      "Professional audio equipment for public announcements.",

    description:
      "Public address amplification equipment for commercial buildings, educational institutions and public facilities.",

    categoryId: "cat-04",

    image:
      "/images/services/pa-sound-queue-management (1) (1).webp",

    price: 32000,
    showPrice: false,
    currency: "PKR",

    featured: false,
    status: "PUBLISHED",
    sortOrder: 5,
  },

  {
    id: "prod-006",
    name: "Biometric Access Control Terminal",
    slug: "biometric-access-control-terminal",

    shortDescription:
      "Intelligent attendance and secure access management.",

    description:
      "Biometric access control equipment for employee attendance and controlled entry management.",

    categoryId: "cat-05",

    image:
      "/images/services/door-access-parking-barrier (1) (1).webp",

    price: 28500,
    showPrice: true,
    currency: "PKR",

    featured: true,
    status: "PUBLISHED",
    sortOrder: 6,
  },

  {
    id: "prod-007",
    name: "IP Surveillance Camera",
    slug: "ip-surveillance-camera",

    shortDescription:
      "Network-based professional security surveillance.",

    description:
      "IP surveillance equipment for security monitoring across residential, commercial and industrial environments.",

    categoryId: "cat-06",

    image:
      "/images/services/cctv-security (1) (1).webp",

    price: null,
    showPrice: false,
    currency: "PKR",

    featured: true,
    status: "PUBLISHED",
    sortOrder: 7,
  },

  {
    id: "prod-008",
    name: "Guest Room Control Panel",
    slug: "guest-room-control-panel",

    shortDescription:
      "Intelligent room control for hospitality environments.",

    description:
      "Guest room control equipment for managing comfort, lighting and connected room systems.",

    categoryId: "cat-07",

    image:
      "/images/services/guest-room-management (1) (1).webp",

    price: null,
    showPrice: false,
    currency: "PKR",

    featured: false,
    status: "PUBLISHED",
    sortOrder: 8,
  },

  {
    id: "prod-009",
    name: "IP Based Nurse Call Terminal",
    slug: "ip-nurse-call-terminal",

    shortDescription:
      "Connected patient-to-staff communication equipment.",

    description:
      "Network-based nurse call equipment for patient assistance and healthcare communication workflows.",

    categoryId: "cat-08",

    image:
      "/images/services/nurse-call-management (1) (1).webp",

    price: null,
    showPrice: false,
    currency: "PKR",

    featured: false,
    status: "PUBLISHED",
    sortOrder: 9,
  },

  {
    id: "prod-010",
    name: "Industrial UPS System",
    slug: "industrial-ups-system",

    shortDescription:
      "Reliable backup power for critical infrastructure.",

    description:
      "Industrial uninterruptible power supply equipment for critical commercial and industrial operations.",

    categoryId: "cat-09",

    image:
      "/images/services/industrial-ups-solar (1) (1).webp",

    price: null,
    showPrice: false,
    currency: "PKR",

    featured: true,
    status: "PUBLISHED",
    sortOrder: 10,
  },
];