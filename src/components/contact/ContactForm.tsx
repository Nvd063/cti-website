"use client";

import { useState } from "react";
import type { FormEvent } from "react";

import {
  ArrowUpRight,
  ShieldCheck,
  Headset,
  MapPin,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";

import type {
  ContactInquiry,
  ContactFormErrors,
} from "@/types/contact";

import {
  validateContactInquiry,
} from "@/lib/validations/contact";

interface ContactFormProps {
  services: string[];
  whatsapp: string;
}

const initialForm: ContactInquiry = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-[#0b162c] outline-none transition placeholder:text-slate-400 focus:border-[#203164] focus:bg-white focus:ring-2 focus:ring-[#203164]/10";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Technical Expertise",
    description:
      "Professional guidance for your project requirements.",
  },
  {
    icon: Headset,
    title: "Dedicated Support",
    description:
      "Connect directly with our experienced team.",
  },
  {
    icon: MapPin,
    title: "Nationwide Presence",
    description:
      "Supporting projects across Pakistan.",
  },
];

export default function ContactForm({
  services,
  whatsapp,
}: ContactFormProps) {
  const [form, setForm] =
    useState<ContactInquiry>(initialForm);

  const [errors, setErrors] =
    useState<ContactFormErrors>({});

  const [submitted, setSubmitted] = useState(false);

  function updateField(
    field: keyof ContactInquiry,
    value: string
  ) {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [field]: undefined,
    }));

    setSubmitted(false);
  }

  function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const validationErrors =
      validateContactInquiry(form);

    if (!services.includes(form.service)) {
      validationErrors.service =
        "Please select a valid service.";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const message = [
      "Hello CTI System & Solutions,",
      "",
      "I would like to discuss a project inquiry.",
      "",
      `Name: ${form.fullName.trim()}`,
      `Company: ${form.company.trim() || "Not specified"}`,
      `Email: ${form.email.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `Service: ${form.service}`,
      "",
      "Project Requirements:",
      form.message.trim(),
      "",
      "Please share further details.",
      "Thank you.",
    ].join("\n");

    const url = `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`;

    window.open(
      url,
      "_blank",
      "noopener,noreferrer"
    );

    setSubmitted(true);
  }

  const fields = [
    {
      name: "fullName",
      label: "Full Name",
      placeholder: "Your full name",
      type: "text",
      required: true,
      autoComplete: "name",
      maxLength: 100,
    },
    {
      name: "company",
      label: "Company Name",
      placeholder: "Your company",
      type: "text",
      required: false,
      autoComplete: "organization",
      maxLength: 150,
    },
    {
      name: "email",
      label: "Email Address",
      placeholder: "you@company.com",
      type: "email",
      required: true,
      autoComplete: "email",
      maxLength: 254,
    },
    {
      name: "phone",
      label: "Phone Number",
      placeholder: "+92 300 0000000",
      type: "tel",
      required: true,
      autoComplete: "tel",
      maxLength: 25,
    },
  ] as const;

  return (
    <section
      id="contact-form"
      className="mx-auto max-w-[1440px] scroll-mt-28 px-4 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20"
    >

      <div className="grid overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_15px_60px_rgba(11,22,44,0.06)] lg:grid-cols-[0.85fr_1.15fr]">

        {/* Left Information Panel */}

        <div className="relative isolate overflow-hidden bg-[#0b162c] p-6 text-white sm:p-10 lg:p-12">

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#203164]/60 to-transparent" />

            <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-red-600/15 blur-[90px]" />

            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff07_1px,transparent_1px),linear-gradient(to_bottom,#ffffff07_1px,transparent_1px)] bg-[size:40px_40px]" />
          </div>

          <div className="relative">

            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-red-500" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
                Connect With CTI
              </span>
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Lets Talk
              <span className="block text-red-500">
                Solutions.
              </span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-300 sm:text-base">
              From initial consultation to implementation,
              our team is ready to help you find the right
              solution for your environment.
            </p>

            <div className="mt-8 space-y-5">

              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div
                    key={benefit.title}
                    className="flex items-start gap-4"
                  >

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 backdrop-blur-lg">
                      <Icon size={21} />
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold">
                        {benefit.title}
                      </h3>

                      <p className="mt-1 text-xs leading-relaxed text-slate-300 sm:text-sm">
                        {benefit.description}
                      </p>
                    </div>

                  </div>
                );
              })}

            </div>

            <a
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold backdrop-blur-xl transition hover:bg-white/20"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
              <ArrowUpRight size={16} />
            </a>

          </div>
        </div>

        {/* Right Form Panel */}

        <div className="p-5 sm:p-10 lg:p-12">

          <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-600">
            Project Inquiry
          </span>

          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0b162c] sm:text-3xl">
            Send Us a Message.
          </h2>

          <p className="mt-2 text-sm leading-relaxed text-slate-500">
            Tell us about your requirements and connect
            with our team.
          </p>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="mt-7 space-y-5"
          >

            <div className="grid gap-5 sm:grid-cols-2">

              {fields.map((field) => (
                <div key={field.name}>

                  <label
                    htmlFor={field.name}
                    className="mb-2 block text-xs font-semibold text-[#0b162c] sm:text-sm"
                  >
                    {field.label}

                    {field.required && (
                      <span className="ml-1 text-red-600">
                        *
                      </span>
                    )}
                  </label>

                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    value={form[field.name]}
                    placeholder={field.placeholder}
                    autoComplete={field.autoComplete}
                    maxLength={field.maxLength}
                    required={field.required}
                    aria-invalid={!!errors[field.name]}
                    aria-describedby={
                      errors[field.name]
                        ? `${field.name}-error`
                        : undefined
                    }
                    onChange={(event) =>
                      updateField(
                        field.name,
                        event.target.value
                      )
                    }
                    className={`${inputClass} ${
                      errors[field.name]
                        ? "border-red-500"
                        : ""
                    }`}
                  />

                  {errors[field.name] && (
                    <p
                      id={`${field.name}-error`}
                      className="mt-1 text-xs text-red-600"
                    >
                      {errors[field.name]}
                    </p>
                  )}

                </div>
              ))}

            </div>

            {/* Service Selection */}

            <div>
              <label
                htmlFor="service"
                className="mb-2 block text-sm font-semibold text-[#0b162c]"
              >
                Interested Service
                <span className="ml-1 text-red-600">*</span>
              </label>

              <select
                id="service"
                name="service"
                required
                value={form.service}
                aria-invalid={!!errors.service}
                aria-describedby={
                  errors.service ? "service-error" : undefined
                }
                onChange={(event) =>
                  updateField("service", event.target.value)
                }
                className={`${inputClass} ${
                  errors.service ? "border-red-500" : ""
                }`}
              >
                <option value="">
                  Select a service
                </option>

                {services.map((service) => (
                  <option
                    key={service}
                    value={service}
                  >
                    {service}
                  </option>
                ))}

              </select>

              {errors.service && (
                <p
                  id="service-error"
                  className="mt-1 text-xs text-red-600"
                >
                  {errors.service}
                </p>
              )}
            </div>

            {/* Message */}

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-semibold text-[#0b162c]"
              >
                Project Requirements
                <span className="ml-1 text-red-600">*</span>
              </label>

              <textarea
                id="message"
                name="message"
                rows={4}
                required
                maxLength={2000}
                value={form.message}
                aria-invalid={!!errors.message}
                aria-describedby={
                  errors.message ? "message-error" : undefined
                }
                placeholder="Tell us about your project..."
                onChange={(event) =>
                  updateField("message", event.target.value)
                }
                className={`${inputClass} resize-y ${
                  errors.message ? "border-red-500" : ""
                }`}
              />

              <div className="mt-1 flex justify-between gap-2">
                <div>
                  {errors.message && (
                    <p
                      id="message-error"
                      className="text-xs text-red-600"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                <span className="text-xs text-slate-400">
                  {form.message.length}/2000
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-b from-red-500 to-red-700 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-red-600/15 transition hover:brightness-110"
            >
              Continue to WhatsApp

              <ArrowUpRight
                size={19}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </button>

            <p className="text-center text-xs leading-relaxed text-slate-500">
              Your inquiry will be prepared in WhatsApp.
              Review the message before sending it.
            </p>

            {submitted && (
              <div
                role="status"
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-[#203164]"
              >
                <CheckCircle2
                  size={20}
                  className="shrink-0"
                />

                <p>
                  Your inquiry is ready. Please send the
                  prepared message in WhatsApp to complete
                  your inquiry.
                </p>
              </div>
            )}

          </form>
        </div>
      </div>
    </section>
  );
}