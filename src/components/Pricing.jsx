"use client";

import { Check, X, Coffee, Rocket, ArrowLeft } from "lucide-react";
import { useOrder } from "./OrderProvider";
import { Container, SectionHeading } from "./ui";
import { cn } from "./cn";

const PACKAGES = [
  {
    id: "standard",
    icon: Coffee,
    name: "الباقة الأساسية",
    tagline: "كل ما تحتاجه لإدارة مقهاك",
    note: "نظام كاشير بسيط وسريع، مصمم للمقاهي الصغيرة والمتوسطة.",
    cta: "ابدأ الآن",
    highlight: false,
    features: [
      "شاشة بيع بسيطة مع بحث بالباركود",
      "إضافات مثل السكر والحليب",
      "خدمات داخلية وخارجية",
      "خصومات وضريبة مرنة",
      "الدفع نقدًا أو بالبطاقة",
      "إدارة الطاولات",
      "طباعة الفواتير",
      "إدارة الورديات والتقارير المالية",
      "تقارير مالية",
      "تسجيل دخول وصلاحيات",
      "دعم عملات متعددة",
      "نسخ احتياطي تلقائي",
    ],
  },
  {
    id: "premium",
    icon: Rocket,
    name: "الباقة المتكاملة",
    tagline: "حل متكامل للمقاهي والمطاعم",
    note: "كل ما في الباقة الأساسية، بالإضافة إلى إدارة المخزون والموردين.",
    cta: "ابدأ الآن",
    highlight: true,
    features: [
      "كل ميزات الباقة الأساسية",
      "مخزون بالوحدات (جرام، مل)",
      "خصم تلقائي من المخزون",
      "تنبيهات نفاد المخزون",
      "جرد المخزون",
      "إدارة الموردين والطلبات",
      "تتبع التلف والهدر",
      "طباعة متعددة الأقسام",
      "تقارير المخزون والمشتريات",
    ],
  },
];

const COMPARISON = [
  ["شاشة الكاشير والبحث بالباركود", true, true],
  ["إضافات ومعدلات المنتجات", true, true],
  ["إدارة الطاولات والخدمات المتعددة", true, true],
  ["طباعة فواتير حرارية", true, true],
  ["الورديات ومطابقة الخزينة", true, true],
  ["تعدد العملات", true, true],
  ["نسخ احتياطي تلقائي", true, true],
  ["مخزون بالوصفات", false, true],
  ["تنبيهات نفاد المخزون وتعطيل الأصناف", false, true],
  ["الموردون وأوامر الشراء", false, true],
  ["تتبع التوالف والهدر", false, true],
  ["توجيه الطباعة حسب القسم", false, true],
];

