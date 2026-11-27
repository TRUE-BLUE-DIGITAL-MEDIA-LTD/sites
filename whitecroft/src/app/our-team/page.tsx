import type { Metadata } from "next";
import Image from "next/image";
import { pageMetadata } from "@/lib/metadata";

const title = "Whitecroft Legal Services | Our Dedicated Legal Team";
const description =
  "Meet our dedicated legal team at Whitecroft. Learn more about Tidarat Polyiam, our experienced commercial lawyer.";

export const metadata: Metadata = pageMetadata("/our-team", title, description);

export default function OurTeam() {
  return (
    <>
      <section className="bg-white pb-[15px] pt-10 md:px-10 md:pb-5 md:pt-20">
        <div className="mx-auto page-width px-[15px] md:px-0">
          <h2 className="mt-2 py-[2px] text-center font-playfair text-2xl text-[#050505] md:text-[35px]">
            Our Legal Team
          </h2>
          <p className="mx-auto mt-2 mb-2 max-w-[684px] py-[2px] md:max-lg:max-w-[min(684px,calc(100%-138px))] text-center text-[#585555]">
            The members of our legal team are highly trained and experienced. Each and every
            one of them is completely dedicated to your case.
          </p>
        </div>
      </section>

      <section className="bg-white px-[15px] pb-[30px] md:px-0 md:py-[48.5px]">
        <figure className="mx-auto page-width p-1 md:p-0">
          <Image
            src="/images/team-tidarat.jpg"
            alt="Tidarat Polyiam"
            width={1920}
            height={2880}
            sizes="(min-width: 1025px) 336px, 235px"
            className="mx-auto aspect-square w-full object-contain object-top md:aspect-auto md:h-[503px]"
          />
          <figcaption className="bg-brand p-[15px] text-center">
            <span className="block font-playfair text-[21px] font-bold text-white md:text-[26px]">
              Tidarat Polyiam
            </span>
            <span className="block text-sm text-[#333333]">Commercial Lawyer</span>
          </figcaption>
        </figure>
      </section>
    </>
  );
}
