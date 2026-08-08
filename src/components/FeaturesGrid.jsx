import { Container, SectionHeading } from "./ui";
import {
  Gauge,
  Boxes,
  Network,
  ShieldCheck,
  Coins,
  DatabaseBackup,
  Printer,
  ChartColumn,
} from "lucide-react";

const FEATURES = [
  {
    icon: Gauge,
    title: "أداء سريع",
    desc: "قاعدة بيانات محلية سريعة، لا تحتاج للإنترنت.",
  },
  {
    icon: Boxes,
    title: "إدارة المخزون",
    desc: "تحديث تلقائي للمخزون عند كل عملية بيع.",
  },
  {
    icon: Network,
    title: "دعم طابعات متعددة",
    desc: "طباعة الفواتير للمطبخ والكاشير مباشرة.",
  },
  {
    icon: ShieldCheck,
    title: "أمان عالي",
    desc: "نظام دخول بكلمة مرور مع سجل حركات كامل.",
  },
  {
    icon: Coins,
    title: "تعدد طرق الدفع",
    desc: "دعم النقد، الشبكة، والمحافظ الإلكترونية.",
  },
  {
    icon: DatabaseBackup,
    title: "نسخ احتياطي",
    desc: "نسخ تلقائي لبياناتك لضمان عدم ضياعها.",
  },
  {
    icon: Printer,
    title: "فواتير وتقارير",
    desc: "إصدار فواتير حرارية وتقرير الوردية بضغطة زر.",
  },
  {
    icon: ChartColumn,
    title: "تقارير وتحليلات",
    desc: "متابعة مبيعاتك وأداء موظفيك لحظة بلحظة.",
  },
];

export function FeaturesGrid() {
  return (
    <section id="features" className="bg-muted/40 py-20">
      <Container>
        <SectionHeading
          eyebrow="المميزات"
          title="نظام ادارة شامل"
          description="برنامج متكامل للمقاهي والمطاعم، يسهل عليك إدارة المخزون، الطباعة، والتقارير بدون اشتراكات شهرية."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <span className="mb-4 inline-flex rounded-xl border border-primary/20 bg-primary/10 p-3 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6 text-primary transition-colors group-hover:text-primary-foreground" />
                </span>
                <h3 className="mb-2 text-base font-extrabold">{f.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
