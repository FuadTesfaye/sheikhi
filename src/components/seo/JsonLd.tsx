import { siteConfig, lectures, education, positions } from "@/lib/data";

export function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/#person`,
    name: "فضيلة الشيخ محمد حمدو رشو",
    alternateName: [
      siteConfig.arabicName,
      siteConfig.fullName,
      siteConfig.name,
      "ሼኽ ሙሐመድ ሐምዱ ረሾ",
      "Sheikh Muhammed Hamdu",
      "Ustaz Mohamed Hamdu"
    ],
    url: siteConfig.url,
    image: `${siteConfig.url}/portrait.jpg`,
    jobTitle: [
      "عالم وباحث إسلامي في أصول الفقه",
      "رئيس أئمة أديس أبابا ومدينة شغر",
      "رئيس مجلس علماء محافظة لمي كرى",
      "عضو المجلس الأعلى للشؤون الإسلامية بأديس أبابا",
      "إمام وخطيب مسجد أبي بكر الصديق",
      "Islamic Scholar & Usul al-Fiqh Researcher",
      "Chairman of the Imams of Addis Ababa & Sheger",
      "Chairman of the Ulama Council of Lemi Kura Sub-City"
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
      siteConfig.social.whatsapp,
      siteConfig.social.youtube,
      siteConfig.social.tiktok,
      siteConfig.social.telegram,
      siteConfig.social.facebook
    ],
    description:
      "الموقع الرسمي لفضيلة الشيخ محمد حمدو رشو — عالم وباحث ومدرس إسلامي، رئيس أئمة أديس أبابا ومدينة شغر، ورئيس مجلس علماء محافظة لمي كرى، وعضو المجلس الأعلى للشؤون الإسلامية بأديس أبابا، وإمام وخطيب مسجد أبي بكر الصديق، وباحث الدكتوراه في أصول الفقه."
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
