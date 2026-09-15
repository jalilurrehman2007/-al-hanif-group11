"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

const serviceOptions = [
  "Air Freight",
  "Sea Freight",
  "Land Transportation",
  "Warehousing & Storage",
  "Customs Clearance",
  "Sourcing Agent Services",
  "Transloading",
  "Other",
];

// Web3Forms access keys are meant to be used directly from the browser —
// that's how the service works (like Formspree). It's not a secret key in
// the way a payment API key is; Web3Forms verifies submissions by key +
// domain, not by keeping the key hidden.
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

export default function QuoteForm({ dark = false }: { dark?: boolean }) {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();

    if (!name || !email || !message) {
      setError("Please fill in your name, email, and shipment details.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!ACCESS_KEY) {
      setError("Form is not configured yet. Set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY.");
      return;
    }

    setState("submitting");

    form.append("access_key", ACCESS_KEY);
    form.append("subject", "New quote request — website enquiry");
    form.append("from_name", "Website Quote Form");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });
      const data = await res.json();
      if (data.success) {
        setState("success");
      } else {
        setState("idle");
        setError(data.message || "Something went wrong sending your enquiry. Please try again or contact us directly.");
      }
    } catch {
      setState("idle");
      setError("Something went wrong sending your enquiry. Please try again or contact us directly.");
    }
  }

  const fieldClass = dark
    ? "w-full rounded-sm bg-white/10 border border-white/20 text-white placeholder:text-sail-light/60 px-4 py-3 text-sm focus:border-signal outline-none transition-colors"
    : "w-full rounded-sm bg-white border border-sail/40 text-ink placeholder:text-ink/40 px-4 py-3 text-sm focus:border-route outline-none transition-colors";

  const labelClass = dark ? "text-sail-light text-xs font-mono uppercase tracking-wider" : "text-ink/60 text-xs font-mono uppercase tracking-wider";

  if (state === "success") {
    return (
      <div className={dark ? "text-white" : "text-harbor"}>
        <p className="font-display text-2xl mb-2">Enquiry received.</p>
        <p className={dark ? "text-sail-light" : "text-ink/70"}>
          Our team will get back to you shortly with a competitive quote.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="name" className={labelClass}>Full name</label>
          <input id="name" name="name" type="text" className={fieldClass} placeholder="Your name" />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="email" className={labelClass}>Email</label>
          <input id="email" name="email" type="email" className={fieldClass} placeholder="you@company.com" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="phone" className={labelClass}>Phone</label>
          <input id="phone" name="phone" type="tel" className={fieldClass} placeholder="+92 ..." />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="service" className={labelClass}>Service needed</label>
          <select id="service" name="service" className={fieldClass} defaultValue={serviceOptions[0]}>
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="message" className={labelClass}>Shipment details</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={fieldClass}
          placeholder="Origin, destination, cargo type, approximate volume or weight..."
        />
      </div>

      {error && <p className="text-signal text-sm">{error}</p>}

      <button type="submit" disabled={state === "submitting"} className="btn-primary w-full sm:w-auto">
        {state === "submitting" ? "Sending..." : "Submit Enquiry"}
      </button>
    </form>
  );
}