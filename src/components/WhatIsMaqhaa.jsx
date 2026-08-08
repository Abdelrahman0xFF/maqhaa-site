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
    title: "أوفلاين 100%",
    desc: "يعمل كلياً على جهازك بقاعدة بيانات فائقة السرعة - بدون انتظار ولا توقف.",
  },
  {
    icon: BadgeCheck,
    title: "بدون اشتراكات شهرية",
    desc: "ملكية كاملة للنظام مدى الحياة. ادفع مرة واحدة وامتلك النظام للأبد بدون أي رسوم متكررة.",
  },
  {
    icon: Printer,
    title: "طباعة حرارية ذكية",
    desc: "توجيه الأصناف تلقائياً: المشروبات للباريستا، الوجبات للمطبخ، والفاتورة النهائية للكاشير.",
  },
  {
    icon: Boxes,
    title: "مخزون ذكي متعدد الوحدات",
    desc: "خصم أوتوماتيكي بالجرام والميلليلتر مع كل كوب يُباع، مع تنبيهات نفاد المواد وتفعيل تعطيل الأصناف.",
  },
  {
    icon: ShieldCheck,
    title: "رقابة ضد السرقة والهدر",
    desc: "تسجيل دخول بـ PIN، سجل كامل لكل عملية، وتقفيل وردية مع تتبع العجز والزيادة.",
  },
  {
    icon: Languages,
    title: "واجهة عربية ساحرة",
    desc: "صُممت واجهة مقهى لتكون عربية بالكامل، لتجربة سلسة وسهلة لجميع المستخدمين.",
  },
];

export function WhatIsMaqhaa() {
  return (
    <section id="what" className="bg-muted/40 py-20">
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
