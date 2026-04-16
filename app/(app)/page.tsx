import { ALL_CATEGORIES_QUERY } from "@/sample/ecommerce-ai-nextjs-16-sanity-clerk-agentkit-stripe-checkout-vercel-ai-agents/lib/sanity/queries/categories";
import { sanityFetch } from "@/sample/ecommerce-ai-nextjs-16-sanity-clerk-agentkit-stripe-checkout-vercel-ai-agents/sanity/lib/live";
import Image from "next/image";

export default async function Home() {
  const { data: categories } = await sanityFetch({
    query: ALL_CATEGORIES_QUERY,
  });
  return (
    <div >
      {/* Featured Products Carousel*/}

      {/* Page Banner */}

      {/* Category Tiles */}

      {/* Products Section */}
    </div>
  );
}
