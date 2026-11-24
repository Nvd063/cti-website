
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

        {/* Section Heading */}
        <div className="mb-7 text-center md:mb-12">
          <h2
            id="industries-heading"
            className="text-2xl font-bold tracking-tight text-[#203164] md:text-4xl"
          >
            Industries We Serve
          </h2>

          <div className="mx-auto mt-3 h-[3px] w-12 rounded-full bg-red-600" />
        </div>

        {/* Responsive Industries Layout */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:flex lg:items-center lg:gap-0">

          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <div
                key={industry.name}
                className="group flex min-w-0 flex-col items-center justify-center rounded-xl bg-slate-50 px-1 py-5 transition-colors duration-300 hover:bg-red-50 sm:px-4 lg:flex-1 lg:rounded-none lg:border-r lg:border-slate-200 lg:bg-transparent lg:py-3 lg:last:border-r-0 lg:hover:bg-transparent"
              >

                {/* Industry Icon */}
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full transition-colors duration-300 lg:mb-4 lg:h-20 lg:w-20 lg:bg-slate-50 lg:group-hover:bg-red-50">

                  <Icon
                    aria-hidden="true"
                    strokeWidth={1.5}
                    className="h-8 w-8 text-[#203164] transition-colors duration-300 group-hover:text-red-600 lg:h-11 lg:w-11"
                  />

                </div>

                {/* Industry Name */}
                <h3 className="text-center text-[11px] font-semibold text-[#203164] sm:text-sm lg:text-base">
                  {industry.name}
                </h3>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
