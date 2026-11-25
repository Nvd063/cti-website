import { contactConfig } from "@/config/contact";

interface WhatsAppInquiry {
  service: string;
  solution?: string;
  customMessage?: string;
}

export function generateWhatsAppLink({
  service,
  solution,
  customMessage,
}: WhatsAppInquiry): string {
  const message =
    customMessage?.trim() ||
    [
      `Hello ${contactConfig.companyName},`,
      "",
      "I am interested in the following solution:",
      "",
      `Service: ${service}`,
      ...(solution ? [`Solution: ${solution}`] : []),
      "",
      "Please share further details and a quotation.",
      "",
      "Thank you.",
    ].join("\n");

  return `${contactConfig.whatsappBaseUrl}${contactConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}