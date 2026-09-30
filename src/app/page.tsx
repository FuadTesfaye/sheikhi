import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { JourneySection } from "@/components/sections/JourneySection";
import { QualificationsSection } from "@/components/sections/QualificationsSection";
import { TeachingSection } from "@/components/sections/TeachingSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { FeaturedLecturesSection } from "@/components/sections/FeaturedLecturesSection";
import { ShortRemindersSection } from "@/components/sections/ShortRemindersSection";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <JourneySection />
      <QualificationsSection />
      <TeachingSection />
      <ExperienceSection />
      <FeaturedLecturesSection />
      <ShortRemindersSection />
      <QuoteSection />
      <ContactSection />
    </>
  );
}
