import type { ContactOffice } from "@/types/contact";

import ContactOfficeCard from "./ContactOfficeCard";

interface ContactOfficesProps {
  offices: ContactOffice[];
}

export default function ContactOffices({
  offices,
}: ContactOfficesProps) {
  if (!offices.length) return null;

  return (
    <section className="bg-[#f5f7fa] py-10 sm:py-14 lg:py-16">

      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">

        <div className="mb-7 sm:mb-10">

          <div className="mb-3 flex items-center gap-3">

            <span className="h-[2px] w-8 bg-red-600" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-600">
              Our National Presence
            </span>

          </div>

          <h2 className="text-[28px] font-extrabold leading-tight tracking-tight text-[#0b162c] sm:text-4xl lg:text-[42px]">
            Local Expertise.
            <span className="text-red-600">
              {" "}Nationwide Reach.
            </span>
          </h2>

          <p className="mt-3 max-w-[650px] text-sm leading-relaxed text-slate-500 sm:text-base">
            Connect with our offices across Pakistan for
            technical assistance, project consultation and
            integrated system solutions.
          </p>

        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">

          {offices.map((office, index) => (
            <ContactOfficeCard
              key={office.id}
              office={office}
              index={index}
            />
          ))}

        </div>

      </div>
    </section>
  );
}