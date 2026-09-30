"use client";
import { lectures, siteConfig } from "@/lib/data";
import { getYouTubeEmbedUrl, getYouTubeThumbnail } from "@/lib/utils";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { YoutubeIcon } from "@/components/ui/Icons";
import Image from "next/image";

export function FeaturedLecturesSection() {
  const featuredLectures = lectures.filter(l => l.featured).slice(0, 3);
  const remainingLectures = lectures.filter(l => !l.featured);

  return (
    <section id="lectures" className="bg-card py-20 lg:py-32 border-y border-border">
      <div className="container mx-auto px-4 max-w-6xl">
        <AnimatedSection className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="flex items-center gap-4">
            <span className="text-gold font-heading text-xl font-bold">06</span>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary">Lectures & Lessons</h2>
          </div>
          <p className="text-secondary max-w-md lg:text-right">
            Selected recordings from various series, explaining classical texts and contemporary issues.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {featuredLectures.map((lecture, idx) => (
            <AnimatedSection key={lecture.id} delay={idx * 0.1} className="flex flex-col">
              <div className="aspect-video relative mb-4 bg-gray-100">
                <iframe
                  src={getYouTubeEmbedUrl(lecture.youtubeId)}
                  title={lecture.title}
                  className="absolute inset-0 w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-gold uppercase tracking-wider">{lecture.category}</span>
                <span className="text-border">•</span>
                <span className="text-xs text-secondary">{lecture.date}</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-primary mb-2 line-clamp-2">{lecture.title}</h3>
              <p className="text-sm text-secondary line-clamp-3">{lecture.description}</p>
            </AnimatedSection>
          ))}
        </div>

        {remainingLectures.length > 0 && (
          <AnimatedSection delay={0.3} className="grid md:grid-cols-2 gap-6 pt-12 border-t border-border">
            {remainingLectures.map(lecture => (
              <div key={lecture.id} className="flex gap-4">
                <div className="w-1/3 aspect-video relative bg-gray-100 shrink-0">
                  <Image 
                    src={getYouTubeThumbnail(lecture.youtubeId, 'medium')} 
                    alt={lecture.title}
                    fill
                    className="object-cover"
                  />
                  <a 
                    href={`https://youtube.com/watch?v=${lecture.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/10 transition-colors"
                  >
                    <YoutubeIcon className="w-8 h-8 text-white" />
                  </a>
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="font-heading font-bold text-primary mb-1 line-clamp-2 text-sm">{lecture.title}</h4>
                  <span className="text-xs text-secondary mb-2">{lecture.date}</span>
                  <a 
                    href={`https://youtube.com/watch?v=${lecture.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-green-deep font-medium hover:underline flex items-center gap-1"
                  >
                    Watch on YouTube
                  </a>
                </div>
              </div>
            ))}
          </AnimatedSection>
        )}

        <AnimatedSection delay={0.4} className="mt-16 flex justify-center">
          <a 
            href={siteConfig.social.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border border-primary text-primary font-medium hover:bg-primary/5 transition-colors"
          >
            <YoutubeIcon className="w-5 h-5" />
            View All on YouTube
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
