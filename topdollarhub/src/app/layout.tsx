import type { Metadata } from "next";
import { Poppins, Rubik, Source_Sans_3 } from "next/font/google";
import Script from "next/script";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { sharedOpenGraph, site } from "@/lib/site";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source",
  subsets: ["latin"],
  weight: ["700"],
});

const title = "The Best Affiliate Network for Top Dating & Gambling Offers";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description: site.description,
  openGraph: {
    ...sharedOpenGraph,
    title,
    description: site.description,
    url: site.url,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${rubik.variable} ${sourceSans.variable} antialiased`}
    >
      <body className="flex min-h-screen flex-col">
        {/* The Termly cookie-consent script is added to the built pages by
            scripts/inject-consent.mjs, so that it is the first script to load. */}
        {/* lazyOnload, not afterInteractive: that one adds a preload link, which
            would contact Google before the visitor has answered the banner. */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${site.gaId}`}
          strategy="lazyOnload"
        />
        <Script id="ga" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${site.gaId}');`}
        </Script>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
