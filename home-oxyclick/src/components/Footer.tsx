const address = [
  "Unit 706, 7/F., Tower 2,",
  "South Seas Centre,",
  "75 Mody Road,",
  "Tsimshatsui,",
  "Hong Kong",
];

// Shown as underlined text, matching the current site, where these have no
// destination pages yet. Turn them into links once the documents exist.
const legal = ["Cookies", "Privacy", "Code of Conduct", "Terms & Conditions."];

export default function Footer() {
  return (
    <footer className="mt-[30px] border border-brand bg-white px-4 pb-[46px] pt-3 md:pb-20 font-poppins text-xs leading-6 text-body md:px-10 md:text-[15px] md:leading-[30px]">
      <div className="mx-auto max-w-[1200px]">
        <p className="text-sm font-bold leading-6 md:text-[15px] md:leading-[30px]">Registered Office</p>
        <address className="not-italic">
          {address.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </address>
        <p className="mt-[10px] font-light md:text-base md:leading-8">
          © {new Date().getFullYear()}{" "}
          <em>Oxyclick Company Limited, All Rights Reserved.</em>
        </p>
        <p className="mt-0.5 font-light md:mt-[10px]">
          {legal.map((item, i) => (
            <span key={item}>
              <span className="underline">{item}</span>
              {i < legal.length - 1 ? ", " : ""}
            </span>
          ))}
        </p>
      </div>
    </footer>
  );
}
