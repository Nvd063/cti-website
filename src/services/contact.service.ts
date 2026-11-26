import "server-only";

import { contactPageData } from "@/data/contact";
import type { ContactPageData } from "@/types/contact";

export async function getContactPageData(): Promise<ContactPageData> {
  return {
    ...contactPageData,

    channels: contactPageData.channels.filter(
      (channel) => channel.enabled && channel.href
    ),

    offices: contactPageData.offices
      .filter((office) => office.enabled)
      .sort((a, b) => a.sortOrder - b.sortOrder),
  };
}