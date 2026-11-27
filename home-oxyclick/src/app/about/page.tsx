import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Oxyclick",
  openGraph: { title: "About Oxyclick", url: "/about" },
};

const team = [
  {
    name: "Will",
    role: "CEO",
    src: "/images/team-will.jpg",
    width: 1920,
    height: 2276,
    fit: "object-contain object-bottom",
  },
  {
    name: "Team",
    role: "Developer",
    src: "/images/team-developer.png",
    width: 324,
    height: 348,
    fit: "object-contain object-center",
  },
];

export default function About() {
  return (
    <>
      <section className="bg-black px-6 py-16 md:px-10 lg:pb-[100px] lg:pt-[110px]">
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[400px_1fr] lg:gap-[18px]">
          <h1 className="font-rubik text-2xl font-medium leading-[1.45] text-white">
            WE&apos;RE OXYCLICK : YOUR
            <br />
            <span className="text-brand">GROWTH</span> PARTNER
          </h1>
          <div className="space-y-[27px] font-rubik text-lg leading-[1.5] text-white">
            <p>
              Oxyclick is a leading platform designed to help businesses create
              high-converting landing pages, pop-ups, and sticky bars without
              the need for coding.
            </p>
            <p>
              It provides a user-friendly drag-and-drop builder, customizable
              templates, and A/B testing capabilities to optimize marketing
              campaigns and improve conversion rates.
            </p>
            <p>
              The platform is widely used by marketers and businesses to quickly
              launch and test landing pages, making it easier to capture leads
              and drive sales.
            </p>
            <p>
              Additionally, Oxyclick integrates with various marketing tools and
              platforms, enhancing its functionality and providing a seamless
              user experience.
            </p>
          </div>
        </div>
      </section>

      {/* Team (hidden on phones, as on the current site) */}
      <section className="hidden bg-white px-5 pb-[124px] pt-[52px] md:block">
        <h2 className="text-center font-poppins text-[50px] font-bold leading-[75px] text-ink">
          <span className="text-brand">Meet</span> The Team
        </h2>
        <ul className="mt-[59px] flex justify-center gap-1">
          {team.map((member) => (
            <li key={member.name} className="w-[304px] text-center">
              <div className="h-[304px] w-[304px] overflow-hidden rounded-b-full">
                <Image
                  src={member.src}
                  alt={`${member.name}, ${member.role}`}
                  width={member.width}
                  height={member.height}
                  className={`h-full w-full ${member.fit}`}
                />
              </div>
              <p className="mt-[19px] font-source text-2xl font-bold leading-[1.3] text-ink">
                {member.name}
              </p>
              <p className="font-poppins text-base font-light text-ink">
                {member.role}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
