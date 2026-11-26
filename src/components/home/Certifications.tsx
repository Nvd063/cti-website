
import Image from "next/image";

const certifications = [
  {
    name: "LPCB",
    image: "/images/certifications/LPCB1.jpg",
  },
  {
    name: "CE",
    image: "/images/certifications/CE.jfif",
  },
  {
    name: "UL",
    image: "/images/certifications/UL.jpg",
  },
  {
    name: "ISO 9001",
    image: "/images/certifications/iso.png",
  },
  {
    name: "NFPA",
    image: "/images/certifications/NFPA.webp",
  },
  {
    name: "UKAS",
    image: "/images/certifications/ukas.jpg",
  },
  {
    name: "FM Approved",
    image: "/images/certifications/fm.png",
  },
];

export default function Certifications() {
  return (
    <section
      aria-labelledby="certifications-heading"
      className="w-full border-t border-slate-100 bg-white py-10 md:py-14"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Section Heading */}
        <div className="mb-8 text-center md:mb-12">
          <h2
            id="certifications-heading"
            className="text-2xl font-bold tracking-tight text-[#203164] md:text-4xl"
          >
            Certifications & Standards
          </h2>

          <div className="mx-auto mt-3 h-[3px] w-12 rounded-full bg-red-600" />
        </div>

        {/* Certification Logos */}
        <div className="flex flex-wrap items-center justify-center gap-y-6 lg:flex-nowrap lg:gap-y-0">

          {certifications.map((item) => (
            <div
              key={item.name}
              className="group flex w-1/4 min-w-0 items-center justify-center px-2 sm:px-4 lg:flex-1"
            >
              <div className="relative h-[65px] w-full max-w-[85px] bg-white sm:h-[85px] sm:max-w-[110px] lg:h-[100px] lg:max-w-[130px]">

                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  unoptimized={item.image.endsWith(".jfif")}
                  sizes="(max-width: 640px) 85px, (max-width: 1024px) 110px, 130px"
                  className="object-contain transition-transform duration-300 motion-safe:group-hover:scale-105"
                />

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
