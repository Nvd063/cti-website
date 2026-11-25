# CTI System & Solutions

A modern, responsive and scalable corporate website and
product inquiry platform developed for CTI System & Solutions.

The platform showcases professional safety, security,
building automation and infrastructure solutions through
a premium user interface, dynamic service pages and an
integrated product catalog.

---

## Project Status

Currently under active development.

- [x] Responsive Home Page
- [x] Liquid Glass Navigation
- [x] Dynamic Services Architecture
- [x] Individual Service Detail Pages
- [x] Sub-Service WhatsApp Inquiries
- [x] Responsive Product Store
- [x] Product Search and Filtering
- [x] Product Sorting and Pagination
- [x] Optional Product Pricing
- [x] Product-Specific WhatsApp Inquiries
- [ ] About Us Page
- [ ] Contact Us Page
- [ ] Dynamic Blog System
- [ ] Database Integration
- [ ] Admin Authentication
- [ ] Admin Dashboard
- [ ] Content Management System
- [ ] Production Deployment

---

## Technology Stack

| Technology | Purpose |
|------------|---------|
| Next.js | Full-stack application framework |
| React | Component-based user interface |
| TypeScript | Type-safe development |
| Tailwind CSS | Responsive styling |
| Motion | Animations and transitions |
| Lucide React | Icon library |
| Next.js App Router | Routing and page architecture |
| Next.js Image | Image optimization |
| WhatsApp API Links | Customer inquiry integration |
| Git & GitHub | Version control |

---

## Core Features

### 1. Corporate Home Page

- Premium corporate visual identity
- Floating Liquid Glass navigation
- Cinematic hero slider
- Automatic slide transitions
- Mobile swipe support
- Responsive core services grid
- Industries and sectors showcase
- Certifications and accreditations
- National presence section
- Customer reviews
- Project portfolio showcase
- Responsive corporate footer

### 2. Dynamic Services System

The services module uses a centralized data-driven
architecture with reusable UI components.

Each service has its own dynamically generated detail page.

Available services:

1. Fire Detection & Fire Safety Equipment Systems
2. Central Battery Emergency Lighting & Exit Sign Systems
3. Smart Home & Building Automation Control Systems
4. PA Sound & Queue Management Systems
5. Door Access with Parking Barrier System
6. CCTV & Security Surveillance Equipment
7. Guest Room Management System Solutions
8. Nurse Call Management System Solutions
9. Industrial UPS and Professional Solar System

Service page features:

- Dynamic slug-based routing
- Service-specific hero content
- Service overview
- Related services navigation
- Sub-service and solution cards
- Service-specific WhatsApp inquiries
- Dynamic SEO metadata
- Published and draft status support
- Configurable display order
- Featured service support

### 3. Product Store

A modern, inquiry-based product catalog designed for
commercial and industrial technology products.

The store is not a traditional checkout-based
e-commerce platform. Customers can browse products
and directly contact the company through WhatsApp.

Implemented features:

- Responsive product grid
- Compact mobile product cards
- Live client-side product search
- Category filtering
- Product sorting
- Product pagination
- Featured product badges
- Product image optimization
- Optional product pricing
- Product-specific WhatsApp inquiries
- Mobile-friendly filter controls
- Reusable product components

### 4. Optional Product Pricing

The product architecture supports configurable
price visibility for individual products.

| Configuration | Customer View |
|---------------|---------------|
| Price enabled and valid | Product price displayed |
| Price disabled | Price on Request |
| Price unavailable | Price on Request |

Example configuration:

```typescript
{
  price: 45000,
  showPrice: true,
  currency: "PKR"
}
```

Products with disabled pricing display an inquiry-based
pricing message instead of the actual price.

Future admin integration will provide direct control
over product pricing and visibility.

Server-side exclusion of private prices will be
enforced during database and admin integration.

### 5. WhatsApp Inquiry Integration

A centralized WhatsApp utility generates contextual
inquiry links for services, sub-services and products.

Customers can inquire about a specific item without
manually entering its details.

Supported inquiry information:

- Service name
- Sub-service name
- Product name
- Product category
- Product model
- Product SKU
- Custom inquiry message

Business WhatsApp:

+92 300 8443454

Customers are redirected to WhatsApp with a
pre-filled message ready to send.

---

## Application Architecture

The project follows a modular, component-based
architecture designed for future database and
admin panel integration.

```text
Page Routes
    |
    v
Service Layer
    |
    v
Centralized Data
    |
    v
Reusable UI Components
    |
    v
Customer Interface
```

Current content is managed through centralized
TypeScript data files.

The service layer separates data access from
presentation logic, allowing future migration
to a database-backed architecture without
requiring a complete UI redesign.

---

## Project Structure

Key application directories:

