import Image from "next/image";
import Link from "next/link";
import { PostCardSmall } from "@/components/PostCard";
import ShareButtons from "@/components/ShareButtons";
import { posts, type Post } from "@/content/posts";
import { site } from "@/lib/site";

// A news post: title, photo, text, older/newer links, share buttons and the
// other posts.
export default function PostView({ post }: { post: Post }) {
  const index = posts.indexOf(post);
  const newer = posts[index - 1];
  const older = posts[index + 1];
  const others = posts.filter((p) => p !== post);

  return (
    <article>
      <header className="pb-[23px] pt-16 md:pb-5 md:pt-[150px]">
        <div className="mx-auto page-width px-[15px] md:px-[50px]">
          <h1 className="py-[2px] font-playfair text-[35px] text-ink max-md:mb-2 md:text-[50px]">
            {post.title}
          </h1>
          <p className="py-[2px]">
            {post.author} • {post.date}
          </p>
        </div>
      </header>

      <div className="py-[15px] md:pt-[30px]">
        <div className="mx-auto page-width px-[15px] md:px-[50px]">
          <div className="py-[15px] max-md:pl-[5px]">
            <Image
              src={post.image}
              alt=""
              width={post.imageWidth}
              height={post.imageHeight}
              priority
              className="h-auto w-full"
            />
            <div className="mb-2 mt-2 space-y-[22px] py-[2px]">
              {post.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <nav aria-label="Posts" className="flex justify-between py-[15px] text-ink">
            {older ? <Link href={`/${older.slug}`}>&lt; Older Post</Link> : <span />}
            {newer && <Link href={`/${newer.slug}`}>Newer Post &gt;</Link>}
          </nav>
        </div>
      </div>

      <div className="py-[15px] md:px-[200px]">
        <div className="mx-auto max-w-[1040px] px-[15px] md:px-[50px]">
          <ShareButtons url={`${site.url}/${post.slug}`} title={post.title} />
        </div>
      </div>

      <section aria-label="More posts" className="pb-[15px] pt-[45px]">
        <div className="mx-auto page-width px-[15px] md:px-[50px]">
          <div className="grid gap-[10px] md:grid-cols-2">
            {others.map((p) => (
              <PostCardSmall key={p.slug} post={p} />
            ))}
          </div>
          <div className="flex items-center justify-center gap-[6px] py-2 text-brand">
            <PageArrow direction="prev" />
            <span
              aria-current="page"
              className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-brand text-sm font-bold"
            >
              1
            </span>
            <PageArrow direction="next" />
          </div>
        </div>
      </section>
    </article>
  );
}

// There is only one page of posts, so both arrows are inactive.
function PageArrow({ direction }: { direction: "prev" | "next" }) {
  return (
    <span aria-hidden className="flex h-8 w-8 items-center justify-center opacity-60">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path
          d={direction === "prev" ? "M9 2 4 7l5 5" : "m5 2 5 5-5 5"}
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    </span>
  );
}
