"use client";

import Image from "next/image";
import { siteConfig } from "@/lib/data";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Send, CheckCircle2, Award, Building2 } from "lucide-react";
import { YoutubeIcon, TikTokIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function HeroSection() {
  const { t, language } = useLanguage();

  const displayName = language === "am" 
    ? t.hero.amharicName 
    : language === "ar" 
    ? t.hero.arabicName 
    : t.hero.englishName;

  return (
    <section id="hero" className="bg-ivory pt-24 lg:pt-36 pb-16 lg:pb-24 border-b border-border relative overflow-hidden">
      <div 
        className="absolute bottom-0 left-0 w-full h-4 border-t border-border opacity-50" 
        style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #E5E2D8 10px, #E5E2D8 20px)' }}
      ></div>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          <AnimatedSection className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-deep/10 text-green-deep text-xs font-semibold rounded-full mb-3">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{t.hero.officialTitle}</span>
            </div>

            <span className="font-arabic text-green-deep text-2xl lg:text-3xl mb-1.5 font-bold tracking-wide">
              {t.hero.arabicName}
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2 tracking-tight">
              {displayName}
            </h1>
            <p className="text-secondary font-heading text-sm sm:text-base font-medium mb-4">
              {t.hero.headline}
            </p>

            {/* Official Leadership Titles with Ulama Council Chairman in the Middle */}
            <div className="flex flex-col gap-2 mb-6 w-full max-w-xl text-start">
              {/* Top Row: Imams Chairman & Supreme Council */}
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex-1 inline-flex items-center gap-2 px-3 py-2 bg-green-deep/8 border border-green-deep/20 text-green-deep rounded-xs text-xs font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-deep shrink-0" />
                  <span>{t.hero.imamsLeaderTitle}</span>
                </div>
                <div className="flex-1 inline-flex items-center gap-2 px-3 py-2 bg-green-deep/8 border border-green-deep/20 text-green-deep rounded-xs text-xs font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-deep shrink-0" />
                  <span>{t.hero.supremeCouncilTitle}</span>
                </div>
              </div>

              {/* CENTER / MIDDLE: Lemi Kura Sub-City Ulama Council Chairman */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-gold/15 border-2 border-gold/40 text-primary rounded-xs text-xs sm:text-sm font-bold shadow-xs">
                <Award className="w-4 h-4 text-gold shrink-0" />
                <span className="text-green-deep font-bold tracking-tight">{t.hero.ulamaChairmanTitle}</span>
              </div>

              {/* Bottom: Lemi Kura Woreda 05 Majlis Vice Chairman */}
              <div className="inline-flex items-center gap-2 px-3 py-2 bg-green-deep/8 border border-green-deep/20 text-green-deep rounded-xs text-xs font-semibold">
                <Building2 className="w-3.5 h-3.5 text-green-deep shrink-0" />
                <span>{t.hero.woredaViceChairTitle}</span>
              </div>
            </div>

            <p className="text-secondary font-body mb-8 max-w-xl leading-relaxed text-sm sm:text-base">
              {t.hero.shortBio}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-8 w-full sm:w-auto">
              <a 
                href="#lectures" 
                className="w-full sm:w-auto text-center px-8 py-3.5 bg-green-deep text-white font-medium hover:bg-green-light transition-all shadow-sm rounded-sm"
              >
                {t.hero.watchLectures}
              </a>
              <a 
                href="#about" 
                className="w-full sm:w-auto text-center px-8 py-3.5 border border-primary/20 text-primary font-medium hover:bg-primary/5 hover:border-primary transition-all rounded-sm"
              >
                {t.hero.learnAboutHim}
              </a>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 pt-2 border-t border-border/60 w-full justify-center lg:justify-start flex-wrap">
              <span className="text-xs uppercase tracking-wider text-secondary font-semibold">
                {t.hero.officialChannels}:
              </span>
              <a 
                href={siteConfig.social.whatsapp} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-secondary hover:text-emerald-600 transition-colors flex items-center gap-1.5 text-xs font-medium py-1 px-1.5"
                title="WhatsApp Group"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
              <a 
                href={siteConfig.social.youtube} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-secondary hover:text-red-600 transition-colors flex items-center gap-1.5 text-xs font-medium py-1 px-1.5"
                title="YouTube Channel"
              >
                <YoutubeIcon className="w-4 h-4 text-red-600" />
                <span>YouTube</span>
              </a>
              <a 
                href={siteConfig.social.tiktok} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-secondary hover:text-primary transition-colors flex items-center gap-1.5 text-xs font-medium py-1 px-1.5"
                title="TikTok Account"
              >
                <TikTokIcon className="w-4 h-4" />
                <span>TikTok</span>
              </a>
              <a 
                href={siteConfig.social.telegram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-secondary hover:text-blue-500 transition-colors flex items-center gap-1.5 text-xs font-medium py-1 px-1.5"
                title="Telegram Channel"
              >
                <Send className="w-3.5 h-3.5 text-blue-500" />
                <span>Telegram</span>
              </a>
            </div>
          </AnimatedSection>

          <div className="w-full max-w-[280px] sm:max-w-none sm:w-76 lg:w-84 shrink-0 mx-auto lg:mx-0 transition-opacity duration-300">
            <div className="relative p-2.5 sm:p-3 bg-card border border-border shadow-md rounded-sm">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-ivory-dark border border-border rounded-xs">
                <Image
                  src="/portrait.jpg"
                  alt={siteConfig.fullName}
                  fill
                  priority
                  unoptimized
                  className="object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 304px, 336px"
                />
              </div>
              <div className="pt-3 pb-1 text-center border-t border-border/50 mt-2">
                <p className="font-arabic text-sm text-green-deep font-semibold">فضيلة الشيخ محمد حمدو رشو</p>
                <p className="text-xs text-secondary mt-0.5 font-medium">{t.hero.locationSubtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
