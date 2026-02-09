import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

import Link from "next/link";

export default function PostPage({
  frontmatter: { title, date, cover_image },
  content,
  slug,
}) {
  return (
    <article className="text-white mt-24 md:mt-32 flex flex-col">
      {/* FULL-WIDTH HERO (NO BREAKOUTS) */}
      {cover_image && (
        <div className="w-full">
          <img
            src={cover_image}
            alt={title}
            className="w-full h-[70vh] sm:h-[60vh] object-cover block"
          />
        </div>
      )}

      {/* Header */}
      <header className="mt-8 px-4 sm:px-6 md:w-4/6 md:px-0 mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-gruvred leading-tight">
          {title}
        </h1>
        <p className="mt-3 text-base sm:text-lg md:text-2xl font-thin text-gruvpink">
          {date}
        </p>
      </header>

      {/* Content */}
      <section className="mt-10 px-4 sm:px-6 md:w-4/6 md:px-0 mx-auto">
        <div
          className="
            prose
            prose-lg
            sm:prose-xl
            lg:prose-2xl
            prose-pink
            max-w-none

            break-words
            prose-p:break-words
            prose-li:break-words
            prose-code:break-all

            prose-img:rounded-xl
            prose-img:max-w-full
            prose-img:h-auto
            prose-img:my-10

            prose-pre:overflow-x-auto

            prose-table:block
            prose-table:overflow-x-auto
            prose-table:max-w-full
            prose-table:table-fixed
            prose-td:whitespace-normal
            prose-td:break-words
            prose-td:align-top
          "
          dangerouslySetInnerHTML={{
            __html: marked(content, {
              mangle: false,
              headerIds: false,
            }),
          }}
        />
      </section>
    </article>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );
  const { data: frontmatter, content } = matter(markdownMeta);

  return {
    props: {
      frontmatter,
      content,
      slug,
    },
  };
}
