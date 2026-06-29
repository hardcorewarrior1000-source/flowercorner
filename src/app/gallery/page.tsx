"use client";

import Link from "next/link";
import { useLang } from "@/lib/lang-context";

const galleryIds = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
const items = galleryIds.map((id) => ({
  id,
  titleKey: `gallery.item${id}.title` as const,
  descKey: `gallery.item${id}.desc` as const,
  priceKey: `gallery.item${id}.price` as const,
  ext: [2, 4, 9, 14, 15].includes(id) ? "png" : "jpg",
}));

export default function GalleryPage() {
  const { t } = useLang();

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-3">{t("gallery.title")}</h1>
        <p className="text-zinc-500">{t("gallery.subtitle")}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
          >
            <div
              className="aspect-[4/3] bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
              style={{ backgroundImage: `url(/images/${item.id}.${item.ext})` }}
            />
            <div className="p-4">
              <h3 className="font-semibold text-foreground mb-1">
                {t(item.titleKey)}
              </h3>
              <p className="text-sm text-zinc-500 mb-2">{t(item.descKey)}</p>
              <p className="text-sm font-medium text-rose-dark">
                {t(item.priceKey) === "Custom" ? t("gallery.custom") : `${t("gallery.from")} ${t("gallery.baht")}${t(item.priceKey)}`}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center bg-cream/50 rounded-2xl p-10">
        <p className="text-lg text-zinc-600 mb-4">{t("gallery.cta")}</p>
        <Link
          href="/order"
          className="inline-flex px-8 py-3 bg-rose text-white rounded-full font-medium hover:bg-rose-dark transition-colors"
        >
          {t("gallery.cta.button")}
        </Link>
      </div>
    </div>
  );
}
