import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { sharedOpenGraph } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us Now",
  openGraph: { ...sharedOpenGraph, title: "Contact Us Now", url: "/contact" },
};

export default function Contact() {
  return (
    <section className="bg-black pb-[74px] pt-10 md:px-10 md:py-[70px] lg:pb-[103px]">
      <div className="mx-auto grid max-w-[1200px] gap-[50px] md:gap-14 lg:grid-cols-2 lg:gap-9">
        <div>
          <h1 className="text-center font-rubik text-[22px] font-medium leading-[26px] text-white md:text-left md:text-[35px] md:leading-[1.5] lg:mt-[3px]">
            GET IN TOUCH
          </h1>
          <div className="mt-[34px] space-y-[21px] px-[31px] font-rubik text-sm leading-[21px] text-white md:mt-[18px] md:max-w-[460px] md:space-y-[27px] md:px-0 md:text-lg md:leading-[27px] lg:mt-3 lg:space-y-[30px]">
            <p>
              Are you just getting started with digital marketing and need some
              help setting up?
            </p>
            <p>Or maybe you&apos;re interested in full campaign management.</p>
            <p>
              Whatever you need, we&apos;re here to help you get on with
              business and leave the rest to us.
            </p>
          </div>
        </div>

        <div>
          <hr className="mx-[15px] border-t border-lime md:mx-0 md:mt-[10px]" />
          <h2 className="mt-[41px] text-center font-rubik text-[22px] font-bold leading-[26px] text-white md:mt-[82px] md:text-left md:text-2xl md:leading-8">
            LET&apos;S TALK
          </h2>
          <div className="mt-[41px] px-[39px] md:mt-[45px] md:px-0">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
