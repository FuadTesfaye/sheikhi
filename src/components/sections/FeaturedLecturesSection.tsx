"use client";

import { useState } from "react";
import Image from "next/image";
import { lectures, siteConfig } from "@/lib/data";
import { getYouTubeEmbedUrl, getYouTubeThumbnail } from "@/lib/utils";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { YoutubeIcon } from "@/components/ui/Icons";
import { Play, Filter, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function FeaturedLecturesSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeLectureId, setActiveLectureId] = useState<string>(lectures[0]?.youtubeId || "-SBWul6CPlY");
  const [showAll, setShowAll] = useState(false);
  const { t } = useLanguage();

  const categories = ["All", ...Array.from(new Set(lectures.map(l => l.category)))];

  const filteredLectures = selectedCategory === "All" 
    ? lectures 
    : lectures.filter(l => l.category === selectedCategory);

  const displayedLectures = showAll ? filteredLectures : filteredLectures.slice(0, 6);

  const activeLecture = lectures.find(l => l.youtubeId === activeLectureId) || lectures[0];

  return (
    <section id="lectures" className="bg-card py-20 lg:py-32 border-y border-border">
      <div className="container mx-auto px-4 max-w-6xl">
        <AnimatedSection className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-4 mb-3">
              <span className="text-gold font-heading text-xl font-bold">{t.lectures.sectionNum}</span>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary">
                {t.lectures.title}
              </h2>
            </div>
            <p className="text-secondary max-w-lg text-sm">
              {t.lectures.subtitle}
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            <Filter className="w-4 h-4 text-secondary me-1 hidden sm:inline" />
            {categories.map(cat => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat);
                  setShowAll(false);
                }}
                className={`text-xs px-3.5 py-1.5 rounded-sm font-medium transition-colors ${
                  selectedCategory === cat 
                    ? "bg-green-deep text-white shadow-xs" 
                    : "bg-ivory border border-border text-secondary hover:text-primary hover:border-gold"
                }`}
              >
                {cat === "All" ? t.lectures.filterAll : cat}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Master Embedded Player Station */}
        {activeLecture && (
          <AnimatedSection className="mb-14 bg-ivory p-4 sm:p-6 border border-border shadow-sm rounded-sm">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="aspect-video relative w-full bg-black rounded-sm overflow-hidden shadow-md">
                  <iframe
                    src={`${getYouTubeEmbedUrl(activeLecture.youtubeId)}&autoplay=0`}
                    title={activeLecture.title}
                    className="absolute inset-0 w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold px-2.5 py-0.5 bg-green-deep text-white rounded-xs">
                      {activeLecture.category}
                    </span>
                    <span className="text-xs text-secondary">• {activeLecture.date}</span>
                  </div>
                  <h3 className="font-heading text-lg lg:text-xl font-bold text-primary mb-3 leading-snug">
                    {activeLecture.title}
                  </h3>
                  <p className="text-sm text-secondary leading-relaxed mb-6">
                    {activeLecture.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-border flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href={`https://youtube.com/watch?v=${activeLecture.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto text-xs font-medium text-secondary hover:text-red-600 flex items-center justify-center gap-1.5 py-2 px-3 border border-border rounded-xs hover:border-red-300 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    {t.lectures.openYouTube}
                  </a>
                  <a
                    href={siteConfig.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto text-xs font-medium text-white bg-green-deep hover:bg-green-light flex items-center justify-center gap-1.5 py-2 px-3 rounded-xs transition-colors"
                  >
                    <YoutubeIcon className="w-4 h-4 text-red-400" />
                    {t.lectures.subscribeChannel}
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Video Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedLectures.map((lecture, idx) => {
            const isPlaying = lecture.youtubeId === activeLectureId;
            return (
              <AnimatedSection 
                key={lecture.id} 
                delay={idx * 0.04} 
                className={`bg-card p-4 border transition-all flex flex-col justify-between rounded-sm group ${
                  isPlaying ? "border-gold shadow-md ring-1 ring-gold/40" : "border-border hover:border-primary/30 shadow-2xs"
                }`}
              >
                <div>
                  <div 
                    className="aspect-video relative mb-3 bg-ivory-dark cursor-pointer overflow-hidden rounded-xs"
                    onClick={() => {
                      setActiveLectureId(lecture.youtubeId);
                      const el = document.getElementById("lectures");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <Image
                      src={getYouTubeThumbnail(lecture.youtubeId, "high")}
                      alt={lecture.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-dark/30 group-hover:bg-dark/20 transition-colors flex items-center justify-center">
                      <div className={`p-3 rounded-full transition-transform group-hover:scale-110 shadow-md ${
                        isPlaying ? "bg-gold text-white" : "bg-black/75 text-white group-hover:bg-red-600"
                      }`}>
                        <Play className="w-4 h-4 fill-current rtl:rotate-180" />
                      </div>
                    </div>
                    {isPlaying && (
                      <span className="absolute top-2 start-2 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-gold text-white rounded-xs shadow-xs">
                        {t.lectures.nowPlaying}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] font-bold text-gold uppercase tracking-wider">
                      {lecture.category}
                    </span>
                    <span className="text-border">•</span>
                    <span className="text-xs text-secondary">{lecture.date}</span>
                  </div>

                  <h3 className="font-heading text-sm lg:text-base font-bold text-primary mb-2 line-clamp-2 leading-snug group-hover:text-green-deep transition-colors">
                    {lecture.title}
                  </h3>
                  <p className="text-xs text-secondary line-clamp-2 mb-4 leading-relaxed">
                    {lecture.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-border/70 mt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveLectureId(lecture.youtubeId);
                      const el = document.getElementById("lectures");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-xs font-semibold text-green-deep hover:text-gold flex items-center gap-1 transition-colors"
                  >
                    <Play className="w-3.5 h-3.5 fill-current rtl:rotate-180" />
                    {isPlaying ? t.lectures.playingAbove : t.lectures.playOnSite}
                  </button>

                  <a
                    href={`https://youtube.com/watch?v=${lecture.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-secondary hover:text-red-600 flex items-center gap-1 transition-colors"
                  >
                    <span>YouTube</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Expandable Scaffold Button ("Show More Lessons") */}
        {filteredLectures.length > 6 && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-7 py-3 bg-ivory border border-border text-primary font-semibold text-xs rounded-sm hover:border-green-deep hover:text-green-deep transition-all shadow-2xs"
            >
              {showAll ? (
                <>
                  <ChevronUp className="w-4 h-4" />
                  <span>{t.lectures.showLess}</span>
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4" />
                  <span>{t.lectures.showMore} ({filteredLectures.length - 6} more)</span>
                </>
              )}
            </button>
          </div>
        )}

        {/* Footer Link to YouTube Channel */}
        <AnimatedSection delay={0.2} className="mt-14 flex justify-center">
          <a 
            href={siteConfig.social.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-ivory border border-border text-primary font-medium hover:border-red-600 hover:text-red-600 transition-all rounded-sm shadow-2xs text-sm"
          >
            <YoutubeIcon className="w-5 h-5 text-red-600" />
            {t.lectures.exploreLibrary}
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
