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
    title: "سرعة وأداء فائق",
    desc: "قاعدة بيانات محلية فائقة السرعة (WAL mode) بدون انتظار سحابة — كل عملية لحظية.",
  },
  {
    icon: Boxes,
    title: "مخزون مربوط بالوصفات",
    desc: "اربط المنيو بالخامات واخصم الجرامات والميلليلترات تلقائياً مع كل صفقة وكل بيع.",
  },
  {
    icon: Network,
    title: "توجيه طابعات متعدد",
    desc: "المشروبات للباريستا، الوجبات للمطبخ، والفاتورة للكاشير — طباعة حرارية ذكية بدون لغبطة.",
  },
  {
    icon: ShieldCheck,
    title: "حماية من السرقة والهدر",
    desc: "تسجيل دخول بـ PIN، سجل تدقيق كامل، وتقفيل وردية مع تتبع العجز والزيادة والتوالف.",
  },
  {
    icon: Coins,
    title: "تعدد العملات وطرق الدفع",
    desc: "نقدي، بطاقة، ومحافظ إلكترونية (فودافون كاش / انستاباي) مع دعم أسعار الصرف وإعادة الضبط.",
  },
  {
    icon: DatabaseBackup,
    title: "نسخ احتياطي تلقائي",
    desc: "نسخ محلية أوتوماتيكية يومية تحتفظ بآخر 30 نسخة واسترجاع بنقرة واحدة.",
  },
  {
    icon: Printer,
    title: "فواتير وورديات",
    desc: "طباعة فواتير حرارية 80مم وتقارير وردية جاهزة للمطابقة والاعتماد.",
  },
  {
    icon: ChartColumn,
    title: "تحليلات وتقارير حية",
    desc: "رسوم بيانية للمبيعات والمصروفات، الأكثر مبيعاً، وأداء الموظفين ومديونيات الموردين.",
  },
];

export function FeaturesGrid() {
  return (
    <section id="features" className="bg-muted/40 py-20">
      <Container>
        <SectionHeading
          eyebrow="المميزات"
          title="كل ما يحتاجه كافيهك في نظام واحد"
          description="من شاشة الكاشير السريعة إلى إدارة المخزون بالريسبت والموردين — بنية متكاملة أُعدّت لتلائم المقاهي والمطاعم بكل أحجامها."
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
