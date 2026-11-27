import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { Heading, Rule } from "@/components/SectionHeading";
import { practiceAreas } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";

const title = "Whitecroft Legal Services - Expert Legal Advice";
const description =
  "Whitecroft offers expert legal services in litigation, employment, and corporate law. Contact us for high-quality legal advice and solutions.";

export const metadata: Metadata = pageMetadata("/practiceareas", title, description);

export default function PracticeAreas() {
  return (
    <>
      <PageBanner image="/images/banner-practice-areas.jpg" position="top" />

      <section className="py-[50px] md:px-10 md:pb-[30px] md:pt-20">
        <div className="mx-auto page-width px-[15px] md:px-[30px]">
          <Heading className="mb-2 md:mt-2">Practice Areas</Heading>
          <Rule />
          <p className="mb-2 mt-2 py-[2px] text-center text-[15px] font-light md:text-lg">
            In each area of service that we offer, we promise that you will receive the very
            best legal treatment in the industry. If the area of expertise you require isn’t
            covered below, let us know via the contact form below and we’ll do our best to
            refer you onwards.
          </p>
        </div>
      </section>

      <section className="py-[15px] md:px-10 md:py-[30px]">
        <ul className="mx-auto page-width px-[15px] md:px-0">
          {practiceAreas.map((area) => (
            <li
              key={area.title}
              className="mb-[10px] border-b border-[#c0c0c0] last:border-b-0 md:my-5 md:pb-5"
            >
              <Link href={area.href} className="flex min-h-[100px] md:min-h-[195px]">
                <div
                  role="img"
                  aria-label={area.title}
                  style={{ backgroundImage: `url(${area.image})` }}
                  className="h-[100px] w-[33%] shrink-0 bg-cover bg-center md:h-[195px] md:w-[195px]"
                />
                <div className="pl-[7px] text-sm md:pl-[35px] md:pr-[15px] md:text-base">
                  <h3 className="font-playfair font-bold text-brand md:text-[26px] md:font-normal">
                    {area.title}
                  </h3>
                  <p className="md:mt-[17px]">{area.summary}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
