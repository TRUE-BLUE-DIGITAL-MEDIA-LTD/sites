import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { site } from "@/lib/site";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Home",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    images: ["/images/og-image.png"],
  },
  twitter: { card: "summary", images: ["/images/og-image.png"] },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      // Lets Next.js switch off the smooth scrolling in globals.css while it
      // moves to a new page, so every page opens at the top.
      data-scroll-behavior="smooth"
      className={`${poppins.variable} antialiased`}
    >
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
