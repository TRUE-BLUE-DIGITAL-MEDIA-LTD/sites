import Image from "next/image";
import NewsletterForm from "@/components/NewsletterForm";
import Parallax from "@/components/Parallax";
import TestimonialSlider from "@/components/TestimonialSlider";
import { events, site, stats } from "@/lib/site";

const heroButton =
  "flex h-[50px] w-[180px] items-center justify-center rounded-[10px] border-2 font-poppins text-sm font-bold text-white transition-colors duration-200 lg:w-[300px] lg:text-base";

export default function Home() {
  return (
    <>
      <Parallax />

      {/* Hero */}
      <section
        className="bg-parallax relative overflow-hidden bg-black bg-cover bg-center px-[37px] pb-[59px] pt-[84px] md:px-10 lg:pb-[151px] lg:pt-[79px]"
        style={{ backgroundImage: "url(/images/hero-bg.jpg)" }}
      >
        <div aria-hidden className="absolute inset-0 bg-black/[0.73]" />
        <div className="relative mx-auto max-w-[1200px] lg:pl-[93px]">
          <Image
            src="/images/hero-emblem.gif"
            alt=""
            width={1300}
            height={1300}
            unoptimized
            priority
            className="pointer-events-none absolute -top-[96px] left-[661px] hidden h-[389px] w-[389px] lg:block"
          />
          <h1 className="font-rubik text-[45px] font-medium leading-[68px] text-white lg:font-poppins lg:text-[65px] lg:font-normal lg:leading-[1.5]">
            {["Accelerate", "Elevate", "Grow"].map((word) => (
              <span key={word} className="block">
                {word}
                <span className="text-brand">.</span>
              </span>
            ))}
          </h1>
          <div className="mt-[80px] flex flex-col items-center gap-[23px] lg:mt-[62px] lg:items-start lg:gap-[26px]">
            <a
              href={site.signUpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${heroButton} border-brand hover:bg-brand lg:ml-[400px] lg:h-[71px]`}
            >
              JOIN AS AFFILIATE
            </a>
            <a
              href={site.signUpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${heroButton} border-accent hover:bg-accent lg:h-[89px]`}
            >
              JOIN AS ADVERTISER
            </a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white px-9 pb-[76px] pt-[28px] md:px-10 lg:pb-[69px] lg:pt-[63px]">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-center font-rubik text-[32px] font-bold text-black md:text-[35px]">
            Together, We <span className="text-brand">Grow</span>!
          </h2>
          <div className="mt-[26px] space-y-[30px] font-poppins text-base leading-[1.5] text-black md:text-xl lg:mt-[11px]">
            <p>
              Since <strong>2014</strong>, we have worked side by side with some
              of the best marketers in the world, helping them scale to
              incredible levels.
            </p>
            <p>
              Are you ready to <strong>grow</strong>?
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
      <section className="bg-black px-4 pb-[99px] pt-[73px] md:px-10 md:pt-[76px] lg:pb-[107px]">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-center font-rubik text-[22px] font-medium text-white md:text-[35px]">
            THE <span className="text-brand">NUMBERS</span>
          </h2>
          <dl className="mt-[38px] grid grid-cols-2 gap-y-[21.5px] md:grid-cols-4 md:mt-9 md:gap-y-[22px] lg:-mx-3 lg:mt-[61px]">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse text-center">
                <dt className="mt-[7px] font-poppins text-[13px] font-bold leading-[19.5px] text-brand md:mt-2 md:text-base md:leading-6">
                  {stat.label}
                </dt>
                <dd className="font-poppins text-[48px] font-bold leading-[1.4] text-white lg:text-[60px] lg:leading-[1.35]">
                  {stat.value}
                  <span className="text-[32px] md:text-[length:inherit]">
                    {stat.suffix}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Meet us (tablet and phone only, as on the previous site) */}
      <section className="bg-[#f5f5f5] px-6 pb-[27px] pt-[17px] text-center lg:hidden">
        <h2 className="font-poppins text-[30px] font-bold text-black">
          <span className="text-brand">Meet</span> us
        </h2>
        <div className="mt-[5px] space-y-8 font-poppins text-base font-medium leading-8 text-[#4b4c53]">
          <p>
            We often join industry events to meet existing and new partners.
          </p>
          <p>Drop by and say Hello!</p>
        </div>
      </section>

      {/* Events */}
      {events.map((event) => (
        <section
          key={event.name}
          className="bg-parallax border border-brand bg-cover bg-center px-4 pb-[33px] pt-[31px] text-center md:px-10 lg:pb-[178px] lg:pt-[99px]"
          style={{ backgroundImage: `url(${event.image})` }}
        >
          <div>
            <h2 className="font-poppins font-bold text-white">
              <span className="block text-2xl leading-[1.5] lg:text-[50px]">
                Proud{" "}
                <span className="text-brand lg:text-[55px]">ATTENDEES</span>
              </span>
              <span className="mt-[6px] block text-[40px] leading-[1.5] lg:mt-0 lg:text-[50px]">
                {event.name}
              </span>
            </h2>
            <p className="mt-3 font-poppins text-[19px] italic leading-[38px] text-white lg:mt-[5px] lg:text-2xl lg:leading-[48px]">
              {event.venue} <strong>{event.place}</strong>
            </p>
            <p className="font-poppins text-[19px] font-bold leading-[38px] text-white lg:text-2xl lg:leading-[48px]">
              {event.dates}
            </p>
          </div>
        </section>
      ))}

      {/* Newsletter */}
      <section className="bg-night px-[30px] pb-[106px] pt-[14px] text-center md:px-10 lg:pb-[78px] lg:pt-[84px] lg:text-left">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="font-rubik text-[22px] font-medium text-white lg:text-2xl">
            DON&apos;T MISS A THING
          </h2>
          <p className="mt-[11px] font-poppins text-[15px] font-light italic leading-[30px] text-[#9b9a9a] lg:mt-[14px] lg:pl-[9px]">
            We&apos;ll send you all good stuff!
          </p>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
