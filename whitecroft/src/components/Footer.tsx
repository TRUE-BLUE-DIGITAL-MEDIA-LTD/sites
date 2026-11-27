import Image from "next/image";
import Link from "next/link";
import EvaluationForm from "@/components/EvaluationForm";
import { LinkedinIcon, MailIcon } from "@/components/Icons";
import { Heading, Rule } from "@/components/SectionHeading";
import { site } from "@/lib/site";

const socialClass =
  "mr-[14px] flex h-[28px] w-[28px] items-center justify-center rounded-full border-[3px] border-white text-white max-md:mr-2";

export default function Footer() {
  return (
    <footer className="bg-ink">
      <section className="bg-mist py-[50px] md:px-[50px] md:py-20">
        <div className="mx-auto page-width px-[15px] md:px-0">
          <Heading className="mt-2 mb-2">Free Evaluation</Heading>
          <Rule />
          <p className="mx-auto mt-2 mb-2 max-w-[804px] py-[2px] md:max-lg:max-w-[min(804px,calc(100%-78px))] text-left text-[15px] font-light text-slate md:mt-5 md:pt-0 md:text-center md:text-lg">
            Contact us for a free evaluation of your legal query. We will arrange a discovery
            call at a suitable time to discuss how best to proceed.
          </p>
          <EvaluationForm />
        </div>
      </section>

      <div className="px-[13px] py-[50px] md:px-10">
        <div className="mx-auto grid page-width md:grid-cols-2">
          <div className="px-[15px] md:px-0">
            <Link href="/" aria-label="Whitecroft home" className="block w-fit max-md:mx-auto">
              <Image
                src="/images/logo-white.png"
                alt="Whitecroft"
                width={500}
                height={500}
                className="h-[126px] w-[126px] md:h-[220px] md:w-[220px]"
              />
            </Link>
          </div>

          <div className="px-[15px] pt-5 text-white md:pl-5 md:pr-0 md:pt-0 md:min-h-[224px]">
            <h4 className="mb-2 py-[2px] font-playfair text-base text-brand md:text-[22px]">
              Contact info
            </h4>
            <p className="max-md:my-2 max-md:py-[2px]">
              {site.address[0]}
              <br />
              {site.address[1]}
            </p>
            <p className="my-2 max-md:py-[2px] max-md:text-[15px]">
              <a href={site.phoneHref}>{site.phone}</a>
              <br />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
            <h4 className="my-2 py-[2px] font-playfair text-base text-brand md:text-[22px]">
              Follow Us
            </h4>
            <div className="flex h-[41px] items-center md:mt-[11px] md:h-[33px]">
              <a href={`mailto:${site.email}`} aria-label="email" className={socialClass}>
                <MailIcon className="h-[13px] w-[13px]" />
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="linkedin"
                className={socialClass}
              >
                <LinkedinIcon className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
