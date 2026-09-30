import type { Metadata } from "next";
import { Manrope, Inter, Noto_Naskh_Arabic } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

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

export const metadata: Metadata = {
  title: "Sheikh Muhammed Hamdu | Islamic Scholar & Teacher",
  description:
    "Official website of Sheikh Muhammed Hamdu Rasho — Islamic scholar, teacher, Imam and Khateeb of Masjid Abu Bakr. Explore his educational journey, qualifications, lectures, and more.",
  keywords: [
    "Sheikh Muhammed Hamdu",
    "Mohamed Hamdu Rasho",
    "Islamic Scholar",
    "Islamic Teacher",
    "Imam",
    "Khateeb",
    "Masjid Abu Bakr",
    "Addis Ababa",
    "Fiqh",
    "Hadith",
    "Quran",
  ],
  openGraph: {
    title: "Sheikh Muhammed Hamdu | Islamic Scholar & Teacher",
    description:
      "Official website of Sheikh Muhammed Hamdu Rasho — Islamic scholar, teacher, and Imam dedicated to teaching and serving the Muslim community.",
    type: "website",
    locale: "en_US",
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
      className={`${manrope.variable} ${inter.variable} ${notoNaskhArabic.variable}`}
    >
      <body className="min-h-screen bg-ivory text-primary antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
