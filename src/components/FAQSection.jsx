'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Container, SectionHeading } from './ui'
import { cn } from './cn'

const FAQ = [
  {
    q: 'هل يعمل النظام فعلاً بدون إنترنت؟',
    a: 'نعم، يعمل النظام 100% أوفلاين على جهازك المحلي بقاعدة بيانات SQLite فائقة السرعة. لا يعتمد على السحابة إطلاقاً، لذا لا يتوقف حتى عند انقطاع الإنترنت بالكامل.',
  },
  {
    q: 'هل هناك اشتراكات شهرية أو رسوم متكررة؟',
    a: 'لا. تمتلك النظام بشراء الباقة مرة واحدة مدى الحياة — بدون أي اشتراكات شهرية أو سنوية أو رسوم خفية.',
  },
  {
    q: 'ما الفرق بين باقة Standard و Premium؟',
    a: 'باقة Standard تغطي الكاشير والطاولات والطباعة والورديات والتقارير. أما باقة Premium تضيف إدارة المخزون بالوصفات والريسبت، والموردين وأوامر الشراء، وتتبع التوالف، والتوجيه المتعدد للطابعات حسب الأقسام.',
  },
  {
    q: 'هل يمكن نقل النظام بين الأجهزة؟',
    a: 'نعم، يمكنك تصدير قاعدة البيانات واستيرادها على أي جهاز آخر بسهولة، مع نظام نسخ احتياطي تلقائي يحتفظ بآخر 30 نسخة.',
  },
  {
    q: 'ما الطابعات المتوافقة؟',
    a: 'يدعم النظام الطابعات الحرارية 80مم و 58مم عبر بروتوكولات ESC/POS شبكية (TCP/IP) أو مشاركة ويندوز (SMB)، إضافة إلى وضع معاينة وتصدير PDF.',
  },
  {
    q: 'هل واجهة النظام مناسبة للشاشات اللمسية؟',
    a: 'نعم، صُممت الواجهة بالكامل لغرض العمل السريع على الشاشات اللمسية بأزرار كبيرة واضحة وخط Cairo العربي، مع دعم كامل للغة العربية.',
  },
]

export function FAQSection() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="py-20">
      <Container className="max-w-3xl">
        <SectionHeading eyebrow="الأسئلة الشائعة" title="كل ما تريد معرفته" />
        <div className="flex flex-col gap-3">
          {FAQ.map((item, i) => (
            <div
              key={item.q}
              className="overflow-hidden rounded-xl border border-border bg-card shadow-sm"
            >
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-start font-bold"
              >
                <span>{item.q}</span>
                <ChevronDown
                  className={cn('h-5 w-5 shrink-0 text-primary transition-transform', open === i && 'rotate-180')}
                />
              </button>
              {open === i && (
                <p className="border-t border-border bg-muted/40 px-5 py-4 text-sm leading-relaxed text-muted-foreground animate-in fade-in">
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
