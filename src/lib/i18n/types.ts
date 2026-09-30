export type Language = "en" | "ar" | "am";
export type Direction = "ltr" | "rtl";

export interface Translations {
  nav: {
    about: string;
    journey: string;
    qualifications: string;
    teaching: string;
    experience: string;
    lectures: string;
    archive: string;
    reminders: string;
    contact: string;
  };
  hero: {
    officialTitle: string;
    arabicName: string;
    amharicName: string;
    englishName: string;
    headline: string;
    imamsLeaderTitle: string;
    supremeCouncilTitle: string;
    ulamaChairmanTitle: string;
    woredaViceChairTitle: string;
    shortBio: string;
    watchLectures: string;
    learnAboutHim: string;
    officialChannels: string;
    locationSubtitle: string;
  };
  about: {
    sectionNum: string;
    title: string;
    quoteCallout: string;
    bioParagraphs: string[];
    teachingAreasTitle: string;
  };
  journey: {
    sectionNum: string;
    title: string;
    present: string;
    items: Array<{
      id: number;
      year: string;
      institution: string;
      degree: string;
      location: string;
      description: string;
    }>;
  };
  qualifications: {
    sectionNum: string;
    title: string;
    subtitle: string;
    verifiedBadge: string;
    inspectDoc: string;
    archiveTitle: string;
    archiveSubtitle: string;
    recordsCount: string;
    viewScan: string;
    modalHeader: string;
    modalSubtitle: string;
    docCounter: string;
    closeEsc: string;
    categories?: {
      all: string;
      academic: string;
      ijazah: string;
      training: string;
      research: string;
      archive: string;
    };
    items: Array<{
      id: number;
      title: string;
      issuer: string;
      date: string;
      description: string;
    }>;
  };
  teaching: {
    sectionNum: string;
    title: string;
    items: Array<{
      id: number;
      name: string;
      nameArabic: string;
      description: string;
    }>;
  };
  experience: {
    sectionNum: string;
    title: string;
    currentBadge: string;
    items: Array<{
      id: number;
      role: string;
      organization: string;
      dates: string;
      location: string;
      description: string;
    }>;
  };
  lectures: {
    sectionNum: string;
    title: string;
    subtitle: string;
    filterAll: string;
    nowPlaying: string;
    playOnSite: string;
    playingAbove: string;
    openYouTube: string;
    subscribeChannel: string;
    showMore: string;
    showLess: string;
    exploreLibrary: string;
    searchPlaceholder: string;
    backToHome: string;
    archiveHeading: string;
    archiveSubtitle: string;
    noResults: string;
    resetFilters: string;
    lookingForMore: string;
    lookingForMoreDesc: string;
    visitChannel: string;
  };
  reminders: {
    sectionNum: string;
    title: string;
    subtitle: string;
    followTikTok: string;
    viewTikTok: string;
    tadhkirah: string;
    items: Array<{
      id: number;
      topic: string;
      title: string;
      description: string;
    }>;
  };
  quote: {
    text: string;
    translation: string;
    source: string;
  };
  contact: {
    sectionNum: string;
    title: string;
    subtitle: string;
    email: string;
    phone: string;
    location: string;
    followChannels: string;
    dossierTitle?: string;
    dossierSubtitle?: string;
    dossierBadge?: string;
    registry?: Array<{
      label: string;
      value: string;
    }>;
  };
  footer: {
    description: string;
    quickLinks: string;
    connect: string;
    rights: string;
    arabicRights: string;
  };
}
