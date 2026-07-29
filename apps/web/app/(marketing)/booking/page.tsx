"use client";

import { useState } from "react";
import { PageHeader, Button } from "@chosen-visuals/ui";
import { submitServiceRequest } from "@/lib/api/bookings";

const serviceTypes = ["Branding & Design", "Printing & Production", "Event Visual Design", "Event Media Coverage"];

export default function BookingPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = new FormData(e.currentTarget);
    await submitServiceRequest({
      serviceType: String(form.get("serviceType") || ""),
      description: String(form.get("description") || ""),
      fullName: String(form.get("fullName") || ""),
      email: String(form.get("email") || ""),
      phone: String(form.get("phone") || ""),
    });
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return <PageHeader title="Request Received" description="Our team will send you a quote shortly." />;
  }

  return (
    <div>
      <PageHeader eyebrow="Get Started" title="Request a Service" />
      <form onSubmit={handleSubmit} className="max-w-md space-y-4">
        <select name="serviceType" required className="w-full rounded-md border border-gray-300 px-4 py-2">
          {serviceTypes.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        <textarea name="description" placeholder="Tell us about your project" required className="w-full rounded-md border border-gray-300 px-4 py-2" rows={4} />
        <input name="fullName" placeholder="Your Name" required className="w-full rounded-md border border-gray-300 px-4 py-2" />
        <input name="email" type="email" placeholder="Email Address" required className="w-full rounded-md border border-gray-300 px-4 py-2" />
        <input name="phone" placeholder="Phone Number" required className="w-full rounded-md border border-gray-300 px-4 py-2" />
        <Button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit Request"}
        </Button>
      </form>
    </div>
  );
}
