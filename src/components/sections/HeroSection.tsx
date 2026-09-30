"use client";
import { siteConfig } from "@/lib/data";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Send } from "lucide-react";
import { YoutubeIcon, TikTokIcon } from "@/components/ui/Icons";

export function HeroSection() {
  return (
    <section className="bg-ivory pt-24 lg:pt-32 pb-16 lg:pb-24 border-b border-border relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-4 border-t border-border opacity-50" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #E5E2D8 10px, #E5E2D8 20px)' }}></div>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">
          <AnimatedSection className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="font-arabic text-green-deep text-3xl lg:text-4xl mb-4">{siteConfig.arabicName}</span>
            <h1 className="font-heading text-4xl lg:text-6xl font-bold text-primary mb-4">{siteConfig.fullName}</h1>
            <p className="text-secondary text-xl font-medium mb-6">{siteConfig.headline}</p>
            <p className="text-primary font-body mb-8 max-w-xl leading-relaxed">{siteConfig.shortBio}</p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
              <a href="#lectures" className="px-8 py-3 bg-green-deep text-white font-medium hover:bg-opacity-90 transition-colors">
                Watch Lectures
              </a>
              <a href="#about" className="px-8 py-3 border border-primary text-primary font-medium hover:bg-primary/5 transition-colors">
                Learn About Him
              </a>
            </div>

            <div className="flex items-center gap-6">
              <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-green-deep transition-colors">
                <YoutubeIcon className="w-6 h-6" />
                <span className="sr-only">YouTube</span>
              </a>
              <a href={siteConfig.social.tiktok} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-green-deep transition-colors flex items-center justify-center w-6 h-6">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
                <span className="sr-only">TikTok</span>
              </a>
              <a href={siteConfig.social.telegram} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-green-deep transition-colors">
                <Send className="w-5 h-5" />
                <span className="sr-only">Telegram</span>
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection className="w-full lg:w-1/2 max-w-md" delay={0.2}>
            <div className="aspect-[3/4] bg-green-deep/10 flex items-center justify-center text-green-deep font-medium border border-green-deep/20">
              Portrait Placeholder
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