```text
src/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   ├── globals.css
│   │
│   ├── services/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   │
│   └── store/
│       └── page.tsx
│
├── components/
│   ├── header/
│   ├── footer/
│   ├── home/
│   │
│   ├── services/
│   │   ├── ServicesHero.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── ServiceGrid.tsx
│   │   ├── ServiceDetailHero.tsx
│   │   ├── ServiceSidebar.tsx
│   │   ├── ServiceOverview.tsx
│   │   ├── SolutionCard.tsx
│   │   ├── SolutionGrid.tsx
│   │   └── ServiceCTA.tsx
│   │
│   └── store/
│       ├── StoreCatalog.tsx
│       ├── StoreToolbar.tsx
│       ├── StoreHero.tsx
│       ├── ProductCard.tsx
│       ├── ProductGrid.tsx
│       ├── ProductPrice.tsx
│       └── StoreCTA.tsx
│
├── config/
│   └── contact.ts
│
├── data/
│   ├── services.ts
│   └── products.ts
│
├── services/
│   ├── service.service.ts
│   └── product.service.ts
│
├── types/
│   ├── service.ts
│   └── product.ts
│
└── lib/
    └── whatsapp.ts

public/
└── images/
    ├── services/
    └── products/
```

Note: StoreHero is retained as a reusable component
but is no longer rendered on the store page.

---

## Application Routes

| Route | Description |
|-------|-------------|
| `/` | Corporate home page |
| `/services` | All services |
| `/services/[slug]` | Dynamic service details |
| `/store` | Product catalog |

### Dynamic Service Routes

```text
/services/fire-safety
/services/emergency-lighting
/services/building-automation
/services/sound-system
/services/access-control
/services/cctv-security
/services/guest-room
/services/nurse-call
/services/ups-solar
```

---

## Design System

The website follows a premium corporate design
language with a consistent visual identity.

### Brand Colors

| Color | Hex Code |
|-------|----------|
| Primary Navy | #0B162C |
| Corporate Blue | #203164 |
| Deep Navy | #08152D |
| Accent Red | #DC2626 |
| White | #FFFFFF |
| Light Background | #F5F7FA |

### Design Principles

- Modern corporate aesthetics
- Mobile-first responsive design
- Liquid Glass navigation
- Consistent visual hierarchy
- Reusable interface components
- Smooth and accessible animations
- Reduced-motion preference support
- Optimized product presentation
- Minimal unnecessary visual elements

---

## Future Admin Panel

A centralized administration system is planned
to allow authorized users to manage the website
without modifying source code.

### Product Management

- Create, edit and delete products
- Manage product categories
- Upload product images
- Manage product descriptions
- Manage product brands, models and SKUs
- Set product prices
- Enable or disable price visibility
- Manage featured products
- Publish or unpublish products
- Configure WhatsApp inquiry messages

### Service Management

- Create, edit and delete services
- Manage sub-services
- Update service hero content
- Manage service images
- Update service descriptions
- Configure service display order
- Manage featured services
- Publish or unpublish services
- Manage service SEO metadata

### Website Content Management

- Home page content
- Hero banners
- About Us content
- Contact information
- Certifications
- Industries
- Project portfolio
- Customer testimonials
- Blog posts
- Website SEO metadata

### Administration and Security

- Secure administrator authentication
- Protected admin routes
- Server-side authorization
- Input validation
- Secure image management
- Private pricing protection
- Database-backed content management

---

## Planned Architecture

```text
Admin Dashboard
       |
       v
Authentication & Authorization
       |
       v
Server Actions / API Layer
       |
       v
Database & Media Storage
       |
       v
Application Service Layer
       |
       v
Public Website
```

The final database, authentication and media storage
technologies will be selected during the backend
development phase.

---

## Getting Started

### Prerequisites

- Node.js
- npm
- Git

### Installation

Clone the project repository:

```bash
git clone <repository-url>
```

Navigate to the project directory and install
dependencies:

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open the application:

```text
http://localhost:3000
```

### TypeScript Validation

```bash
npx tsc --noEmit
```

### Production Build

```bash
npm run build
```

### Start Production Server

```bash
npm run start
```

---

## Development Workflow

The project follows a modular development workflow:

1. Define TypeScript data models.
2. Configure centralized content.
3. Implement service-layer functions.
4. Develop reusable UI components.
5. Connect components to application routes.
6. Test responsive behavior.
7. Validate TypeScript and production builds.
8. Commit and push changes to GitHub.

---

## Development Roadmap

### Phase 1 - Corporate Website Foundation

Status: Implemented

- Home page
- Global navigation
- Hero slider
- Corporate footer
- Responsive design system

### Phase 2 - Dynamic Services

Status: Implemented

- Centralized services data
- Dynamic service routes
- Reusable service components
- Sub-service inquiries

### Phase 3 - Product Store

Status: Implemented

- Product catalog
- Search and filters
- Sorting and pagination
- Optional pricing
- WhatsApp integration
- Responsive product cards

### Phase 4 - Additional Website Pages

Status: Upcoming

- About Us
- Contact Us
- Blog system

### Phase 5 - Backend Infrastructure

Status: Planned

- Database integration
- Data models
- Server-side validation
- Media storage
- Authentication and authorization

### Phase 6 - Admin Panel

Status: Planned

- Admin dashboard
- Product management
- Service management
- Content management
- Pricing controls
- SEO management

### Phase 7 - Production Readiness

Status: Planned

- Functional testing
- Security testing
- Performance optimization
- SEO validation
- Production deployment

---

## Client

CTI System & Solutions

Professional safety, security, automation and
integrated infrastructure solutions.

---

## License

Proprietary project.

All rights reserved.

---

## Project Status

Under active development.