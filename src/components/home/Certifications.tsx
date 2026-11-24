import Image from "next/image";

const certifications = [
  { name: "LPCB", image: "/images/certifications/lpcb.webp" },
  { name: "CE", image: "/images/certifications/ce.webp" },
  { name: "UL", image: "/images/certifications/ul.webp" },
  { name: "ISO 9001", image: "/images/certifications/iso.webp" },
  { name: "NFPA", image: "/images/certifications/nfpa.webp" },
  { name: "UKAS", image: "/images/certifications/ukas.webp" },
  { name: "FM Approved", image: "/images/certifications/fm.webp" },
];

export default function Certifications() {
  return (
    <section
      aria-labelledby="certifications-heading"
      className="w-full overflow-hidden border-y border-slate-200 bg-[#f8fafc] py-10 md:py-14"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Section Heading */}
        <div className="mb-8 text-center md:mb-10">

          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-6 bg-red-600" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-red-600 md:text-xs">
              Quality & Compliance
            </span>

            <span className="h-px w-6 bg-red-600" />
          </div>

          <h2
            id="certifications-heading"
            className="text-2xl font-bold tracking-tight text-[#203164] md:text-4xl"
          >
            Certifications & Standards
          </h2>

        </div>

        {/* Certification Logos */}
        <div
          tabIndex={0}
          role="region"
          aria-label="Certification logos"
          className="flex w-full snap-x snap-mandatory items-center overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:overflow-visible"
        >
          {certifications.map((item) => (
            <div
              key={item.name}
              className="group flex min-w-[120px] shrink-0 snap-start items-center justify-center border-r border-slate-200 px-5 py-3 last:border-r-0 sm:min-w-[145px] lg:min-w-0 lg:flex-1"
            >
              <div className="relative h-[65px] w-[95px] md:h-[85px] md:w-[120px]">

                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 95px, 120px"
                  className="object-contain opacity-80 grayscale transition-all duration-300 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                />

              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <p className="mt-5 text-center text-[11px] text-slate-400 lg:hidden">
          Swipe to explore →
        </p>

      </div>
    </section>
  );
}