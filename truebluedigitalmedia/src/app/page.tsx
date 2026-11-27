import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import { serviceCards, values } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* Hero: the blue panel hangs over the bottom edge of the photo. */}
      <HeroSection>
        <div className="mx-auto max-w-[960px] wide:max-w-[1200px]">
          <div className="mx-auto max-w-[372px] rounded-[25px] bg-brand px-5 pb-[30px] pt-[21px] md:mx-0 md:min-h-[270px] md:w-[500px] md:max-w-full md:pb-[26px] md:pl-[59px] md:pr-0 md:pt-[19px]">
            <h1 className="text-lg font-semibold leading-9 text-white md:max-w-[382px] md:text-xl md:leading-10">
              <span className="font-bold">A</span> marketing agency with a
              commitment to providing the best
              campaign management tools and strategy advice to improve your ROI
            </h1>
            <Link
              href="/contact#ContactForm"
              className="mx-auto mt-3 flex h-[50px] w-[243px] items-center justify-center rounded-[50px] border-2 border-black bg-white text-base text-black md:mx-0 md:mt-[10px] md:h-[55px] md:w-[203px]"
            >
              Join Now
            </Link>
          </div>
        </div>
      </HeroSection>

      {/* Intro */}
      <section className="px-[15px] pb-6 pt-[37px] md:px-10 md:pb-10 md:pt-[107px]">
        <div className="mx-auto grid max-w-[960px] wide:max-w-[1200px] gap-5 text-[15px] font-light leading-[30px] text-black md:grid-cols-2 md:gap-0">
          <p className="md:pr-[15px] desk:pr-[30px]">
            True Blue Digital Media have provided campaign optimisation services
            to a number of satisfied clients over the years, from international
            companies to absolute start-ups.
          </p>
          <p className="md:pl-[15px] md:pr-[15px]">
            True Blue Digital Media has a wide range of experience in providing
            the tools you need to grow your ROI. Our consultants can work with
            you closely to achieve this.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="px-[19px] pb-[34px] pt-[30px] md:pb-[105px] md:pl-[23px] md:pr-5">
        <ul className="mx-auto grid max-w-[1160px] gap-1 md:max-w-[920px] wide:max-w-[1160px] md:grid-cols-4 md:gap-5">
          {serviceCards.map((card) => (
            <li key={card.title}>
              <div
                role="img"
                aria-label={card.title}
                className="aspect-square w-full bg-cover bg-no-repeat"
                style={{
                  backgroundImage: `url(${card.image})`,
                  backgroundPosition: card.imagePosition,
                }}
              />
              <div className="py-[15px]">
                <h2 className="text-lg font-bold leading-[27px] text-brand desk:text-[22px] desk:leading-[33px]">
                  {card.title}
                </h2>
                <p className="text-sm font-light leading-[21px] text-black md:text-[15px] md:leading-[22.5px]">
                  {card.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Values */}
      <section className="px-[15px] pb-[50px] md:px-10 md:pb-[100px]">
        <div className="mx-auto grid max-w-[960px] wide:max-w-[1200px] md:grid-cols-2">
          <div
            role="img"
            aria-label="Smiling designer at her desk"
            className="h-[299px] bg-cover bg-center md:h-auto md:min-h-[643px] md:bg-bottom"
            style={{ backgroundImage: "url(/images/values.jpg)" }}
          />
          <div className="pt-[30px] md:pb-[60px] md:pl-[50px] md:pt-[45px]">
            <h2 className="text-xl font-semibold leading-[30px] text-brand md:text-[35px] md:leading-[52.5px]">
              True Blue&apos;s values
            </h2>
            <p className="mt-3 text-[15px] font-light leading-[30px] text-black md:mt-[23px] md:text-justify desk:pr-3">
              Here at True Blue, we tailor our services to the unique needs of
              each of our clients. We work as part of your team, understanding
              your needs and what matters to you. Our objective is to make the
              performance of your Ads our job, so you can focus on running your
              business without a worry.
            </p>
            <ul className="mx-auto mt-[6px] grid max-w-[342px] grid-cols-2 text-sm font-bold md:mx-0 md:mt-[25px] md:max-w-none md:text-[15px] leading-[30px] text-steel md:grid-cols-[53.6%_1fr]">
              {values.map((value) => (
                <li
                  key={value}
                  className="flex h-[66px] items-center px-[10px] md:h-[68.67px]"
                >
                  {`✓ ${value}`}
                </li>
              ))}
            </ul>
            <Link
              href="/contact#ContactForm"
              className="mx-auto mt-[27px] flex h-[49px] w-[259px] items-center justify-center rounded-[50px] border-2 border-brand bg-white text-base text-black transition-colors duration-200 hover:bg-brand hover:text-white md:mx-0 md:mt-6 md:h-[55px] md:w-[257px]"
            >
              Talk to us now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
