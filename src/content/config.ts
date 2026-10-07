import { defineCollection, z } from "astro:content";

const work = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
  }),
});

const certifications = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    imgUrls: z.array(z.string()),
    tags: z.array(z.string()),
    draft: z.boolean().optional(),
  }),
});

const courses = defineCollection({
  type: "content",
  schema: z.object({
    startDate: z.string(),
    endDate: z.string(),
    duration: z.string(),
    degree: z.string(),
    institute: z.string(),
    description: z.string().optional(),
    courses: z.array(z.string()).optional(),
    location: z.string(),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    draft: z.boolean().optional(),
    repoUrl: z.string().optional(),
    category: z.enum([
      "backend",
      "frontend",
      "systems",
      "networking",
      "architecture",
      "design-patterns",
      "fundamentals",
      "low-level",
      "distributed-systems",
      "algorithms",
      "tools",
    ]),
  }),
});

export const collections = { work, courses, certifications, projects };
