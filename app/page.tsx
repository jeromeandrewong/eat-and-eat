"use client";
import { allPosts } from "contentlayer/generated";
import Hero from "./components/Hero";
import CardGridLayout from "./components/CardGridLayout";
import { Card } from "./components/Card";
import { calculateScore } from "@/lib/calculateScore";
import { motion } from "framer-motion";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/framerMotionVariant";

export default function Home() {
  const posts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <div className="relative flex  min-h-screen w-full flex-col items-center p-8 pt-0">
        <section className="mb-12 mt-12 flex w-full flex-col justify-between gap-6 md:mt-0 lg:mt-0">
          <Hero />
          <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row ">
            <div className="text-center text-xl  font-bold tracking-tight md:text-start lg:text-3xl">
              Cafes / Restaurants
            </div>
          </div>
          <CardGridLayout>
            {posts.map((post) => {
              return (
                <motion.div
                  key={post.title}
                  variants={FADE_DOWN_ANIMATION_VARIANTS}
                >
                  <Card
                    cover={post.cover}
                    title={post.title}
                    link={post.url}
                    town={post.town}
                    rating={calculateScore(
                      post.breakdown.split("").map(Number)
                    )}
                  />
                </motion.div>
              );
            })}
          </CardGridLayout>
        </section>
      </div>
    </>
  );
}
