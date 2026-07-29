// Shared types between apps/web and apps/api.
// Keeping these in one place is what stops the frontend and backend from drifting apart.

export type UserRole =
  | "visitor"
  | "student"
  | "client"
  | "instructor"
  | "school_rep"
  | "staff"
  | "admin";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  organizationName?: string | null;
  createdAt: string;
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  price: number;
  instructorId: string;
  videoProvider?: "youtube" | "vimeo" | null;
  videoRef?: string | null;
  isPublished: boolean;
}

export type EnrollmentStatus = "pending" | "active" | "completed";

export interface Enrollment {
  id: string;
  userId: string;
  courseId: string;
  status: EnrollmentStatus;
  progressPercent: number;
  certificateIssuedAt?: string | null;
}

export type EventType = "conference" | "workshop" | "networking" | "tour";

export interface CVEvent {
  id: string;
  title: string;
  slug: string;
  type: EventType;
  description: string;
  location: string;
  startDate: string;
  endDate: string;
  capacity: number;
  isPublished: boolean;
}

export type RegistrationStatus = "registered" | "attended" | "cancelled";

export interface EventRegistration {
  id: string;
  eventId: string;
  userId?: string | null;
  fullName: string;
  email: string;
  phone: string;
  schoolName?: string | null;
  status: RegistrationStatus;
}

export type ServiceRequestStatus = "new" | "quoted" | "confirmed" | "in_progress" | "completed";

export interface ServiceRequest {
  id: string;
  clientId?: string | null;
  serviceType: string;
  description: string;
  status: ServiceRequestStatus;
  quotedAmount?: number | null;
  createdAt: string;
}

export type PaymentProviderName = "paystack" | "stripe";
export type PaymentPurpose = "enrollment" | "service" | "event";

export interface Payment {
  id: string;
  userId: string;
  reference: string;
  provider: PaymentProviderName;
  amount: number;
  currency: string;
  purpose: PaymentPurpose;
  status: "pending" | "success" | "failed";
  createdAt: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  mediaUrls: string[];
  description: string;
  publishedAt: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  body: string;
  coverImage?: string | null;
  authorId: string;
  status: "draft" | "published";
  publishedAt?: string | null;
}

export interface Testimonial {
  id: string;
  clientName: string;
  organization?: string | null;
  quote: string;
  isPublished: boolean;
}

// Generic API envelope so every endpoint returns a consistent shape.
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}
