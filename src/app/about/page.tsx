"use client";

import Link from "next/link";
import { useLang } from "@/lib/lang-context";

export default function AboutPage() {
  const { t } = useLang();

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-3">{t("about.title")}</h1>
      </div>

      <div
        className="h-64 md:h-80 rounded-2xl bg-cover bg-center mb-12 shadow-lg"
        style={{ backgroundImage: "url(/images/5.jpg)" }}
      />

      <div className="prose prose-zinc max-w-none">
        <p className="text-lg text-zinc-600 leading-relaxed mb-8">{t("about.intro")}</p>

        <div className="bg-cream/50 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-3">{t("about.mission.title")}</h2>
          <p className="text-zinc-600 leading-relaxed">{t("about.mission.text")}</p>
        </div>

        <div className="bg-sage-light/30 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-3">{t("about.location.title")}</h2>
          <p className="text-zinc-600 leading-relaxed mb-4">{t("about.location.text")}</p>
          <p className="text-zinc-500 text-sm">Wichit, Mueang Phuket District, Phuket, Thailand</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Link
            href="/contact"
            className="px-8 py-3 bg-rose text-white rounded-full font-medium hover:bg-rose-dark transition-colors text-center"
          >
            {t("about.cta")}
          </Link>
          <a
            href="https://www.instagram.com/flowercorner.hkt/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-rose text-rose-dark rounded-full font-medium hover:bg-rose hover:text-white transition-colors text-center"
          >
            {t("about.follow")} @flowercorner.hkt
          </a>
        </div>
      </div>
    </div>
  );
}
