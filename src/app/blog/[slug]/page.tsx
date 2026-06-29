import { BlogPostClient } from "./client";

const slugs = [
  "best-flower-delivery-phuket",
  "wedding-flowers-phuket-guide",
  "choose-perfect-bouquet-occasion",
  "popular-thai-wedding-flowers-meanings",
  "where-to-buy-fresh-flowers-phuket-town",
];

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}
export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  return <BlogPostClient params={params} />;
}
