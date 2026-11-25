import type {
  PublicProduct,
  ProductCategory,
} from "@/types/product";

import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: PublicProduct[];
  categories: ProductCategory[];
}

export default function ProductGrid({
  products,
  categories,
}: ProductGridProps) {
  const categoryMap = new Map(
    categories.map((category) => [
      category.id,
      category.name,
    ])
  );

  return (
    <div className="grid grid-cols-2 items-stretch gap-2.5 sm:gap-4 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4">
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          categoryName={categoryMap.get(product.categoryId)}
          index={index}
        />
      ))}
    </div>
  );
}