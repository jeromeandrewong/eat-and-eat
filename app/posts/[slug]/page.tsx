import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";
import type { MDXComponents } from "mdx/types";
import Ratings from "@/app/components/Ratings";
import CustomImage from "@/app/components/Image";
import Location from "@/app/components/Location";
import OpeningHours from "@/app/components/OpeningHours";
import Link from "next/link";

const mdxComponents: MDXComponents = {
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
  h2: ({ children }) => (
    <h2 className="mt-10 mb-5 scroll-m-20  pb-1 text-3xl font-semibold tracking-tight first:mt-0 font-railway">
      {children}
    </h2>
  ),
  p: ({ children }) => (
    <p className="text-md sm:text-lg leading-relaxed [&:not(:first-child)]:mt-6 font-poppins">
      {children}
    </p>
  ),
  Ratings,
  CustomImage,
  Location,
  OpeningHours,
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) notFound();
  const MDXContent = useMDXComponent(post.body.code);
  return (
    <article className="mx-auto max-w-xl py-8">
      <div className="mb-8 text-center">
        <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
          {new Intl.DateTimeFormat("en-US").format(new Date(post.date))}
        </time>
        <h1 className="hover:scale-105 duration-300 text-center text-3xl text-secondary underline decoration-wavy underline-offset-8 font-bold font-railway">
          <Link
            href={post.website}
            target="_blank"
            className="hover:cursor-alias "
          >
            {post.title}
          </Link>
        </h1>
      </div>
      <Ratings breakdown={post.breakdown} />
      <div className="mx-auto grid w-full mb-3 max-w-2xl grid-cols-1 gap-2 sm:grid-cols-2 font-poppins">
        <Location location={post.location} />
        <OpeningHours hours={post.openingHours} />
      </div>
      <MDXContent components={mdxComponents} />
    </article>
  );
};

export default PostLayout;

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) notFound();
  return { title: post.title };
};
