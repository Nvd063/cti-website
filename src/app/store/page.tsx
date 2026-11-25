import type { Metadata } from "next";

import StoreCatalog from "@/components/store/StoreCatalog";
import StoreCTA from "@/components/store/StoreCTA";

import {
  getAllProducts,
  getProductCategories,
} from "@/services/product.service";

export const metadata: Metadata = {
  title: "Product Store | CTI System & Solutions",
  description:
    "Explore professional fire safety, security, building automation, emergency lighting and infrastructure products from CTI System & Solutions in Pakistan.",

  openGraph: {
    title: "Product Store | CTI System & Solutions",
    description:
      "Discover professional safety, security and integrated technology products. Contact our team directly for product inquiries and quotations.",
    type: "website",
  },
};

export default async function StorePage() {
  const [products, categories] = await Promise.all([
    getAllProducts(),
    getProductCategories(),
  ]);

  return (
    <main className="min-h-screen bg-[#f5f7fa]">
      <StoreCatalog
        products={products}
        categories={categories}
      />

      <StoreCTA />
    </main>
  );
}