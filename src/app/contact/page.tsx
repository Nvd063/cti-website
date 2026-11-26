import type { Metadata } from "next";

import ContactHero from "@/components/contact/ContactHero";
import ContactChannels from "@/components/contact/ContactChannels";
import ContactForm from "@/components/contact/ContactForm";
import ContactOffices from "@/components/contact/ContactOffices";
import ContactCTA from "@/components/contact/ContactCTA";

import {
  getContactPageData,
} from "@/services/contact.service";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getContactPageData();

  return {
    title: data.seo.title,
    description: data.seo.description,

    openGraph: {
      title: data.seo.title,
      description: data.seo.description,
      type: "website",
      images: [
        {
          url: data.hero.image,
          width: 1920,
          height: 900,
          alt: "CTI System & Solutions Contact",
        },
      ],
    },
  };
}

export default async function ContactPage() {
  const data = await getContactPageData();

  return (
    <main className="min-h-screen bg-white">

      <ContactHero hero={data.hero} />

      <ContactChannels
        channels={data.channels}
      />

      <ContactForm
        services={data.services}
        whatsapp={data.whatsapp}
      />

      <ContactOffices
        offices={data.offices}
      />

      <ContactCTA
        whatsapp={data.whatsapp}
      />

    </main>
  );
}