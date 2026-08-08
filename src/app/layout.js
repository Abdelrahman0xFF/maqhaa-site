import "@fontsource/cairo/400.css";
import "@fontsource/cairo/600.css";
import "@fontsource/cairo/700.css";
import "@fontsource/cairo/800.css";
import "./globals.css";

export const metadata = {
  title: {
    default: "Maqhaa | نظام كاشير وإدارة المقاهي بدون اشتراك",
    template: "%s | مقهي",
  },
  description:
    "Maqhaa هو نظام كاشير وإدارة مقاهي سريع وبسيط يعمل دون إنترنت. أدر المبيعات والطاولات والمخزون والورديات والتقارير بسهولة.",
  openGraph: {
    title: "Maqhaa - نظام كاشير وإدارة المقاهي",
    description: "نظام كاشير وإدارة مقاهي بدون اشتراكات، يعمل بدون إنترنت.",
    url: "https://maqhaa.abdelrahmanashraf.dev",
    siteName: "Maqhaa",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "ar_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maqhaa - نظام كاشير وإدارة المقاهي",
    description:
      "نظام كاشير وإدارة مقاهي بدون اشتراكات، يدعم العمل بدون إنترنت.",
    images: ["/og-image.png"],
  },
  icons: { icon: "/icon.png" },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://maqhaa.abdelrahmanashraf.dev" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
