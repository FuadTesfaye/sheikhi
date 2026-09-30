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
    default: "فضيلة الشيخ محمد حمدو رشو | عالم وباحث ومدرس إسلامي",
    template: "%s | فضيلة الشيخ محمد حمدو رشو",
  },
  description:
    "الموقع الرسمي لفضيلة الشيخ محمد حمدو رشو — عالم وباحث ومدرس إسلامي، رئيس أئمة أديس أبابا ومدينة شغر، ورئيس مجلس علماء محافظة لمي كرى، وعضو المجلس الأعلى للشؤون الإسلامية بأديس أبابا، وإمام وخطيب مسجد أبي بكر الصديق، وباحث الدكتوراه في أصول الفقه.",
  keywords: [
    "الشيخ محمد حمدو رشو",
    "فضيلة الشيخ محمد حمدو",
    "محمد حمدو رشو",
    "رئيس أئمة أديس أبابا وشغر",
    "رئيس مجلس علماء لمي كرى",
    "عضو المجلس الأعلى للشؤون الإسلامية",
    "إمام وخطيب مسجد أبي بكر الصديق",
    "عالم إسلامي إثيوبيا",
    "أصول الفقه",
    "قناة إفريقيا الفضائية",
    "سواعد الإخاء",
    "Sheikh Mohamed Hamdu Rasho",
    "Sheikh Muhammed Hamdu",
    "ሼኽ ሙሐመድ ሐምዱ ረሾ",
    "ሸይኽ ሙሐመድ ሐምዱ",
    "የአዲስ አበባ እና የሸገር ኢማሞች ሰብሳቢ",
    "የለሚኩራ ክ/ከ ዑለማ ምክር ቤት ሰብሳቢ",
    "ኢስላማዊ ትምህርቶች",
    "ፈትዋ እና ሸሪዓ"
  ],
  authors: [{ name: "فضيلة الشيخ محمد حمدو رشو", url: "https://shaikhmohamedhamdurasho.pro.et" }],
  creator: "الشيخ محمد حمدو رشو",
  publisher: "المكتب الرسمي لفضيلة الشيخ محمد حمدو رشو",
  alternates: {
    canonical: "https://shaikhmohamedhamdurasho.pro.et",
    languages: {
      ar: "https://shaikhmohamedhamdurasho.pro.et?lang=ar",
      en: "https://shaikhmohamedhamdurasho.pro.et?lang=en",
      am: "https://shaikhmohamedhamdurasho.pro.et?lang=am",
    },
  },
  openGraph: {
    title: "فضيلة الشيخ محمد حمدو رشو | الموقع الرسمي والمنصة العلمية",
    description:
      "الموقع الرسمي والمنصة المعتمدة لفضيلة الشيخ محمد حمدو رشو — رئيس أئمة أديس أبابا ومدينة شغر، ورئيس مجلس علماء محافظة لمي كرى، وعضو المجلس الأعلى للشؤون الإسلامية، وإمام وخطيب مسجد أبي بكر الصديق. السيرة العلمية والشهادات والمحاضرات المرئية.",
    url: "https://shaikhmohamedhamdurasho.pro.et",
    siteName: "فضيلة الشيخ محمد حمدو رشو",
    locale: "ar_SA",
    alternateLocale: ["en_US", "am_ET"],
    type: "profile",
    images: [
      {
        url: "https://shaikhmohamedhamdurasho.pro.et/portrait.jpg",
        secureUrl: "https://shaikhmohamedhamdurasho.pro.et/portrait.jpg",
        width: 900,
        height: 1200,
        type: "image/jpeg",
        alt: "فضيلة الشيخ محمد حمدو رشو - عالم إسلامي وخطيب",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "فضيلة الشيخ محمد حمدو رشو | عالم وباحث ومدرس إسلامي",
    description:
      "الموقع الرسمي والمنصة الرقمية لفضيلة الشيخ محمد حمدو رشو — رئيس أئمة أديس أبابا وشغر، ورئيس مجلس علماء لمي كرى، وإمام وخطيب مسجد أبي بكر الصديق، وباحث الدكتوراه في أصول الفقه.",
    images: ["https://shaikhmohamedhamdurasho.pro.et/portrait.jpg"],
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
      lang="ar"
      dir="rtl"
      className={`${manrope.variable} ${inter.variable} ${notoNaskhArabic.variable} ${notoSansEthiopic.variable}`}
    >
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen bg-ivory text-primary antialiased font-arabic">
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
