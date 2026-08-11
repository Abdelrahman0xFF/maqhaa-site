import Head from "next/head";
import { OrderProvider } from "../components/OrderProvider";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { WhatIsMaqhaa } from "../components/WhatIsMaqhaa";
import { InteractiveDemo } from "../components/InteractiveDemo";
import { FeaturesGrid } from "../components/FeaturesGrid";
import { Pricing } from "../components/Pricing";
import { HardwareSection } from "../components/HardwareSection";
import { FAQSection } from "../components/FAQSection";
import { CtaSection } from "../components/CtaSection";
import { Footer } from "../components/Footer";

export const metadata = {
  title: "مقهي - كاشير وادارة الكافيه",
  description:
    "احصل على نظام كافيه كامل بلا اشتراكات، يدعم الطباعة وادارة المخزون، مع باقات مرنة تناسب جميع أنواع المقاهي.",
  openGraph: {
    title: "مقهي - ادارة الكافيه بسهولة",
    description:
      "نظام كافيه متكامل لادارة المبيعات، الطاولات، المخزون، وتوليد الفواتير، بدون اشتراكات.",
    url: "https://maqhaa.abdelrahmanashraf.dev",
    siteName: "مقهي",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "ar_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "مقهي - نظام ادارة الكافيه",
    description: "نظام كافيه شامل بدون اشتراكات، يدعم الطباعة وادارة المخزون.",
    images: ["/og-image.png"],
  },
};

import { ScrollReveal } from "../components/ScrollReveal";

export default function Home() {
  return (
    <OrderProvider>
      <Head>
        <metaادارةادارة
          name="keywords"
          content="cashier, كاشير, point of sale, POS, مقهى, كافيه, إدارة الكافيه, إدارة المخزون, طباعة الفواتير, نظام كاشير"
        />
        <metaادارةادارة
          name="description"
          content="نظام شامل لإدارة الكافيه والكاشير بدون اشتراكات، يدعم الطباعة وإدارة المخزون والطلبات."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "مقهي",
              url: "https://maqhaa.abdelrahmanashraf.dev",
              description:
                "نظام كاشير وإدارة الكافيه بدون اشتراكات، يدعم الطباعة وإدارة المخزون والطلبات.",
              keywords:
                "cashier, كاشير, point of sale, POS, مقهى, كافيه, إدارة الكافيه, إدارة المخزون, طباعة الفواتير, نظام كاشير",
            }),
          }}
        />
      </Head>
      <Navbar />
      <main>
        <Hero />
        <ScrollReveal animation="fade-up">
          <WhatIsMaqhaa />
        </ScrollReveal>
        <ScrollReveal animation="fade-up">
          <InteractiveDemo />
        </ScrollReveal>
        <ScrollReveal animation="fade-up">
          <FeaturesGrid />
        </ScrollReveal>
        <ScrollReveal animation="fade-up">
          <Pricing />
        </ScrollReveal>
        <ScrollReveal animation="fade-up">
          <HardwareSection />
        </ScrollReveal>
        <ScrollReveal animation="fade-up">
          <FAQSection />
        </ScrollReveal>
        <ScrollReveal animation="fade-up">
          <CtaSection />
        </ScrollReveal>
      </main>
      <Footer />
    </OrderProvider>
  );
}
