import Countdown from "@/components/Countdown";
import NewsletterForm from "@/components/NewsletterForm";
import TestimonialSlider from "@/components/TestimonialSlider";
import { event, site, stats } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-black px-[59px] pb-10 pt-8 md:px-10 lg:pb-[156px] lg:pt-[111px]">
        <div className="mx-auto max-w-[1200px] lg:pl-[93px]">
          <h1 className="max-w-[600px] font-rubik text-[40px] font-normal leading-[1.5] text-white md:text-[44px] lg:font-poppins lg:text-[55px]">
            Convert <span className="text-brand">more</span>
            <br />
            with high-performing landing pages.
          </h1>
          <div className="mt-[81px] flex justify-center md:justify-start lg:mt-[78px]">
            <a
              href={site.signUpUrl}
              className="flex h-[54px] w-[199px] items-center justify-center rounded-[10px] border-2 border-brand font-poppins text-sm font-bold text-white lg:text-base transition-colors duration-200 hover:border-white hover:bg-brand"
            >
              Start Building
            </a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white px-9 pb-[87px] pt-[45px] md:px-10 lg:pb-[67px] lg:pt-[63px]">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-center font-rubik text-[32px] font-bold text-black md:text-[35px]">
            Together, We <span className="text-brand">Scale</span>!
          </h2>
          <div className="mt-[26px] space-y-[30px] lg:mt-3 font-poppins text-base leading-[1.5] text-body md:text-xl">
            <p>
              <strong>Oxyclick</strong> has revolutionized how businesses
              convert traffic, transforming billions of visitors into leads,
              sales, and signups.
            </p>
            <p>
              Our comprehensive platform equips you with an array of tools,
              templates, and resources to craft highly effective campaigns and
              fine-tune them for maximum impact from all perspectives.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-black px-4 pt-14 lg:pt-0">
        <h2 className="text-center font-poppins text-[22px] font-bold text-white lg:hidden">
          WHAT PEOPLE <span className="text-brand">SAY</span> ABOUT US
        </h2>
        <TestimonialSlider />
      </section>

      {/* Numbers */}
      <section className="bg-black px-4 pb-[66px] pt-[76px] md:px-10 lg:pb-[100px]">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-center font-rubik text-[22px] font-medium text-white md:text-[35px]">
            THE <span className="text-brand">NUMBERS</span>
          </h2>
          <dl className="mt-9 grid grid-cols-2 gap-y-[22px] md:grid-cols-4 lg:mt-[61px]">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse text-center">
                <dt className="mt-2 font-poppins text-[13px] font-bold leading-6 text-brand md:text-base">
                  {stat.label}
                </dt>
                <dd className="font-poppins text-[46px] font-bold leading-[1.35] text-white md:text-[48px] lg:text-[60px]">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Meet us (tablet and phone only, as on the current site) */}
      <section className="bg-[#f2f2f2] px-6 pb-[17px] pt-12 text-center lg:hidden">
        <h2 className="font-poppins text-[30px] font-bold text-black">
          <span className="text-brand">Meet</span> us
        </h2>
        <div className="mt-[5px] space-y-8 font-poppins text-base font-medium leading-8 text-[#464646]">
          <p>
            We often join industry events to meet existing and new partners.
          </p>
          <p>Drop by and say Hello!</p>
        </div>
      </section>

      {/* Event + countdown */}
      <section
        className="bg-parallax relative border border-brand bg-cover bg-center px-4 pb-[82px] pt-10 text-center md:px-10 lg:pb-[138px] lg:pt-[108px]"
        style={{ backgroundImage: "url(/images/events-bg.jpg)" }}
      >
        <div aria-hidden className="absolute inset-0 bg-black/20 lg:bg-black/50" />
        <div className="relative">
          <h2 className="font-poppins font-bold text-white">
            <span className="block text-2xl leading-[1.5] lg:text-[50px]">
              Proud <span className="lg:text-[55px]">ATTENDEES</span>
            </span>
            <span className="mt-[6px] block text-[40px] leading-[1.5] lg:mt-0 lg:text-[50px]">
              {event.name}
            </span>
          </h2>
          <p className="mt-3 font-poppins text-[19px] leading-[38px] text-white lg:mt-[5px] lg:text-2xl lg:leading-[48px]">
            {event.city}
            <em>
              , <strong>{event.country}</strong>
            </em>
          </p>
          <p className="font-poppins text-[19px] font-bold leading-[38px] text-white lg:text-2xl lg:leading-[48px]">
            {event.dates}
          </p>
          <div className="mt-[81px] lg:mt-[72px]">
            <Countdown to={event.countdownTo} />
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-night px-6 pb-[132px] pt-[84px] text-center md:px-10 lg:pb-[82px] lg:text-left">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="font-rubik text-[22px] font-medium text-white lg:text-2xl">
            DON&apos;T MISS A THING
          </h2>
          <p className="mt-[14px] font-poppins text-[15px] font-light italic leading-[30px] text-[#9b9a9a] lg:pl-[9px]">
            We&apos;ll send you all good stuff!
          </p>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
