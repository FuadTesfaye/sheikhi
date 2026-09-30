"use client";

import Link from "next/link";
import { Mail, Phone, Send } from "lucide-react";
import { YoutubeIcon, TikTokIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { siteConfig } from "@/lib/data";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function Footer() {
  const { t, language } = useLanguage();

  const navLinks = [
    { href: "/#about", label: t.nav.about },
    { href: "/#journey", label: t.nav.journey },
    { href: "/#qualifications", label: t.nav.qualifications },
    { href: "/#teaching", label: t.nav.teaching },
    { href: "/#experience", label: t.nav.experience },
    { href: "/#lectures", label: t.nav.lectures },
    { href: "/lectures", label: t.nav.archive },
    { href: "/#contact", label: t.nav.contact },
  ];

  return (
    <footer className="bg-dark text-white/80 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Name & Bio */}
          <div>
            <p className="font-arabic text-xl text-white mb-1">فضيلة الشيخ محمد حمدو رشو</p>
            <p className="font-heading text-lg font-semibold text-white mb-3">
              {language === "am" 
                ? "ሼኽ ሙሐመድ ሐምዱ ረሾ" 
                : language === "ar"
                ? "عالم إسلامي • باحث في أصول الفقه"
                : "Sheikh Mohamed Hamdu Rasho"}
            </p>
            <p className="text-sm text-white/60 leading-relaxed mb-4">
              {t.footer.description}
            </p>
            <LanguageSwitcher variant="footer" />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-xs font-bold text-gold uppercase tracking-wider mb-4">
              {t.footer.quickLinks}
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs text-white/60 hover:text-gold transition-colors py-1"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-heading text-xs font-bold text-gold uppercase tracking-wider mb-4">
              {t.footer.connect}
            </h3>
            <div className="space-y-3">
              <a
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-white/60 hover:text-emerald-400 transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-400" /> WhatsApp Channel
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-white/60 hover:text-red-400 transition-colors"
              >
                <YoutubeIcon className="w-4 h-4 text-red-500" /> YouTube Channel
              </a>
              <a
                href={siteConfig.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-white/60 hover:text-white transition-colors"
              >
                <TikTokIcon className="w-4 h-4" /> TikTok (@shiekhmohammedhamdu)
              </a>
              <a
                href={siteConfig.social.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-white/60 hover:text-blue-400 transition-colors"
              >
                <Send className="w-4 h-4 text-blue-400" /> Telegram Channel
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-xs text-white/60 hover:text-gold transition-colors"
              >
                <Mail className="w-4 h-4 text-gold" /> {siteConfig.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>
            © {new Date().getFullYear()} Sheikh Mohamed Hamdu Rasho. {t.footer.rights}
          </p>
          <p className="font-arabic">
            {t.footer.arabicRights}
          </p>
        </div>
      </div>
    </footer>
  );
}
