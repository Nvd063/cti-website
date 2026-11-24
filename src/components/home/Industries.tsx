
import {
  Hotel,
  Building2,
  Hospital,
  Landmark,
  Building,
  House,
} from "lucide-react";

const industries = [
  { name: "Hotel", icon: Hotel },
  { name: "Commercial", icon: Building2 },
  { name: "Hospital", icon: Hospital },
  { name: "Bank", icon: Landmark },
  { name: "Corporate", icon: Building },
  { name: "Residential", icon: House },
];

export default function Industries() {
  return (
    <section
      aria-labelledby="industries-heading"
      className="w-full overflow-hidden border-y border-slate-100 bg-white py-10 md:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Heading */}
        <div className="mb-8 text-center md:mb-12">
          <h2
            id="industries-heading"
            className="text-2xl font-bold tracking-tight text-[#203164] md:text-4xl"
          >
            Industries We Serve
          </h2>

          <div className="mx-auto mt-3 h-[3px] w-12 rounded-full bg-red-600" />
        </div>

        {/* Horizontal Industries Row */}
        <div
          tabIndex={0}
          role="region"
          aria-label="Industries list"
          className="flex w-full snap-x snap-mandatory items-center overflow-x-auto scroll-smooth pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:overflow-visible lg:pb-0"
        >
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <div
                key={industry.name}
                className="group flex min-w-[120px] shrink-0 snap-start flex-col items-center justify-center border-r border-slate-200 px-4 py-3 last:border-r-0 sm:min-w-[150px] lg:min-w-0 lg:flex-1"
              >

                {/* Industry Icon */}
                <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-slate-50 transition-colors duration-300 group-hover:bg-red-50 md:mb-4 md:h-20 md:w-20">
                  <Icon
                    aria-hidden="true"
                    strokeWidth={1.5}
                    className="h-8 w-8 text-[#203164] transition-colors duration-300 group-hover:text-red-600 md:h-11 md:w-11"
                  />
                </div>

                {/* Industry Name */}
                <h3 className="whitespace-nowrap text-center text-xs font-semibold text-[#203164] md:text-base">
                  {industry.name}
                </h3>

              </div>
            );
          })}
        </div>

        {/* Mobile Swipe Hint */}
        <p className="mt-4 text-center text-[11px] tracking-wide text-slate-400 lg:hidden">
          Swipe to explore industries →
        </p>

      </div>
    </section>
  );
}
