import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { skillIds } from "./data/skills";

const projects = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
	schema: ({ image }) =>
		z
			.object({
				title: z.string(),
				// Short description: project cards, CV list and meta description.
				summary: z.string().max(200),
				date: z.coerce.date(),
				// Methodology: the steps you took, one short line each.
				methodology: z.array(z.string()).min(2).max(6),
				// Tools used, free text.
				stack: z.array(z.string()).min(1),
				// CV skills this project demonstrates (ids from src/data/skills.ts).
				skills: z.array(z.enum(skillIds)).default([]),
				featured: z.boolean().default(false),
				repo: z.url().optional(),
				demo: z.url().optional(),
				cover: image().optional(),
				coverAlt: z.string().optional(),
				// Drafts render in `npm run dev` but are left out of the build.
				draft: z.boolean().default(false),
			})
			.refine((p) => !p.cover || p.coverAlt, {
				message: "coverAlt is required when cover is set",
				path: ["coverAlt"],
			}),
});

export const collections = { projects };
