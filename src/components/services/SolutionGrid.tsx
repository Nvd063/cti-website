import type { Service } from "@/types/service";
import SolutionCard from "./SolutionCard";

interface SolutionGridProps {
  service: Service;
}

export default function SolutionGrid({
  service,
}: SolutionGridProps) {
  if (!service.solutions?.length) {
    return null;
  }

  return (
    <section
      aria-labelledby="solutions-heading"
      className="mt-7 sm:mt-9"
    >
      {/* SECTION HEADER */}

      <div className="mb-5">
        <div className="mb-3 flex items-center gap-3">
          <span className="h-[3px] w-8 bg-red-600" />

          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-600">
            Specialized Solutions
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2
            id="solutions-heading"
            className="text-[24px] font-bold tracking-tight text-[#08152d] sm:text-[30px]"
          >
            Explore Our Solutions.
          </h2>

          <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-semibold text-[#203164]">
            {service.solutions.length} Solutions
          </span>
        </div>

        <p className="mt-2 text-xs leading-relaxed text-slate-500 sm:text-sm">
          Select a solution below to discuss your requirements
          directly with our team on WhatsApp.
        </p>
      </div>

      {/* DYNAMIC SOLUTIONS GRID */}

      <div className="grid auto-rows-fr grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {service.solutions.map((solution, index) => (
          <SolutionCard
            key={solution.id}
            service={service}
            solution={solution}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}