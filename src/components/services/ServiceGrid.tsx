import type { Service } from "@/types/service";
import ServiceCard from "./ServiceCard";

interface ServiceGridProps {
  services: Service[];
}

export default function ServiceGrid({
  services,
}: ServiceGridProps) {
  return (
    <section
      id="all-services"
      className="scroll-mt-28 bg-white py-8 sm:py-12 lg:py-16"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">

        {/* SECTION HEADER */}

        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">

          <div>

            <div className="mb-3 flex items-center gap-3">

              <span className="h-[3px] w-8 bg-red-600" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-600">
                What We Do
              </span>

            </div>

            <h2 className="text-2xl font-bold tracking-tight text-[#08152d] sm:text-3xl lg:text-4xl">
              Explore Our Solutions.
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-500">
              Specialized technology solutions for safer,
              smarter and more efficient environments.
            </p>

          </div>

          <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-[#203164]">
            {services.length} Services
          </span>

        </div>

        {/* SERVICES GRID */}

        {services.length > 0 ? (
          <div className="grid auto-rows-fr grid-cols-2 gap-3 md:gap-5 lg:grid-cols-3 lg:gap-6">

            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
              />
            ))}

          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 p-12 text-center text-sm text-slate-500">
            No services are currently available.
          </div>
        )}

      </div>
    </section>
  );
}