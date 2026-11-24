
import Image from "next/image";
import fs from "node:fs";
import path from "node:path";

const portfolio = [
  {
    name: "Park One Project",
    file: "park-one-project",
  },
  {
    name: "Park Avenue Islamabad",
    file: "park-avenue-islamabad",
  },
  {
    name: "Park Lane Faizabad",
    file: "park-lane-faizabad",
  },
  {
    name: "Crown Plaza",
    file: "crown-plaza",
  },
  {
    name: "Earth Link Developments",
    file: "earth-link-developments",
  },
  {
    name: "Premier Choice",
    file: "premier-choice",
  },
  {
    name: "AAA Associates",
    file: "aaa-associates",
  },
  {
    name: "Pepsi",
    file: "pepsi",
  },
  {
    name: "Bank of Punjab",
    file: "bank-of-punjab",
  },
  {
    name: "Allied School",
    file: "allied-school",
  },
  {
    name: "Tycoon Estate & Builders",
    file: "tycoon-estate-builders",
  },
  {
    name: "Askari Bank",
    file: "askari-bank",
  },
];

export default function Portfolio() {
  const directory = path.join(
    process.cwd(),
    "public",
    "images",
    "portfolio"
  );

  const files = fs.existsSync(directory)
    ? fs.readdirSync(directory)
    : [];

  const projects = portfolio.map((item) => {
    const filename = files.find(
      (file) =>
        path.parse(file).name.toLowerCase() ===
          item.file.toLowerCase() &&
        /\.(webp|png|jpe?g|jfif|avif)$/i.test(file)
    );

    return {
      ...item,
      image: filename
        ? `/images/portfolio/${filename}`
        : null,
    };
  });

  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="relative isolate overflow-hidden bg-[#0b162c] py-10 sm:py-14 lg:py-20"
    >
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[120px]"
      />

      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12">

        {/* Section Header */}
        <div className="mb-7 flex flex-col gap-5 lg:mb-10 lg:flex-row lg:items-end lg:justify-between">

          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-red-500" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-red-400 sm:text-xs">
                Our Portfolio
              </span>
            </div>

            <h2
              id="portfolio-heading"
              className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Built on Trust.
              <br />
              <span className="text-red-500">
                Backed by Experience.
              </span>
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
              Explore our portfolio of projects and clients
              across commercial, hospitality, banking,
              education and corporate sectors.
            </p>
          </div>

          {/* Portfolio count */}
          <div className="flex items-center gap-4 border-l-2 border-red-500 pl-4">
            <span className="text-4xl font-bold text-white lg:text-5xl">
              12
            </span>

            <span className="text-xs font-medium uppercase leading-relaxed tracking-wider text-slate-400">
              Projects &amp;
              <br />
              Clients
            </span>
          </div>

        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">

          {projects.map((project, index) => (
            <article
              key={project.file}
              className="group relative flex min-w-0 flex-col overflow-hidden rounded-xl border border-white/10 bg-[#142139] transition-all duration-300 hover:-translate-y-1 hover:border-red-500/60 hover:shadow-xl sm:rounded-2xl"
            >

              {/* Image Panel */}
              <div className="relative aspect-[5/3] overflow-hidden bg-[#dce1e8] sm:aspect-[16/9]">

                {/* Project Number */}
                <span className="absolute left-2 top-2 z-10 rounded-md bg-[#0b162c] px-2 py-1 text-[9px] font-medium text-white sm:left-3 sm:top-3 sm:text-xs">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 1023px) 50vw, 25vw"
                    className="object-contain mix-blend-multiply scale-[1.35] transition-transform duration-500 group-hover:scale-[1.45]"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center p-4 text-center text-sm font-semibold text-slate-500">
                    {project.name}
                  </div>
                )}

              </div>

              {/* Project Information */}
              <div className="relative flex flex-1 items-center gap-2 px-3 py-4 sm:gap-3 sm:px-5 sm:py-5">

                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-500"
                />

                <h3 className="text-xs font-semibold leading-snug text-white sm:text-sm lg:text-base">
                  {project.name}
                </h3>

              </div>

              {/* Animated bottom accent */}
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-[3px] w-0 bg-red-500 transition-all duration-500 group-hover:w-full"
              />

            </article>
          ))}

        </div>

        {/* Bottom decorative line */}
        <div className="mt-8 flex items-center justify-center gap-3 lg:mt-10">
          <span className="h-px w-12 bg-white/15 sm:w-24" />
          <span className="text-center text-[9px] font-medium uppercase tracking-[0.2em] text-slate-400 sm:text-xs">
            CTI System &amp; Solutions
          </span>
          <span className="h-px w-12 bg-white/15 sm:w-24" />
        </div>

      </div>
    </section>
  );
}
