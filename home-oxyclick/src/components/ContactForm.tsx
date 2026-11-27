"use client";

import { useState } from "react";
import { submitNetlifyForm } from "@/lib/netlify-form";
import { services } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

const labelClass = "block font-poppins text-[15px] font-light leading-[30px] text-white";
const fieldClass =
  "mt-[3px] block w-full border-0 border-b border-[#e3e3e3] bg-transparent px-[10px] font-poppins text-[15px] text-white focus:border-brand focus:outline-none";

export default function ContactForm() {
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
      <p role="status" className="animate-fade-in mt-10 font-poppins text-white">
        Thank you for contacting us.
        <br />
        We will get back to you as soon as possible
      </p>
    );
  }

  return (
    <form name="contact" onSubmit={onSubmit} className="max-w-[546px] px-[14px]">
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Leave this empty: <input name="bot-field" tabIndex={-1} />
        </label>
      </p>

      <div>
        <label htmlFor="contact-name" className={labelClass}>
          Name:
        </label>
        <input id="contact-name" name="name" type="text" required className={`${fieldClass} h-[30px]`} />
      </div>
      <div className="mt-[23px]">
        <label htmlFor="contact-email" className={labelClass}>
          Email:
        </label>
        <input id="contact-email" name="email" type="email" required className={`${fieldClass} h-[30px]`} />
      </div>
      <div className="mt-[23px]">
        <label htmlFor="contact-phone" className={labelClass}>
          Phone:
        </label>
        <input id="contact-phone" name="phone" type="tel" required className={`${fieldClass} h-[30px]`} />
      </div>
      <div className="mt-[23px]">
        <label htmlFor="contact-service" className={labelClass}>
          Service Required:
        </label>
        <select
          id="contact-service"
          name="service"
          defaultValue=""
          className={`${fieldClass} h-[30px] [&>option]:text-black`}
        >
          <option value="" disabled hidden />
          {services.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>
      <div className="mt-[23px]">
        <label htmlFor="contact-message" className={labelClass}>
          Message:
        </label>
        <textarea id="contact-message" name="message" className={`${fieldClass} h-[50px] py-[10px]`} />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-[53px] h-[55px] w-[200px] rounded-full border-2 border-white bg-black font-poppins text-base text-white transition-colors duration-200 hover:border-brand hover:bg-brand disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send"}
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
