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
    title: "ادارة المخزون",
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
    <section
      id="features"
      aria-label="ميزات النظام"
      className="bg-muted/40 py-20"
    >
      <Container>
        <SectionHeading
          title="نظام ادارة شامل"
          description="برنامج متكامل للمقاهي والمطاعم، يسهل عليك ادارة المخزون، الطباعة، والتقارير بدون اشتراكات شهرية."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col justify-between rounded-2xl bg-primary/10 p-8 sm:col-span-2 lg:row-span-2">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Gauge className="h-6 w-6" />
            </div>
            <div>
              <h3 className="mb-2 text-2xl font-extrabold text-foreground">
                أداء سريع جداً
              </h3>
              <p className="text-base leading-relaxed text-foreground/80">
                قاعدة بيانات محلية سريعة ومستقرة، يعمل النظام بكامل طاقته دون
                الحاجة للاتصال بالإنترنت، مما يضمن استمرارية العمل بدون توقف.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6">
            <Boxes className="mb-4 h-8 w-8 text-primary" />
            <div>
              <h3 className="mb-2 text-lg font-bold">ادارة المخزون</h3>
              <p className="text-sm text-muted-foreground">
                تحديث تلقائي للمخزون عند كل عملية بيع مع تنبيهات عند النقص.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6">
            <Network className="mb-4 h-8 w-8 text-primary" />
            <div>
              <h3 className="mb-2 text-lg font-bold">طابعات متعددة</h3>
              <p className="text-sm text-muted-foreground">
                توجيه الفواتير للمطبخ، الباريستا، والكاشير في نفس اللحظة.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6 rounded-2xl border border-border bg-card p-6 sm:col-span-2">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <ChartColumn className="h-6 w-6" />
            </div>
            <div>
              <h3 className="mb-1 text-lg font-bold">تقارير وتحليلات متقدمة</h3>
              <p className="text-sm text-muted-foreground">
                تابع مبيعاتك وأداء الموظفين لحظة بلحظة مع تقارير تفصيلية عن
                الورديات والضرائب.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6">
            <ShieldCheck className="mb-4 h-8 w-8 text-primary" />
            <div>
              <h3 className="mb-2 text-lg font-bold">أمان وحماية</h3>
              <p className="text-sm text-muted-foreground">
                نظام صلاحيات وسجل حركات متكامل لكل مستخدم.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6">
            <DatabaseBackup className="mb-4 h-8 w-8 text-primary" />
            <div>
              <h3 className="mb-2 text-lg font-bold">نسخ احتياطي</h3>
              <p className="text-sm text-muted-foreground">
                حفظ بياناتك بشكل آلي وتلقائي لضمان عدم فقدانها.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
