"use client";

import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { useOrder } from "./OrderProvider";
import { Container } from "./ui";

const LINKS = [
  { href: "#what", label: "عن مقهى" },
  { href: "#demo", label: "تجربة" },
  { href: "#features", label: "المميزات" },
  { href: "#pricing", label: "الخطط" },
  { href: "#faq", label: "الأسئلة" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { openOrder } = useOrder();
  const whatsapp = "https://wa.me/201123593773";

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/icon.png"
            alt="مقهى - نظام كاشير وإدارة المقاهي"
            className="h-10 w-10 rounded-xl object-contain"
          />
          <span className="text-lg font-extrabold tracking-tight">
            مقهى <span className="text-primary">| Maqhaa</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3.5 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-3.5 py-2.5 text-sm font-bold text-foreground hover:bg-accent"
          >
            <MessageCircle className="h-4 w-4 text-primary" />
            تواصل معنا
          </a>
          <button
            onClick={() => openOrder()}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground shadow-sm shadow-primary/20 hover:bg-primary/90"
          >
            اطلب نسختك
          </button>
        </div>

        <button
          className="rounded-lg p-2 text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="القائمة"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-border bg-background px-4 pb-4 md:hidden animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-1 py-3">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-semibold text-foreground/80 hover:bg-accent hover:text-accent-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <button
            onClick={() => {
              setOpen(false);
              openOrder();
            }}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-bold text-primary-foreground"
          >
            اطلب نسختك الآن
          </button>
        </div>
      )}
    </header>
  );
}
