import type { Metadata } from "next";
import Link from "next/link";
import DocumentList from "@/components/DocumentList";
import PageBanner from "@/components/PageBanner";
import { Heading, Rule } from "@/components/SectionHeading";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("/legal-document-library");

export default function DocumentLibrary() {
  return (
    <>
      <PageBanner image="/images/banner-employment.jpg" />
      <section className="py-[50px] md:px-10 md:py-20">
        <div className="mx-auto page-width px-[15px] md:px-[30px]">
          <Heading align="left" className="mb-2 md:mt-2">
            Document Library
          </Heading>
          <Rule align="left" />
          <p className="mt-2 py-[2px] font-light max-md:mb-2 md:mt-[10px] md:text-lg">
            Our document library is free for download. We try to keep the library up to date
            and in line with current laws and regulations. Feel free to use the documents and
            adapt as necessary to suit your needs.
            <br />
            <br />
            We always recommend obtaining legal advice before entering into any contractual
            agreements. Feel free to sign up to our Newsletter{" "}
            <Link href="/News" className="font-bold text-ink">
              here
            </Link>{" "}
            to get the most up to date legal news applicable to your business needs.
          </p>
        </div>
      </section>
      <DocumentList />
    </>
  );
}
