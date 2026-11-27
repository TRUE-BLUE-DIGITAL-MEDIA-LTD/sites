import Image from "next/image";
import { registeredOffice, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="px-[15px] pb-[51px] pt-[30px] text-[15px] leading-[30px] text-body md:px-10 md:pb-20">
      <div className="mx-auto max-w-[960px] wide:max-w-[1200px] md:grid md:grid-cols-2">
        <div>
          <Image
            src="/images/logo.png"
            alt={site.name}
            width={172}
            height={172}
            className="mx-auto size-[100px] md:mx-0 md:mt-[93px] md:size-[205px]"
          />
        </div>
        <div className="pt-5 md:pl-[3%] md:pt-[10px]">
          <address className="not-italic">
            {registeredOffice.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <p className="mt-[30px] font-bold">{site.phone}</p>
          <p className="font-bold">{site.email}</p>
          <p className="mt-[10px] pl-[5px] text-[13px] font-light leading-[26px] md:pl-0 md:text-base md:leading-8">
            © {new Date().getFullYear()} {site.legalName}
          </p>
        </div>
      </div>
    </footer>
  );
}
