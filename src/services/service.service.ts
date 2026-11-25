import { services } from "@/data/services";
import type { Service } from "@/types/service";

export async function getAllServices(): Promise<Service[]> {
  return services
    .filter((service) => service.status === "PUBLISHED")
    .sort((a, b) => a.sortOrder - b.sortOrder);
}

export async function getFeaturedServices(): Promise<Service[]> {
  const publishedServices = await getAllServices();

  return publishedServices.filter(
    (service) => service.featured
  );
}

export async function getServiceBySlug(
  slug: string
): Promise<Service | undefined> {
  const publishedServices = await getAllServices();

  return publishedServices.find(
    (service) => service.slug === slug
  );
}

export async function getRelatedServices(
  currentSlug: string,
  limit: number = 4
): Promise<Service[]> {
  const publishedServices = await getAllServices();

  return publishedServices
    .filter((service) => service.slug !== currentSlug)
    .slice(0, limit);
}

export async function getAllServiceSlugs(): Promise<string[]> {
  const publishedServices = await getAllServices();

  return publishedServices.map(
    (service) => service.slug
  );
}