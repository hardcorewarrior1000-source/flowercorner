"use client";

import { useState } from "react";
import { useLang } from "@/lib/lang-context";

export default function OrderPage() {
  const { t } = useLang();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [occasion, setOccasion] = useState("");
  const [budget, setBudget] = useState("");
  const [colors, setColors] = useState("");
  const [delivery, setDelivery] = useState("");
  const [message, setMessage] = useState("");

  const phoneNum = "66950514071";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      `🌸 *New Custom Order Request*`,
      `*Name:* ${name}`,
      `*Phone:* ${phone}`,
      `*Occasion:* ${occasion}`,
      `*Budget:* ${budget} ฿`,
      `*Colors/Flowers:* ${colors}`,
      `*Delivery:* ${delivery}`,
      `*Notes:* ${message}`,
    ].join("\n");

    const url = `https://wa.me/${phoneNum}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-foreground mb-3">{t("order.title")}</h1>
        <p className="text-zinc-500">{t("order.subtitle")}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">{t("order.form.name")}</label>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 focus:border-rose focus:ring-2 focus:ring-rose/20 outline-none transition-all bg-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">{t("order.form.phone")}</label>
            <input
              required
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 focus:border-rose focus:ring-2 focus:ring-rose/20 outline-none transition-all bg-white"
              placeholder="+66..."
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">{t("order.form.occasion")}</label>
          <input
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 focus:border-rose focus:ring-2 focus:ring-rose/20 outline-none transition-all bg-white"
            placeholder={t("order.form.occasion.placeholder")}
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">{t("order.form.budget")}</label>
            <input
              required
              type="number"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 focus:border-rose focus:ring-2 focus:ring-rose/20 outline-none transition-all bg-white"
              placeholder={t("order.form.budget.placeholder")}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">{t("order.form.delivery")}</label>
            <input
              value={delivery}
              onChange={(e) => setDelivery(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 focus:border-rose focus:ring-2 focus:ring-rose/20 outline-none transition-all bg-white"
              placeholder={t("order.form.delivery.placeholder")}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">{t("order.form.colors")}</label>
          <input
            value={colors}
            onChange={(e) => setColors(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 focus:border-rose focus:ring-2 focus:ring-rose/20 outline-none transition-all bg-white"
            placeholder={t("order.form.colors.placeholder")}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">{t("order.form.message")}</label>
          <textarea
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 focus:border-rose focus:ring-2 focus:ring-rose/20 outline-none transition-all bg-white resize-none"
            placeholder={t("order.form.message.placeholder")}
          />
        </div>

        <button
          type="submit"
          className="w-full py-3.5 bg-rose text-white rounded-xl font-medium hover:bg-rose-dark transition-colors shadow-lg shadow-rose/20"
        >
          {t("order.form.submit")}
        </button>

        <p className="text-center text-xs text-zinc-400">{t("order.form.note")}</p>
      </form>
    </div>
  );
}
