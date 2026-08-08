import { MessageCircle } from "lucide-react";
import { Container } from "./ui";

export function Footer() {
  const whatsapp = "https://wa.me/201123593773";

  return (
    <footer className="border-t border-border bg-muted/40">
      <Container className="py-12">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <div className="mb-3 flex items-center gap-2.5">
              <img
                src="/icon.png"
                alt="مقهى"
                className="h-10 w-10 rounded-xl object-contain"
              />
              <span className="text-lg font-extrabold">
                مقهى <span className="text-primary">| Maqhaa</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              نظام كاشير بسيط وإدارة مقهى يعمل بدون إنترنت ولا تحتاج اشتراكات.
            </p>
          </div>

          <div>
            <h4 className="mb-3 font-extrabold">روابط</h4>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li>
                <a href="#what" className="hover:text-foreground">
                  عن المقهي
                </a>
              </li>
              <li>
                <a href="#demo" className="hover:text-foreground">
                  تجربة
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-foreground">
                  المميزات
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-foreground">
                  الخطط
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-extrabold">اتصل بنا</h4>
            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground shadow-sm shadow-primary/20 hover:bg-primary/90"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>© 2026 مقهى | Maqhaa - جميع الحقوق محفوظة.</p>
          <p>
            <a
              href="https://abdelrahmanashraf.dev"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-foreground hover:text-primary"
            >
              Abdelrahman Ashraf
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
