"use client";

import Link from "next/link";
import { useLang } from "@/lib/lang-context";

export default function NotFoundPage() {
  const { t } = useLang();

  return (
    <div className="flex-1 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-8xl mb-6">🌷</div>
        <h1 className="text-3xl font-bold text-foreground mb-3">{t("404.title")}</h1>
        <p className="text-zinc-500 mb-8">{t("404.text")}</p>
        <Link
          href="/"
          className="inline-flex px-8 py-3 bg-rose text-white rounded-full font-medium hover:bg-rose-dark transition-colors"
        >
          {t("404.cta")}
        </Link>
      </div>
    </div>
  );
}
