type Align = "center" | "left";

// The short brown rule that sits above or below section headings.
export function Rule({ align = "center" }: { align?: Align }) {
  return (
    <div className="py-[10px]">
      <hr
        className={`h-0.5 w-[65px] border-0 bg-brand md:w-[42px] ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}

// The site's section heading in Playfair Display.
export function Heading({
  children,
  align = "center",
  className = "",
}: {
  children: React.ReactNode;
  align?: Align;
  className?: string;
}) {
  return (
    <h2
      className={`py-[2px] font-playfair text-2xl text-ink md:text-[35px] ${
        align === "center" ? "text-center" : "text-left"
      } ${className}`}
    >
      {children}
    </h2>
  );
}
