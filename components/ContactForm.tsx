"use client";

import { useState } from "react";

import T from "./T";
import { useLang } from "@/lib/useLang";
import { CONTACT } from "@/lib/site";

/*
 * This is a statically exported site with no backend, so the form hands
 * the message to the visitor's own email client via a mailto: link.
 *
 * TO COLLECT SUBMISSIONS PROPERLY: sign up for a form service such as
 * Formspree, then replace the body of handleSubmit with a fetch() POST
 * to their endpoint. No other file needs to change.
 */

const MESSAGES = {
  km: {
    invalid: "សូមបំពេញព័ត៌មានដែលត្រូវការទាំងអស់ និងផ្តល់អ៊ីមែលត្រឹមត្រូវ។",
    success: "កម្មវិធីអ៊ីមែលរបស់អ្នកនឹងបើកឡើង។ សូមផ្ញើសាររបស់អ្នកដើម្បីបញ្ចប់។",
  },
  en: {
    invalid: "Please complete the required fields and enter a valid email address.",
    success: "Your email app will open. Send the message to finish.",
  },
} as const;

const SUBJECTS = [
  { value: "Admissions enquiry", km: "សំណួរអំពីការចុះឈ្មោះ", en: "Admissions enquiry" },
  { value: "Program information", km: "ព័ត៌មានអំពីកម្មវិធីសិក្សា", en: "Program information" },
  { value: "General enquiry", km: "សំណួរទូទៅ", en: "General enquiry" },
];

type Status = { state: "error" | "success"; key: "invalid" | "success" } | null;

export default function ContactForm() {
  const lang = useLang();
  const [status, setStatus] = useState<Status>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus({ state: "error", key: "invalid" });
      return;
    }

    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    // encodeURIComponent keeps Khmer text and line breaks intact.
    window.location.href =
      `mailto:${CONTACT.email}` +
      `?subject=${encodeURIComponent(subject || "Website enquiry")}` +
      `&body=${encodeURIComponent(body)}`;

    setStatus({ state: "success", key: "success" });
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor="name">
          <T km="ឈ្មោះ" en="Your name" />
          <span className="req" aria-hidden="true">
            {" *"}
          </span>
        </label>
        <input type="text" id="name" name="name" autoComplete="name" required />
      </div>

      <div className="field">
        <label htmlFor="email">
          <T km="អ៊ីមែល" en="Email address" />
          <span className="req" aria-hidden="true">
            {" *"}
          </span>
        </label>
        <input type="email" id="email" name="email" autoComplete="email" required />
      </div>

      <div className="field">
        <label htmlFor="subject">
          <T km="ប្រធានបទ" en="Subject" />
        </label>
        {/* option elements cannot be hidden with CSS, so the label text
            is chosen in JavaScript from the active language. */}
        <select id="subject" name="subject">
          {SUBJECTS.map((s) => (
            <option key={s.value} value={s.value}>
              {lang === "km" ? s.km : s.en}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="message">
          <T km="សារ" en="Message" />
          <span className="req" aria-hidden="true">
            {" *"}
          </span>
        </label>
        <textarea id="message" name="message" required />
        <p className="field-hint">
          <T
            km="សូមពន្យល់សំណួររបស់អ្នកឱ្យបានច្បាស់លាស់។"
            en="Tell us briefly what you need help with."
          />
        </p>
      </div>

      <button className="btn btn-primary" type="submit">
        <T km="ផ្ញើសារ" en="Send message" />
      </button>

      <p className="form-status" data-state={status?.state} role="status" aria-live="polite">
        {status ? MESSAGES[lang][status.key] : ""}
      </p>
    </form>
  );
}
