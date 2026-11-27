"use client";

import { useState } from "react";
import { submitNetlifyForm } from "@/lib/netlify-form";

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "block h-10 w-full border-0 border-b-2 border-[#1ec31e] bg-[#eff2ef] px-[10px] font-poppins text-[15px] italic text-black placeholder:text-[#8a8a8a] focus:outline-2 focus:outline-brand lg:w-[185px]";

export default function NewsletterForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    try {
      await submitNetlifyForm(e.currentTarget);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <p role="status" className="animate-fade-in mt-6 font-poppins text-white">
        Thank you for contacting us.
        <br />
        We will get back to you as soon as possible
      </p>
    );
  }

  return (
    <form name="newsletter" onSubmit={onSubmit} className="mt-6">
      <input type="hidden" name="form-name" value="newsletter" />
      <p hidden>
        <label>
          Leave this empty: <input name="bot-field" tabIndex={-1} />
        </label>
      </p>
      <div className="space-y-4 lg:ml-[14px]">
        <input
          type="text"
          name="first-name"
          placeholder="First Name"
          aria-label="First Name"
          required
          className={inputClass}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          aria-label="Email"
          required
          className={inputClass}
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="mx-auto mt-[23px] block h-[49px] w-full max-w-[280px] rounded-full border-2 border-white font-poppins text-base text-white transition-colors duration-200 hover:border-brand hover:bg-brand disabled:opacity-60 lg:ml-[73px]"
      >
        {status === "sending" ? "Sending…" : "Subscribe"}
      </button>
      {status === "error" && (
        <p role="alert" className="mt-4 font-poppins text-sm text-red-400">
          Oops, there was an error sending your message.
          <br />
          Please try again later
        </p>
      )}
    </form>
  );
}
