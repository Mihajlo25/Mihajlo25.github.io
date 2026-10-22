// CV entries for /cv/. Empty lists show a TODO reminder in dev and are hidden in the build.
// Source: public/cv.pdf. Keep both in sync when either changes.

export type CvEntry = {
	title: string; // role or degree
	org: string; // employer or school
	start: string; // e.g. "Apr 2023"
	end?: string; // omit for current
	points?: string[]; // short, concrete outcomes
};

// Newest first.
export const experience: CvEntry[] = [
	{
		title: "Senior Data Analyst",
		org: "Better Collective",
		start: "Aug 2025",
		points: [
			"Design and deliver the data behind Digital PR campaigns: collection, analysis and dashboards used by journalists, with media coverage across the US, Canada, Europe and South America.",
			"My projects deliver up to 10–15% of the team’s most important monthly KPIs in peak months, and helped the team exceed its monthly targets.",
			"Built modular, multi-stage Python pipelines (APIs and web sources) with SQLite storage, feeding Google Sheets and Looker. One run collects 500K+ ticket prices for a full season of ~30 teams in 2–4 hours.",
			"Automated multi-source social media data collection, replacing several days of manual work per project, and built in-house collection tools in place of paid third-party ones.",
			"Build multi-page, multi-source Looker dashboards for the PR team and journalists.",
			"Mentor junior analysts and maintain reporting and data-quality standards across the team.",
		],
	},
	{
		title: "Data Analyst",
		org: "Better Collective",
		start: "Jul 2024",
		end: "Aug 2025",
		points: [
			"Automated recurring reporting workflows and data tasks in Python.",
			"Combined and cleaned data from multiple sources into interactive Looker dashboards for performance tracking.",
			"Extracted insights from diverse datasets to support campaign decisions and KPI tracking.",
			"Improved reporting consistency and data reliability through structured validation.",
		],
	},
	{
		title: "Junior Data Analyst",
		org: "Better Collective",
		start: "Apr 2023",
		end: "Jun 2024",
		points: [
			"Collected, structured and prepared sports datasets for analysis in Google Sheets.",
			"Built reporting foundations in Looker and spreadsheets in a fast-paced, international team.",
		],
	},
];

export const education: CvEntry[] = [
	{
		title: "Bachelor of Software Engineering",
		org: "Singidunum University, Niš",
		start: "2018",
		end: "2022",
	},
];

export const languages: { name: string; level: string }[] = [
	{ name: "Serbian", level: "native" },
	{ name: "English", level: "fluent" },
];
