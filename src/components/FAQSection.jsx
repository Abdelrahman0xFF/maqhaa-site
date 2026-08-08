'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Container, SectionHeading } from './ui'
import { cn } from './cn'

const FAQ = [
  {
    q: 'هل يعمل النظام دون إنترنت؟',
    a: 'نعم، يعمل بالكامل على جهازك دون الحاجة للإنترنت.',
  },
  {
    q: 'هل توجد اشتراكات شهرية؟',
    a: 'لا، تدفع مرة واحدة وتملك النظام للأبد.',
  },
  {
    q: 'ما الفرق بين الباقة الأساسية والـ Premium؟',
    a: 'الباقة الأساسية تشمل المبيعات والطاولات والفواتير. الباقة Premium تضيف إدارة المخزون، الموردين، وتوجيه الطابعات المتعدد.',
  },
  {
    q: 'هل يمكن نقل النظام إلى جهاز آخر؟',
    a: 'نعم، يمكنك تصدير البيانات واستيرادها على جهاز جديد.',
  },
  {
    q: 'ما أنواع الطابعات المدعومة؟',
    a: 'تدعم الطابعات الحرارية 80 مم و58 مم عبر الشبكة أو مشاركة ويندوز.',
  },
  {
    q: 'هل الواجهة مناسبة للشاشات اللمسية؟',
    a: 'نعم، التصميم كبير وواضح للعمل باللمس.',
  },
]

export function FAQSection() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" aria-label="الأسئلة الشائعة" className="py-20">
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
