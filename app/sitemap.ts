import { MetadataRoute } from "next"
import { getAllProjectSlugs } from "@/data/projects-data"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.afrinexel.co.za"
  const workSlugs = getAllProjectSlugs()

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${base}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/work`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...workSlugs.map((slug) => ({
      url: `${base}/work/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    {
      url: `${base}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ]
}
