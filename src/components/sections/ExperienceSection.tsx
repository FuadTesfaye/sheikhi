"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function ExperienceSection() {
  const { t } = useLanguage();
  const items = t.experience.items;

  return (
    <section id="experience" className="bg-ivory py-20 lg:py-32">
      <div className="container mx-auto px-4 max-w-4xl">
        <AnimatedSection className="flex items-center gap-4 mb-16">
          <span className="text-gold font-heading text-xl font-bold">{t.experience.sectionNum}</span>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary">{t.experience.title}</h2>
        </AnimatedSection>

        <div className="flex flex-col gap-10">
          {items.map((pos, idx) => (
            <AnimatedSection key={pos.id} delay={idx * 0.08} className="bg-card p-6 border-s-4 border-green-deep border-t border-b border-e border-border shadow-2xs rounded-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <h3 className="font-heading text-xl font-bold text-primary">{pos.organization}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold px-2 py-0.5 bg-green-deep/10 text-green-deep rounded-xs">
                    {t.experience.currentBadge}
                  </span>
                  <span className="text-xs font-bold text-gold">{pos.dates}</span>
                </div>
              </div>
              <p className="font-medium text-green-deep text-sm mb-1">{pos.role}</p>
              <p className="text-xs text-secondary mb-3">{pos.location}</p>
              <p className="text-primary/80 text-sm leading-relaxed">{pos.description}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
