"use client";

import { siteConfig } from "@/lib/data";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { YoutubeIcon, TikTokIcon, FacebookIcon } from "@/components/ui/Icons";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="bg-dark py-20 lg:py-32 text-ivory">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-gold font-heading text-xl font-bold">{t.contact.sectionNum}</span>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-ivory">
                {t.contact.title}
              </h2>
            </div>
            <p className="text-ivory/70 text-base lg:text-lg leading-relaxed mb-8">
              {t.contact.subtitle}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="flex flex-col gap-8">
            <div className="flex flex-col gap-6 border-b border-ivory/10 pb-8">
              {siteConfig.email && (
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-gold shrink-0 mt-1" />
                  <div>
                    <span className="text-xs text-ivory/50 block mb-0.5">{t.contact.email}</span>
                    <a href={`mailto:${siteConfig.email}`} className="font-medium text-base text-ivory hover:text-gold transition-colors">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
              )}
              {siteConfig.phone && (
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-gold shrink-0 mt-1" />
                  <div>
                    <span className="text-xs text-ivory/50 block mb-0.5">{t.contact.phone}</span>
                    <a href={`tel:${siteConfig.phone}`} className="font-medium text-base text-ivory hover:text-gold transition-colors">
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>
              )}
              {siteConfig.location && (
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-gold shrink-0 mt-1" />
                  <div>
                    <span className="text-xs text-ivory/50 block mb-0.5">{t.contact.location}</span>
                    <span className="font-medium text-base text-ivory/90">{siteConfig.location}</span>
                  </div>
                </div>
              )}
            </div>

            <div>
              <span className="text-xs text-ivory/50 block mb-4 uppercase tracking-wider font-semibold">
                {t.contact.followChannels}
              </span>
              <div className="flex items-center gap-4">
                <a 
                  href={siteConfig.social.youtube} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 bg-ivory/5 hover:bg-red-600 text-ivory transition-all rounded-xs"
                  title="YouTube"
                >
                  <YoutubeIcon className="w-5 h-5" />
                  <span className="sr-only">YouTube</span>
                </a>
                <a 
                  href={siteConfig.social.tiktok} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 bg-ivory/5 hover:bg-neutral-800 text-ivory transition-all rounded-xs"
                  title="TikTok"
                >
                  <TikTokIcon className="w-5 h-5" />
                  <span className="sr-only">TikTok</span>
                </a>
                <a 
                  href={siteConfig.social.telegram} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 bg-ivory/5 hover:bg-blue-500 text-ivory transition-all rounded-xs"
                  title="Telegram"
                >
                  <Send className="w-5 h-5" />
                  <span className="sr-only">Telegram</span>
                </a>
                {siteConfig.social.facebook && (
                  <a 
                    href={siteConfig.social.facebook} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 bg-ivory/5 hover:bg-blue-600 text-ivory transition-all rounded-xs"
                    title="Facebook"
                  >
                    <FacebookIcon className="w-5 h-5" />
                    <span className="sr-only">Facebook</span>
                  </a>
                )}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
