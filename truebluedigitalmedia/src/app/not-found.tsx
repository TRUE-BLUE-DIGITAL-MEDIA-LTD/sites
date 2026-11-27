import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  // A missing page has no address of its own to point search engines at.
  alternates: { canonical: null },
};

// Shown for any address that is not a page, including the old blog posts.
export default function NotFound() {
  return (
    <section className="px-[15px] pb-[100px] pt-[70px] text-center md:px-10 md:pb-[140px] md:pt-[100px]">
      <h1 className="text-2xl font-bold leading-9 text-brand">
        Sorry, we can&apos;t find that page
      </h1>
      <p className="mx-auto mt-[11px] max-w-[450px] text-[15px] font-light leading-[30px] text-black">
        The page you are looking for may have been moved or no longer exists.
      </p>
      <Link
        href="/"
        className="mx-auto mt-[30px] flex h-[55px] w-[228px] items-center justify-center rounded-[50px] border-2 border-brand bg-white text-base text-black transition-colors duration-200 hover:bg-brand hover:text-white"
      >
        Back to home
      </Link>
    </section>
  );
}
