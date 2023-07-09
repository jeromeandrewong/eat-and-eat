"use client";
import { allPosts } from "contentlayer/generated";
import Hero from "./components/Hero";
import CardGridLayout from "./components/CardGridLayout";
import { Card } from "./components/Card";
import { calculateScore } from "@/lib/calculateScore";
import { useState } from "react";
import Fuse from "fuse.js";
import Search from "./components/Search";

export default function Home() {
  const [query, setQuery] = useState("");
  const options = {
    inludeScore: true,
    keys: ["title", "town", "location"],
  };
  const posts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const fuse = new Fuse(posts, options);
  const result = fuse.search(query);
  const allPostsFiltered = query ? result.map((post) => post.item) : posts;

  return (
    <>
      <div className="relative flex  min-h-screen w-full flex-col items-center p-8 pt-0">
        <section className="mb-12 mt-12 flex w-full flex-col justify-between gap-6 md:mt-0 lg:mt-0">
          <Hero />
          <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row ">
            <div className="text-center text-xl  font-bold tracking-tight md:text-start lg:text-3xl">
              Cafes / Restaurants
            </div>
            <Search query={query} setQuery={setQuery} />
          </div>
          <CardGridLayout>
            {allPostsFiltered.map((post) => {
              return (
                <div key={post.title}>
                  <Card
                    cover={post.cover}
                    title={post.title}
                    link={post.url}
                    town={post.town}
                    rating={calculateScore(
                      post.breakdown.split("").map(Number)
                    )}
                  />
                </div>
              );
            })}
          </CardGridLayout>
        </section>
      </div>
    </>
  );
}
