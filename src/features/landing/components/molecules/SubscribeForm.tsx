"use client";

import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import type { SubscribeContent } from "../../types/sections";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function SubscribeForm({ content }: { content: SubscribeContent }) {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState<"idle" | "error" | "success">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!EMAIL_PATTERN.test(email.trim())) {
      setFeedback("error");
      toast.error(content.validationError);
      return;
    }

    setFeedback("success");
    toast.success(content.successMessage);
    setEmail("");
  };

  return (
    <div className="mt-8 w-full max-w-[680px]">
      <form
        onSubmit={handleSubmit}
        noValidate
        className="flex flex-col items-center justify-center gap-3 sm:flex-row"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={content.emailPlaceholder}
          aria-label={content.emailPlaceholder}
          className="h-14 w-full rounded-xl border border-raw-e7caaa bg-off-white px-4 text-start text-sm text-write-main outline-none transition-colors duration-200 placeholder:text-subwrite/80 focus:border-green sm:h-[62px] sm:w-[459px]"
        />
        <button
          type="submit"
          className="h-14 w-full shrink-0 rounded-xl bg-green px-8 text-lg font-semibold text-off-white transition-opacity duration-200 hover:opacity-90 sm:h-[62px] sm:w-[209px] sm:text-xl"
        >
          {content.buttonLabel}
        </button>
      </form>

      {feedback === "error" && (
        <p role="alert" className="mt-3 text-center text-sm font-medium text-raw-cc4f4f">
          {content.validationError}
        </p>
      )}
      {feedback === "success" && (
        <p role="status" className="mt-3 text-center text-sm font-medium text-green">
          {content.successMessage}
        </p>
      )}
    </div>
  );
}
