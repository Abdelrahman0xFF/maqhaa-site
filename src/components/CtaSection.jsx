"use client";

import { ArrowLeft } from "lucide-react";
import { useOrder } from "./OrderProvider";
import { Container } from "./ui";

export function CtaSection() {
  const { openOrder } = useOrder();

  return (
    <section className="py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-foreground px-6 py-14 text-center text-white sm:px-12">
          <div className="pointer-events-none absolute -top-24 inset-s-1/4 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -inset-e-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              ابدأ إدارة كافيهك باحترافية اليوم
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/80">
              امتلك نظام مقهى أوفلاين مدى الحياة - بدون اشتراكات، مع دعم كامل
              للطباعة والمخزون والتقارير. اختر باقتك الآن.
            </p>
            <button
              onClick={() => openOrder()}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-extrabold text-primary-foreground shadow-lg shadow-primary/30 hover:bg-primary/90"
            >
              اطلب باقتك الآن
              <ArrowLeft className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
