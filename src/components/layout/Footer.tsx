import Link from "next/link";
import { Mail, Phone, Send } from "lucide-react";
import { YoutubeIcon, TikTokIcon } from "@/components/ui/Icons";
import { siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-dark text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Name */}
          <div>
            <p className="font-arabic text-xl text-white mb-1">الشيخ محمد حمدو رشو</p>
            <p className="font-heading text-lg font-semibold text-white mb-4">
              Sheikh Muhammed Hamdu
            </p>
            <p className="text-sm text-white/60 leading-relaxed">
              Islamic Scholar, Teacher, and Imam dedicated to teaching and serving the Muslim community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <div className="space-y-2">
              {["About", "Journey", "Qualifications", "Teaching", "Lectures", "Contact"].map(
                (link) => (
                  <a
                    key={link}
                    href={`/#${link.toLowerCase()}`}
                    className="block text-sm text-white/60 hover:text-gold transition-colors"
                  >
                    {link}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-heading text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Connect
            </h3>
            <div className="space-y-3">
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-red-400 transition-colors"
              >
                <YoutubeIcon className="w-4 h-4" /> YouTube
              </a>
              <a
                href={siteConfig.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.73a8.19 8.19 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.16z" />
                </svg>
                TikTok
              </a>
              <a
                href={siteConfig.social.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-blue-400 transition-colors"
              >
                <Send className="w-4 h-4" /> Telegram
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-sm text-white/60 hover:text-gold transition-colors"
              >
                <Mail className="w-4 h-4" /> {siteConfig.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Sheikh Muhammed Hamdu. All rights reserved.
          </p>
          <p className="text-xs text-white/40 font-arabic">
            جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
}
