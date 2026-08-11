"use client";

import { useEffect, useState } from "react";
import { X, MessageCircle, Package, User, Phone, MapPin } from "lucide-react";

const PACKAGES = {
  standard: "الباقة الأساسية",
  premium: "الباقة الكاملة",
};

const WHATSAPP_NUMBER = "201123593773";

export function OrderModal({ pkg, onClose }) {
  const [packageName, setPackageName] = useState(pkg || "standard");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const submit = (e) => {
    e.preventDefault();
    const lines = [
      `مرحباً، أرغب في طلب ${PACKAGES[packageName] || packageName}`,
      name && `الاسم: ${name}`,
      phone && `رقم الهاتف: ${phone}`,
      city && `المدينة: ${city}`,
    ].filter(Boolean);
    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 p-4 backdrop-blur-sm animate-in fade-in">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-6 shadow-xl animate-in zoom-in-95">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="flex items-center gap-2 text-xl font-extrabold">
            <Package className="h-5 w-5 text-primary" />
            اختر باقتك
          </h3>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground"
            aria-label="إغلاق"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={submit} className="flex flex-col gap-4">
          <label className="flex flex-col gap-1.5 text-sm font-semibold">
            الباقة
            <select
              value={packageName}
              onChange={(e) => setPackageName(e.target.value)}
              className="rounded-lg border border-input bg-background px-3 py-2.5 font-medium focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="standard">الباقة الأساسية</option>
              <option value="premium">الباقة الكاملة</option>
            </select>
          </label>

          <label className="flex flex-col gap-1.5 text-sm font-semibold">
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4 text-primary" /> الاسم
            </span>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="اسمك"
              className="rounded-lg border border-input bg-background px-3 py-2.5 font-medium focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </label>

          <label className="flex flex-col gap-1.5 text-sm font-semibold">
            <span className="flex items-center gap-1.5">
              <Phone className="h-4 w-4 text-primary" /> رقم الهاتف
            </span>
            <input
              required
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="رقم هاتفك"
              className="rounded-lg border border-input bg-background px-3 py-2.5 font-medium focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </label>

          <label className="flex flex-col gap-1.5 text-sm font-semibold">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-primary" /> المدينة
            </span>
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="مدينتك"
              className="rounded-lg border border-input bg-background px-3 py-2.5 font-medium focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </label>

          <button
            type="submit"
            className="mt-1 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-base font-bold text-primary-foreground shadow-sm shadow-primary/20 hover:bg-primary/90"
          >
            <MessageCircle className="h-5 w-5" />
            أرسل عبر واتساب
          </button>
        </form>
      </div>
    </div>
  );
}
