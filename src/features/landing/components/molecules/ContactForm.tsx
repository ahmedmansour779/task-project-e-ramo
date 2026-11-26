"use client";

import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import type { ContactUsContent } from "../../types/sections";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const INPUT_CLASS =
  "h-14 w-full rounded-lg border border-raw-eff0f6 bg-white px-5 text-start text-sm text-write-main shadow-[0_8px_4px_0_var(--shadow-soft)] outline-none transition-colors duration-200 placeholder:text-subwrite focus:border-green sm:text-base";

export function ContactForm({ content }: { content: ContactUsContent }) {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValid =
      values.fullName.trim().length > 0 &&
      EMAIL_PATTERN.test(values.email.trim()) &&
      values.phone.trim().length > 0 &&
      values.city.trim().length > 0 &&
      values.message.trim().length > 0;

    if (!isValid) {
      setStatus("error");
      toast.error(content.validationError);
      return;
    }

    setStatus("success");
    toast.success(content.successMessage);
    setValues({ fullName: "", email: "", phone: "", city: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="flex w-full flex-col">
      <h3 className="text-start text-lg font-semibold text-write-main sm:text-xl">
        {content.formHeading}
        <span className="ms-0.5 font-semibold text-raw-cc4f4f">*</span>
      </h3>

      <div className="mt-5 flex flex-col gap-4 sm:gap-5">
        <input
          type="text"
          value={values.fullName}
          onChange={(e) => setValues({ ...values, fullName: e.target.value })}
          placeholder={content.placeholders.fullName}
          aria-label={content.placeholders.fullName}
          className={INPUT_CLASS}
        />
        <input
          type="email"
          value={values.email}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
          placeholder={content.placeholders.email}
          aria-label={content.placeholders.email}
          className={INPUT_CLASS}
        />
        <input
          type="tel"
          value={values.phone}
          onChange={(e) => setValues({ ...values, phone: e.target.value })}
          placeholder={content.placeholders.phone}
          aria-label={content.placeholders.phone}
          className={INPUT_CLASS}
        />
        <input
          type="text"
          value={values.city}
          onChange={(e) => setValues({ ...values, city: e.target.value })}
          placeholder={content.placeholders.city}
          aria-label={content.placeholders.city}
          className={INPUT_CLASS}
        />
        <textarea
          rows={5}
          value={values.message}
          onChange={(e) => setValues({ ...values, message: e.target.value })}
          placeholder={content.placeholders.message}
          aria-label={content.placeholders.message}
          className="h-36 w-full resize-none rounded-lg border border-raw-eff0f6 bg-white p-5 text-start text-sm text-write-main shadow-[0_8px_4px_0_var(--shadow-soft)] outline-none transition-colors duration-200 placeholder:text-subwrite focus:border-green sm:text-base"
        />
      </div>

      {status === "error" && (
        <p role="alert" className="mt-3 text-start text-sm font-medium text-raw-cc4f4f">
          {content.validationError}
        </p>
      )}
      {status === "success" && (
        <p role="status" className="mt-3 text-start text-sm font-medium text-green">
          {content.successMessage}
        </p>
      )}

      <button
        type="submit"
        className="mx-auto mt-5 flex h-14 w-full items-center justify-center rounded-xl bg-green px-8 text-lg font-semibold text-raw-f3f5f6 transition-opacity duration-200 hover:opacity-90 sm:w-[304px] sm:text-xl"
      >
        {content.submitButton}
      </button>
    </form>
  );
}
