"use client";

import Link from "next/link";
import { useLang } from "@/lib/lang-context";

function getExt(n: number) {
  return [2, 4, 9, 14, 15].includes(n) ? "png" : "jpg";
}

export default function HomePage() {
  const { t } = useLang();

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/10.jpg)" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
            {t("home.hero.title")}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 animate-fade-in animate-fade-in-delay-1">
            {t("home.hero.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animate-fade-in-delay-2">
            <Link
              href="/gallery"
              className="px-8 py-3 bg-rose text-white rounded-full font-medium hover:bg-rose-dark transition-colors"
            >
              {t("home.hero.cta")}
            </Link>
            <Link
              href="/order"
              className="px-8 py-3 bg-white text-foreground rounded-full font-medium hover:bg-cream transition-colors"
            >
              {t("home.hero.cta2")}
            </Link>
          </div>
        </div>
      </section>

      {/* About snippet */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div
              className="aspect-[4/3] rounded-2xl bg-cover bg-center shadow-lg"
              style={{ backgroundImage: "url(/images/3.jpg)" }}
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">{t("home.about.title")}</h2>
            <p className="text-zinc-600 leading-relaxed mb-6">{t("home.about.text")}</p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-rose-dark font-medium hover:text-rose transition-colors"
            >
              {t("home.about.cta")} →
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="bg-cream/50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3">{t("home.gallery.title")}</h2>
            <p className="text-zinc-500">{t("home.gallery.text")}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            {[10, 2, 14, 4, 11, 12, 5, 6, 13, 7, 8, 15].map((n) => (
              <div
                key={n}
                className={`aspect-square rounded-xl bg-cover bg-center shadow-md ${
                  n === 2 || n === 6 || n === 10 ? "md:row-span-2 md:aspect-auto" : ""
                }`}
                style={{ backgroundImage: `url(/images/${n}.${getExt(n)}` }}
              />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/gallery"
              className="inline-flex px-8 py-3 border-2 border-rose text-rose-dark rounded-full font-medium hover:bg-rose hover:text-white transition-colors"
            >
              {t("home.gallery.cta")}
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-3">{t("home.reviews.title")}</h2>
          <p className="text-zinc-500">{t("home.reviews.text")}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="bg-white rounded-xl p-6 shadow-md flex flex-col"
            >
              <div className="flex items-center gap-1 text-amber-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M10 1l2.39 4.58L17.12 6.8l-3.27 3.18.77 4.52L10 12.06 5.38 14.5l.77-4.52L2.88 6.8l4.73-.62L10 1z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed mb-3 flex-1">
                {t(`home.reviews.${n}.text` as any)}
              </p>
              <p className="font-semibold text-foreground text-sm">
                {t(`home.reviews.${n}.name` as any)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">{t("home.cta.title")}</h2>
        <p className="text-zinc-500 mb-8 max-w-lg mx-auto">{t("home.cta.text")}</p>
        <Link
          href="/order"
          className="inline-flex px-10 py-4 bg-rose text-white rounded-full font-medium text-lg hover:bg-rose-dark transition-colors shadow-lg shadow-rose/20"
        >
          {t("home.cta.button")}
        </Link>
      </section>
    </div>
  );
}
