import '@fontsource/cairo/400.css'
import '@fontsource/cairo/600.css'
import '@fontsource/cairo/700.css'
import '@fontsource/cairo/800.css'
import './globals.css'

export const metadata = {
  title: 'مقهى | Maqhaa POS — نظام كاشير أوفلاين للكافيهات والمطاعم',
  description:
    'نظام كاشير وإدارة كافيهات ومطاعم حديث وسريع يعمل 100% أوفلاين بدون اشتراكات شهرية. إدارة المبيعات والطاولات والمخزون والطباعة الحرارية.',
  icons: { icon: '/icon.png' },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  )
}
