"use client";

import { useLang } from "@/lib/lang-context";

export default function ContactPage() {
  const { t } = useLang();

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-3">{t("contact.title")}</h1>
        <p className="text-zinc-500">{t("contact.subtitle")}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="space-y-4">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-semibold text-foreground mb-2">{t("contact.phone")}</h3>
            <a href="tel:+66950514071" className="text-rose-dark hover:text-rose transition-colors">
              +66 095-071-4071
            </a>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-semibold text-foreground mb-2">{t("contact.whatsapp")}</h3>
            <a
              href="https://wa.me/66950514071"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-dark hover:text-rose transition-colors"
            >
              +66 095-071-4071
            </a>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-semibold text-foreground mb-2">{t("contact.instagram")}</h3>
            <a
              href="https://www.instagram.com/flowercorner.hkt/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-dark hover:text-rose transition-colors"
            >
              @flowercorner.hkt
            </a>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md">
          <h3 className="font-semibold text-foreground mb-4">{t("contact.hours.title")}</h3>
          <div className="space-y-2 text-sm text-zinc-600">
            <p>{t("contact.hours.weekdays")}</p>
            <p>{t("contact.hours.sunday")}</p>
            <p className="text-zinc-400 mt-3 text-xs">{t("contact.hours.note")}</p>
          </div>
        </div>
      </div>

      {/* Google Maps */}
      <div className="rounded-2xl overflow-hidden shadow-md mb-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.456!2d98.3631893!3d7.8891078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30503100218f953d%3A0x1c3be70ae3b2b5b0!2sFlower%20Corner%20Phuket!5e0!3m2!1sen!2sth!4v1"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Flower Corner Phuket Location"
        />
      </div>

      {/* WhatsApp CTA */}
      <div className="text-center bg-cream/50 rounded-2xl p-10">
        <p className="text-lg text-zinc-600 mb-4">{t("contact.cta")}</p>
        <a
          href="https://wa.me/66950514071"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex px-8 py-3 bg-rose text-white rounded-full font-medium hover:bg-rose-dark transition-colors shadow-lg shadow-rose/20"
        >
          WhatsApp +66 095-071-4071
        </a>
      </div>
    </div>
  );
}
