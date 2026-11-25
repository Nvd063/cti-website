"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Layers3,
  ShieldCheck,
  Headphones,
  PackageCheck,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { generateWhatsAppLink } from "@/lib/whatsapp";

export default function StoreHero() {
  const reduceMotion = useReducedMotion();

  const whatsappLink = generateWhatsAppLink({
    customMessage:
      "Hello CTI System & Solutions, I would like to inquire about your products.",
  });

  return (
    <section className="relative isolate overflow-hidden bg-[#08152d] text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-[#08152d] via-[#14274b] to-[#203164]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff07_1px,transparent_1px),linear-gradient(to_bottom,#ffffff07_1px,transparent_1px)] bg-[size:48px_48px]"
      />

      <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-[1440px] px-5 pb-12 pt-28 sm:px-8 sm:pt-32 lg:px-12 lg:pb-16 lg:pt-36">

        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex items-center gap-2 text-xs text-slate-400 sm:text-sm"
        >
          <Link href="/" className="hover:text-white">
            Home
          </Link>

          <ChevronRight size={14} />

          <span aria-current="page" className="text-white">
            Store
          </span>
        </nav>

        <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">

          <motion.div
            initial={
              reduceMotion ? false : { opacity: 0, y: 24 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.65 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[3px] w-9 bg-red-600" />

              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-red-500">
                CTI Product Collection
              </span>
            </div>

            <h1 className="text-[36px] font-bold leading-[1.08] tracking-tight sm:text-[48px] lg:text-[64px]">
              Professional Products.
              <span className="mt-2 block text-slate-400">
                Intelligent
              </span>
              <span className="block">
                Solutions<span className="text-red-600">.</span>
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Explore professional safety, security, automation
              and infrastructure products for commercial,
              industrial and residential environments.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#product-catalog"
                className="inline-flex items-center gap-3 rounded-full bg-red-600 px-6 py-3.5 text-sm font-semibold transition hover:bg-red-700"
              >
                Explore Products
                <ArrowDownRight size={18} />
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold backdrop-blur-md transition hover:bg-white/15"
              >
                Talk to an Expert
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={
              reduceMotion ? false : { opacity: 0, scale: 0.96 }
            }
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: reduceMotion ? 0 : 0.8 }}
            className="rounded-[28px] border border-white/15 bg-white/[0.05] p-5 backdrop-blur-xl sm:p-7"
          >
            <div className="mb-5 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10">
                <Layers3 size={28} />
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-red-400">
                  Product Catalog
                </p>

                <h2 className="mt-1 text-xl font-bold">
                  Technology for Every Space
                </h2>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                {
                  icon: ShieldCheck,
                  title: "Safety & Security",
                  text: "Professional protection solutions",
                },
                {
                  icon: Layers3,
                  title: "Integrated Systems",
                  text: "Connected technology products",
                },
                {
                  icon: PackageCheck,
                  title: "Product Selection",
                  text: "Solutions for your requirements",
                },
                {
                  icon: Headphones,
                  title: "Expert Assistance",
                  text: "Direct product consultation",
                },
              ].map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                >
                  <Icon size={22} className="mb-3 text-red-500" />

                  <h3 className="text-sm font-semibold">
                    {title}
                  </h3>

                  <p className="mt-1 text-xs leading-relaxed text-slate-400">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-0 h-[3px] w-full bg-gradient-to-r from-red-600 to-transparent" />
    </section>
  );
}