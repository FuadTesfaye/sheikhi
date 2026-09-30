"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { qualifications, additionalCertificates } from "@/lib/data";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { X, ZoomIn, ChevronLeft, ChevronRight, FileText, ExternalLink } from "lucide-react";

export function QualificationsSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>("");

  // Collect all images into a unified list for modal navigation
  const allImages = [
    ...qualifications.map(q => ({ src: q.thumbnail, title: q.title, issuer: q.issuer, date: q.date })),
    ...additionalCertificates.map(c => ({
      src: c,
      title: "Academic Certificate / Document",
      issuer: "Official Certification",
      date: ""
    }))
  ];

  const currentIndex = allImages.findIndex(item => item.src === selectedImage);

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

  // Close on ESC key
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

  return (
    <section id="qualifications" className="bg-ivory py-20 lg:py-32 border-b border-border">
      <div className="container mx-auto px-4 max-w-6xl">
        <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <div className="flex items-center gap-4">
            <span className="text-gold font-heading text-xl font-bold">03</span>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary">
              Qualifications & Credentials
            </h2>
          </div>
          <p className="text-secondary max-w-md text-sm md:text-right">
            Verified academic degrees, higher education diplomas, and scholarly training certificates.
          </p>
        </AnimatedSection>

        {/* Major Qualifications Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {qualifications.map((qual, idx) => (
            <AnimatedSection 
              key={qual.id} 
              delay={idx * 0.05} 
              className="bg-card p-6 border border-border flex flex-col sm:flex-row gap-6 shadow-sm hover:border-gold/60 transition-all rounded-sm group"
            >
              <div 
                className="w-full sm:w-2/5 aspect-[3/4] relative bg-ivory-dark cursor-pointer overflow-hidden border border-border shrink-0 rounded-sm"
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
                  <span className="p-2 bg-card/90 rounded-full text-primary shadow-sm">
                    <ZoomIn className="w-5 h-5 text-green-deep" />
                  </span>
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold px-2 py-0.5 bg-green-deep/10 text-green-deep rounded-sm">
                      {qual.date || "Verified"}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-primary mb-2 group-hover:text-green-deep transition-colors">
                    {qual.title}
                  </h3>
                  <p className="text-sm font-medium text-secondary mb-2">{qual.issuer}</p>
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
                  className="mt-4 text-xs font-semibold text-green-deep hover:text-gold flex items-center gap-1 transition-colors self-start"
                >
                  <FileText className="w-3.5 h-3.5" />
                  Inspect Original Document
                </button>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Additional Scans & Records Gallery */}
        {additionalCertificates.length > 0 && (
          <AnimatedSection delay={0.2} className="pt-12 border-t border-border">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="font-heading text-xl font-bold text-primary">Document Archive</h3>
                <p className="text-xs text-secondary mt-1">Additional certificates, recommendation letters, and seminar completions</p>
              </div>
              <span className="text-xs text-secondary font-medium px-2.5 py-1 bg-ivory border border-border rounded-sm">
                {additionalCertificates.length} Records
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {additionalCertificates.map((cert, idx) => (
                <div 
                  key={idx} 
                  className="aspect-[3/4] relative bg-card border border-border cursor-pointer hover:border-gold shadow-xs overflow-hidden group rounded-sm"
                  onClick={() => {
                    setSelectedImage(cert);
                    setSelectedTitle(`Archive Record #${idx + 1}`);
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
                    <span className="text-[11px] text-white font-medium">View Scan</span>
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
            <div className="truncate pr-4">
              <h4 className="text-sm sm:text-base font-heading font-semibold text-white truncate">
                {selectedTitle || "Scholarly Document"}
              </h4>
              <p className="text-xs text-white/50">Sheikh Muhammed Hamdu Official Archive</p>
            </div>
            
            <div className="flex items-center gap-2">
              <a
                href={selectedImage}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-sm transition-colors"
                title="Open raw image in new tab"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
              <button 
                className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-sm transition-colors"
                onClick={() => setSelectedImage(null)}
                title="Close (Esc)"
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
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white/80 hover:text-white transition-all shadow-md"
                title="Previous Document"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {currentIndex < allImages.length - 1 && (
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white/80 hover:text-white transition-all shadow-md"
                title="Next Document"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}
          </div>

          {/* Bottom count */}
          <div className="mt-3 text-xs text-white/40">
            Document {currentIndex + 1} of {allImages.length} • Press Esc to close
          </div>
        </div>
      )}
    </section>
  );
}
