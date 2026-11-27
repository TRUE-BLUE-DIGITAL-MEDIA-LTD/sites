import Link from "next/link";
import type { Post } from "@/content/posts";

function Byline({ post }: { post: Post }) {
  return (
    <p className="mb-[15px] text-[12.8px] opacity-80">
      By {post.author} • {post.date}
    </p>
  );
}

function Photo({ post, className }: { post: Post; className: string }) {
  return (
    <Link
      href={`/${post.slug}`}
      aria-label={post.title}
      className={`block ${className}`}
    >
      <div
        style={{ backgroundImage: `url(${post.image})` }}
        className="h-full bg-cover bg-center"
      />
    </Link>
  );
}

// Wide card used in the main list on the News page.
export function PostCardLarge({ post }: { post: Post }) {
  const href = `/${post.slug}`;
  return (
    <article>
      <Photo post={post} className="h-[230px]" />
      <div className="py-[15px] md:pb-0">
        <h3 className="mb-[15px] font-playfair text-[22px] leading-[1.5] text-brand md:text-[25px]">
          <Link href={href}>{post.title}</Link>
        </h3>
        <Byline post={post} />
        <p className="mb-[15px] line-clamp-4 text-sm leading-[1.4] text-[#747474] md:text-[15px]">
          {post.excerpt}
        </p>
        <p className="opacity-80">
          <Link href={href}>Continue reading</Link>
        </p>
      </div>
    </article>
  );
}

// Photo-left card used in the News page sidebar.
export function PostCardSide({ post }: { post: Post }) {
  const href = `/${post.slug}`;
  return (
    <article className="flex min-h-[255px] md:min-h-[220px]">
      <Photo post={post} className="w-[160px] shrink-0 md:w-[90px] lg:w-[200px]" />
      <div className="flex flex-col justify-center pl-[5%] pr-[1%]">
        <h3 className="mb-[15px] font-playfair text-lg leading-[1.5] text-brand md:text-[22px]">
          <Link href={href}>{post.title}</Link>
        </h3>
        <Byline post={post} />
        <p className="opacity-80">
          <Link href={href}>Continue reading</Link>
        </p>
      </div>
    </article>
  );
}

// Compact card used under a post ("more posts").
export function PostCardSmall({ post }: { post: Post }) {
  const href = `/${post.slug}`;
  return (
    <article>
      <Photo post={post} className="h-[170px]" />
      <div className="pb-[37px] pt-[15px]">
        <h3 className="mb-[15px] font-playfair text-[23px] text-brand md:text-[26px]">
          <Link href={href}>{post.title}</Link>
        </h3>
        <Byline post={post} />
        <p className="mb-[15px] line-clamp-3 leading-[1.4]">{post.excerpt}</p>
      </div>
    </article>
  );
}
