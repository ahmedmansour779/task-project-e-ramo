"use client";

import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import type { Locale } from "@/content";
import { Logo } from "@/components/atoms/Logo";
import contact1 from "@/shared/images/contact/contact-1.jpg";
import contact2 from "@/shared/images/contact/contact-2.jpg";
import contact3 from "@/shared/images/contact/contact-3.jpg";
import { ContactForm } from "../molecules/ContactForm";
import type { ContactUsContent } from "../../types/sections";

const PHOTO_TINT =
  "bg-[linear-gradient(90deg,rgba(54,83,39,1)_0%,rgba(180,157,151,1)_100%)] opacity-20";

interface ContactUsSectionProps {
  lang: Locale;
  content: ContactUsContent;
}

export function ContactUsSection({ lang, content }: ContactUsSectionProps) {
  return (
    <section
      id="contact-us"
      className="mx-auto w-full max-w-[1375px] px-4 py-12 sm:px-8 sm:py-16 lg:py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.85, ease: "easeOut" }}
        className="mx-auto flex max-w-[600px] flex-col items-center gap-3 text-center"
      >
        <h2 className="text-3xl font-bold tracking-[0.03em] text-write-main sm:text-4xl lg:text-[56px] lg:leading-[67px]">
          {content.heading}
        </h2>
        <p className="text-base text-write-main sm:text-xl lg:text-2xl">
          {content.subtitle}
        </p>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 items-start gap-8 lg:mt-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="flex flex-col gap-5"
        >
          <div className="relative grid grid-cols-2 gap-4 sm:gap-6">
            <div className="flex flex-col gap-4 sm:gap-5">
              <div className="relative h-[200px] w-full overflow-hidden rounded-xl sm:h-[351px]">
                <Image
                  src={contact1}
                  alt={content.heading}
                  fill
                  sizes="(min-width: 1024px) 304px, 46vw"
                  className="object-cover"
                />
                <div className={`pointer-events-none absolute inset-0 ${PHOTO_TINT}`} />
              </div>
              <div className="relative h-[130px] w-full overflow-hidden rounded-xl sm:h-[200px]">
                <Image
                  src={contact2}
                  alt={content.subtitle}
                  fill
                  sizes="(min-width: 1024px) 304px, 46vw"
                  className="object-cover"
                />
                <div className={`pointer-events-none absolute inset-0 ${PHOTO_TINT}`} />
              </div>
            </div>

            <div className="relative h-[346px] w-full overflow-hidden rounded-xl sm:h-[571px]">
              <Image
                src={contact3}
                alt={content.heading}
                fill
                sizes="(min-width: 1024px) 304px, 46vw"
                className="object-cover"
              />
              <div className={`pointer-events-none absolute inset-0 ${PHOTO_TINT}`} />
            </div>

            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="pointer-events-auto flex size-24 items-center justify-center rounded-full bg-white/55 shadow-md backdrop-blur-md sm:size-[130px]">
                <Logo lang={lang} width={67} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 rounded-xl bg-off-white p-4 text-sm text-write-main sm:grid-cols-3">
            <a
              href={`tel:${content.details.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-2 transition-colors hover:text-green"
            >
              <Phone className="size-4 shrink-0 text-green" />
              <span dir="ltr" className="truncate">{content.details.phone}</span>
            </a>
            <a
              href={`mailto:${content.details.email}`}
              className="flex items-center gap-2 transition-colors hover:text-green"
            >
              <Mail className="size-4 shrink-0 text-green" />
              <span className="truncate">{content.details.email}</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="size-4 shrink-0 text-green" />
              <span className="truncate text-start">{content.details.address}</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease: "easeOut", delay: 0.15 }}
        >
          <ContactForm content={content} />
        </motion.div>
      </div>
    </section>
  );
}
