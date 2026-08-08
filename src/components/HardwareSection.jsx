import { Container, SectionHeading } from "./ui";
import {
  Monitor,
  Printer,
  ScanBarcode,
  Banknote,
  MousePointerClick,
} from "lucide-react";

const OS = ["Windows"];

const HARDWARE = [
  { icon: Printer, title: "طابعات حرارية", desc: "طباعة فواتير 80 مم." },
  { icon: ScanBarcode, title: "قارئات الباركود", desc: "مسح باركود سريع." },
  { icon: Banknote, title: "نظام ورديات", desc: "متابعة وردياتك بسهولة." },
  {
    icon: MousePointerClick,
    title: "شاشات لمس",
    desc: "تصميم سهل للمستخدمين العرب.",
  },
];

export function HardwareSection() {
  return (
    <section className="bg-muted/40 py-20">
      <Container>
        <SectionHeading
          eyebrow="التوافق"
          title="يعمل بدون إنترنت على أجهزتك الحالية"
          description="بدون اشتراكات أو خوادم — ثبّت النظام على أي جهاز الآن."
        />

        <div className="mb-8 flex justify-center gap-3">
          {OS.map((os) => (
            <span
              key={os}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-bold shadow-sm"
            >
              <Monitor className="h-4 w-4 text-primary" />
              {os}
            </span>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {HARDWARE.map((h) => {
            const Icon = h.icon;
            return (
              <div
                key={h.title}
                className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm"
              >
                <span className="mx-auto mb-3 inline-flex rounded-xl border border-primary/20 bg-primary/10 p-3">
                  <Icon className="h-6 w-6 text-primary" />
                </span>
                <h3 className="mb-1 text-base font-extrabold">{h.title}</h3>
                <p className="text-sm text-muted-foreground">{h.desc}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
