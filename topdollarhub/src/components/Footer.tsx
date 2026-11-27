import Link from "next/link";

const address = [
  "Henge Barn",
  "Pury Hill Business Park",
  "Alderton Road",
  "Towcester",
  "NN12 7LS",
  "United Kingdom",
];

// All four point at the single Terms & Conditions page, as on the previous site.
const legal = ["Cookies", "Privacy", "Code of Conduct", "Terms & Conditions."];

export default function Footer() {
  return (
    <footer className="border border-brand bg-white px-4 pb-[50px] pt-3 md:mt-[30px] font-poppins text-xs leading-6 text-body md:px-10 md:pb-20 md:text-[15px] md:leading-[30px]">
      <div className="mx-auto max-w-[1200px]">
        <p className="font-bold">Registered Office</p>
        <address className="not-italic">
          {address.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </address>
        <p className="mt-[10px] font-light md:text-base md:leading-8">
          © {new Date().getFullYear()}{" "}
          <em>TopDollarHub, All Rights Reserved.</em>
        </p>
        <p className="mt-[10px]">
          Website crafted by{" "}
          <a
            href="https://oxyclick.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#939393] underline"
          >
            Oxyclick.
          </a>
        </p>
        <p className="mt-3 font-light md:mt-[14px]">
          {legal.map((item, i) => (
            <span key={item}>
              <Link
                href="/policy"
                className="text-[#939393] underline"
              >
                {item}
              </Link>
              {i < legal.length - 1 ? ", " : ""}
            </span>
          ))}
        </p>
      </div>
    </footer>
  );
}
