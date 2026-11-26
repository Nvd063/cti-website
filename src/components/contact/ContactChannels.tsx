"use client";

import {
  Phone,
  Mail,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

import {
  motion,
  useReducedMotion,
} from "motion/react";

import type { ContactChannel } from "@/types/contact";

interface ContactChannelsProps {
  channels: ContactChannel[];
}

const icons = {
  phone: Phone,
  email: Mail,
  whatsapp: MessageCircle,
};

export default function ContactChannels({
  channels,
}: ContactChannelsProps) {
  const reduceMotion = useReducedMotion();

  if (!channels.length) return null;

  return (
    <section className="relative z-20 mx-auto -mt-7 max-w-[1440px] px-4 sm:-mt-10 sm:px-8 lg:px-12">

      <div
        className={`grid grid-cols-1 gap-3 sm:grid-cols-2 ${
          channels.length === 3 ? "lg:grid-cols-3" : ""
        }`}
      >
        {channels.map((channel, index) => {
          const Icon = icons[channel.icon];

          const external =
            channel.href.startsWith("https://");

          return (
            <motion.a
              key={channel.id}
              href={channel.href}
              target={external ? "_blank" : undefined}
              rel={
                external
                  ? "noopener noreferrer"
                  : undefined
              }
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 15 }
              }
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduceMotion ? 0 : 0.5,
                delay: reduceMotion ? 0 : index * 0.1,
              }}
              className="group relative isolate flex items-center gap-4 overflow-hidden rounded-2xl border border-white/40 bg-[#20344f]/85 p-4 text-white shadow-[0_12px_35px_rgba(11,22,44,0.18)] backdrop-blur-2xl transition hover:bg-[#20344f] sm:p-5"
            >

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/25 via-white/5 to-transparent"
              />

              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/15 shadow-inner sm:h-14 sm:w-14">
                <Icon size={24} strokeWidth={1.7} />
              </div>

              <div className="relative min-w-0 flex-1">

                <p className="text-xs text-slate-200">
                  {channel.title}
                </p>

                <h2 className="mt-1 text-sm font-bold sm:text-lg">
                  {channel.value}
                </h2>

                <p className="mt-1 hidden text-xs text-slate-300 lg:block">
                  {channel.description}
                </p>

              </div>

              <ArrowUpRight
                size={19}
                className="relative shrink-0 text-white/70 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />

            </motion.a>
          );
        })}
      </div>

    </section>
  );
}