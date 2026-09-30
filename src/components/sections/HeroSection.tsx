"use client";

import Image from "next/image";
import { siteConfig } from "@/lib/data";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Send, CheckCircle2 } from "lucide-react";
import { YoutubeIcon, TikTokIcon } from "@/components/ui/Icons";
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
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-deep/10 text-green-deep text-xs font-semibold rounded-full mb-4">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{t.hero.officialTitle}</span>
            </div>

            <span className="font-arabic text-green-deep text-2xl lg:text-3xl mb-2 font-bold tracking-wide">
              {t.hero.arabicName}
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-3 tracking-tight">
              {displayName}
            </h1>
            <p className="text-gold font-heading text-lg lg:text-xl font-medium mb-5">
              {t.hero.headline}
            </p>
            <p className="text-secondary font-body mb-8 max-w-xl leading-relaxed text-base lg:text-lg">
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

            <div className="flex items-center gap-6 pt-2 border-t border-border/60 w-full justify-center lg:justify-start">
              <span className="text-xs uppercase tracking-wider text-secondary font-semibold">
                {t.hero.officialChannels}:
              </span>
              <a 
                href={siteConfig.social.youtube} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-secondary hover:text-red-600 transition-colors flex items-center gap-1.5 text-xs font-medium"
                title="YouTube Channel"
              >
                <YoutubeIcon className="w-4 h-4 text-red-600" />
                <span className="hidden sm:inline">YouTube</span>
              </a>
              <a 
                href={siteConfig.social.tiktok} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-secondary hover:text-primary transition-colors flex items-center gap-1.5 text-xs font-medium"
                title="TikTok Account"
              >
                <TikTokIcon className="w-4 h-4" />
                <span className="hidden sm:inline">TikTok</span>
              </a>
              <a 
                href={siteConfig.social.telegram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-secondary hover:text-blue-500 transition-colors flex items-center gap-1.5 text-xs font-medium"
                title="Telegram Channel"
              >
                <Send className="w-3.5 h-3.5 text-blue-500" />
                <span className="hidden sm:inline">Telegram</span>
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection className="w-full sm:w-72 lg:w-80 shrink-0" delay={0.2}>
            <div className="relative p-2.5 bg-card border border-border shadow-md rounded-sm">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-ivory-dark border border-border">
                <Image
                  src="/portrait.jpg"
                  alt={siteConfig.fullName}
                  fill
                  priority
                  className="object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                  sizes="(max-width: 768px) 280px, 320px"
                />
              </div>
              <div className="pt-3 pb-1 text-center border-t border-border/50 mt-2">
                <p className="font-arabic text-sm text-green-deep font-semibold">فضيلة الشيخ محمد حمدو رشو</p>
                <p className="text-xs text-secondary mt-0.5 font-medium">{t.hero.locationSubtitle}</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
