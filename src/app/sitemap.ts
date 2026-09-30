import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://shaikhmohamedhamdurasho.pro.et";
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: {
        languages: {
          ar: `${baseUrl}?lang=ar`,
          en: `${baseUrl}?lang=en`,
          am: `${baseUrl}?lang=am`,
        },
      },
    },
    {
      url: `${baseUrl}/lectures`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
      alternates: {
        languages: {
          ar: `${baseUrl}/lectures?lang=ar`,
          en: `${baseUrl}/lectures?lang=en`,
          am: `${baseUrl}/lectures?lang=am`,
        },
      },
    },
  ];
}
