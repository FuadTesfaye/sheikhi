"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { qualifications, additionalCertificates } from "@/lib/data";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { X, ZoomIn, ChevronLeft, ChevronRight, FileText, ExternalLink, Award, BookOpen, Scroll, GraduationCap, Archive } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

type CategoryKey = "all" | "academic" | "ijazah" | "training" | "research" | "archive";

export function QualificationsSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all");
  const { t } = useLanguage();

  // Combine translated qualifications with thumbnail paths and category
  const majorQuals = t.qualifications.items.map((item, idx) => ({
    ...item,
    category: qualifications[idx]?.category || "training",
    thumbnail: qualifications[idx]?.thumbnail || "/certificates/scan01.jpg",
  }));

  // Filter based on activeCategory
  const filteredQuals = activeCategory === "all" 
    ? majorQuals 
    : activeCategory === "archive"
      ? []
      : majorQuals.filter((q) => q.category === activeCategory);

  // Collect all images for the modal navigation
  const allImages = [
    ...majorQuals.map((q) => ({ src: q.thumbnail, title: q.title, issuer: q.issuer, date: q.date })),
    ...additionalCertificates.map((c, i) => ({
      src: c,
      title: `${t.qualifications.archiveTitle} #${i + 1}`,
      issuer: t.qualifications.verifiedBadge,
      date: "",
    })),
  ];

  const currentIndex = allImages.findIndex((item) => item.src === selectedImage);

  const handleNext = () => {
    if (currentIndex < allImages.length - 1) {
      setSelectedImage(allImages[currentIndex + 1].src);
      setSelectedTitle(allImages[currentIndex + 1].title);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedImage(allImages[currentIndex - 1].src);
      setSelectedTitle(allImages[currentIndex - 1].title);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    if (selectedImage) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedImage, currentIndex]);

  const categoryList: { key: CategoryKey; label: string; icon: React.ReactNode; count: number }[] = [
    { key: "all", label: t.qualifications.categories?.all || "All", icon: <Award className="w-3.5 h-3.5" />, count: majorQuals.length + additionalCertificates.length },
    { key: "academic", label: t.qualifications.categories?.academic || "Degrees", icon: <GraduationCap className="w-3.5 h-3.5" />, count: majorQuals.filter(q => q.category === "academic").length },
    { key: "ijazah", label: t.qualifications.categories?.ijazah || "Hadith Ijazahs", icon: <Scroll className="w-3.5 h-3.5" />, count: majorQuals.filter(q => q.category === "ijazah").length },
    { key: "training", label: t.qualifications.categories?.training || "Imams Training", icon: <BookOpen className="w-3.5 h-3.5" />, count: majorQuals.filter(q => q.category === "training").length },
    { key: "research", label: t.qualifications.categories?.research || "Research", icon: <Award className="w-3.5 h-3.5" />, count: majorQuals.filter(q => q.category === "research").length },
    { key: "archive", label: t.qualifications.categories?.archive || "Archival Scans", icon: <Archive className="w-3.5 h-3.5" />, count: additionalCertificates.length },
  ];

  return (
    <section id="qualifications" className="bg-ivory py-20 lg:py-32 border-b border-border">
      <div className="container mx-auto px-4 max-w-6xl">
        <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="flex items-center gap-4">
            <span className="text-gold font-heading text-xl font-bold">{t.qualifications.sectionNum}</span>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary">
              {t.qualifications.title}
            </h2>
          </div>
          <p className="text-secondary max-w-md text-sm md:text-end">
            {t.qualifications.subtitle}
          </p>
        </AnimatedSection>

        {/* Categorization Filter Tabs */}
        <AnimatedSection delay={0.1} className="mb-10">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none sm:flex-wrap">
            {categoryList.map((cat) => {
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setActiveCategory(cat.key)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-green-deep text-ivory shadow-xs"
                      : "bg-card text-secondary border border-border hover:border-gold/60 hover:text-primary"
                  }`}
                >
                  {cat.icon}
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? "bg-white/20 text-white" : "bg-ivory-dark text-secondary"}`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Major Qualifications Grid */}
        {filteredQuals.length > 0 && (
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {filteredQuals.map((qual, idx) => (
              <AnimatedSection 
                key={qual.id} 
                delay={idx * 0.05} 
                className="bg-card p-6 border border-border flex flex-col sm:flex-row gap-6 shadow-xs hover:border-gold/60 transition-all rounded-sm group"
              >
                <div 
                  className="w-full sm:w-2/5 aspect-[16/10] sm:aspect-[3/4] relative bg-ivory-dark cursor-pointer overflow-hidden border border-border shrink-0 rounded-sm"
                  onClick={() => {
                    setSelectedImage(qual.thumbnail);
                    setSelectedTitle(qual.title);
                  }}
                >
                  {qual.thumbnail && (
                    <Image 
                      src={qual.thumbnail} 
                      alt={qual.title} 
                      fill 
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 240px"
                    />
                  )}
                  <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="p-2 bg-card/90 rounded-full text-primary shadow-xs">
                      <ZoomIn className="w-5 h-5 text-green-deep" />
                    </span>
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className="text-[11px] font-semibold px-2 py-0.5 bg-green-deep/10 text-green-deep rounded-xs">
                        {qual.date || t.qualifications.verifiedBadge}
                      </span>
                      {qual.category === "ijazah" && (
                        <span className="text-[10px] font-semibold px-2 py-0.5 bg-gold/15 text-gold border border-gold/30 rounded-xs">
                          {t.qualifications.categories?.ijazah || "Hadith Ijazah"}
                        </span>
                      )}
                      {qual.category === "academic" && (
                        <span className="text-[10px] font-semibold px-2 py-0.5 bg-blue-500/10 text-blue-800 rounded-xs">
                          {t.qualifications.categories?.academic || "Academic Degree"}
                        </span>
                      )}
                      {qual.category === "research" && (
                        <span className="text-[10px] font-semibold px-2 py-0.5 bg-amber-500/10 text-amber-800 rounded-xs">
                          {t.qualifications.categories?.research || "Research"}
                        </span>
                      )}
                    </div>
                    <h3 className="font-heading text-base lg:text-lg font-bold text-primary mb-2 group-hover:text-green-deep transition-colors leading-snug">
                      {qual.title}
                    </h3>
                    <p className="text-xs font-semibold text-secondary mb-2">{qual.issuer}</p>
                    {qual.description && (
                      <p className="text-xs text-primary/80 leading-relaxed line-clamp-3">
                        {qual.description}
                      </p>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedImage(qual.thumbnail);
                      setSelectedTitle(qual.title);
                    }}
                    className="mt-4 text-xs font-semibold text-green-deep hover:text-gold flex items-center gap-1.5 transition-colors self-start cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    {t.qualifications.inspectDoc}
                  </button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        )}

        {/* Additional Scans & Records Gallery */}
        {(activeCategory === "all" || activeCategory === "archive") && additionalCertificates.length > 0 && (
          <AnimatedSection delay={0.2} className="pt-12 border-t border-border">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="font-heading text-xl font-bold text-primary">{t.qualifications.archiveTitle}</h3>
                <p className="text-xs text-secondary mt-1">{t.qualifications.archiveSubtitle}</p>
              </div>
              <span className="text-xs text-secondary font-medium px-2.5 py-1 bg-ivory border border-border rounded-sm">
                {additionalCertificates.length} {t.qualifications.recordsCount}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {additionalCertificates.map((cert, idx) => (
                <div 
                  key={idx} 
                  className="aspect-[3/4] relative bg-card border border-border cursor-pointer hover:border-gold shadow-2xs overflow-hidden group rounded-sm"
                  onClick={() => {
                    setSelectedImage(cert);
                    setSelectedTitle(`${t.qualifications.archiveTitle} #${idx + 1}`);
                  }}
                >
                  <Image 
                    src={cert} 
                    alt={`Document scan ${idx + 1}`} 
                    fill 
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                  />
                  <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/40 transition-colors flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 p-2 text-center">
                    <ZoomIn className="w-5 h-5 text-white mb-1" />
                    <span className="text-[11px] text-white font-medium">{t.qualifications.viewScan}</span>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        )}
      </div>

      {/* Fullscreen Document Viewer Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 p-4 sm:p-6 backdrop-blur-xs"
          onClick={() => setSelectedImage(null)}
        >
          {/* Top Bar */}
          <div className="w-full max-w-5xl flex items-center justify-between text-white/80 py-2 mb-2" onClick={e => e.stopPropagation()}>
            <div className="truncate pe-4">
              <h4 className="text-sm sm:text-base font-heading font-semibold text-white truncate">
                {selectedTitle || t.qualifications.modalHeader}
              </h4>
              <p className="text-xs text-white/50">{t.qualifications.modalSubtitle}</p>
            </div>
            
            <div className="flex items-center gap-2">
              <a
                href={selectedImage}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-sm transition-colors"
                title="Open raw image"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
              <button 
                className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-sm transition-colors cursor-pointer"
                onClick={() => setSelectedImage(null)}
                title={t.qualifications.closeEsc}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Document Canvas */}
          <div 
            className="relative w-full max-w-4xl h-[75vh] sm:h-[80vh] bg-neutral-900 border border-white/10 rounded-sm overflow-hidden flex items-center justify-center shadow-2xl" 
            onClick={e => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt={selectedTitle || "Certificate document"}
              fill
              className="object-contain p-2 sm:p-4"
              sizes="100vw"
              priority
            />

            {/* Prev/Next buttons */}
            {currentIndex > 0 && (
              <button
                type="button"
                onClick={handlePrev}
                className="absolute start-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white/80 hover:text-white transition-all shadow-md cursor-pointer"
                title="Previous"
              >
                <ChevronLeft className="w-6 h-6 rtl:rotate-180" />
              </button>
            )}

            {currentIndex < allImages.length - 1 && (
              <button
                type="button"
                onClick={handleNext}
                className="absolute end-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white/80 hover:text-white transition-all shadow-md cursor-pointer"
                title="Next"
              >
                <ChevronRight className="w-6 h-6 rtl:rotate-180" />
              </button>
            )}
          </div>

          {/* Bottom count */}
          <div className="mt-3 text-xs text-white/40">
            {t.qualifications.docCounter} {currentIndex + 1} / {allImages.length} • {t.qualifications.closeEsc}
          </div>
        </div>
      )}
    </section>
  );
}
