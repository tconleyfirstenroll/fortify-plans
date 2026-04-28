"use client";

import { useState } from "react";

const states = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA",
  "KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
  "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT",
  "VA","WA","WV","WI","WY",
];

const productOptions = [
  "Short-Term Medical",
  "Supplemental Insurance",
  "ACA / Marketplace Plan",
  "Life Insurance",
  "Not Sure — Help Me Choose",
];

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error || "Submission failed");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-white rounded-2xl p-10 border border-[#e8ecf1] shadow-sm text-center">
        <div className="w-16 h-16 rounded-full bg-[#eef4fb] flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-[#1b3a6e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-[#1b3a6e] mb-2">Request Received!</h2>
        <p className="text-[#6b7f99] mb-6">
          Thank you for reaching out. A licensed Fortify Plans broker will contact you within
          1 business day.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="px-5 py-2 rounded-md bg-[#1b3a6e] text-white text-sm font-semibold hover:bg-[#2d5faa] transition-colors"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-8 border border-[#e8ecf1] shadow-sm space-y-5"
    >
      <h2 className="text-xl font-bold text-[#1b3a6e]">Your Information</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-[#1b3a6e] mb-1" htmlFor="first_name">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            id="first_name"
            name="first_name"
            type="text"
            required
            className="w-full px-3 py-2 rounded-md border border-[#c4cfdb] text-sm focus:outline-none focus:ring-2 focus:ring-[#2d5faa] focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#1b3a6e] mb-1" htmlFor="last_name">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            id="last_name"
            name="last_name"
            type="text"
            required
            className="w-full px-3 py-2 rounded-md border border-[#c4cfdb] text-sm focus:outline-none focus:ring-2 focus:ring-[#2d5faa] focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-[#1b3a6e] mb-1" htmlFor="email">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-3 py-2 rounded-md border border-[#c4cfdb] text-sm focus:outline-none focus:ring-2 focus:ring-[#2d5faa] focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#1b3a6e] mb-1" htmlFor="phone">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="w-full px-3 py-2 rounded-md border border-[#c4cfdb] text-sm focus:outline-none focus:ring-2 focus:ring-[#2d5faa] focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-[#1b3a6e] mb-1" htmlFor="state">
            State <span className="text-red-500">*</span>
          </label>
          <select
            id="state"
            name="state"
            required
            defaultValue=""
            className="w-full px-3 py-2 rounded-md border border-[#c4cfdb] text-sm focus:outline-none focus:ring-2 focus:ring-[#2d5faa] focus:border-transparent bg-white"
          >
            <option value="" disabled>Select your state</option>
            {states.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-[#1b3a6e] mb-1" htmlFor="product">
            Insurance Interest <span className="text-red-500">*</span>
          </label>
          <select
            id="product"
            name="product"
            required
            defaultValue=""
            className="w-full px-3 py-2 rounded-md border border-[#c4cfdb] text-sm focus:outline-none focus:ring-2 focus:ring-[#2d5faa] focus:border-transparent bg-white"
          >
            <option value="" disabled>Select a product</option>
            {productOptions.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#1b3a6e] mb-1" htmlFor="message">
          Additional Notes <span className="text-[#8c9db5] font-normal">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your situation, household size, budget, or any questions..."
          className="w-full px-3 py-2 rounded-md border border-[#c4cfdb] text-sm focus:outline-none focus:ring-2 focus:ring-[#2d5faa] focus:border-transparent resize-none"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md px-3 py-2">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-3 rounded-md bg-[#1b3a6e] text-white font-semibold hover:bg-[#2d5faa] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Submitting…" : "Request My Free Quote"}
      </button>

      <p className="text-xs text-[#8c9db5] text-center">
        By submitting, you consent to be contacted by a licensed insurance representative.
        We never sell your information.
      </p>
    </form>
  );
}
