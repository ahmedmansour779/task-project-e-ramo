"use client";

import Image from "next/image";
import { motion } from "motion/react";
import appScreen from "@/shared/images/download-app/app-screen.jpg";
import iphoneClay from "@/shared/images/download-app/iphone-clay.png";

export function DownloadAppPhoneMockup({ alt }: { alt: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.85, ease: "easeOut" }}
      className="mx-auto h-[325px] w-[250px] max-w-full overflow-hidden sm:h-[440px] sm:w-[340px] lg:mx-0 lg:mt-[45px] lg:h-[565px] lg:w-[435px] lg:shrink-0"
    >
      <div className="relative aspect-[435/900] w-full">
        <div className="absolute inset-x-[0.57%] top-[1.53%] h-[96.94%] w-[98.99%]">
          <Image
            src={iphoneClay}
            alt=""
            fill
            sizes="(min-width: 1024px) 435px, (min-width: 640px) 340px, 250px"
            className="object-fill"
          />
        </div>

        <div className="absolute inset-x-[5.6%] top-[3.54%] h-[92.92%] w-[89.08%] overflow-hidden rounded-[10.5%/4.8%]">
          <Image
            src={appScreen}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 388px, (min-width: 640px) 303px, 223px"
            className="object-cover object-top"
          />
          <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-[3%] w-[46%] rounded-b-2xl bg-[#1A1A1A]" />
        </div>
      </div>
    </motion.div>
  );
}
