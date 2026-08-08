"use client";

import {
  Zap,
  Coins,
  Printer,
  ShieldCheck,
  Play,
  ArrowLeft,
  Search,
  ShoppingBag,
  Plus,
  Minus,
} from "lucide-react";
import { useOrder } from "./OrderProvider";
import { Container, Badge, Button } from "./ui";

const PILLS = [
  { icon: Zap, label: "أوفلاين 100%" },
  { icon: Coins, label: "بدون اشتراك شهري" },
  { icon: Printer, label: "طباعة حرارية ذكية" },
];

const MOCK_MENU = [
  { id: 1, name: "إسبريسو", price: 30, category_name: "مشروبات ساخنة" },
  { id: 2, name: "لاتيه", price: 45, category_name: "مشروبات ساخنة" },
  { id: 3, name: "كابتشينو", price: 40, category_name: "مشروبات ساخنة" },
  { id: 4, name: "موكا", price: 55, category_name: "مشروبات ساخنة" },
  { id: 5, name: "عصير برتقال", price: 35, category_name: "عصائر" },
  { id: 6, name: "كريب نوتيلا", price: 60, category_name: "حلويات" },
];

const MOCK_CART = [
  { name: "لاتيه", mods: "حليب شوفان + إكسترا شوت", qty: 2, total: 140 },
  { name: "كريب نوتيلا", mods: "", qty: 1, total: 60 },
];

export function Hero() {
  const { openOrder } = useOrder();

  return (
    <section id="top" className="relative overflow-hidden">
      {/* subtle decorative gradients */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 inset-s-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-40 -inset-e-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <Container className="grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-6">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            ضع بصمتك في نظام
            <span className="text-primary">ادارة وكاشير مميز</span>
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            يعمل <strong className="text-foreground">100% أوفلاين</strong> على
            جهازك بدون إنترنت وبدون أي اشتراكات شهرية - سجّل الطلبات، أدرِ
            الطاولات والمخزون، واطبع الفواتير حرارياً بسرعة ورقابة كاملة.
          </p>

          <div className="flex flex-wrap gap-2">
            {PILLS.map((p) => (
              <span
                key={p.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-sm font-semibold text-foreground shadow-sm"
              >
                <p.icon className="h-4 w-4 text-primary" />
                {p.label}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button onClick={() => openOrder()} className="gap-2">
              اطلب باقتك
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <a href="#demo">
              <Button variant="outline" className="gap-2">
                <Play className="h-5 w-5 text-primary" />
                جرّب الشاشة التفاعلية
              </Button>
            </a>
          </div>
        </div>

        {/* Floating POS mockup */}
        <div className="relative animate-float">
          <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-2xl shadow-primary/10">
            <div className="flex items-center justify-between rounded-xl bg-foreground px-4 py-2.5 text-white">
              <span className="flex items-center gap-2 text-sm font-bold">
                <img
                  src="/icon.png"
                  alt="مقهى"
                  className="h-6 w-6 rounded-md object-contain"
                />
                مقهى
              </span>
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row">
              {/* menu column */}
              <div className="flex-1 min-w-0 p-3">
                <div className="mb-2 flex items-center justify-between gap-2">
                  <h2 className="text-base font-bold text-foreground">
                    تيك اواي
                  </h2>
                  <div className="relative w-40">
                    <input
                      type="text"
                      readOnly
                      placeholder="ابحث عن منتج..."
                      className="w-full rounded-lg border border-border bg-card py-1.5 pr-3 pl-8 text-[11px] focus:outline-none"
                    />
                    <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
                  </div>
                </div>

                <div className="mb-2 flex items-center gap-1.5 overflow-hidden">
                  <span className="whitespace-nowrap rounded-lg bg-primary px-3 py-1.5 text-[11px] font-semibold text-primary-foreground">
                    الكل
                  </span>
                  <span className="whitespace-nowrap rounded-lg border border-border bg-card px-3 py-1.5 text-[11px] font-medium text-muted-foreground">
                    مشروبات ساخنة
                  </span>
                  <span className="whitespace-nowrap rounded-lg border border-border bg-card px-3 py-1.5 text-[11px] font-medium text-muted-foreground">
                    عصائر
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-1.5">
                  {MOCK_MENU.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col items-start rounded-lg border border-border bg-card p-2 text-right"
                    >
                      <h3 className="line-clamp-1 text-[11px] font-bold text-foreground">
                        {item.name}
                      </h3>
                      <span className="mt-0.5 w-fit rounded bg-muted/50 px-1 py-0.5 text-[9px] font-medium text-muted-foreground">
                        {item.category_name}
                      </span>
                      <div className="mt-1.5 flex w-full items-center justify-between border-t border-border/50 pt-1.5">
                        <span className="text-[10px] font-bold text-primary">
                          {item.price} ج.م
                        </span>
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Plus className="h-3 w-3" />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* cart column */}
              <div className="w-full border-t border-border bg-card sm:w-48 sm:border-t-0 sm:border-r">
                <div className="flex items-center justify-between border-b border-border/50 bg-muted/10 px-3 py-2">
                  <h3 className="flex items-center gap-1.5 text-sm font-bold text-foreground">
                    <ShoppingBag className="h-4 w-4 text-primary" />
                    فاتورة الطلب
                  </h3>
                </div>
                <div className="space-y-1.5 p-2">
                  {MOCK_CART.map((c, i) => (
                    <div
                      key={i}
                      className="rounded-lg border border-border bg-background p-2"
                    >
                      <div className="flex items-start justify-between gap-1">
                        <div className="min-w-0">
                          <p className="truncate text-[11px] font-bold">
                            {c.name}
                          </p>
                          {c.mods && (
                            <p className="truncate text-[9px] text-muted-foreground">
                              {c.mods}
                            </p>
                          )}
                        </div>
                        <span className="text-[10px] font-bold text-primary">
                          {c.total.toFixed(0)}
                        </span>
                      </div>
                      <div className="mt-1.5 flex items-center gap-1">
                        <span className="flex h-5 w-5 items-center justify-center rounded bg-muted text-foreground">
                          <Minus className="h-3 w-3" />
                        </span>
                        <span className="w-4 text-center text-[11px] font-bold">
                          {c.qty}
                        </span>
                        <span className="flex h-5 w-5 items-center justify-center rounded bg-muted text-foreground">
                          <Plus className="h-3 w-3" />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mx-2 rounded-lg border border-border/50 bg-muted/30 p-2">
                  <div className="flex justify-between text-[10px] text-muted-foreground">
                    <span>المجموع:</span>
                    <span>200.00</span>
                  </div>
                  <div className="mt-0.5 flex justify-between text-[10px] text-muted-foreground">
                    <span>الضريبة (14%):</span>
                    <span>+28.00</span>
                  </div>
                  <div className="mt-1 flex justify-between border-t border-border/50 pt-1 text-sm font-bold text-foreground">
                    <span>الإجمالي:</span>
                    <span className="text-primary">228.00</span>
                  </div>
                </div>
                <div className="p-2">
                  <div className="w-full rounded-lg bg-primary py-2 text-center text-sm font-bold text-primary-foreground">
                    تأكيد الدفع
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* floating receipt chip */}
          <div className="absolute -inset-s-4 top-10 hidden rotate-[-4deg] rounded-xl border border-border bg-card p-3 shadow-xl lg:block animate-in fade-in">
            <p className="text-[10px] font-bold text-muted-foreground">
              فاتورة حرارية
            </p>
            <p className="mt-1 text-xs font-extrabold">#45 · لاتيه + كريب</p>
            <p className="text-[11px] font-bold text-primary">إجمالي 228 ج.م</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
