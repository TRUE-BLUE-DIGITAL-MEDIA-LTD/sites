import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { ClockIcon, CursorIcon, PhoneIcon, PinIcon } from "@/components/icons";
import { contactAddress, openingHours, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  alternates: { canonical: "/contact" },
  openGraph: { type: "website", url: "/contact", images: ["/images/og-image.png"] },
};

const rowClass =
  "flex flex-col items-center gap-[11px] text-center md:min-h-[74px] md:grid md:grid-cols-[14.75%_1fr] md:items-start md:gap-x-[2.9%] md:gap-y-0 md:text-left";

function IconBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex size-[70px] shrink-0 items-center justify-center rounded-full bg-brand text-white md:mt-[10px] md:justify-self-center md:size-[54px] [&>svg]:size-[35px] md:[&>svg]:size-[27px]">
      {children}
    </span>
  );
}

export default function Contact() {
  return (
    <section className="px-[15px] pb-[141px] pt-[50px] md:px-10 md:pb-[170px] md:pt-[70px]">
      <div className="mx-auto grid max-w-[960px] wide:max-w-[1200px] gap-[26px] md:grid-cols-2 md:gap-0">
        <div className="text-[15px] font-light leading-[30px] text-black">
          <h1 className="mx-auto max-w-[328px] pl-[71px] text-2xl font-bold leading-9 text-brand md:mx-0 md:mt-[2px] md:max-w-none">
            &nbsp;&nbsp;&nbsp;Get in touch
          </h1>
          <p className="mx-auto mt-[11px] max-w-[328px] md:mx-0 md:max-w-[461px] md:pr-[11px] desk:max-w-[450px] desk:pr-0">
            Are you just getting started with digital marketing and need some
            help setting up? Or maybe you&apos;re interested in full campaign
            management. Whatever you need, we&apos;re here to help you get on
            with business and leave the rest to us.
          </p>

          <div className="mt-[26px] md:mt-[21px]">
            <div className={rowClass}>
              <IconBadge>
                <PhoneIcon />
              </IconBadge>
              <a href={site.phoneHref} className="font-normal md:pt-[25px]">
                {site.phone}
              </a>
            </div>
            <div className={`${rowClass} mt-[41px] md:mt-[22px]`}>
              <IconBadge>
                <CursorIcon />
              </IconBadge>
              <a href={`mailto:${site.email}`} className="font-normal md:pt-[25px]">
                {site.email}
              </a>
            </div>
            <div className={`${rowClass} mt-[41px] md:mt-[26px] md:min-h-[152px]`}>
              <IconBadge>
                <PinIcon />
              </IconBadge>
              <address className="not-italic md:pt-[21px]">
                {contactAddress.map((line, i) => (
                  <span key={line} className={`block ${i === 0 ? "font-normal" : ""}`}>
                    {line}
                  </span>
                ))}
              </address>
            </div>
            <div className={`${rowClass} mt-[70px] md:mt-[26px]`}>
              <IconBadge>
                <ClockIcon />
              </IconBadge>
              <dl className="grid w-full grid-cols-[41.1%_1fr] gap-y-[10px] text-left md:w-auto md:grid-cols-[101px_146px]">
                {openingHours.map((row) => (
                  <div key={row.days} className="contents">
                    <dt>{row.days}</dt>
                    <dd>
                      {row.open ? (
                        <>
                          <span>{row.open}</span> - <span>{row.close}</span>
                        </>
                      ) : (
                        "Closed"
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        <div id="ContactForm" className="md:pl-[3%]">
          <hr className="border-t-[5px] border-brand md:mt-[10px]" />
          <h2 className="mt-11 text-2xl font-bold leading-9 text-brand md:mt-[78px]">
            Tell us your details and we&apos;ll get right back to you.
          </h2>
          <div className="mt-5 md:mt-[29px]">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
