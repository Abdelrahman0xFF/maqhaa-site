"use client";

import { ArrowLeft } from "lucide-react";
import { useOrder } from "./OrderProvider";
import { Container } from "./ui";
import { cn } from "./cn";

const GLOWS = [
  "-top-24 -inset-s-10 bg-primary/10",
  "-bottom-50 -inset-e-10 bg-primary/10",
];

export function CtaSection() {
  const { openOrder } = useOrder();

  return (
    <section id="cta" aria-label="دعوة لاتخاذ إجراء" className="py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-muted/40 px-6 py-14 text-center shadow-sm sm:px-12">
          {GLOWS.map((position) => (
            <div
              key={position}
              className={cn(
                "pointer-events-none absolute h-72 w-72 rounded-full blur-3xl",
                position,
              )}
            />
          ))}

          <div className="relative">
            <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
              نظام شامل لإدارة الكافيه
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
              احصل على نظام الكافيه كامل بلا اشتراكات، يدعم الطباعة وإدارة
              المخزون. اختر الباقة الآن.
            </p>
            <button
              onClick={() => openOrder()}
              className={cn(
                "group/btn relative mt-8 inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl px-5 py-3.5 text-base font-extrabold transition-all duration-300",
                "bg-primary text-primary-foreground",
                "shadow-lg shadow-primary/25 hover:bg-primary/90",
                "active:scale-[0.98]",
              )}
            >
              احصل على الباقة الآن
              <ArrowLeft className="h-5 w-5 transition-transform duration-300 group-hover/btn:-translate-x-1" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
