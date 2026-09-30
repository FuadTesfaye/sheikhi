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
          en: `${baseUrl}?lang=en`,
          ar: `${baseUrl}?lang=ar`,
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
          en: `${baseUrl}/lectures?lang=en`,
          ar: `${baseUrl}/lectures?lang=ar`,
          am: `${baseUrl}/lectures?lang=am`,
        },
      },
    },
  ];
}
