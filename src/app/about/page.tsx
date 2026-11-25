import type { Metadata } from "next";

import AboutHero from "@/components/about/AboutHero";
import CompanyStats from "@/components/about/CompanyStats";
import CEOMessage from "@/components/about/CEOMessage";
import MissionVisionValues from "@/components/about/MissionVisionValues";
import LeadershipTeam from "@/components/about/LeadershipTeam";
import AboutCTA from "@/components/about/AboutCTA";

import {
  getAboutPageData,
  getAboutPageSEO,
} from "@/services/about.service";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getAboutPageSEO();

  return {
    title: seo.title,

    description: seo.description,

    openGraph: {
      title: seo.title,
      description: seo.description,
      type: "website",
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function AboutPage() {
  const data = await getAboutPageData();

  return (
    <main className="min-h-screen bg-white">

      {/* Cinematic hero */}

      {data.sections.hero && (
        <AboutHero data={data.hero} />
      )}

      {/* Floating liquid glass statistics */}

      {data.sections.stats && (
        <CompanyStats
          stats={data.stats}
          overlapHero={data.sections.hero}
        />
      )}

      {/* CEO message */}

      {data.sections.ceo && (
        <CEOMessage data={data.ceo} />
      )}

      {/* Mission, vision and values */}

      {data.sections.principles && (
        <MissionVisionValues
          principles={data.principles}
        />
      )}

      {/* Leadership team */}

      {data.sections.team && (
        <LeadershipTeam team={data.team} />
      )}

      {/* Contact CTA */}

      {data.sections.cta && (
        <AboutCTA data={data.cta} />
      )}

    </main>
  );
}