"use client";

import { siteConfig } from "@/lib/data";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { TikTokIcon } from "@/components/ui/Icons";
import { ExternalLink, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function ShortRemindersSection() {
  const { t } = useLanguage();
  const reminders = t.reminders.items;

  return (
    <section id="reminders" className="bg-ivory py-20 lg:py-32 border-b border-border">
      <div className="container mx-auto px-4 max-w-6xl">
        <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-3">
              <span className="text-gold font-heading text-xl font-bold">{t.reminders.sectionNum}</span>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary">
                {t.reminders.title}
              </h2>
            </div>
            <p className="text-secondary max-w-lg text-sm">
              {t.reminders.subtitle}
            </p>
          </div>

          <a 
            href={siteConfig.social.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white text-xs font-semibold rounded-sm hover:bg-neutral-800 transition-colors self-start md:self-auto shadow-2xs"
          >
            <TikTokIcon className="w-4 h-4" />
            <span>{t.reminders.followTikTok}</span>
          </a>
        </AnimatedSection>

        {/* Vertical Reminder Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {reminders.map((reminder, idx) => (
            <AnimatedSection
              key={reminder.id}
              delay={idx * 0.08}
              className="bg-card border border-border p-5 rounded-sm flex flex-col justify-between hover:border-gold/60 hover:shadow-xs transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold text-gold uppercase tracking-wider">
                    {reminder.topic}
                  </span>
                  <span className="text-[10px] text-secondary bg-ivory px-2 py-0.5 border border-border/60 rounded-xs">
                    Short
                  </span>
                </div>

                <div className="aspect-[9/10] w-full bg-ivory-dark border border-border/50 rounded-xs mb-4 p-4 flex flex-col justify-between relative overflow-hidden group-hover:bg-green-deep/5 transition-colors">
                  <div className="flex items-center gap-1.5 text-green-deep">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span className="text-[11px] font-semibold">{t.reminders.tadhkirah}</span>
                  </div>
                  <h4 className="font-heading text-base font-bold text-primary leading-snug">
                    {reminder.title}
                  </h4>
                  <p className="text-xs text-secondary italic">
                    {reminder.description}
                  </p>
                </div>
              </div>

              <a
                href={siteConfig.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2 px-3 border border-border rounded-xs text-xs font-medium text-primary hover:bg-black hover:text-white hover:border-black transition-all flex items-center justify-center gap-1.5"
              >
                <TikTokIcon className="w-3.5 h-3.5" />
                <span>{t.reminders.viewTikTok}</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
