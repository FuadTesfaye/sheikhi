"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { lectures, siteConfig } from "@/lib/data";
import { getYouTubeEmbedUrl, getYouTubeThumbnail } from "@/lib/utils";
import { YoutubeIcon } from "@/components/ui/Icons";
import { Play, Search, ArrowLeft, ExternalLink, Calendar, BookOpen } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function LecturesArchivePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const { t } = useLanguage();

  const categories = ["All", ...Array.from(new Set(lectures.map((l) => l.category)))];

  const filteredLectures = useMemo(() => {
    return lectures.filter((lecture) => {
      const matchesCategory =
        selectedCategory === "All" || lecture.category === selectedCategory;
      const matchesSearch =
        lecture.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lecture.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lecture.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const activeLecture = activeVideoId
    ? lectures.find((l) => l.youtubeId === activeVideoId)
    : null;

  return (
    <div className="bg-ivory min-h-screen pt-24 lg:pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-secondary hover:text-green-deep font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
            <span>{t.lectures.backToHome}</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="border-b border-border pb-8 mb-10">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-arabic text-green-deep text-lg font-semibold">
              مكتبة الدروس والمحاضرات
            </span>
          </div>
          <h1 className="font-heading text-3xl lg:text-5xl font-bold text-primary mb-3">
            {t.lectures.archiveHeading}
          </h1>
          <p className="text-secondary max-w-2xl text-base">
            {t.lectures.archiveSubtitle}
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-10">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute start-3 top-1/2 -translate-y-1/2 text-secondary" />
            <input
              type="text"
              placeholder={t.lectures.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full ps-9 pe-4 py-2.5 bg-card border border-border text-sm rounded-sm focus:outline-none focus:border-green-deep focus:ring-1 focus:ring-green-deep"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs px-3.5 py-1.5 rounded-sm font-medium transition-colors ${
                  selectedCategory === cat
                    ? "bg-green-deep text-white shadow-xs"
                    : "bg-card border border-border text-secondary hover:text-primary hover:border-gold"
                }`}
              >
                {cat === "All" ? t.lectures.filterAll : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Active Player Station if selected */}
        {activeLecture && (
          <div className="mb-12 bg-card p-6 border border-gold/70 shadow-md rounded-sm">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-border">
              <span className="text-xs uppercase font-bold text-gold tracking-wider flex items-center gap-1.5">
                <BookOpen className="w-4 h-4" />
                {t.lectures.nowPlaying}
              </span>
              <button
                type="button"
                onClick={() => setActiveVideoId(null)}
                className="text-xs text-secondary hover:text-primary font-medium"
              >
                ×
              </button>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="aspect-video relative w-full bg-black rounded-sm overflow-hidden shadow-sm">
                  <iframe
                    src={`${getYouTubeEmbedUrl(activeLecture.youtubeId)}&autoplay=1`}
                    title={activeLecture.title}
                    className="absolute inset-0 w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col justify-between h-full">
                <div>
                  <span className="text-xs font-semibold px-2 py-0.5 bg-green-deep text-white rounded-xs">
                    {activeLecture.category}
                  </span>
                  <h2 className="font-heading text-lg lg:text-xl font-bold text-primary mt-2 mb-2 leading-snug">
                    {activeLecture.title}
                  </h2>
                  <p className="text-xs text-secondary mb-4 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{activeLecture.date}</span>
                  </p>
                  <p className="text-sm text-secondary leading-relaxed">
                    {activeLecture.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-border flex items-center gap-3">
                  <a
                    href={`https://youtube.com/watch?v=${activeLecture.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-secondary hover:text-red-600 flex items-center gap-1.5 py-2 px-3 border border-border rounded-xs hover:border-red-300 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    {t.lectures.openYouTube}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Results List */}
        {filteredLectures.length === 0 ? (
          <div className="text-center py-20 bg-card border border-border rounded-sm">
            <p className="text-secondary text-base">{t.lectures.noResults}</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-3 text-xs text-green-deep font-semibold underline"
            >
              {t.lectures.resetFilters}
            </button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLectures.map((lecture) => {
              const isPlaying = activeVideoId === lecture.youtubeId;
              return (
                <div
                  key={lecture.id}
                  className={`bg-card p-4 border rounded-sm flex flex-col justify-between transition-all group ${
                    isPlaying
                      ? "border-gold shadow-md ring-1 ring-gold/40"
                      : "border-border hover:border-gold/50 shadow-2xs"
                  }`}
                >
                  <div>
                    <div
                      className="aspect-video relative mb-3 bg-ivory-dark cursor-pointer overflow-hidden rounded-xs"
                      onClick={() => {
                        setActiveVideoId(lecture.youtubeId);
                        window.scrollTo({ top: 200, behavior: "smooth" });
                      }}
                    >
                      <Image
                        src={getYouTubeThumbnail(lecture.youtubeId, "high")}
                        alt={lecture.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-dark/30 group-hover:bg-dark/15 transition-colors flex items-center justify-center">
                        <div
                          className={`p-3 rounded-full transition-transform group-hover:scale-110 shadow-md ${
                            isPlaying
                              ? "bg-gold text-white"
                              : "bg-black/75 text-white group-hover:bg-red-600"
                          }`}
                        >
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
                        setActiveVideoId(lecture.youtubeId);
                        window.scrollTo({ top: 200, behavior: "smooth" });
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
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Banner */}
        <div className="mt-16 p-8 bg-card border border-border text-center rounded-sm">
          <h3 className="font-heading text-xl font-bold text-primary mb-2">
            {t.lectures.lookingForMore}
          </h3>
          <p className="text-sm text-secondary max-w-md mx-auto mb-6">
            {t.lectures.lookingForMoreDesc}
          </p>
          <a
            href={siteConfig.social.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-red-600 text-white font-medium text-xs rounded-sm hover:bg-red-700 transition-colors shadow-xs"
          >
            <YoutubeIcon className="w-4 h-4 text-white" />
            {t.lectures.visitChannel}
          </a>
        </div>
      </div>
    </div>
  );
}
