import { siteConfig } from "@/lib/data";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { YoutubeIcon, TikTokIcon, FacebookIcon } from "@/components/ui/Icons";

export function ContactSection() {
  return (
    <section id="contact" className="bg-dark py-20 lg:py-32 text-ivory">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-gold font-heading text-xl font-bold">08</span>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-ivory">Connect With {siteConfig.name}</h2>
            </div>
            <p className="text-ivory/70 text-lg leading-relaxed mb-8">
              For academic inquiries, teaching requests, or general questions, please reach out through the official channels below.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="flex flex-col gap-8">
            <div className="flex flex-col gap-6 border-b border-ivory/10 pb-8">
              {siteConfig.email && (
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-4 hover:text-gold transition-colors">
                  <Mail className="w-6 h-6 text-gold" />
                  <span className="font-medium text-lg">{siteConfig.email}</span>
                </a>
              )}
              {siteConfig.phone && (
                <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-4 hover:text-gold transition-colors">
                  <Phone className="w-6 h-6 text-gold" />
                  <span className="font-medium text-lg">{siteConfig.phone}</span>
                </a>
              )}
              {siteConfig.location && (
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-gold" />
                  <span className="font-medium text-lg text-ivory/90">{siteConfig.location}</span>
                </div>
              )}
            </div>

            <div className="flex items-center gap-6 pt-4">
              <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" className="p-3 bg-ivory/5 hover:bg-gold hover:text-dark transition-all rounded-sm">
                <YoutubeIcon className="w-6 h-6" />
                <span className="sr-only">YouTube</span>
              </a>
              <a href={siteConfig.social.telegram} target="_blank" rel="noopener noreferrer" className="p-3 bg-ivory/5 hover:bg-gold hover:text-dark transition-all rounded-sm">
                <Send className="w-6 h-6" />
                <span className="sr-only">Telegram</span>
              </a>
              <a href={siteConfig.social.tiktok} target="_blank" rel="noopener noreferrer" className="p-3 bg-ivory/5 hover:bg-gold hover:text-dark transition-all rounded-sm flex items-center justify-center">
                <TikTokIcon className="w-6 h-6" />
                <span className="sr-only">TikTok</span>
              </a>
              {siteConfig.social.facebook && (
                <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="p-3 bg-ivory/5 hover:bg-gold hover:text-dark transition-all rounded-sm flex items-center justify-center">
                  <FacebookIcon className="w-6 h-6" />
                  <span className="sr-only">Facebook</span>
                </a>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
