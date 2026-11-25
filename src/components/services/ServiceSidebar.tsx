import Link from "next/link";
import {
  ArrowUpRight,
  ChevronRight,
  Phone,
  MessageCircle,
} from "lucide-react";
import type { Service } from "@/types/service";
import { contactConfig } from "@/config/contact";
import { generateWhatsAppLink } from "@/lib/whatsapp";

interface ServiceSidebarProps {
  services: Service[];
  currentService: Service;
}

export default function ServiceSidebar({
  services,
  currentService,
}: ServiceSidebarProps) {
  return (
    <aside className="min-w-0 lg:sticky lg:top-28 lg:self-start">

      {/* SERVICES NAVIGATION */}

      <div className="rounded-2xl border border-slate-200 bg-[#f1f3f6] p-3 sm:p-4">

        <div className="mb-4 px-2 pt-2">

          <span className="text-[10px] font-bold uppercase tracking-widest text-red-600">
            Our Expertise
          </span>

          <h2 className="mt-1 text-lg font-bold text-[#08152d]">
            Explore Services
          </h2>

        </div>

        <nav
          aria-label="Service navigation"
          className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0"
        >

          {services.map((service) => {
            const isActive =
              service.slug === currentService.slug;

            return (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                aria-current={isActive ? "page" : undefined}
                className={`group flex shrink-0 items-center justify-between gap-3 rounded-xl px-3 py-3.5 text-xs font-semibold transition-colors lg:shrink ${
                  isActive
                    ? "bg-[#203164] text-white shadow-md"
                    : "bg-white text-[#08152d] hover:bg-slate-200"
                }`}
              >

                <span>{service.name}</span>

                <ChevronRight
                  size={15}
                  className={`shrink-0 ${
                    isActive ? "text-white" : "text-red-600"
                  }`}
                />

              </Link>
            );
          })}

        </nav>

      </div>

      {/* CONTACT PANEL */}

      <div className="relative mt-4 hidden overflow-hidden rounded-2xl bg-[#08152d] p-5 text-white lg:block">

        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-500/10 blur-2xl" />

        <div className="relative">

          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/10">

            <Phone size={18} className="text-red-500" />

          </span>

          <h3 className="mt-4 text-xl font-bold">
            Need Assistance?
          </h3>

          <p className="mt-2 text-xs leading-relaxed text-slate-400">
            Discuss your project requirements with our team.
          </p>

          <a
            href={`tel:${contactConfig.phoneLink}`}
            className="mt-4 block text-base font-bold transition-colors hover:text-red-500"
          >
            {contactConfig.phone}
          </a>

          <a
            href={generateWhatsAppLink({
              service: currentService.title,
            })}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex items-center justify-between gap-2 rounded-xl bg-red-600 px-3 py-3 text-xs font-semibold transition-colors hover:bg-red-700"
          >
            <MessageCircle size={16} />

            <span>Chat With Our Team</span>

            <ArrowUpRight size={15} />
          </a>

        </div>

      </div>

    </aside>
  );
}