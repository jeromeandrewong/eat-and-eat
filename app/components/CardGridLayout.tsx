"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef, type PropsWithChildren } from "react";

export default function CardGridLayout({ children }: PropsWithChildren) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      void mainControls.start("show");
    }
  }, [isInView, mainControls]);
  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-3"
      initial="hidden"
      animate={mainControls}
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.25,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
