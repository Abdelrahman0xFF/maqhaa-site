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
          eyebrow="ما هو مقهى؟"
          title="نظامك المتكامل لإدارة كافيهك ومطعمك"
          description="مقهى هو نظام كاشير وإدارة كافيهات ومطاعم حديث، ومتكامل - مبنٍ بأحدث تقنيات الواجهات ليدير كل عملياتك: من تسجيل الطلبات وإدارة الطاولات، إلى طباعة الفواتير وإدارة المخزون والتقارير."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {KSP.map((k) => {
            const Icon = k.icon;
            return (
              <div
                key={k.title}
                className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <span className="mb-4 inline-flex rounded-xl border border-primary/20 bg-primary/10 p-3">
                  <Icon className="h-6 w-6 text-primary" />
                </span>
                <h3 className="mb-2 text-lg font-extrabold">{k.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {k.desc}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
