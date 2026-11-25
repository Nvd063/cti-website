import type {
  BlogCategory,
  BlogPost,
} from "@/types/blog";

export const blogCategories: BlogCategory[] = [
  {
    id: "fire-safety",
    name: "Fire Safety",
    slug: "fire-safety",
    sortOrder: 1,
  },
  {
    id: "security",
    name: "Security",
    slug: "security",
    sortOrder: 2,
  },
  {
    id: "automation",
    name: "Automation",
    slug: "automation",
    sortOrder: 3,
  },
  {
    id: "emergency-lighting",
    name: "Emergency Lighting",
    slug: "emergency-lighting",
    sortOrder: 4,
  },
  {
    id: "access-control",
    name: "Access Control",
    slug: "access-control",
    sortOrder: 5,
  },
  {
    id: "power",
    name: "Power Solutions",
    slug: "power",
    sortOrder: 6,
  },
];

const author = {
  name: "CTI Editorial Team",
  designation: "Technical Insights",
};

export const blogPosts: BlogPost[] = [
  {
    id: "blog-001",
    title: "Building a Safer Future with Intelligent Fire Protection",
    slug: "intelligent-fire-protection",

    excerpt:
      "Discover how integrated fire detection and protection systems contribute to safer commercial and industrial environments.",

    image: "/images/blog/fire-safety.webp",
    imageAlt: "Professional fire detection and alarm system",

    categoryId: "fire-safety",
    author,

    tags: ["Fire Safety", "Fire Detection", "Infrastructure"],

    featured: true,
    status: "PUBLISHED",

    publishedAt: "2026-11-20",
    updatedAt: "2026-11-20",

    sortOrder: 1,

    seoTitle: "Intelligent Fire Protection Systems | CTI",

    seoDescription:
      "Explore the importance of intelligent fire protection systems for commercial and industrial buildings.",

    content: [
      {
        id: "1",
        type: "paragraph",
        text: "Fire protection is an essential component of modern building infrastructure. A well-planned system helps identify potential hazards and supports an effective emergency response.",
      },
      {
        id: "2",
        type: "heading",
        text: "Understanding Integrated Fire Protection",
      },
      {
        id: "3",
        type: "paragraph",
        text: "Modern fire protection combines detection, notification, monitoring and emergency response systems. These components should be selected according to building requirements and applicable safety standards.",
      },
      {
        id: "4",
        type: "heading",
        text: "Key Considerations",
      },
      {
        id: "5",
        type: "list",
        items: [
          "Professional site assessment and system planning.",
          "Appropriate fire detection equipment.",
          "Reliable alarm and notification systems.",
          "Regular inspection, testing and maintenance.",
          "Compliance with applicable fire safety requirements.",
        ],
      },
      {
        id: "6",
        type: "paragraph",
        text: "Businesses should work with qualified professionals to develop fire protection solutions appropriate for their facilities.",
      },
    ],
  },

  {
    id: "blog-002",
    title: "Smarter Surveillance for Modern Businesses",
    slug: "smarter-surveillance-systems",

    excerpt:
      "Understand how modern CCTV and surveillance solutions support security and operational visibility.",

    image: "/images/blog/security.webp",
    imageAlt: "Modern CCTV surveillance camera",

    categoryId: "security",
    author,

    tags: ["CCTV", "Security", "Surveillance"],

    featured: true,
    status: "PUBLISHED",

    publishedAt: "2026-11-18",
    updatedAt: "2026-11-18",

    sortOrder: 2,

    content: [
      {
        id: "1",
        type: "paragraph",
        text: "Modern surveillance systems help organizations monitor their premises and improve security awareness.",
      },
      {
        id: "2",
        type: "heading",
        text: "Planning an Effective Surveillance System",
      },
      {
        id: "3",
        type: "paragraph",
        text: "Camera placement, image quality, recording requirements, privacy and network reliability should all be considered during system planning.",
      },
      {
        id: "4",
        type: "list",
        items: [
          "Appropriate camera coverage.",
          "Secure recording and storage.",
          "Authorized remote monitoring.",
          "Regular equipment maintenance.",
          "Responsible handling of recorded information.",
        ],
      },
    ],
  },

  {
    id: "blog-003",
    title: "The Future of Intelligent Buildings",
    slug: "future-of-intelligent-buildings",

    excerpt:
      "Explore how building automation connects essential systems to improve control and operational efficiency.",

    image: "/images/blog/automation.webp",
    imageAlt: "Intelligent building automation infrastructure",

    categoryId: "automation",
    author,

    tags: ["Automation", "Smart Buildings", "Technology"],

    featured: true,
    status: "PUBLISHED",

    publishedAt: "2026-11-15",
    updatedAt: "2026-11-15",

    sortOrder: 3,

    content: [
      {
        id: "1",
        type: "paragraph",
        text: "Building automation brings multiple infrastructure systems together to support centralized monitoring and control.",
      },
      {
        id: "2",
        type: "heading",
        text: "Connected Building Infrastructure",
      },
      {
        id: "3",
        type: "paragraph",
        text: "Automation can help facility managers monitor equipment, manage energy consumption and respond to operational issues.",
      },
      {
        id: "4",
        type: "list",
        items: [
          "Centralized system monitoring.",
          "Lighting and environmental controls.",
          "Energy management.",
          "Equipment status monitoring.",
          "Integration with compatible building systems.",
        ],
      },
    ],
  },

  {
    id: "blog-004",
    title: "Why Emergency Lighting Matters",
    slug: "importance-of-emergency-lighting",

    excerpt:
      "Learn why dependable emergency lighting is an important part of building safety and evacuation planning.",

    image: "/images/blog/emergency-lighting.webp",
    imageAlt: "Emergency exit lighting in a commercial building",

    categoryId: "emergency-lighting",
    author,

    tags: ["Emergency Lighting", "Building Safety"],

    featured: false,
    status: "PUBLISHED",

    publishedAt: "2026-11-12",
    updatedAt: "2026-11-12",

    sortOrder: 4,

    content: [
      {
        id: "1",
        type: "paragraph",
        text: "Emergency lighting supports visibility when normal building lighting becomes unavailable.",
      },
      {
        id: "2",
        type: "heading",
        text: "Supporting Safe Evacuation",
      },
      {
        id: "3",
        type: "paragraph",
        text: "Emergency lighting should be designed around escape routes, building occupancy and applicable safety requirements.",
      },
      {
        id: "4",
        type: "paragraph",
        text: "Regular testing and maintenance help ensure that emergency lighting remains available when required.",
      },
    ],
  },

  {
    id: "blog-005",
    title: "Securing Modern Workspaces with Access Control",
    slug: "modern-access-control-solutions",

    excerpt:
      "Discover how access control helps businesses manage authorized entry and protect sensitive areas.",

    image: "/images/blog/access-control.webp",
    imageAlt: "Electronic access control reader",

    categoryId: "access-control",
    author,

    tags: ["Access Control", "Security"],

    featured: false,
    status: "PUBLISHED",

    publishedAt: "2026-11-10",
    updatedAt: "2026-11-10",

    sortOrder: 5,

    content: [
      {
        id: "1",
        type: "paragraph",
        text: "Access control systems help organizations manage who can enter specific areas of a facility.",
      },
      {
        id: "2",
        type: "heading",
        text: "Effective Access Management",
      },
      {
        id: "3",
        type: "list",
        items: [
          "Role-based access permissions.",
          "Secure credential management.",
          "Visitor access procedures.",
          "Access event monitoring.",
          "Integration with compatible security systems.",
        ],
      },
    ],
  },

  {
    id: "blog-006",
    title: "Reliable Energy Solutions for Businesses",
    slug: "reliable-business-energy-solutions",

    excerpt:
      "Understand the role of backup power and solar solutions in supporting business continuity.",

    image: "/images/blog/power.webp",
    imageAlt: "Commercial solar energy installation",

    categoryId: "power",
    author,

    tags: ["Solar", "UPS", "Power Solutions"],

    featured: false,
    status: "PUBLISHED",

    publishedAt: "2026-11-08",
    updatedAt: "2026-11-08",

    sortOrder: 6,

    content: [
      {
        id: "1",
        type: "paragraph",
        text: "Reliable power infrastructure supports the continuity of essential business operations.",
      },
      {
        id: "2",
        type: "heading",
        text: "Planning for Power Reliability",
      },
      {
        id: "3",
        type: "paragraph",
        text: "UPS systems and solar energy solutions can form part of a wider power management strategy based on site requirements.",
      },
      {
        id: "4",
        type: "list",
        items: [
          "Electrical load assessment.",
          "Identification of critical equipment.",
          "Appropriate backup power capacity.",
          "Professional installation.",
          "Scheduled inspection and maintenance.",
        ],
      },
    ],
  },
];