export function Pricing() {
  const { openOrder } = useOrder();

  return (
    <section id="pricing" className="relative overflow-hidden py-24">
      <Container>
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-bold text-primary">
            اختر الباقة المناسبة لك
          </div>

          <SectionHeading
            title="كل ما تحتاجه لإدارة مقهاك"
            description="حلول مرنة تساعدك على إدارة المبيعات والطلبات والمخزون بسهولة، بدون تعقيد."
          />
        </div>

        {/* Pricing cards */}
        <div className="grid gap-7 lg:grid-cols-2 lg:items-stretch">
          {PACKAGES.map((p, index) => {
            const Icon = p.icon;

            return (
              <div
                key={p.id}
                className={cn(
                  "group relative flex flex-col overflow-hidden rounded-3xl border p-7 transition-all duration-500",
                  "animate-in fade-in slide-in-from-bottom-6",
                  index === 0 ? "lg:delay-100" : "lg:delay-200",
                  p.highlight
                    ? [
                        "border-primary/40 bg-primary/3",
                        "shadow-xl shadow-primary/10",
                        "lg:-translate-y-3",
                        "hover:-translate-y-4 hover:shadow-2xl hover:shadow-primary/20",
                      ]
                    : [
                        "border-border bg-card shadow-sm",
                        "hover:-translate-y-2 hover:border-primary/20",
                        "hover:shadow-xl hover:shadow-primary/5",
                      ],
                )}
              >
                {/* Premium glow */}
                {p.highlight && (
                  <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-primary/15 blur-3xl transition-all duration-700 group-hover:scale-150" />
                )}

                {/* Popular badge */}
                {p.highlight && (
                  <div className="absolute left-6 top-5 z-10 inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-1.5 text-xs font-extrabold text-primary-foreground shadow-lg shadow-primary/20">
                    <span className="inline-flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-current" />
                      الأكثر شعبية
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div
                  className={cn(
                    "relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border transition-all duration-500",
                    "group-hover:scale-110 group-hover:rotate-3",
                    p.highlight
                      ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                      : "border-primary/20 bg-primary/10 text-primary",
                  )}
                >
                  <Icon
                    className={cn(
                      "h-7 w-7 transition-transform duration-500",
                      p.highlight && "group-hover:-rotate-6",
                    )}
                  />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl font-extrabold tracking-tight">
                    {p.name}
                  </h3>

                  <p className="mt-1 font-bold text-primary">{p.tagline}</p>

                  <p className="mt-3 max-w-lg text-sm leading-7 text-muted-foreground">
                    {p.note}
                  </p>
                </div>

                {/* Divider */}
                <div className="my-6 h-px bg-border/70" />

                {/* Features */}
                <ul className="relative flex-1 space-y-3">
                  {p.features.map((feature, i) => {
                    const premiumOnly = p.id === "premium" && i > 0;

                    return (
                      <li
                        key={feature}
                        className={cn(
                          "group/item flex items-start gap-3 text-sm",
                          "animate-in fade-in slide-in-from-right-2",
                          premiumOnly && "font-semibold",
                        )}
                        style={{
                          animationDelay: `${250 + i * 45}ms`,
                        }}
                      >
                        <span
                          className={cn(
                            "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-all duration-300",
                            "group-hover/item:scale-110",
                            p.highlight
                              ? "bg-primary/15 text-primary"
                              : "bg-primary/10 text-primary",
                          )}
                        >
                          <Check className="h-3.5 w-3.5" strokeWidth={3} />
                        </span>

                        <span className="leading-5">{feature}</span>
                      </li>
                    );
                  })}
                </ul>

                {/* CTA */}
                <button
                  onClick={() => openOrder(p.id)}
                  className={cn(
                    "group/btn relative mt-8 flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl px-5 py-3.5 text-base font-extrabold transition-all duration-300",
                    "active:scale-[0.98]",
                    p.highlight
                      ? [
                          "bg-primary text-primary-foreground",
                          "shadow-lg shadow-primary/20",
                          "hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30",
                        ]
                      : [
                          "border border-border bg-secondary text-primary-foreground",
                          "hover:border-primary/30 hover:bg-primary/5",
                        ],
                  )}
                >
                  <span
                    className={`${p.highlight ? " text-primary-foreground" : ""} relative z-10`}
                  >
                    {p.cta}
                  </span>

                  <ArrowLeft
                    className={`${p.highlight ? "text-primary-foreground" : ""} relative z-10 h-4 w-4 transition-transform duration-300 group-hover/btn:-translate-x-1`}
                  />

                  {p.highlight && (
                    <span className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-500 group-hover/btn:translate-x-full" />
                  )}
                </button>
              </div>
            );
          })}
        </div>

        {/* Comparison */}
        <div className="mt-16">
          <div className="mb-6 text-center">
            <h3 className="text-2xl font-extrabold">قارن بين الباقات</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              اختر الأدوات التي تناسب طريقة عملك
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-160 text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="px-6 py-5 text-start font-extrabold">
                      الميزة
                    </th>

                    <th className="px-6 py-5 text-center font-extrabold">
                      الأساسية
                    </th>

                    <th className="px-6 py-5 text-center font-extrabold text-primary">
                      المتكاملة
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {COMPARISON.map(([feature, standard, premium], index) => (
                    <tr
                      key={feature}
                      className={cn(
                        "transition-colors duration-200 hover:bg-primary/3",
                        index !== COMPARISON.length - 1 &&
                          "border-b border-border",
                      )}
                    >
                      <td className="px-6 py-4 font-semibold">{feature}</td>

                      <td className="px-6 py-4 text-center">
                        {standard ? (
                          <span className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <Check className="h-4 w-4" strokeWidth={3} />
                          </span>
                        ) : (
                          <X className="mx-auto h-4 w-4 text-muted-foreground/40" />
                        )}
                      </td>

                      <td className="px-6 py-4 text-center">
                        {premium ? (
                          <span className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <Check className="h-4 w-4" strokeWidth={3} />
                          </span>
                        ) : (
                          <X className="mx-auto h-4 w-4 text-muted-foreground/40" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
