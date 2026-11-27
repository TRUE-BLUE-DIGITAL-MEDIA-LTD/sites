import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import PostView from "@/components/PostView";
import { Heading, Rule } from "@/components/SectionHeading";
import { servicePages } from "@/content/pages";
import { posts } from "@/content/posts";
import { pageMetadata } from "@/lib/metadata";

// One route serves both kinds of top-level page that come from data files:
// the practice-area pages (src/content/pages.ts) and the news posts
// (src/content/posts.ts). The addresses match the original site.
export const dynamicParams = false;

export function generateStaticParams() {
  return [...servicePages, ...posts].map((page) => ({ slug: page.slug }));
}

export async function generateMetadata(props: PageProps<"/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return pageMetadata(`/${slug}`);
  return {
    title: post.title,
    alternates: { canonical: `/${slug}` },
    openGraph: { type: "article", title: post.title, url: `/${slug}`, images: [post.image] },
    twitter: { card: "summary_large_image", title: post.title, images: [post.image] },
  };
}

export default async function Page(props: PageProps<"/[slug]">) {
  const { slug } = await props.params;

  const post = posts.find((p) => p.slug === slug);
  if (post) return <PostView post={post} />;

  const page = servicePages.find((p) => p.slug === slug);
  if (!page) notFound();

  return (
    <>
      <PageBanner image={page.banner} />
      <section className="py-[50px] md:px-10 md:py-20">
        <div className="mx-auto page-width px-[15px] md:px-[30px]">
          <Heading align="left" className="mb-2 md:mt-2">
            {page.title}
          </Heading>
          <Rule align="left" />
          <p className="mt-2 whitespace-pre-line py-[2px] max-md:mb-2 md:mt-[10px]">
            {page.body}
          </p>
        </div>
      </section>
    </>
  );
}
