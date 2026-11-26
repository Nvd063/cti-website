"use client";

import {
  ArrowUpRight,
  MessageCircle,
  Phone,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { contactConfig } from "@/config/contact";
import { generateWhatsAppLink } from "@/lib/whatsapp";

interface ServiceCTAProps {
  serviceTitle?: string;
}

export default function ServiceCTA({
  serviceTitle = "Integrated Technology Solutions",
}: ServiceCTAProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-white px-4 py-8 sm:px-6 lg:px-10 lg:py-12">

      <motion.div
        initial={
          reduceMotion ? false : { opacity: 0, y: 20 }
        }
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: reduceMotion ? 0 : 0.6,
        }}
        className="relative isolate mx-auto max-w-[1360px] overflow-hidden rounded-[24px] bg-[#08152d] px-6 py-9 text-white sm:px-9 lg:px-12 lg:py-12"
      >

        {/* BACKGROUND */}

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#08152d] to-[#203164]" />

        <div className="absolute -right-20 -top-32 -z-10 h-[400px] w-[400px] rounded-full border border-white/10" />

        <div className="absolute -right-8 -top-20 -z-10 h-[300px] w-[300px] rounded-full border border-white/10" />

        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="grid items-center gap-7 lg:grid-cols-[1.5fr_1fr]">

          <div>

            <div className="mb-4 flex items-center gap-3">

              <span className="h-[3px] w-8 bg-red-600" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-500">
                Lets Work Together
              </span>

            </div>

            <h2 className="text-[28px] font-bold leading-tight tracking-tight sm:text-[36px] lg:text-[42px]">

              Your Requirements.

              <span className="block text-red-500">
                Our Expertise.
              </span>

            </h2>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300">
              Discuss your project with our team and discover
              the right technology solution for your infrastructure.
            </p>

          </div>

          {/* CONTACT ACTIONS */}

          <div className="flex flex-wrap gap-3 lg:justify-end">

            <a
              href={generateWhatsAppLink({
                service: serviceTitle,
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-3.5 text-xs font-semibold transition-colors hover:bg-red-700 sm:text-sm"
            >

              <MessageCircle size={17} />

              Request a Quote

              <ArrowUpRight size={16} />

            </a>

            <a
              href={`tel:${contactConfig.phoneLink}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3.5 text-xs font-semibold backdrop-blur-md transition-colors hover:bg-white/15 sm:text-sm"
            >

              <Phone size={16} />

              Call Our Team

            </a>

          </div>

        </div>

      </motion.div>

    </section>
  );
}