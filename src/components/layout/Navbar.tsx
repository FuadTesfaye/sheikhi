"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { YoutubeIcon, TikTokIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { siteConfig } from "@/lib/data";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, language } = useLanguage();

  const navLinks = [
    { href: "/#about", label: t.nav.about },
    { href: "/#journey", label: t.nav.journey },
    { href: "/#qualifications", label: t.nav.qualifications },
    { href: "/#teaching", label: t.nav.teaching },
    { href: "/#experience", label: t.nav.experience },
    { href: "/#lectures", label: t.nav.lectures },
    { href: "/lectures", label: t.nav.archive },
    { href: "/#reminders", label: t.nav.reminders },
    { href: "/#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ivory/95 backdrop-blur-sm border-b border-border shadow-xs"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col">
            <span className="font-arabic text-sm text-green-deep leading-tight font-semibold">
              الشيخ محمد حمدو رشو
            </span>
            <span className="text-xs sm:text-sm font-heading font-bold text-primary leading-tight">
              {language === "am" ? "ሼኽ ሙሐመድ ሐምዱ ረሾ" : "Sheikh Mohamed Hamdu Rasho"}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-2.5 py-1.5 text-xs lg:text-sm text-secondary hover:text-green-deep transition-colors rounded-sm hover:bg-green-deep/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Language Switcher + Social + Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-4">
            <LanguageSwitcher className="hidden sm:flex" />

            <div className="hidden sm:flex items-center gap-2 border-s border-border ps-3">
              <a
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-emerald-600 transition-colors p-1"
                title="WhatsApp Group"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-600" />
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-red-600 transition-colors p-1"
                title="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors p-1"
                title="TikTok"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden p-2 text-primary hover:text-green-deep transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="xl:hidden border-t border-border bg-ivory/95 backdrop-blur-sm">
            <div className="py-4 space-y-1">
              <div className="px-4 pb-3 mb-2 border-b border-border flex items-center justify-between">
                <span className="text-xs text-secondary font-medium">Language / ቋንቋ / اللغة:</span>
                <LanguageSwitcher />
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2.5 text-sm text-secondary hover:text-green-deep hover:bg-green-deep/5 rounded-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}

              <div className="flex flex-wrap gap-4 px-4 pt-3 border-t border-border mt-3">
                <a
                  href={siteConfig.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-emerald-600 transition-colors text-xs flex items-center gap-2 font-medium"
                >
                  <WhatsAppIcon className="w-4 h-4 text-emerald-600" /> WhatsApp
                </a>
                <a
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-red-600 transition-colors text-xs flex items-center gap-2 font-medium"
                >
                  <YoutubeIcon className="w-4 h-4 text-red-600" /> YouTube
                </a>
                <a
                  href={siteConfig.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-primary transition-colors text-xs flex items-center gap-2 font-medium"
                >
                  <TikTokIcon className="w-4 h-4" /> TikTok
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
