// The skills shown on the CV, taken from public/cv.pdf. Projects reference these ids in
// their `skills` frontmatter, so each skill on /cv/ links to the projects that show it.

export const skills = [
	{ id: "python", label: "Python", group: "data", note: "automation, web scraping, API integrations" },
	{ id: "sql", label: "SQL / SQLite", group: "data" },
	{ id: "data-integration", label: "Multi-source data integration", group: "data" },
	{ id: "ai-tools", label: "AI tools", group: "data", note: "daily, for analysis and automation" },
	{ id: "looker-studio", label: "Looker Studio", group: "bi", note: "multi-page, multi-source dashboards" },
	{ id: "sheets-excel", label: "Google Sheets and Excel", group: "bi", note: "advanced" },
	{ id: "power-bi", label: "Power BI", group: "bi", note: "building up now" },
	{ id: "kpi-tracking", label: "KPI tracking", group: "analytics" },
	{ id: "campaign-analysis", label: "Campaign performance analysis", group: "analytics" },
	{ id: "trend-anomaly", label: "Trend and anomaly analysis", group: "analytics" },
	{ id: "stakeholder-reporting", label: "Stakeholder reporting", group: "analytics" },
] as const;

export type SkillId = (typeof skills)[number]["id"];

export const skillIds = skills.map((s) => s.id) as [SkillId, ...SkillId[]];

export const skillGroups = [
	{ id: "data", label: "Data and automation" },
	{ id: "bi", label: "BI and reporting" },
	{ id: "analytics", label: "Analytics" },
] as const;
