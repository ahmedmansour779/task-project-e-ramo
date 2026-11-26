"use client";

import { motion } from "motion/react";

interface HeroHeadingProps {
  line1: string;
  line2: string;
}

export function HeroHeading({ line1, line2 }: HeroHeadingProps) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="relative z-10 max-w-[802px] text-center text-3xl font-extrabold leading-[1.3] tracking-[0.02em] text-raw-f8e9d9 sm:text-5xl lg:text-[72px]"
    >
      <span className="block">{line1}</span>
      <span className="block">{line2}</span>
    </motion.h1>
  );
}
