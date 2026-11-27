import type { Metadata } from "next";
import Link from "next/link";
import TeamCard from "@/components/TeamCard";
import { team } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  alternates: { canonical: "/about" },
  openGraph: { type: "website", url: "/about", images: ["/images/og-image.png"] },
};

export default function About() {
  return (
    <>
      {/* Banner */}
      <section className="bg-brand px-[15px] pb-8 pt-[25px] text-center font-semibold text-white md:px-10 md:pb-[99px] md:pt-[100px]">
        <h1 className="text-[38px] leading-[57px] md:text-5xl md:leading-[72px]">
          TBDM&nbsp;
        </h1>
        <p className="text-[19px] italic leading-[28.5px] md:text-2xl md:leading-9">Making Ads work!</p>
      </section>

      {/* About us */}
      <section className="px-[15px] pb-[55px] pt-[25px] md:px-10 md:pb-[102px] md:pt-[70px]">
        <div className="mx-auto grid max-w-[960px] wide:max-w-[1200px] gap-5 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-0">
          <h2 className="text-2xl font-bold leading-9 text-brand md:mt-[2px]">
            A little bit about us
          </h2>
          <div className="space-y-[30px] text-[15px] font-light leading-[30px] text-black md:pl-[2.25%] md:pt-[2px]">
            <p>
              True Blue Digital Media Ltd was formed in 2015 by traffic and
              marketing enthusiasts with a passion to provide support and
              guidance to those looking to improve their ROI on marketing
              campaigns. Our team has over 20 years of experience to assist
              with your needs and get you a much better return on your Ads.
            </p>
            <p>
              We are also evolving and adding cool new features to our panel
              enabling even a novice to digital marketing hit the ground
              running! We&apos;re here to make your Ads sky rocket!
            </p>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-[#f9f9f9] pb-8 md:grid md:min-h-[483px] md:grid-cols-[33.333%_1fr] md:pb-0">
        <div
          role="img"
          aria-label="Tablet showing campaign statistics"
          className="h-[294px] bg-cover bg-center md:h-auto md:bg-bottom"
          style={{ backgroundImage: "url(/images/about-partners.jpg)" }}
        />
        <div className="px-[15px] pt-8 md:px-10 md:pb-[110px] md:pt-[102px] desk:pb-0">
          <h2 className="text-2xl font-bold leading-9 text-brand">
            Our partners choose us for trust, service and accuracy
          </h2>
          <p className="mt-[10px] text-[15px] font-light leading-[30px] text-black md:mt-[29px]">
            At True Blue Digital Media we provide a comprehensive list of
            services to assist you in every aspect of growing your Ad ROI.
            Whether it&apos;s analytical reports, marketing strategy or helping with
            setting up your new campaigns from scratch, we&apos;ll be with you
            every step of the way!
          </p>
          <Link
            href="/contact"
            className="mx-auto mt-3 flex h-[50px] w-[263px] items-center justify-center rounded-[50px] border-2 border-black bg-white text-base text-black md:mx-0 md:mt-[61px] md:h-[55px] md:w-[228px]"
          >
            Join us
          </Link>
        </div>
      </section>

      {/* Team */}
      <section className="px-[15px] pb-[25px] pt-1 md:px-10 md:py-[100px]">
        <div className="mx-auto max-w-[960px] wide:max-w-[1200px] md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
          <div>
            <h2 className="text-2xl font-semibold leading-[48px] text-brand md:mt-[2px]">
              Meet the team
            </h2>
            <p className="mt-3 text-[15px] font-light leading-[30px] text-black md:mt-[14px] md:pr-[15px] desk:pr-[30px]">
              The True Blue Digital Media team is here to help you with any
              questions or concerns. Learn more about the amazing tools
              available to you within your panel, and help you ensure your ROI
              is improving.
            </p>
          </div>
          <div className="mt-[35px] flex flex-col items-center gap-[15px] md:mt-0 md:flex-row md:items-start md:gap-1 md:pb-[15px] md:pl-[calc(2.25%+5px)] md:pt-[5px]">
            {team.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
