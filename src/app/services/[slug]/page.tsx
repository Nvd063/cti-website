import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ServiceDetailHero from "@/components/services/ServiceDetailHero";
import ServiceSidebar from "@/components/services/ServiceSidebar";
import ServiceOverview from "@/components/services/ServiceOverview";
import SolutionGrid from "@/components/services/SolutionGrid";
import ServiceCTA from "@/components/services/ServiceCTA";

import {
  getAllServices,
  getServiceBySlug,
  getAllServiceSlugs,
} from "@/services/service.service";

/* =========================================
   PAGE PROPS
========================================= */

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

/* =========================================
   STATIC PAGE GENERATION
========================================= */

export async function generateStaticParams() {
  const slugs = await getAllServiceSlugs();

  return slugs.map((slug) => ({
    slug,
  }));
}

/* =========================================
   DYNAMIC SEO METADATA
========================================= */

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;

  const service = await getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | CTI System & Solutions",
    };
  }

  const title =
    service.seoTitle ||
    `${service.title} | CTI System & Solutions`;

  const description =
    service.seoDescription ||
    service.heroDescription ||
    service.description;

  return {
    title,
    description,

    openGraph: {
      title,
      description,
      type: "website",
      images: [
        {
          url: service.heroImage || service.image,
          alt: service.title,
        },
      ],
    },
  };
}

/* =========================================
   DYNAMIC SERVICE DETAIL PAGE
========================================= */

export default async function ServiceDetailPage({
  params,
}: ServicePageProps) {
  const { slug } = await params;

  const [service, allServices] = await Promise.all([
    getServiceBySlug(slug),
    getAllServices(),
  ]);

  /* INVALID SERVICE HANDLING */

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">

      {/* =================================
          SERVICE HERO
      ================================= */}

      <ServiceDetailHero service={service} />

      {/* =================================
          MAIN SERVICE CONTENT
      ================================= */}

      <section className="bg-[#f8fafc] py-6 sm:py-10 lg:py-14">

        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">

          <div className="grid items-start gap-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-8 xl:grid-cols-[300px_minmax(0,1fr)]">

            {/* SERVICE SIDEBAR */}

            <ServiceSidebar
              services={allServices}
              currentService={service}
            />

            {/* MAIN CONTENT */}

            <div className="min-w-0">

              <ServiceOverview service={service} />

              <SolutionGrid service={service} />

            </div>

          </div>

        </div>

      </section>

      {/* =================================
          CONTACT & QUOTATION
      ================================= */}

      <ServiceCTA
        serviceTitle={service.heroTitle || service.title}
      />

    </main>
  );
}