import type { Metadata } from "next";

import ServicesHero from "@/components/services/ServicesHero";
import ServiceGrid from "@/components/services/ServiceGrid";
import ServiceCTA from "@/components/services/ServiceCTA";

import { getAllServices } from "@/services/service.service";

export const metadata: Metadata = {
  title: "Our Services | CTI System & Solutions",

  description:
    "Explore integrated fire safety, security, building automation, emergency lighting, surveillance and industrial technology solutions from CTI System & Solutions.",
};

export default async function ServicesPage() {
  const services = await getAllServices();

  return (
    <main className="min-h-screen bg-white">

      <ServicesHero />

      <ServiceGrid services={services} />

      <ServiceCTA />

    </main>
  );
}