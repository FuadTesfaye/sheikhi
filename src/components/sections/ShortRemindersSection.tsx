import { siteConfig } from "@/lib/data";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function ShortRemindersSection() {
  return (
    <section className="bg-ivory py-20 lg:py-32">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <AnimatedSection className="flex flex-col items-center gap-4 mb-10">
          <span className="text-gold font-heading text-xl font-bold">07</span>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary">Short Reminders</h2>
          <p className="text-secondary max-w-lg mt-4">
            Bite-sized scholarly benefits and spiritual reminders extracted from full lectures and lessons.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="bg-card border border-border p-8 md:p-12 flex flex-col items-center">
          <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
          </div>
          <h3 className="font-heading text-xl font-bold text-primary mb-2">Follow on TikTok</h3>
          <p className="text-secondary mb-8">@shiekhmohammedhamdu</p>
          
          <a 
            href={siteConfig.social.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-black text-white font-medium hover:bg-black/90 transition-colors flex items-center gap-2"
          >
            Watch on TikTok
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
