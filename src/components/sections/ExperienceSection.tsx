import { positions } from "@/lib/data";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function ExperienceSection() {
  const sortedPositions = [...positions].sort((a, b) => parseInt(b.startDate) - parseInt(a.startDate));

  return (
    <section className="bg-ivory py-20 lg:py-32">
      <div className="container mx-auto px-4 max-w-4xl">
        <AnimatedSection className="flex items-center gap-4 mb-16">
          <span className="text-gold font-heading text-xl font-bold">05</span>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary">Teaching & Service</h2>
        </AnimatedSection>

        <div className="flex flex-col gap-12">
          {sortedPositions.map((pos, idx) => (
            <AnimatedSection key={pos.id} delay={idx * 0.1} className="relative pl-8 border-l-2 border-green-deep/20 pb-4 last:pb-0">
              <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-green-deep"></div>
              
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
                <h3 className="font-heading text-2xl font-bold text-primary">{pos.organization}</h3>
                {pos.current && (
                  <span className="bg-green-deep/10 text-green-deep text-xs font-bold px-2 py-1 rounded-sm uppercase tracking-wider">
                    Current
                  </span>
                )}
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm text-secondary font-medium mb-4">
                <span className="text-primary">{pos.role}</span>
                <span className="hidden sm:inline text-border">•</span>
                <span>{pos.startDate} — {pos.endDate || 'Present'}</span>
                <span className="hidden sm:inline text-border">•</span>
                <span>{pos.location}</span>
              </div>
              
              <p className="text-primary leading-relaxed">
                {pos.description}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
