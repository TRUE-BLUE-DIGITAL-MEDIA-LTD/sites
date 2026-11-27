import type { Metadata } from "next";
import { LinkedinIcon, MailIcon } from "@/components/Icons";
import { Heading, Rule } from "@/components/SectionHeading";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";

const title = "Contact Whitecroft - Legal Services";
const description =
  "Contact Whitecroft for legal services. Call +66-0822-355-977 or visit our office. By appointment only. Email tidarat@whitecroft.co.th";

export const metadata: Metadata = pageMetadata("/contact", title, description);

const { lat, lng, zoom } = site.map;
const mapEmbed = `https://maps.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;
const mapLink = `https://maps.google.com/maps?q=Mukdahan%2C+49000%2C+Thailand&sll=${lat},${lng}`;

const socialClass =
  "flex h-[25px] w-5 items-center justify-center text-[#111010] max-md:h-[33px] max-md:w-7";

export default function Contact() {
  return (
    <>
      {/* Map on larger screens, a "Find Us" button on phones. */}
      <div className="hidden h-[202px] overflow-hidden bg-[#272727] md:block">
        <iframe
          src={mapEmbed}
          title="Map showing Whitecroft in Mukdahan"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="map-dark h-[502px] w-full -translate-y-[150px] border-0"
        />
      </div>
      <div className="px-[15px] pt-[25px] pb-[10px] md:hidden">
        <a
          href={mapLink}
          className="flex h-[60px] items-center justify-center border-2 border-brand text-base text-brand transition-colors duration-200 hover:bg-brand hover:text-white"
        >
          Find Us
        </a>
      </div>

      <section className="pb-[10px] pt-[30px] md:px-[30px] md:pb-[50px] md:pt-20">
        <div className="mx-auto page-width px-[15px] md:px-0">
          <Heading className="mb-2">Contact</Heading>
          <Rule />
        </div>
      </section>

      <section className="bg-white pb-[30px] text-center text-slate md:px-[30px] md:pb-20">
        <div className="mx-auto grid page-width md:grid-cols-3">
          <div className="px-[15px] py-[10px] md:py-[2px] md:pl-0 md:pr-[4.5%]">
            <p className="font-bold">Phone</p>
            <p>+66-0822-355-977</p>
          </div>
          <div className="px-[15px] pb-[10px] pt-5 md:pb-[10px] md:pt-[2px] md:px-[2.25%]">
            <p className="font-bold">Address</p>
            <p>
              Moo 8, Muang,
              <br />
              Mukdahan, 40000
            </p>
            <p className="mt-[22px]">By Appointment Only</p>
          </div>
          <div className="px-[15px] pt-[10px] md:py-[2px] md:pl-[4.5%] md:pr-0">
            <p className="font-bold">Email</p>
            <p className="font-light">
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
            <div className="mt-[34px] flex justify-center gap-1 md:mt-[38px] md:gap-[14px]">
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
      </section>
    </>
  );
}
