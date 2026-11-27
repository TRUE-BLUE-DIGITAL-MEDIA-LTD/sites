import type { Metadata } from "next";
import Image from "next/image";
import { sharedOpenGraph } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Top Dollar Hub",
  openGraph: { ...sharedOpenGraph, title: "About Top Dollar Hub", url: "/about" },
};

const team = [
  {
    name: "Alyona",
    role: "COO",
    src: "/images/team-alyona.png",
    width: 423,
    height: 441,
  },
  {
    name: "Valeriia",
    role: "Senior Affiliate Manager",
    src: "/images/team-valeriia.png",
    width: 296,
    height: 298,
  },
  {
    name: "Oleg",
    role: "Senior Marketing Manager",
    src: "/images/team-oleg.png",
    width: 294,
    height: 276,
  },
];

// Phones get their own team section: a different crop of each photo, plus Will.
const phoneTeam = [
  {
    name: "Will",
    role: "CEO",
    src: "/images/team-will.png",
    width: 516,
    height: 546,
    item: "",
    image: "h-[294px] w-[278px]",
    nameClass: "mt-[5px]",
    roleClass: "mt-[6px] font-poppins text-[15px] font-light leading-[30px]",
  },
  {
    name: "Alyona",
    role: "COO",
    src: "/images/team-alyona-phone.png",
    width: 346,
    height: 436,
    item: "mt-[26px]",
    image: "h-[270px] w-[214px]",
    nameClass: "mt-[15px]",
    roleClass: "mt-[10px] font-rubik text-[15px] font-medium leading-[18px]",
  },
  {
    name: "Valeriia",
    role: "Senior Affiliate Manager",
    src: "/images/team-valeriia-phone.png",
    width: 317,
    height: 285,
    item: "mt-[33px]",
    image: "h-[263px] w-[292px]",
    nameClass: "mt-[14px]",
    roleClass: "mt-[18px] font-rubik text-base font-medium leading-[19px]",
  },
  {
    name: "Oleg",
    role: "Senior Marketing Manager",
    src: "/images/team-oleg-phone.png",
    width: 281,
    height: 266,
    item: "mt-[30px]",
    image: "h-[297px] w-[314px]",
    nameClass: "mt-[14px]",
    roleClass: "mt-[14px] font-rubik text-base font-medium leading-8",
  },
];

export default function About() {
  return (
    <>
      <section className="bg-black pb-[60px] pt-[41px] md:px-10 md:py-16 lg:pb-[195px] lg:pt-[164px]">
        <div className="mx-auto grid max-w-[1200px] gap-[34px] md:gap-10 lg:grid-cols-[400px_1fr] lg:gap-[18px]">
          <h1 className="pl-[42px] font-rubik text-[22px] font-medium leading-[33px] text-white md:pl-0 md:text-2xl md:leading-[1.45] lg:mt-1">
            WE&apos;RE TOP DOLLAR: YOUR
            <br />
            <span className="text-brand">GROWTH</span> PARTNER
          </h1>
          <div>
            <Image
              src="/images/about-team.jpg"
              alt="The Top Dollar team at an industry event"
              width={959}
              height={1280}
              priority
              className="mx-auto h-auto w-[251px] border-2 border-brand md:w-full md:max-w-[449px] lg:ml-auto lg:mr-0 xl:ml-[166px]"
            />
            <div className="mt-[37px] space-y-[35px] px-[46px] font-rubik text-sm leading-7 text-white md:mt-[44px] md:space-y-9 md:px-0 md:text-lg md:leading-9">
              <p>
                Top Dollar Agency was formed in 2014 by traffic and marketing
                enthusiasts with a passion to provide support and guidance to
                those looking to improve their ROI on marketing campaigns. Our
                team has over 20 years of experience to assist with your needs
                and get you a much better return on your Ads.
              </p>
              <p>
                At TopDollar we have a very large selection of offers for
                gambling and dating providing the best conditions for our
                partners.
              </p>
              <p>
                We are also evolving and adding cool new features to our panel
                enabling even a novice to digital marketing hit the ground
                running! We&apos;re here to make your Ads skyrocket!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team, phone version */}
      <section className="md:hidden">
        <h2 className="flex h-[85px] items-center justify-center bg-white pt-3 font-rubik text-[26px] font-bold text-[#0c0b0b]">
          MEET THE TEAM
        </h2>
        <ul className="bg-black pb-[52px] pt-[21px] text-center text-white">
          {phoneTeam.map((member) => (
            <li key={member.name} className={member.item}>
              <Image
                src={member.src}
                alt={`${member.name}, ${member.role}`}
                width={member.width}
                height={member.height}
                className={`mx-auto rounded-[25%] ${member.image}`}
              />
              <p
                className={`font-rubik text-xl font-medium leading-6 ${member.nameClass}`}
              >
                {member.name}
              </p>
              <p className={member.roleClass}>{member.role}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Team, tablet and desktop version */}
      <section className="hidden bg-white px-5 pb-[126px] pt-[47px] md:block">
        <h2 className="text-center font-poppins text-[50px] font-bold leading-[75px] text-ink">
          <span className="text-brand">Meet</span> The Team
        </h2>
        <ul className="mt-[61px] flex justify-center gap-[5px]">
          {team.map((member) => (
            <li key={member.name} className="w-[347px] text-center">
              <div className="mx-auto aspect-square w-full overflow-hidden rounded-b-full">
                <Image
                  src={member.src}
                  alt={`${member.name}, ${member.role}`}
                  width={member.width}
                  height={member.height}
                  className="h-full w-full object-contain object-bottom"
                />
              </div>
              <p className="mt-[15px] font-source text-2xl font-bold leading-[1.3] text-ink">
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
