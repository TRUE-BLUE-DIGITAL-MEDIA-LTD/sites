"use client";

import { useState } from "react";
import { SearchIcon } from "@/components/Icons";
import { PostCardLarge, PostCardSide } from "@/components/PostCard";
import { posts } from "@/content/posts";

// The News page: the post list with a search box and a "recent posts" column.
// Searching filters the main list by title and text.
export default function NewsList() {
  const [draft, setDraft] = useState("");
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();
  const shown = q
    ? posts.filter((p) =>
        [p.title, p.excerpt, ...p.body].some((text) =>
          text.toLowerCase().includes(q),
        ),
      )
    : posts;

  return (
    <div className="mx-auto grid page-width md:grid-cols-[2fr_1fr]">
      <div className="space-y-[50px] px-[15px] md:pl-0 md:pr-[2.25%]">
        {shown.map((post) => (
          <PostCardLarge key={post.slug} post={post} />
        ))}
        {shown.length === 0 && (
          <p role="status">No posts found for “{query.trim()}”.</p>
        )}
      </div>

      <aside className="px-[15px] max-md:mt-[21px] md:pl-[4.5%] md:pr-0">
        <form
          role="search"
          onSubmit={(e) => {
            e.preventDefault();
            setQuery(draft);
          }}
          className="relative max-md:w-[268px]"
        >
          <input
            type="search"
            value={draft}
            onChange={(e) => {
              setDraft(e.target.value);
              if (e.target.value === "") setQuery("");
            }}
            placeholder="Search The Blog"
            aria-label="Search The Blog"
            className="block h-[39px] w-full md:h-8 rounded-none border border-[#333333] bg-transparent pl-[15px] pr-[37px] text-sm text-body placeholder:text-body focus:outline focus:outline-1 focus:outline-brand [&::-webkit-search-cancel-button]:hidden"
          />
          <button
            type="submit"
            aria-label="Search"
            className="absolute right-0 top-0 flex h-full w-8 items-center justify-center text-body"
          >
            <SearchIcon className="h-[15px] w-[15px]" />
          </button>
        </form>

        <div className="mt-8 space-y-[30px] md:mt-[35px]">
          {posts.map((post) => (
            <PostCardSide key={post.slug} post={post} />
          ))}
        </div>
      </aside>
    </div>
  );
}
