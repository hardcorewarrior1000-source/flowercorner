"use client";

import Link from "next/link";
import { useLang } from "@/lib/lang-context";

const posts = [
  {
    slug: "best-flower-delivery-phuket",
    date: { en: "June 29, 2026", th: "29 มิถุนายน 2569" },
  },
  {
    slug: "wedding-flowers-phuket-guide",
    date: { en: "June 25, 2026", th: "25 มิถุนายน 2569" },
  },
  {
    slug: "choose-perfect-bouquet-occasion",
    date: { en: "June 20, 2026", th: "20 มิถุนายน 2569" },
  },
  {
    slug: "popular-thai-wedding-flowers-meanings",
    date: { en: "June 15, 2026", th: "15 มิถุนายน 2569" },
  },
  {
    slug: "where-to-buy-fresh-flowers-phuket-town",
    date: { en: "June 10, 2026", th: "10 มิถุนายน 2569" },
  },
  {
    slug: "flower-care-tips-phuket",
    date: { en: "July 5, 2026", th: "5 กรกฎาคม 2569" },
  },
  {
    slug: "mother-day-flowers-2026",
    date: { en: "July 1, 2026", th: "1 กรกฎาคม 2569" },
  },
  {
    slug: "sympathy-flowers-thailand",
    date: { en: "June 25, 2026", th: "25 มิถุนายน 2569" },
  },
  {
    slug: "seasonal-flowers-phuket",
    date: { en: "June 20, 2026", th: "20 มิถุนายน 2569" },
  },
  {
    slug: "valentine-flowers-2027",
    date: { en: "June 15, 2026", th: "15 มิถุนายน 2569" },
  },
];

export default function BlogPage() {
  const { t, l } = useLang();

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-3">{t("blog.title")}</h1>
        <p className="text-zinc-500">{t("blog.subtitle")}</p>
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
          >
            <p className="text-xs text-zinc-400 mb-1">{post.date[l as keyof typeof post.date]}</p>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              {t(`blog.${post.slug}.title`)}
            </h2>
            <p className="text-sm text-zinc-500">{t(`blog.${post.slug}.excerpt`)}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
