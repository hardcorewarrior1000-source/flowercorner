"use client";

import Link from "next/link";
import { useLang } from "@/lib/lang-context";

export default function DeliveryPage() {
  const { t } = useLang();

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-3">{t("delivery.title")}</h1>
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-xl p-8 shadow-md">
          <h2 className="text-xl font-bold text-foreground mb-3">📍 {t("delivery.area.title")}</h2>
          <p className="text-zinc-600 leading-relaxed">{t("delivery.area.text")}</p>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-md">
          <h2 className="text-xl font-bold text-foreground mb-3">🚚 {t("delivery.fee.title")}</h2>
          <p className="text-zinc-600 leading-relaxed">{t("delivery.fee.text")}</p>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-md">
          <h2 className="text-xl font-bold text-foreground mb-3">⏰ {t("delivery.time.title")}</h2>
          <p className="text-zinc-600 leading-relaxed">{t("delivery.time.text")}</p>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-md">
          <h2 className="text-xl font-bold text-foreground mb-3">⚡ {t("delivery.sameday.title")}</h2>
          <p className="text-zinc-600 leading-relaxed">{t("delivery.sameday.text")}</p>
        </div>
      </div>

      <div className="text-center mt-12">
        <Link
          href="/order"
          className="inline-flex px-10 py-4 bg-rose text-white rounded-full font-medium text-lg hover:bg-rose-dark transition-colors shadow-lg shadow-rose/20"
        >
          {t("delivery.cta")}
        </Link>
      </div>
    </div>
  );
}
