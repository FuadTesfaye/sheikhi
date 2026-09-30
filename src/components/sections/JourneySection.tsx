"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function JourneySection() {
  const { t, dir } = useLanguage();
  const items = t.journey.items;

  return (
    <section id="journey" className="bg-card py-20 lg:py-32 border-b border-border">
      <div className="container mx-auto px-4 max-w-4xl">
        <AnimatedSection className="flex items-center justify-center gap-4 mb-20">
          <span className="text-gold font-heading text-xl font-bold">{t.journey.sectionNum}</span>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary">{t.journey.title}</h2>
        </AnimatedSection>

        <div className="relative">
          {/* Vertical central divider line */}
          <div className="absolute start-6 sm:start-8 lg:start-1/2 top-0 bottom-0 w-px bg-border lg:-translate-x-1/2 rtl:lg:translate-x-1/2"></div>

          {/* Present top indicator */}
          <AnimatedSection className="relative z-10 flex justify-start lg:justify-center mb-10 sm:mb-12">
            <div className="bg-ivory border border-border px-3.5 py-1 text-xs font-bold text-green-deep uppercase tracking-wider rounded-sm ms-1.5 sm:ms-3 lg:ms-0">
              {t.journey.present}
            </div>
          </AnimatedSection>

          <div className="flex flex-col gap-8 sm:gap-12">
            {items.map((edu, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <AnimatedSection 
                  key={edu.id} 
                  className={`relative flex flex-col lg:flex-row items-start ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                  delay={idx * 0.08}
                >
                  {/* Circle Year Badge */}
                  <div className="absolute start-6 sm:start-8 lg:start-1/2 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-ivory border border-gold flex items-center justify-center -translate-x-1/2 rtl:translate-x-1/2 z-10 shrink-0 shadow-xs">
                    <span className="text-gold font-bold text-[11px] sm:text-xs">
                      {edu.year.split("—")[0].trim().replace(/\D/g, '') || idx + 1}
                    </span>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full lg:w-1/2 ps-14 sm:ps-20 lg:ps-0 ${
                    isEven 
                      ? 'lg:pe-16 text-start lg:text-end' 
                      : 'lg:ps-16 text-start'
                  }`}>
                    <div className="pt-1 bg-ivory/60 p-4 border border-border/80 rounded-sm hover:border-gold/60 transition-colors">
                      <span className="inline-block text-[11px] font-bold text-gold uppercase tracking-wider mb-1">
                        {edu.year}
                      </span>
                      <h3 className="font-heading text-lg font-bold text-primary mb-1">
                        {edu.institution}
                      </h3>
                      <p className="font-semibold text-green-deep text-sm mb-1">
                        {edu.degree}
                      </p>
                      <p className="text-xs text-secondary mb-2">
                        {edu.location}
                      </p>
                      {edu.description && (
                        <p className="text-primary/80 text-xs leading-relaxed">
                          {edu.description}
                        </p>
                      )}
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
