import type { Metadata } from "next";
import NewsList from "@/components/NewsList";
import { Heading, Rule } from "@/components/SectionHeading";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("/News");

export default function News() {
  return (
    <>
      <section className="bg-white pb-[10px] pt-[30px] md:px-[30px] md:pb-[30px] md:pt-[50px]">
        <div className="mx-auto page-width px-[15px] md:px-0">
          <Heading align="left" className="mb-2">
            News
          </Heading>
          <Rule align="left" />
        </div>
      </section>
      <section className="py-[15px] md:px-10 md:pb-[50px] md:pt-0">
        <NewsList />
      </section>
    </>
  );
}
