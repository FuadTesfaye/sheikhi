import { siteConfig, lectures, education, positions } from "@/lib/data";

export function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/#person`,
    name: siteConfig.fullName,
    alternateName: [
      siteConfig.name,
      siteConfig.arabicName,
      "ሼኽ ሙሐመድ ሐምዱ ረሾ",
      "Sheikh Muhammed Hamdu",
      "Ustaz Mohamed Hamdu"
    ],
    url: siteConfig.url,
    image: `${siteConfig.url}/portrait.jpg`,
    jobTitle: [
      "Islamic Scholar",
      "Imam & Khateeb of Masjid Abu Bakr",
      "Teacher of Islamic Jurisprudence"
    ],
    worksFor: {
      "@type": "Mosque",
      name: "Masjid Abu Bakr",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Addis Ababa",
        addressCountry: "ET"
      }
    },
    alumnusOf: [
      {
        "@type": "EducationalOrganization",
        name: "Islamic University of Minnesota"
      },
      {
        "@type": "EducationalOrganization",
        name: "Imamu Al-Shafi Islamic College"
      },
      {
        "@type": "EducationalOrganization",
        name: "Arab League ALECSO & Khartoum International Institute"
      }
    ],
    memberOf: {
      "@type": "Organization",
      name: "Ethiopian Islamic Affairs Supreme Council"
    },
    sameAs: [
      siteConfig.social.youtube,
      siteConfig.social.tiktok,
      siteConfig.social.telegram,
      siteConfig.social.facebook
    ],
    description: siteConfig.shortBio
  };

  const breadcrumbsSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Lectures Archive",
        item: `${siteConfig.url}/lectures`
      }
    ]
  };

  const videoSchemas = lectures.slice(0, 6).map((l) => ({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: l.title,
    description: l.description,
    thumbnailUrl: [
      `https://img.youtube.com/vi/${l.youtubeId}/maxresdefault.jpg`,
      `https://img.youtube.com/vi/${l.youtubeId}/hqdefault.jpg`
    ],
    uploadDate: `${l.date}T00:00:00+03:00`,
    embedUrl: `https://www.youtube.com/embed/${l.youtubeId}`,
    publisher: {
      "@type": "Person",
      name: siteConfig.fullName,
      url: siteConfig.url
    }
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
      {videoSchemas.map((v, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(v) }}
        />
      ))}
    </>
  );
}
