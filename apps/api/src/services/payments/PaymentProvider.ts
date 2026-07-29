// Common interface every payment provider implements.
// Paystack is live now (docs/ARCHITECTURE.md, Section 5.6). Adding Stripe later means writing
// a StripeProvider implementing this same interface — nothing else in the codebase changes.

export interface InitiatePaymentInput {
  amount: number; // in the smallest currency unit (e.g. kobo for NGN)
  currency: string;
  email: string;
  reference: string;
}

export interface InitiatePaymentResult {
  authorizationUrl: string;
  reference: string;
}

export interface VerifyPaymentResult {
  reference: string;
  status: "success" | "failed" | "pending";
  amount: number;
}

export interface PaymentProvider {
  initiate(input: InitiatePaymentInput): Promise<InitiatePaymentResult>;
  verify(reference: string): Promise<VerifyPaymentResult>;
}
