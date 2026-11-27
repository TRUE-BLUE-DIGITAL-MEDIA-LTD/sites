import type { Metadata } from "next";
import Link from "next/link";
import { Glyph } from "@/components/Icons";
import { Heading, Rule } from "@/components/SectionHeading";
import TestimonialSlider from "@/components/TestimonialSlider";
import { highlights, practiceAreas } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";

const title = "Whitecroft: Business Legal Services";
const description =
  "Whitecroft - Your trusted partner for business legal advice and support. Expertise in litigation, employment, and corporate law. Stay updated with latest legal news. Contact us now.";

export const metadata: Metadata = pageMetadata("/", title, description);

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-parallax relative bg-[url(/images/hero.jpg)] bg-cover bg-center px-[15px] md:max-lg:bg-left-top pb-[176.5px] pt-[291px] md:px-[50px] md:pb-[206px] md:pt-[250px]">
        <div aria-hidden className="absolute inset-0 bg-black/25" />
        <div className="relative mx-auto page-width">
          <h1 className="py-[2px] text-center font-playfair text-[58px] text-white md:max-w-[716px] md:text-left md:text-[72px]">
            Business Legal Advisory
          </h1>
          <p className="mt-[13px] text-center font-barlow text-xl italic text-white md:mt-[23px] md:py-[2px] md:text-left md:text-lg">
            Legal advice for all business needs
          </p>
          <Link
            href="/contact"
            className="mx-auto mt-[51px] flex h-[55px] w-[195px] items-center justify-center border-2 border-white text-base text-white transition-colors duration-200 hover:bg-white hover:text-brand md:mx-0 md:mt-[49px] md:h-[58px] md:w-[226px] md:text-[15px]"
          >
            Contact
          </Link>
        </div>
      </section>

      {/* Welcome */}
      <section className="bg-white py-[50px] md:px-[30px] md:py-20">
        <div className="mx-auto page-width px-[15px] md:px-0">
          <Rule />
          <Heading className="mt-2 mb-2 md:mt-[18px]">Welcome To Whitecroft</Heading>
          <p className="mt-2 mb-2 py-[2px] text-center text-[15px] font-light md:mt-[21px] md:text-lg">
            At Whitecroft, our priority is your business. We have represented individuals in
            diverse legal areas. We represent each business individually and invest our very
            best minds in every case we take on. Your legal success is our number one priority.
          </p>
        </div>
      </section>

      {/* Practice areas */}
      <section className="bg-mist pt-[50px] md:px-10 md:pt-20">
        <div className="mx-auto page-width px-[15px] md:px-0">
          <Heading className="mb-2 max-md:text-left md:mt-2">
            <Link href="/practiceareas">Practice Areas</Link>
          </Heading>
          <Rule />
        </div>
      </section>
      <section className="bg-mist py-[15px] md:px-[15px] md:pb-20">
        <ul className="mx-auto mb-[10px] grid page-width px-[15px] md:grid-cols-3 md:my-[10px] md:p-[2.5px]">
          {practiceAreas.map((area) => (
            <li key={area.title} className="group p-[3px] md:p-[2.5px]">
              <div className="overflow-hidden lg:rounded-full">
                <div
                  role="img"
                  aria-label={area.title}
                  style={{ backgroundImage: `url(${area.image})` }}
                  className="aspect-square bg-cover bg-center transition-transform duration-200 ease-out group-hover:scale-[1.06]"
                />
              </div>
              <div className="p-[15px] text-center md:px-0">
                <h3 className="font-playfair text-[21px] text-brand md:text-[26px]">
                  {area.title}
                </h3>
                <p className="text-base text-[#333333]">{area.teaser}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Highlights */}
      <section className="bg-parallax relative bg-[url(/images/stats-bg.jpg)] bg-cover bg-right px-[25px] md:max-lg:bg-left-top lg:bg-center py-[50px] md:px-[50px] md:py-[120px]">
        <div aria-hidden className="absolute inset-0 bg-black/70" />
        <ul className="relative mx-auto grid page-width md:grid-cols-3">
          {highlights.map((item, i) => (
            <li
              key={item.title}
              className={`px-[15px] text-center text-white ${
                i > 0 ? "max-md:pt-5" : ""
              } ${i === 0 ? "md:pl-0 md:pr-[4.5%]" : i === 1 ? "md:px-[2.25%]" : "md:pl-[4.5%] md:pr-0"}`}
            >
              <div className="pt-[10px]">
                <div className="mx-auto flex h-[100px] w-[100px] items-center justify-center rounded-full border-2 border-brand md:h-[149px] md:w-[149px]">
                  <Glyph name={item.icon} className="h-12 w-12 md:h-[73px] md:w-[73px]" />
                </div>
              </div>
              <h3 className="mt-[10px] py-[2px] font-playfair text-[23px] md:text-[26px]">
                {item.title}
              </h3>
              <p className="mb-2 mt-2 py-[2px] text-sm font-light md:text-base">{item.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Testimonials (phones only) */}
      <section className="relative bg-[url(/images/testimonials-bg.jpg)] bg-cover py-[50px] md:hidden">
        <div aria-hidden className="absolute inset-0 bg-black/65" />
        <div className="relative px-[15px]">
          <Glyph name="quote" className="mx-auto mb-[10px] h-[60px] w-[76px] text-brand" />
          <TestimonialSlider />
        </div>
      </section>
    </>
  );
}
