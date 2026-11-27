// Darkened photo strip at the top of the inner pages. The header sits on it.
export default function PageBanner({
  image,
  position = "center",
}: {
  image: string;
  position?: "center" | "top";
}) {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className={`relative h-[235px] bg-cover md:h-[411px] ${
        position === "top" ? "bg-center md:bg-top" : "bg-center"
      }`}
    >
      <div aria-hidden className="absolute inset-0 bg-black/65" />
    </div>
  );
}
