import { featuredQuote } from "@/lib/data";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function QuoteSection() {
  return (
    <section className="bg-green-deep/5 py-24 lg:py-40 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[300px] text-gold/5 font-serif leading-none select-none pointer-events-none">
        "
      </div>
      
      <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
        <AnimatedSection>
          <p className="font-arabic text-2xl md:text-3xl lg:text-4xl text-green-deep leading-loose mb-8">
            {featuredQuote.text}
          </p>
          <p className="font-serif text-lg md:text-xl text-primary italic mb-10">
            "{featuredQuote.translation}"
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-gold"></div>
            <p className="font-heading font-bold text-primary uppercase tracking-widest text-sm">
              {featuredQuote.source}
            </p>
            <div className="w-12 h-px bg-gold"></div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
