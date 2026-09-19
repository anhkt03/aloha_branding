"use client";

import { useState, type ReactNode } from "react";
import { Icon } from "@/components/common/Icon";
import type { Dictionary } from "@/i18n/types";

const controlClass =
  "w-full rounded-xl border border-line-strong bg-card px-3.5 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-muted-light focus:border-brand focus:ring-2 focus:ring-brand/20";

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-[13px] font-semibold text-ink-soft">
        {label}
      </label>
      {children}
    </div>
  );
}

export function ContactForm({ form }: { form: Dictionary["contact"]["form"] }) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center rounded-3xl border border-line bg-card p-8 text-center shadow-[0_8px_24px_rgba(10,50,28,.06)]">
        <span className="mb-4 grid h-16 w-16 place-items-center rounded-full bg-brand-tint text-brand">
          <Icon name="badge-check" size={32} />
        </span>
        <h2 className="text-xl font-bold text-ink">{form.success}</h2>
      </div>
    );
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
      className="rounded-3xl border border-line bg-card p-8 shadow-[0_8px_24px_rgba(10,50,28,.06)]"
    >
      <h2 className="text-[22px] font-bold text-ink">{form.title}</h2>
      <p className="mb-6 mt-1 text-sm text-muted-light">{form.required}</p>

      <div className="grid gap-[18px] sm:grid-cols-2">
        <Field label={form.name} htmlFor="name">
          <input id="name" name="name" type="text" required placeholder={form.namePh} className={controlClass} />
        </Field>
        <Field label={form.phone} htmlFor="phone">
          <input id="phone" name="phone" type="tel" required placeholder={form.phonePh} className={controlClass} />
        </Field>
      </div>

      <div className="mt-[18px]">
        <Field label={form.email} htmlFor="email">
          <input id="email" name="email" type="email" placeholder={form.emailPh} className={controlClass} />
        </Field>
      </div>

      <div className="mt-[18px] grid gap-[18px] sm:grid-cols-2">
        <Field label={form.interest} htmlFor="interest">
          <select id="interest" name="interest" className={controlClass} defaultValue={form.interestOptions[0]}>
            {form.interestOptions.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        </Field>
        <Field label={form.program} htmlFor="program">
          <select id="program" name="program" className={controlClass} defaultValue={form.programOptions[0]}>
            {form.programOptions.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-[18px]">
        <Field label={form.branch} htmlFor="branch">
          <select id="branch" name="branch" className={controlClass} defaultValue={form.branchOptions[0]}>
            {form.branchOptions.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-[18px]">
        <Field label={form.message} htmlFor="message">
          <textarea id="message" name="message" rows={3} placeholder={form.messagePh} className={controlClass} />
        </Field>
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-brand py-4 text-base font-bold text-white transition-colors hover:bg-brand-dark"
      >
        {form.submit}
      </button>
      <p className="mt-3.5 text-center text-xs text-muted-light">{form.consent}</p>
    </form>
  );
}
