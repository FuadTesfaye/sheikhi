"use client";

import { siteConfig } from "@/lib/data";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Mail, Phone, MapPin, Send, ShieldCheck, CheckCircle2, User, Building, Video, Award, Scroll, BookOpen, ExternalLink } from "lucide-react";
import { YoutubeIcon, TikTokIcon, FacebookIcon } from "@/components/ui/Icons";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function ContactSection() {
  const { t } = useLanguage();

  const getRegistryIcon = (idx: number) => {
    switch (idx) {
      case 0: return <User className="w-4 h-4 text-gold shrink-0" />;
      case 1: return <Mail className="w-4 h-4 text-gold shrink-0" />;
      case 2: return <Phone className="w-4 h-4 text-gold shrink-0" />;
      case 3:
      case 4:
      case 5:
      case 6: return <MapPin className="w-4 h-4 text-gold shrink-0" />;
      case 7: return <ShieldCheck className="w-4 h-4 text-gold shrink-0" />;
      case 8: return <Building className="w-4 h-4 text-gold shrink-0" />;
      case 9: return <BookOpen className="w-4 h-4 text-gold shrink-0" />;
      case 10: return <Award className="w-4 h-4 text-gold shrink-0" />;
      case 11: return <Scroll className="w-4 h-4 text-gold shrink-0" />;
      case 12: return <Video className="w-4 h-4 text-gold shrink-0" />;
      default: return <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />;
    }
  };

  return (
    <section id="contact" className="bg-dark py-20 lg:py-32 text-ivory border-t border-white/5">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Top Contact Channels Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-16 pb-16 border-b border-white/10">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-gold font-heading text-xl font-bold">{t.contact.sectionNum}</span>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-ivory">
                {t.contact.title}
              </h2>
            </div>
            <p className="text-ivory/70 text-base lg:text-lg leading-relaxed mb-8">
              {t.contact.subtitle}
            </p>

            <div className="p-5 bg-white/5 border border-white/10 rounded-sm">
              <div className="flex items-center gap-2 mb-2 text-gold">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-xs uppercase tracking-wider font-semibold">
                  {t.contact.dossierBadge || "Verified Imam Accreditation"}
                </span>
              </div>
              <p className="text-xs text-ivory/70 leading-relaxed">
                {t.contact.dossierSubtitle}
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-5">
              {siteConfig.phone && (
                <div className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-sm hover:border-gold/50 transition-colors">
                  <Phone className="w-5 h-5 text-gold shrink-0 mt-1" />
                  <div className="flex-1">
                    <span className="text-xs text-ivory/50 block mb-0.5">{t.contact.phone}</span>
                    <a 
                      href={`tel:${siteConfig.phoneNational || siteConfig.phone}`} 
                      className="font-medium text-lg text-ivory hover:text-gold transition-colors block"
                    >
                      {siteConfig.phoneNational || "0913083541"} 
                      <span className="text-xs text-ivory/50 ms-2 font-normal">({siteConfig.phone})</span>
                    </a>
                  </div>
                </div>
              )}

              {siteConfig.email && (
                <div className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-sm hover:border-gold/50 transition-colors">
                  <Mail className="w-5 h-5 text-gold shrink-0 mt-1" />
                  <div className="flex-1">
                    <span className="text-xs text-ivory/50 block mb-0.5">{t.contact.email}</span>
                    <a 
                      href={`mailto:${siteConfig.email}`} 
                      className="font-medium text-base text-ivory hover:text-gold transition-colors break-all"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
              )}

              {siteConfig.location && (
                <div className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-sm">
                  <MapPin className="w-5 h-5 text-gold shrink-0 mt-1" />
                  <div>
                    <span className="text-xs text-ivory/50 block mb-0.5">{t.contact.location}</span>
                    <span className="font-medium text-sm sm:text-base text-ivory/90 leading-snug">
                      {siteConfig.location}
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div>
              <span className="text-xs text-ivory/50 block mb-3 uppercase tracking-wider font-semibold">
                {t.contact.followChannels}
              </span>
              <div className="flex items-center gap-3 flex-wrap">
                <a 
                  href={siteConfig.social.youtube} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 bg-white/5 hover:bg-red-600 text-ivory transition-all rounded-xs flex items-center gap-2 text-xs"
                  title="YouTube"
                >
                  <YoutubeIcon className="w-4 h-4" />
                  <span>YouTube</span>
                </a>
                <a 
                  href={siteConfig.social.tiktok} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 bg-white/5 hover:bg-neutral-800 text-ivory transition-all rounded-xs flex items-center gap-2 text-xs"
                  title="TikTok"
                >
                  <TikTokIcon className="w-4 h-4" />
                  <span>TikTok</span>
                </a>
                <a 
                  href={siteConfig.social.telegram} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 bg-white/5 hover:bg-blue-500 text-ivory transition-all rounded-xs flex items-center gap-2 text-xs"
                  title="Telegram"
                >
                  <Send className="w-4 h-4" />
                  <span>Telegram</span>
                </a>
                {siteConfig.social.facebook && (
                  <a 
                    href={siteConfig.social.facebook} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 bg-white/5 hover:bg-blue-600 text-ivory transition-all rounded-xs flex items-center gap-2 text-xs"
                    title="Facebook"
                  >
                    <FacebookIcon className="w-4 h-4" />
                    <span>Facebook</span>
                  </a>
                )}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* 13-Point Official Administrative Imam Accreditation Dossier */}
        {t.contact.registry && t.contact.registry.length > 0 && (
          <AnimatedSection delay={0.3}>
            <div className="bg-dark-light/60 border border-gold/30 rounded-sm p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 end-0 transform translate-x-8 -translate-y-8 w-40 h-40 bg-gold/5 rounded-full blur-2xl pointer-events-none" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-gold/15 text-gold text-xs font-semibold rounded-xs mb-2">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{t.contact.dossierBadge || "Official Registry Record"}</span>
                  </div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-ivory">
                    {t.contact.dossierTitle}
                  </h3>
                </div>
                <div className="text-xs text-ivory/60 sm:text-end max-w-sm">
                  {t.contact.dossierSubtitle}
                </div>
              </div>

              {/* 13 Registry Points Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {t.contact.registry.map((field, idx) => (
                  <div 
                    key={idx} 
                    className="p-4 bg-white/5 border border-white/5 hover:border-gold/30 rounded-xs transition-colors flex flex-col justify-between"
                  >
                    <div className="flex items-start gap-2.5 mb-2">
                      <div className="p-1.5 bg-gold/10 rounded-xs mt-0.5">
                        {getRegistryIcon(idx)}
                      </div>
                      <div className="flex-1">
                        <span className="text-[11px] font-semibold text-gold/90 block leading-tight">
                          {field.label}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-ivory/95 font-medium leading-relaxed ps-8">
                      {field.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory/60">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                  <span>
                    {siteConfig.primaryInstitutions} · {siteConfig.domain}
                  </span>
                </div>
                <a 
                  href="#qualifications" 
                  className="text-gold hover:text-ivory font-semibold inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>{t.qualifications.inspectDoc || "Inspect Qualifications & Diplomas"}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}
