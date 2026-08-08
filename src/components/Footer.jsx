import { MessageCircle } from "lucide-react";
import { Container } from "./ui";

const whatsapp = "https://wa.me/201123593773";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/20">
      <Container>
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <a
              href="#"
              className="inline-block text-xl font-black tracking-tight"
            >
              مقهى <span className="text-primary">| Maqhaa</span>
            </a>

            <p className="mt-3 max-w-sm text-sm leading-7 text-muted-foreground">
              نظام كاشير بسيط وإدارة مقهى يعمل بدون إنترنت، بدون تعقيد أو
              اشتراكات شهرية.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 font-extrabold">روابط سريعة</h4>

            <nav className="flex flex-col items-start gap-2.5 text-sm text-muted-foreground">
              <a
                href="#what"
                className="transition-colors hover:text-foreground"
              >
                عن مقهى
              </a>
              <a
                href="#demo"
                className="transition-colors hover:text-foreground"
              >
                تجربة النظام
              </a>
              <a
                href="#features"
                className="transition-colors hover:text-foreground"
              >
                المميزات
              </a>
              <a
                href="#pricing"
                className="transition-colors hover:text-foreground"
              >
                الأسعار
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-extrabold">تواصل معنا</h4>

            <p className="mb-4 text-sm leading-6 text-muted-foreground">
              عندك سؤال أو تحتاج مساعدة؟ تواصل معنا مباشرة.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md active:scale-[0.98]"
            >
              <MessageCircle className="h-4 w-4" />
              تواصل عبر WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-3 border-t border-border py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 مقهى | Maqhaa. جميع الحقوق محفوظة.</p>

          <a
            href="https://abdelrahmanashraf.dev"
            target="_blank"
            rel="noreferrer"
            className="font-bold text-foreground transition-colors hover:text-primary"
          >
            Abdelrahman Ashraf
          </a>
        </div>
      </Container>
    </footer>
  );
}
