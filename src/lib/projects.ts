import { getCollection } from "astro:content";

/** All publishable projects, newest first. Drafts are included only in dev. */
export async function getProjects() {
	const all = await getCollection("projects", (p) => import.meta.env.DEV || !p.data.draft);
	return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const formatDate = (date: Date, month: "short" | "long" = "short") =>
	new Intl.DateTimeFormat("en-GB", { year: "numeric", month }).format(date);
