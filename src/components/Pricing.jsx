"use client";

import { Check, X, Coffee, Rocket } from "lucide-react";
import { useOrder } from "./OrderProvider";
import { Container, SectionHeading } from "./ui";
import { cn } from "./cn";

const PACKAGES = [
  {
    id: "standard",
    icon: Coffee,
    name: "باقة مقهى Standard",
    tagline: "الأساسية — للمقاهي ووكلاء السفري السريعين",
    note: "نظام كاشير سريع لأصحاب الأكشاك ومحلات الجاهز والمشروبات ذات الكاشير الواحد.",
    cta: "اطلب Standard",
    highlight: false,
    features: [
      "شاشة بيع سريعة للشاشات اللمسية مع بحث وباركود",
      "إضافات ومعدلات المنتجات (سكر زيادة، حليب شوفان...)",
      "أنواع خدمة: داخلي / سفري / توصيل",
      "خصومات وضرائب مرنة",
      "طرق دفع متعددة (كاش / بطاقة / محفظة)",
      "إدارة الطاولات (متاحة / مشغولة)",
      "طباعة فواتير حرارية 80/58مم",
      "إدارة الورديات ومطابقة الخزينة مع Z-Report",
      "مصروفات وتقارير مالية ورسوم بيانية",
      "تسجيل دخول بـ PIN وأدوار كاشير/مدير وسجل تدقيق",
      "تعدد العملات وأسعار الصرف",
      "نسخ احتياطي تلقائي لآخر 30 يوم",
    ],
  },
  {
    id: "premium",
    icon: Rocket,
    name: "باقة مقهى Premium",
    tagline: "الكاملة — للمطاعم والمقاهي متعددة الأقسام",
    note: "كل شيء في Standard، بالإضافة إلى إدارة المخزون بالريسبت والموردين والتوالف والتوجيه متعدد الطابعات.",
    cta: "اطلب Premium",
    highlight: true,
    features: [
      "كل مزايا باقة Standard",
      "محرك مخزون بالوصفات والريسبت (جرام / مل / وحدة)",
      "خصم أوتوماتيكي للمخزون مع كل عملية بيع",
      "تنبيهات نفاد المخزون وتعطيل الأصناف تلقائياً",
      "تسوية وجرد وتحويلات وحدات المخزون",
      "إدارة الموردين وأوامر الشراء والمديونيات",
      "تتبع التوالف والهدر (Damages)",
      "توجيه طباعة متعدد حسب القسم (باريستا / مطبخ / كاشير)",
      "تقارير إضافية: المخزون، المشتريات، التوالف",
    ],
  },
];

export function Pricing() {
  const { openOrder } = useOrder();

  return (
    <section id="pricing" className="py-20">
      <Container>
        <SectionHeading
          eyebrow="الباقات"
          title="اختر الباقة التي تناسب حجم عملك"
          description="بما أن نظام مقهى يعمل أوفلاين وبدون اشتراكات، فأنت تمتلكه مدى الحياة — اختر بين الباقة الأساسية أو الكاملة حسب احتياجاتك."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {PACKAGES.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.id}
                className={cn(
                  "relative flex flex-col rounded-2xl border bg-card p-7 shadow-sm",
                  p.highlight
                    ? "border-primary/50 shadow-primary/10 ring-1 ring-primary/30 lg:-translate-y-2"
                    : "border-border",
                )}
              >
                {p.highlight && (
                  <span className="absolute -top-3 inset-s-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-extrabold text-primary-foreground shadow-sm rtl:-translate-x-1/2">
                    الأكثر شعبية
                  </span>
                )}
                <span
                  className={cn(
                    "mb-4 inline-flex w-fit rounded-xl border border-primary/20 bg-primary/10 p-3",
                    p.highlight && "bg-primary",
                  )}
                >
                  <Icon className="h-6 w-6 text-primary" />
                </span>
                <h3 className="text-2xl font-extrabold">{p.name}</h3>
                <p className="mt-1 text-sm font-semibold text-muted-foreground">
                  {p.tagline}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.note}
                </p>

                <ul className="mt-5 flex-1 space-y-2.5">
                  {p.features.map((f, i) => {
                    const premiumOnly = p.id === "premium" && i > 0;
                    return (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <span className="mt-0.5 inline-flex shrink-0 rounded-full p-0.5 bg-primary/10 text-primary">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        <span
                          className={cn(
                            premiumOnly && "font-semibold text-foreground",
                          )}
                        >
                          {f}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                <button
                  onClick={() => openOrder(p.id)}
                  className={cn(
                    "mt-6 inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-base font-bold",
                    p.highlight
                      ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20 hover:bg-primary/90"
                      : "border border-border bg-secondary text-foreground hover:bg-accent",
                  )}
                >
                  {p.cta}
                </button>
              </div>
            );
          })}
        </div>

        {/* comparison matrix */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-160 text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/60 text-start">
                  <th className="px-5 py-4 text-start font-extrabold">
                    الميزة
                  </th>
                  <th className="px-5 py-4 text-center font-extrabold">
                    Standard
                  </th>
                  <th className="px-5 py-4 text-center font-extrabold text-primary">
                    Premium
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["شاشة الكاشير والبحث بالباركود", true, true],
                  ["إضافات ومعدلات المنتجات", true, true],
                  ["إدارة الطاولات والخدمات المتعددة", true, true],
                  ["طباعة فواتير حرارية", true, true],
                  ["الورديات ومطابقة الخزينة وZ-Report", true, true],
                  ["تعدد العملات", true, true],
                  ["نسخ احتياطي تلقائي", true, true],
                  ["مخزون بالوصفات والريسبت", false, true],
                  ["تنبيهات نفاد المخزون وتعطيل الأصناف", false, true],
                  ["الموردون وأوامر الشراء", false, true],
                  ["تتبع التوالف والهدر", false, true],
                  ["توجيه طباعة متعدد حسب القسم", false, true],
                ].map(([feature, small, premium]) => (
                  <tr
                    key={feature}
                    className="border-b border-border last:border-0"
                  >
                    <td className="px-5 py-3 font-semibold">{feature}</td>
                    <td className="px-5 py-3 text-center">
                      {small ? (
                        <Check className="mx-auto h-4 w-4 text-primary" />
                      ) : (
                        <X className="mx-auto h-4 w-4 text-muted-foreground/60" />
                      )}
                    </td>
                    <td className="px-5 py-3 text-center">
                      {premium ? (
                        <Check className="mx-auto h-4 w-4 text-primary" />
                      ) : (
                        <X className="mx-auto h-4 w-4 text-muted-foreground/60" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </section>
  );
}
