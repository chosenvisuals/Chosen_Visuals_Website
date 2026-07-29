// Central place that decides whether the frontend talks to mock fixtures or the real Express API.
// Every function in this folder (courses.ts, events.ts, services.ts...) reads from here —
// so when a module's backend goes live, this is the only file that changes, never the page components.
// See docs/ARCHITECTURE.md, Section 5.3.

export const USE_MOCKS = process.env.NEXT_PUBLIC_USE_MOCKS !== "false";

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";

export async function apiFetch<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  if (!res.ok) {
    throw new Error(`API request failed: ${res.status} ${res.statusText}`);
  }

  const json = await res.json();
  return json.data as T;
}
