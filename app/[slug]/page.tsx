import Link from "next/link";
import React from "react";
import type { MDXComponents } from "mdx/types";
import { allPages } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";

const mdxComponents: MDXComponents = {
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
  h2: ({ children }) => (
    <h2 className="mt-8 scroll-m-20  pb-1 text-3xl font-semibold tracking-tight first:mt-0 font-railway">
      {children}
    </h2>
  ),
  p: ({ children }) => (
    <p className="text-sm sm:text-lg leading-relaxed [&:not(:first-child)]:mt-5 font-poppins">
      {children}
    </p>
  ),
};

const PageLayout = ({ params }: { params: { slug: string } }) => {
  const page = allPages.find(
    (page) => page._raw.flattenedPath === "pages/" + params.slug
  );
  if (!page) notFound();

  const MDXContent = useMDXComponent(page.body.code);
  return (
    <article className="mx-auto max-w-xl py-8 flex flex-col min-h-screen lg:justify-center">
      <div className="mb-8 text-center">
        <h1 className="hover:scale-105 duration-300 text-center text-3xl text-secondary underline decoration-wavy underline-offset-8 font-bold font-railway">
          {page.title}
        </h1>
      </div>
      <MDXContent components={mdxComponents} />
    </article>
  );
};

export const generateStaticParams = async () =>
  allPages.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const page = allPages.find(
    (page) => page._raw.flattenedPath === "pages/" + params.slug
  );
  if (!page) notFound();
  return { title: page.title };
};

export default PageLayout;
