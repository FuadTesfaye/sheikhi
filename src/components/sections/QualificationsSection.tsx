"use client";
import { useState } from "react";
import Image from "next/image";
import { qualifications, additionalCertificates } from "@/lib/data";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { X } from "lucide-react";

export function QualificationsSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="bg-ivory py-20 lg:py-32">
      <div className="container mx-auto px-4 max-w-6xl">
        <AnimatedSection className="flex items-center gap-4 mb-16">
          <span className="text-gold font-heading text-xl font-bold">03</span>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary">Qualifications & Certificates</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {qualifications.map((qual, idx) => (
            <AnimatedSection key={qual.id} delay={idx * 0.1} className="bg-card p-6 border border-border flex flex-col sm:flex-row gap-6">
              <div 
                className="w-full sm:w-1/3 aspect-[4/3] relative bg-gray-100 cursor-pointer overflow-hidden border border-border"
                onClick={() => setSelectedImage(qual.thumbnail)}
              >
                <div className="absolute inset-0 flex items-center justify-center text-xs text-secondary bg-gray-50">
                  Certificate Image
                </div>
                {qual.thumbnail && (
                   <Image src={qual.thumbnail} alt={qual.title} fill className="object-cover hover:scale-105 transition-transform duration-300" />
                )}
              </div>
              <div className="flex-1">
                <h3 className="font-heading text-xl font-bold text-primary mb-2">{qual.title}</h3>
                <p className="text-secondary font-medium mb-1">{qual.issuer}</p>
                <p className="text-sm text-secondary mb-3">{qual.date}</p>
                {qual.description && (
                  <p className="text-sm text-primary leading-relaxed">{qual.description}</p>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>

        {additionalCertificates.length > 0 && (
          <AnimatedSection delay={0.4}>
            <h3 className="font-heading text-xl font-bold text-primary mb-6">Additional Certificates</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {additionalCertificates.map((cert, idx) => (
                <div 
                  key={idx} 
                  className="aspect-[4/3] relative bg-card border border-border cursor-pointer hover:border-gold transition-colors"
                  onClick={() => setSelectedImage(cert)}
                >
                  <div className="absolute inset-0 flex items-center justify-center text-xs text-secondary text-center px-2">
                    {cert.split('/').pop() || 'Certificate'}
                  </div>
                  {cert && (
                    <Image src={cert} alt={`Certificate ${idx + 1}`} fill className="object-cover opacity-0 hover:opacity-100 transition-opacity" />
                  )}
                </div>
              ))}
            </div>
          </AnimatedSection>
        )}
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-dark/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative w-full max-w-4xl aspect-[4/3] bg-card" onClick={e => e.stopPropagation()}>
            <div className="absolute inset-0 flex items-center justify-center text-secondary bg-gray-100">
               Image Display: {selectedImage}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
