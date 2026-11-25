import "server-only";

import { aboutData } from "@/data/about";

import type { AboutPageData } from "@/types/about";

export async function getAboutPageData(): Promise<AboutPageData> {
  return {
    ...aboutData,

    stats: aboutData.stats
      .filter((stat) => stat.isVisible)
      .sort((a, b) => a.sortOrder - b.sortOrder),

    principles: aboutData.principles
      .filter((principle) => principle.isVisible)
      .sort((a, b) => a.sortOrder - b.sortOrder),

    team: aboutData.team
      .filter((member) => member.isVisible)
      .sort((a, b) => a.sortOrder - b.sortOrder),
  };
}

export async function getAboutPageSEO() {
  return aboutData.seo;
}