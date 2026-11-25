import { contactConfig } from "@/config/contact";

interface WhatsAppInquiry {
  service?: string;
  solution?: string;

  product?: string;
  category?: string;
  model?: string;
  sku?: string;

  customMessage?: string;
}

export function generateWhatsAppLink({
  service,
  solution,
  product,
  category,
  model,
  sku,
  customMessage,
}: WhatsAppInquiry): string {
  const message =
    customMessage?.trim() ||
    [
      `Hello ${contactConfig.companyName},`,
      "",

      product
        ? "I am interested in the following product:"
        : service
          ? "I am interested in the following solution:"
          : "I would like to discuss my requirements.",

      "",

      ...(service ? [`Service: ${service}`] : []),

      ...(solution ? [`Solution: ${solution}`] : []),

      ...(product ? [`Product: ${product}`] : []),

      ...(category ? [`Category: ${category}`] : []),

      ...(model ? [`Model: ${model}`] : []),

      ...(sku ? [`SKU: ${sku}`] : []),

      "",

      product
        ? "Please share product availability, pricing and further details."
        : "Please share further details and a quotation.",

      "",

      "Thank you.",
    ].join("\n");

  return `${contactConfig.whatsappBaseUrl}${contactConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}