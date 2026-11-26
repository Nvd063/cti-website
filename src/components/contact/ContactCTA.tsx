import {
  Headset,
  ArrowUpRight,
} from "lucide-react";

interface ContactCTAProps {
  whatsapp: string;
}

export default function ContactCTA({
  whatsapp,
}: ContactCTAProps) {
  return (
    <section className="mx-auto max-w-[1440px] px-4 py-10 sm:px-8 sm:py-14 lg:px-12">

      <div className="relative isolate overflow-hidden rounded-[24px] border border-white/15 bg-[#0b162c] p-6 text-white shadow-xl sm:p-8 lg:p-10">

        {/* Background Effects */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#203164]/60 via-transparent to-[#203164]/50" />

          <div className="absolute -left-16 -top-24 h-48 w-48 rounded-full bg-red-600/30 blur-[70px]" />

          <div className="absolute -bottom-24 -right-10 h-48 w-48 rounded-full bg-red-600/25 blur-[70px]" />

          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff07_1px,transparent_1px),linear-gradient(to_bottom,#ffffff07_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

          <div className="flex items-center gap-4 sm:gap-6">

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/30 bg-gradient-to-b from-white/25 to-white/5 shadow-inner backdrop-blur-xl sm:h-20 sm:w-20">

              <Headset
                size={32}
                strokeWidth={1.7}
              />

            </div>

            <div>

              <h2 className="text-xl font-extrabold tracking-tight sm:text-3xl">
                Need Expert Assistance?
              </h2>

              <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
                Lets find the right solution for your
                next project.
              </p>

            </div>

          </div>

          <a
            href={`https://wa.me/${whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-gradient-to-b from-red-500 to-red-700 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-red-600/25 transition hover:brightness-110"
          >
            Talk to Our Experts

            <ArrowUpRight
              size={19}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />

          </a>

        </div>

      </div>

    </section>
  );
}