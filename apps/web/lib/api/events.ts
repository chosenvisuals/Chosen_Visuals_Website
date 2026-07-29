import type { CVEvent } from "@chosen-visuals/shared-types";
import { USE_MOCKS, apiFetch } from "./client";

const MOCK_EVENTS: CVEvent[] = [
  {
    id: "1",
    title: "Visuals Talk: Creative Careers Conference",
    slug: "creative-careers-conference",
    type: "conference",
    description: "A full-day conference on building sustainable careers in creative tech.",
    location: "Lagos, Nigeria",
    startDate: "2026-09-12",
    endDate: "2026-09-12",
    capacity: 300,
    isPublished: true,
  },
  {
    id: "2",
    title: "Portfolio Review Workshop",
    slug: "portfolio-review-workshop",
    type: "workshop",
    description: "Get hands-on feedback on your design or dev portfolio from mentors.",
    location: "Online",
    startDate: "2026-08-20",
    endDate: "2026-08-20",
    capacity: 100,
    isPublished: true,
  },
];

const MOCK_TOUR_STOPS: CVEvent[] = [
  {
    id: "3",
    title: "Secondary School Tech Tour — Lagos Leg",
    slug: "school-tour-lagos",
    type: "tour",
    description: "An interactive tech discovery day for JSS1–SS3 students.",
    location: "Lagos, Nigeria",
    startDate: "2026-09-05",
    endDate: "2026-09-05",
    capacity: 500,
    isPublished: true,
  },
];

export async function getEvents(): Promise<CVEvent[]> {
  if (USE_MOCKS) return MOCK_EVENTS;
  return apiFetch<CVEvent[]>("/api/events?type=conference,workshop,networking");
}

export async function getTourStops(): Promise<CVEvent[]> {
  if (USE_MOCKS) return MOCK_TOUR_STOPS;
  return apiFetch<CVEvent[]>("/api/events?type=tour");
}
