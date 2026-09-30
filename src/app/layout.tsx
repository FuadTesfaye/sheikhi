import type { Metadata, Viewport } from "next";
import { Manrope, Inter, Noto_Naskh_Arabic, Noto_Sans_Ethiopic } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/data";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const notoNaskhArabic = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const notoSansEthiopic = Noto_Sans_Ethiopic({
  subsets: ["ethiopic"],
  variable: "--font-amharic",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#17352B",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://shaikhmohamedhamdurasho.pro.et"),
  title: {
    default: "Sheikh Mohamed Hamdu Rasho | فضيلة الشيخ محمد حمدو | ሼኽ ሙሐመድ ሐምዱ",
    template: "%s | Sheikh Mohamed Hamdu Rasho",
  },
  description:
    "Official website of Sheikh Mohamed Hamdu Rasho (فضيلة الشيخ محمد حمدو رشو / ሼኽ ሙሐመድ ሐምዱ) — Islamic scholar, Imam and Khateeb of Masjid Abu Bakr in Addis Ababa, and Ph.D. candidate in Usul al-Fiqh. Explore his educational journey, verified certificates, recorded television lectures, and Islamic guidance.",
  keywords: [
    "Sheikh Mohamed Hamdu Rasho",
    "Sheikh Muhammed Hamdu",
    "الشيخ محمد حمدو رشو",
    "ሼኽ ሙሐመድ ሐምዱ ረሾ",
    "ሸይኽ ሙሐመድ ሐምዱ",
    "Ustaz Mohamed Hamdu",
    "Masjid Abu Bakr Addis Ababa",
    "Islamic Scholar Ethiopia",
    "Usul al-Fiqh",
    "Islamic Jurisprudence",
    "Africa TV Sawa'id al-Ikha",
    "ኢስላማዊ ትምህርቶች",
    "ፈትዋ እና ሸሪዓ"
  ],
  authors: [{ name: "Sheikh Mohamed Hamdu Rasho" }],
  creator: "Sheikh Mohamed Hamdu Rasho",
  publisher: "Sheikh Mohamed Hamdu Official Archive",
  alternates: {
    canonical: "https://shaikhmohamedhamdurasho.pro.et",
    languages: {
      en: "https://shaikhmohamedhamdurasho.pro.et?lang=en",
      ar: "https://shaikhmohamedhamdurasho.pro.et?lang=ar",
      am: "https://shaikhmohamedhamdurasho.pro.et?lang=am",
    },
  },
  openGraph: {
    title: "Sheikh Mohamed Hamdu Rasho | Official Scholar Website",
    description:
      "Official website and digital archive of Sheikh Mohamed Hamdu Rasho (فضيلة الشيخ محمد حمدو رشو) — Imam, Khateeb, and Islamic Jurisprudence Scholar.",
    url: "https://shaikhmohamedhamdurasho.pro.et",
    siteName: "Sheikh Mohamed Hamdu Rasho Official",
    locale: "en_US",
    alternateLocale: ["ar_SA", "am_ET"],
    type: "profile",
    images: [
      {
        url: "/portrait.jpg",
        width: 800,
        height: 1024,
        alt: "Sheikh Mohamed Hamdu Rasho - Islamic Scholar & Khateeb",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sheikh Mohamed Hamdu Rasho | Islamic Scholar & Teacher",
    description:
      "Official digital archive of Sheikh Mohamed Hamdu Rasho — Imam, Khateeb of Masjid Abu Bakr, and Doctoral Candidate in Usul al-Fiqh.",
    images: ["/portrait.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} ${notoNaskhArabic.variable} ${notoSansEthiopic.variable}`}
    >
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen bg-ivory text-primary antialiased">
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
