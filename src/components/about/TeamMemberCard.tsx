import Image from "next/image";

import type { TeamMember } from "@/types/about";

interface TeamMemberCardProps {
  member: TeamMember;
}

export default function TeamMemberCard({
  member,
}: TeamMemberCardProps) {
  return (
    <article className="group flex h-full min-w-0 flex-col">

      {/* Team member portrait */}

      <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-[#203164]/10 bg-[#142746] shadow-sm sm:rounded-2xl">

        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 16vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b162c]/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-red-600 transition-transform duration-300 group-hover:scale-x-100" />

      </div>

      {/* Team member information */}

      <div className="flex flex-1 flex-col items-center px-1 pb-2 pt-3 text-center sm:pt-4">

        <h3 className="text-[13px] font-bold leading-snug tracking-tight text-[#0b162c] sm:text-sm lg:text-base">
          {member.name}
        </h3>

        <p className="mt-1 text-[10px] leading-snug text-slate-500 sm:text-xs">
          {member.designation}
        </p>

        <div className="mt-auto pt-3">

          <span className="block h-[2px] w-6 bg-red-600 transition-all duration-300 group-hover:w-10" />

        </div>

      </div>
    </article>
  );
}