import { USE_MOCKS, apiFetch } from "./client";

export interface ServiceRequestInput {
  serviceType: string;
  description: string;
  fullName: string;
  email: string;
  phone: string;
}

export interface EventRegistrationInput {
  eventSlug: string;
  fullName: string;
  email: string;
  phone: string;
  schoolName?: string;
}

export async function submitServiceRequest(input: ServiceRequestInput): Promise<{ id: string }> {
  if (USE_MOCKS) {
    console.log("[mock] service request submitted:", input);
    return { id: "mock-request-id" };
  }
  return apiFetch<{ id: string }>("/api/service-requests", {
    method: "POST",
    body: JSON.stringify(input),
  });
}

export async function submitEventRegistration(input: EventRegistrationInput): Promise<{ id: string }> {
  if (USE_MOCKS) {
    console.log("[mock] event registration submitted:", input);
    return { id: "mock-registration-id" };
  }
  return apiFetch<{ id: string }>("/api/event-registrations", {
    method: "POST",
    body: JSON.stringify(input),
  });
}
