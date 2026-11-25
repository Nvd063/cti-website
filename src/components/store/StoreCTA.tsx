import {
  ArrowUpRight,
  MessageCircle,
  Phone,
} from "lucide-react";

import { contactConfig } from "@/config/contact";
import { generateWhatsAppLink } from "@/lib/whatsapp";

export default function StoreCTA() {
  const whatsappLink = generateWhatsAppLink({
    customMessage:
      "Hello CTI System & Solutions, I need assistance selecting products for my project. Please guide me.",
  });

  return (
    <section className="bg-[#f5f7fa] pb-6 sm:pb-10">

      <div className="mx-auto max-w-[1600px] px-3 sm:px-6 lg:px-10">

        <div className="relative isolate overflow-hidden rounded-2xl bg-gradient-to-br from-[#08152d] to-[#203164] px-4 py-5 text-white sm:px-8 sm:py-8">

          {/* Background */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:40px_40px]"
          />

          <div className="pointer-events-none absolute -right-16 -top-28 h-[280px] w-[280px] rounded-full border border-white/10" />

          {/* Content */}

          <div className="relative flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <div className="mb-2 flex items-center gap-2">

                <span className="h-[2px] w-6 bg-red-600" />

                <span className="text-[9px] font-bold uppercase tracking-widest text-red-500">
                  Expert Assistance
                </span>

              </div>

              <h2 className="text-xl font-bold tracking-tight sm:text-3xl">
                Need Help Choosing?
                <span className="text-red-500">.</span>
              </h2>

              <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
                Connect with our team for product recommendations
                and quotations.
              </p>

            </div>

            {/* Buttons */}

            <div className="flex flex-wrap gap-2 sm:gap-3">

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-red-600 px-4 py-2.5 text-[11px] font-semibold transition hover:bg-red-700 sm:px-5 sm:text-xs"
              >
                <MessageCircle size={15} />

                Request a Quote

                <ArrowUpRight size={13} />
              </a>

              <a
                href={`tel:+${contactConfig.whatsapp}`}
                className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-[11px] font-semibold transition hover:bg-white/20 sm:px-5 sm:text-xs"
              >
                <Phone size={14} />

                Call Our Team
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}