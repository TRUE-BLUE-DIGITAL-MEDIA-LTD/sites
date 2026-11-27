"use client";

import { useState } from "react";
import { submitNetlifyForm } from "@/lib/netlify-form";

type Status = "idle" | "sending" | "sent" | "error";

const fieldClass =
  "my-[3px] block w-full rounded-none border-0 bg-white px-[10px] text-base text-black placeholder:text-[#757575] focus:outline focus:outline-1 focus:outline-brand md:text-[15px]";

// The "Free Evaluation" form shown above the footer on every page.
// Field names must match the form declared in public/__forms.html.
export default function EvaluationForm() {
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
      <p role="status" className="animate-fade-in px-[15px] py-10 text-center text-lg text-slate">
        Thank you for contacting us.
        <br />
        We will get back to you as soon as possible
      </p>
    );
  }

  return (
    // method="post" only matters if the form is submitted before the page's
    // scripts have loaded: Netlify then still receives it, and the visitor's
    // details are not put in the address bar.
    <form name="evaluation" method="post" onSubmit={onSubmit} className="mt-5 py-[15px]">
      <input type="hidden" name="form-name" value="evaluation" />
      <p hidden>
        <label>
          Leave this empty: <input name="bot-field" tabIndex={-1} />
        </label>
      </p>

      <div className="grid md:grid-cols-2">
        <div className="mt-[10px] px-[15px]">
          <input
            name="first-name"
            type="text"
            required
            placeholder="First Name"
            aria-label="First Name"
            className={`${fieldClass} h-10`}
          />
        </div>
        <div className="mt-[10px] px-[15px]">
          <input
            name="last-name"
            type="text"
            required
            placeholder="Last Name"
            aria-label="Last Name"
            className={`${fieldClass} h-10`}
          />
        </div>
        <div className="mt-[10px] px-[15px]">
          <input
            name="phone"
            type="tel"
            required
            pattern="[0-9+\(\)\-.\s]+"
            title="Phone number"
            placeholder="Phone"
            aria-label="Phone"
            className={`${fieldClass} h-10`}
          />
        </div>
        <div className="mt-[10px] px-[15px]">
          <input
            name="email"
            type="email"
            placeholder="Email"
            aria-label="Email"
            className={`${fieldClass} h-10`}
          />
        </div>
        <div className="mt-[10px] px-[15px] md:col-span-2">
          <textarea
            name="message"
            placeholder="Message"
            aria-label="Message"
            className={`${fieldClass} h-20 p-[10px] md:text-base`}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mx-auto mt-5 block h-[50px] w-[273px] max-w-full border-2 border-brand text-base text-brand transition-colors duration-200 hover:border-transparent hover:bg-brand hover:text-white disabled:opacity-60 mb-5 md:h-[51px] md:w-[280px]"
      >
        {status === "sending" ? "SENDING…" : "SUBMIT"}
      </button>
      {status === "error" && (
        <p role="alert" className="mt-4 text-center text-sm text-[#b00020]">
          Oops, there was an error sending your message.
          <br />
          Please try again later
        </p>
      )}
    </form>
  );
}
