import type { Metadata } from "next";
import { policyParagraphs } from "@/content/policy";
import { sharedOpenGraph } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  openGraph: { ...sharedOpenGraph, title: "Terms & Conditions", url: "/policy" },
};

export default function Policy() {
  return (
    <section className="bg-white pb-[97px] pl-[21px] pr-5 pt-20 md:px-10 md:pb-[134px] md:pt-16 lg:pt-[136px]">
      <div className="mx-auto max-w-[752px] text-center">
        <h1 className="font-poppins text-2xl font-bold leading-[1.5] text-[#1a1b1f] md:text-[50px]">
          Terms &amp; Conditions
        </h1>
        <div className="mt-4 space-y-[18px] text-left font-poppins text-xs font-light leading-[18px] text-body md:mt-[31px] md:space-y-[22.5px] md:text-center md:text-[15px] md:leading-[22.5px]">
          {policyParagraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
