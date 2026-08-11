import { Container, SectionHeading } from "./ui";
import {
  WifiOff,
  BadgeCheck,
  Printer,
  Boxes,
  ShieldCheck,
  Languages,
} from "lucide-react";

const KSP = [
  {
    icon: WifiOff,
    title: "بدون إنترنت",
    desc: "يعمل بالكامل على جهازك دون انتظار.",
  },
  {
    icon: BadgeCheck,
    title: "بدون اشتراك شهري",
    desc: "امتلك النظام مرة واحدة ولا تدفع شهرياً.",
  },
  {
    icon: Printer,
    title: "طباعة فواتير",
    desc: "توجيه الطلبات حسب الفئة.",
  },
  {
    icon: Boxes,
    title: "مخزون متعدد",
    desc: "خصم تلقائي وتنبيهات نفاد المخزون.",
  },
  {
    icon: ShieldCheck,
    title: "حماية من السرقة",
    desc: "تسجيل دخول PIN ومتابعة العمليات.",
  },
  {
    icon: Languages,
    title: "واجهة عربية",
    desc: "تصميم سهل ومناسب للمستخدمين العرب.",
  },
];

export function WhatIsMaqhaa() {
  return (
    <section id="what" aria-label="ما هو مقهى" className="bg-muted/40 py-20">
      <Container>
        <SectionHeading
          title="نظامك المتكامل لادارة كافيهك ومطعمك"
          description="مقهى هو نظام كاشير وادارة كافيهات ومطاعم حديث، ومتكامل - مبنٍ بأحدث تقنيات الواجهات ليدير كل عملياتك: من تسجيل الطلبات وادارة الطاولات، إلى طباعة الفواتير وادارة المخزون والتقارير."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {KSP.map((k) => {
            const Icon = k.icon;
            return (
              <div key={k.title} className="flex flex-col gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="mb-1 text-lg font-extrabold text-foreground">
                    {k.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {k.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
