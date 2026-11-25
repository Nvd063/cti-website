import {
  Headset,
  ArrowUpRight,
} from "lucide-react";

import { generateWhatsAppLink } from "@/lib/whatsapp";

export default function BlogCTA() {
  const whatsappLink = generateWhatsAppLink({
    customMessage:
      "Hello CTI System & Solutions, I would like to discuss my technical requirements with your team. Please guide me.",
  });

  return (
    <section className="bg-white py-6 sm:py-9">

      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">

        <div className="relative isolate overflow-hidden rounded-[20px] border border-white/10 bg-gradient-to-br from-[#0b162c] to-[#203164] p-5 text-white sm:p-7">

          <div
            aria-hidden="true"
            className="absolute -right-10 -top-20 h-52 w-52 rounded-full bg-red-600/20 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:35px_35px]"
          />

          <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

            <div className="flex items-center gap-4">

              <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/30 bg-white/10 shadow-inner backdrop-blur-xl sm:flex">

                <Headset size={27} />

              </div>

              <div>

                <h2 className="text-xl font-bold tracking-tight sm:text-2xl lg:text-3xl">
                  Need Expert Guidance?
                </h2>

                <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
                  Connect with our technical team to discuss
                  your project requirements.
                </p>

              </div>

            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] shrink-0 items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-xs font-semibold text-white transition-colors hover:bg-red-700 sm:self-start lg:self-auto"
            >
              Contact Our Team

              <ArrowUpRight size={16} />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}