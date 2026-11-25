import Image from "next/image";
import { Quote } from "lucide-react";

import type { CEOMessageData } from "@/types/about";

interface CEOMessageProps {
  data: CEOMessageData;
}

export default function CEOMessage({
  data,
}: CEOMessageProps) {
  return (
    <section
      id="ceo-message"
      className="scroll-mt-28 bg-white pb-6 pt-10 sm:pb-8 sm:pt-14 lg:pt-16"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">

        <div className="relative isolate overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-br from-[#0b162c] via-[#14213d] to-[#203164] shadow-[0_10px_35px_rgba(11,22,44,0.12)]">

          {/* Decorative background */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-500/10 blur-[100px]" />

            <div className="absolute -bottom-40 -right-20 h-[420px] w-[420px] rounded-full border border-white/10" />

            <div className="absolute -bottom-32 -right-12 h-[350px] w-[350px] rounded-full border border-white/10" />

            <div className="absolute -bottom-24 -right-4 h-[280px] w-[280px] rounded-full border border-white/10" />

            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />
          </div>

          <div className="relative grid items-center gap-6 p-5 sm:gap-8 sm:p-8 md:grid-cols-[0.8fr_1.5fr] lg:gap-12 lg:p-10">

            {/* CEO portrait */}

            <div className="relative mx-auto w-full max-w-[300px] md:max-w-none">

              <div className="absolute -bottom-1 -left-1 h-24 w-24 rounded-bl-[22px] border-b-[3px] border-l-[3px] border-red-500" />

              <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] border border-white/10 bg-[#203164]">

                <Image
                  src={data.image}
                  alt={data.name}
                  fill
                  sizes="(max-width: 768px) 300px, 30vw"
                  className="object-cover object-top"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0b162c]/80 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/20 bg-white/10 p-3 text-white backdrop-blur-xl md:hidden">

                  <p className="text-base font-bold">
                    {data.name}
                  </p>

                  <p className="mt-0.5 text-xs text-slate-200">
                    {data.designation}
                  </p>

                </div>
              </div>
            </div>

            {/* CEO message */}

            <div className="min-w-0">

              <div className="mb-4 flex items-center gap-3">

                <span className="h-[2px] w-9 bg-red-500" />

                <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-red-400">
                  {data.heading}
                </h2>

              </div>

              <Quote
                size={38}
                fill="currentColor"
                strokeWidth={0}
                className="mb-3 text-red-500"
                aria-hidden="true"
              />

              <div className="space-y-3 text-[13px] leading-relaxed text-slate-200 sm:space-y-4 sm:text-sm lg:text-base lg:leading-[1.8]">

                {data.message.map((paragraph, index) => (
                  <p key={index}>
                    {paragraph}
                  </p>
                ))}

              </div>

              <div className="mt-6 border-t border-white/15 pt-4">

                <p className="text-lg font-bold tracking-tight text-white sm:text-xl">
                  {data.name}
                </p>

                <p className="mt-1 text-xs text-slate-300 sm:text-sm">
                  {data.designation}
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}