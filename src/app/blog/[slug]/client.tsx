"use client";

import Link from "next/link";
import { useLang } from "@/lib/lang-context";
import { notFound } from "next/navigation";
import { useState, useEffect } from "react";

const slugs = [
  "best-flower-delivery-phuket",
  "wedding-flowers-phuket-guide",
  "choose-perfect-bouquet-occasion",
  "popular-thai-wedding-flowers-meanings",
  "where-to-buy-fresh-flowers-phuket-town",
];

export function BlogPostClient({ params }: { params: Promise<{ slug: string }> }) {
  const { t } = useLang();
  const [slug, setSlug] = useState("");

  useEffect(() => {
    params.then((p) => setSlug(p.slug));
  }, [params]);

  if (!slug) return <div className="max-w-3xl mx-auto px-4 py-16" />;
  if (!slugs.includes(slug)) return notFound();

  const body = t(`blog.${slug}.body` as any);
  const bodyParts = body.split("\n\n").filter(Boolean);

  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-rose-dark hover:text-rose mb-8">
        ← {t("blog.back")}
      </Link>
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        {t(`blog.${slug}.title` as any)}
      </h1>
      {bodyParts.map((p, i) => (
        <p key={i} className="text-zinc-600 leading-relaxed mb-4">{p}</p>
      ))}
      <div className="mt-12 pt-8 border-t border-zinc-200">
        <p className="text-sm text-zinc-400">{t("blog.share")}</p>
        <div className="flex gap-3 mt-2">
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://flowercorner.zelve.xyz/blog/${slug}`)}`} target="_blank" rel="noopener noreferrer" className="text-sm text-rose-dark hover:text-rose">Facebook</a>
          <a href={`https://line.me/R/msg/text/?${encodeURIComponent(t(`blog.${slug}.title`))}%20${encodeURIComponent(`https://flowercorner.zelve.xyz/blog/${slug}`)}`} target="_blank" rel="noopener noreferrer" className="text-sm text-rose-dark hover:text-rose">Line</a>
        </div>
      </div>
    </article>
  );
}
