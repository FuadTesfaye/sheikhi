"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function QuoteSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-green-deep/5 py-24 border-b border-border text-center relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <AnimatedSection>
          <span className="text-gold font-serif text-5xl lg:text-6xl select-none leading-none block mb-6 opacity-60">
            “
          </span>
          <p className="font-arabic text-2xl lg:text-3xl text-primary font-bold leading-relaxed mb-6">
            {t.quote.text}
          </p>
          <p className="font-body text-base lg:text-lg text-secondary italic max-w-2xl mx-auto mb-6">
            &ldquo;{t.quote.translation}&rdquo;
          </p>
          <div className="w-12 h-0.5 bg-gold mx-auto mb-4"></div>
          <p className="font-heading text-sm font-semibold text-primary uppercase tracking-widest">
            — {t.quote.source}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
