"use client";

import { useState } from "react";
import { PageHeader, Button } from "@chosen-visuals/ui";
import { submitEventRegistration } from "@/lib/api/bookings";

export default function SchoolTourRegisterPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = new FormData(e.currentTarget);
    await submitEventRegistration({
      eventSlug: "school-tour-lagos",
      fullName: String(form.get("fullName") || ""),
      email: String(form.get("email") || ""),
      phone: String(form.get("phone") || ""),
      schoolName: String(form.get("schoolName") || ""),
    });
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div>
        <PageHeader title="You're Registered!" description="We'll be in touch with the confirmed tour date and details for your school." />
      </div>
    );
  }

  return (
    <div>
      <PageHeader eyebrow="Secondary School Tech Tour" title="Register Your School" />
      <form onSubmit={handleSubmit} className="max-w-md space-y-4">
        <input name="schoolName" placeholder="School Name" required className="w-full rounded-md border border-gray-300 px-4 py-2" />
        <input name="fullName" placeholder="Contact Person's Name" required className="w-full rounded-md border border-gray-300 px-4 py-2" />
        <input name="email" type="email" placeholder="Email Address" required className="w-full rounded-md border border-gray-300 px-4 py-2" />
        <input name="phone" placeholder="Phone Number" required className="w-full rounded-md border border-gray-300 px-4 py-2" />
        <Button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Secure Your Spot"}
        </Button>
      </form>
    </div>
  );
}
