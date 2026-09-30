"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function TeachingSection() {
  const { t } = useLanguage();
  const items = t.teaching.items;

  return (
    <section id="teaching" className="bg-card py-20 lg:py-32 border-b border-border">
      <div className="container mx-auto px-4 max-w-6xl">
        <AnimatedSection className="flex items-center gap-4 mb-16">
          <span className="text-gold font-heading text-xl font-bold">{t.teaching.sectionNum}</span>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary">{t.teaching.title}</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {items.map((area, idx) => (
            <AnimatedSection key={area.id} delay={idx * 0.08} className="flex gap-6 border-t border-border pt-6">
              <div className="text-gold font-heading text-xl font-bold mt-1 shrink-0">
                {String(idx + 1).padStart(2, '0')}
              </div>
              <div>
                <h3 className="font-heading text-xl lg:text-2xl font-bold text-primary mb-1">{area.name}</h3>
                {area.nameArabic && (
                  <p className="font-arabic text-green-deep text-base mb-2 font-semibold">{area.nameArabic}</p>
                )}
                <p className="text-secondary leading-relaxed text-sm">{area.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
