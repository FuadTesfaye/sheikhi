"use client";

import { teachingAreas } from "@/lib/data";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-ivory py-20 lg:py-32">
      <div className="container mx-auto px-4 max-w-6xl">
        <AnimatedSection className="flex items-center gap-4 mb-12">
          <span className="text-gold font-heading text-xl font-bold">{t.about.sectionNum}</span>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary">{t.about.title}</h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 mb-20">
          <AnimatedSection className="lg:col-span-5" delay={0.1}>
            <p className="text-xl text-primary font-medium leading-relaxed border-s-2 border-gold ps-6 py-2">
              {t.about.quoteCallout}
            </p>
          </AnimatedSection>

          <AnimatedSection className="lg:col-span-7 flex flex-col gap-6" delay={0.2}>
            {t.about.bioParagraphs.map((paragraph, idx) => (
              <p key={idx} className="text-secondary leading-relaxed text-base lg:text-lg">
                {paragraph}
              </p>
            ))}
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.3}>
          <h3 className="font-heading text-2xl font-bold text-primary mb-8 border-b border-border pb-4">
            {t.about.teachingAreasTitle}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teachingAreas.map((area) => (
              <div key={area.id} className="flex flex-col gap-1 p-3 bg-card border border-border/60 rounded-xs">
                <span className="font-arabic text-green-deep text-lg font-semibold">{area.nameArabic}</span>
                <span className="font-medium text-primary text-sm">{area.name}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
        <div className="w-full h-px bg-border mt-20"></div>
      </div>
    </section>
  );
}
