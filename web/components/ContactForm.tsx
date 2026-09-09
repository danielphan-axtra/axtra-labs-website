"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    // No backend yet — capture locally and guide to email.
    setStatus("sent");
    form.reset();
  };

  if (status === "sent") {
    return (
      <div className="contact-form-wrap reveal in-view" role="status">
        <h2>Thanks — we got your note</h2>
        <p className="form-lead">
          Form delivery is not wired to a server yet. Email{" "}
          <a href="mailto:contact@axtralabs.com">contact@axtralabs.com</a> for a
          same-day reply, or submit again after we connect the inbox.
        </p>
        <button type="button" className="btn btn-submit" onClick={() => setStatus("idle")}>
          Send another message <span>→</span>
        </button>
      </div>
    );
  }

  return (
    <div className="contact-form-wrap reveal">
      <h2>Send us a message</h2>
      <p className="form-lead">
        Tell us about your project — an engineer will respond within one business day.
      </p>
      <form className="contact-form" onSubmit={onSubmit} noValidate={false}>
        <div className="form-row">
          <div>
            <label htmlFor="firstName">First name</label>
            <input type="text" id="firstName" name="firstName" required autoComplete="given-name" />
          </div>
          <div>
            <label htmlFor="lastName">Last name</label>
            <input type="text" id="lastName" name="lastName" required autoComplete="family-name" />
          </div>
        </div>
        <div>
          <label htmlFor="email">Work email</label>
          <input type="email" id="email" name="email" required autoComplete="email" />
        </div>
        <div>
          <label htmlFor="company">Company</label>
          <input type="text" id="company" name="company" autoComplete="organization" />
        </div>
        <div>
          <label htmlFor="interest">How can we help?</label>
          <select id="interest" name="interest" defaultValue="">
            <option value="">Select a topic</option>
            <option>AI Services</option>
            <option>Data &amp; BI</option>
            <option>Embedded / Robotics</option>
            <option>DevOps / MLOps</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Briefly describe your project or question"
          />
        </div>
        <button type="submit" className="btn btn-submit">
          Submit <span>→</span>
        </button>
      </form>
    </div>
  );
}
