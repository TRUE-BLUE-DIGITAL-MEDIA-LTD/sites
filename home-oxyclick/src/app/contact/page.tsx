import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us Now",
  openGraph: { title: "Contact Us Now", url: "/contact" },
};

export default function Contact() {
  return (
    <section className="bg-black px-6 py-[70px] md:px-10 lg:pb-[103px]">
      <div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-2 lg:gap-9">
        <div>
          <h1 className="font-rubik text-[35px] font-medium text-white">
            GET <span className="text-brand">IN TOUCH</span>
          </h1>
          <div className="mt-[18px] max-w-[460px] space-y-[27px] font-rubik text-lg leading-[27px] text-white">
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
          <hr className="mt-[10px] border-t border-brand" />
          <h2 className="mt-[82px] font-rubik text-2xl font-bold text-white">
            LET&apos;S <span className="text-brand">TALK</span>
          </h2>
          <div className="mt-[45px]">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
