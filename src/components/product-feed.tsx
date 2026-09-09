import ProductCard from "@/components/product-card";
import type { Product } from "@/lib/products";

export default function ProductFeed({ products }: { products: Product[] }) {
  return (
    <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}
