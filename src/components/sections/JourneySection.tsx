"use client";
import { education } from "@/lib/data";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function JourneySection() {
  const sortedEducation = [...education].sort((a, b) => b.startYear - a.startYear);
  const hasCurrent = sortedEducation.some(edu => edu.current);

  return (
    <section className="bg-card py-20 lg:py-32 border-b border-border">
      <div className="container mx-auto px-4 max-w-4xl">
        <AnimatedSection className="flex items-center justify-center gap-4 mb-20">
          <span className="text-gold font-heading text-xl font-bold">02</span>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary">Educational Journey</h2>
        </AnimatedSection>

        <div className="relative">
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-border lg:-translate-x-1/2"></div>

          {hasCurrent && (
            <AnimatedSection className="relative z-10 flex justify-start lg:justify-center mb-12">
              <div className="bg-ivory border border-border px-4 py-1 text-sm font-medium text-primary absolute left-0 lg:static ml-[1.625rem] lg:ml-0 translate-y-[-50%] lg:translate-y-0">
                Present
              </div>
            </AnimatedSection>
          )}

          <div className="flex flex-col gap-12">
            {sortedEducation.map((edu, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <AnimatedSection 
                  key={edu.id} 
                  className={`relative flex flex-col lg:flex-row items-start ${isEven ? 'lg:flex-row-reverse' : ''}`}
                  delay={idx * 0.1}
                >
                  <div className={`absolute left-8 lg:left-1/2 w-16 h-16 rounded-full bg-ivory border border-gold flex items-center justify-center -translate-x-1/2 z-10 shrink-0 shadow-sm mt-0 lg:mt-0`}>
                    <span className="text-gold font-bold text-sm">
                      {edu.current ? edu.startYear : edu.endYear}
                    </span>
                  </div>

                  <div className={`w-full lg:w-1/2 pl-24 lg:pl-0 ${isEven ? 'lg:pr-16 text-left lg:text-right' : 'lg:pl-16 text-left'}`}>
                    <div className="pt-2">
                      <h3 className="font-heading text-xl font-bold text-primary mb-1">{edu.institution}</h3>
                      {edu.institutionArabic && (
                        <p className="font-arabic text-green-deep mb-2">{edu.institutionArabic}</p>
                      )}
                      <p className="font-medium text-secondary mb-1">{edu.program} in {edu.field}</p>
                      <p className="text-sm text-secondary mb-3">{edu.location}</p>
                      {edu.description && (
                        <p className="text-primary text-sm leading-relaxed">{edu.description}</p>
                      )}
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
