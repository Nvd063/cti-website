import Image from "next/image";
import fs from "node:fs";
import path from "node:path";

const brands = [
  { name: "Bosch", file: "bosch" },
  { name: "Dahua", file: "dahua" },
  { name: "Hikvision", file: "hikvision" },
  { name: "Orbita", file: "orbita" },
  { name: "Soyal", file: "soyal" },
  { name: "Teknim", file: "teknim" },
  { name: "Teledata One", file: "teledata-one" },
  { name: "Tiandy", file: "tiandy" },
  { name: "Yarward", file: "yarward" },
  { name: "ZKTeco", file: "zkteco" },
];

const extensions = [
  ".webp",
  ".png",
  ".jpg",
  ".jpeg",
  ".jfif",
  ".svg",
  ".avif",
];

export default function PartnerBrands() {
  const directory = path.join(
    process.cwd(),
    "public",
    "images",
    "partners"
  );

  const files = fs.existsSync(directory)
    ? fs.readdirSync(directory)
    : [];

  const partners = brands.flatMap((brand) => {
    const filename = files.find((file) =>
      extensions.some(
        (ext) =>
          file.toLowerCase() ===
          `${brand.file}${ext}`.toLowerCase()
      )
    );

    return filename
      ? [
          {
            ...brand,
            image: `/images/partners/${filename}`,
          },
        ]
      : [];
  });

  if (!partners.length) return null;

  return (
    <section
      aria-labelledby="partner-brands-heading"
      className="relative overflow-hidden bg-[#f5f6f8] py-10 md:py-16"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">

        {/* Section Heading */}
        <div className="mb-8 flex flex-col gap-5 md:mb-10 md:flex-row md:items-end md:justify-between">

          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#e30613]" />

              <span className="text-[10px] font-bold tracking-[0.22em] text-[#e30613] md:text-xs">
                TECHNOLOGY PARTNERS
              </span>
            </div>

            <h2
              id="partner-brands-heading"
              className="text-[30px] font-bold leading-[1.15] tracking-tight text-[#1e3060] md:text-[44px]"
            >
              Global Brands.
              <span className="block text-[#e30613]">
                Trusted Technology.
              </span>
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-500 md:text-base">
              Technology partners behind our integrated
              safety and security solutions.
            </p>
          </div>

          {/* Brand Counter */}
          <div className="flex items-center gap-3 border-l-2 border-[#e30613] pl-4">
            <span className="text-3xl font-bold text-[#1e3060] md:text-5xl">
              {String(partners.length).padStart(2, "0")}
            </span>

            <span className="text-[10px] font-semibold uppercase leading-relaxed tracking-widest text-slate-500 md:text-xs">
              Partner
              <br />
              Brands
            </span>
          </div>

        </div>

        {/* Logo Slider */}
        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-[#eef0f3] py-5 md:py-8">

          {/* Left Fade */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-5 bg-gradient-to-r from-[#eef0f3] to-transparent md:w-16" />

          {/* Right Fade */}
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-5 bg-gradient-to-l from-[#eef0f3] to-transparent md:w-16" />

          <div
            tabIndex={0}
            aria-label="Partner brand logos"
            className="group overflow-x-auto motion-safe:overflow-hidden"
          >
            <div className="flex w-max motion-safe:animate-[ctiPartnerScroll_35s_linear_infinite] group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]">

              {[0, 1].map((group) => (
                <ul
                  key={group}
                  aria-hidden={group === 1 ? true : undefined}
                  className={`flex shrink-0 items-center ${
                    group === 1 ? "motion-reduce:hidden" : ""
                  }`}
                >
                  {partners.map((brand) => (
                    <li
                      key={`${group}-${brand.file}`}
                      className="flex h-[85px] w-[155px] shrink-0 items-center justify-center border-r border-slate-300/60 px-5 md:h-[110px] md:w-[210px] md:px-7"
                    >
                      <Image
                        src={brand.image}
                        alt={group === 0 ? brand.name : ""}
                        width={240}
                        height={120}
                        sizes="(max-width: 767px) 115px, 154px"
                        unoptimized={
                          /\.(jfif|svg)$/i.test(brand.image)
                        }
                        className="h-auto max-h-[65px] w-full object-contain mix-blend-multiply transition-transform duration-300 hover:scale-105 md:max-h-[85px]"
                      />
                    </li>
                  ))}
                </ul>
              ))}

            </div>
          </div>
        </div>

        {/* Bottom Detail */}
        <div className="mt-5 flex items-center justify-center gap-3">

          <span className="h-px w-8 bg-slate-300 md:w-16" />

          <span className="text-center text-[9px] font-medium tracking-[0.18em] text-slate-500 md:text-[11px]">
            OUR TECHNOLOGY NETWORK
          </span>

          <span className="h-px w-8 bg-slate-300 md:w-16" />

        </div>
      </div>

      <style>{`
        @keyframes ctiPartnerScroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}