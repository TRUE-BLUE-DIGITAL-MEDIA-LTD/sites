import type { Metadata } from "next";
import Link from "next/link";
import DocumentList from "@/components/DocumentList";
import PageBanner from "@/components/PageBanner";
import { Heading, Rule } from "@/components/SectionHeading";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("/about");

// On the original site the About page shows the document library.
export default function About() {
  return (
    <>
      <PageBanner image="/images/banner-about.jpg" position="top" />
      <section className="pb-[10px] pt-[30px] md:px-[30px] md:pb-[30px] md:pt-20">
        <div className="mx-auto grid page-width md:grid-cols-2">
          <div className="px-[15px] md:px-0">
            <Heading align="left" className="mb-2">
              Document Library
            </Heading>
            <Rule align="left" />
            <p className="mt-2 mb-2 py-[2px] text-[15px] font-light md:mb-0 md:mt-[23px] md:max-w-[466px] md:text-lg">
              Our document library is free for download. We try to keep the library up to
              date and in line with current laws and regulations. Feel free to use the
              documents and adapt as necessary to suit your needs.
            </p>
          </div>
          <div className="px-[15px] md:pl-[3%] md:pr-0">
            <p className="mt-2 mb-2 py-[2px] text-[15px] font-light md:mb-0 md:mt-[104px] md:text-lg">
              We always recommend obtaining legal advice before entering into any contractual
              agreements. Feel free to sign up to our Newsletter{" "}
              <Link href="/News" className="text-ink">
                here
              </Link>{" "}
              to get the most up to date legal news applicable to your business needs.
            </p>
          </div>
        </div>
      </section>
      <DocumentList />
    </>
  );
}
