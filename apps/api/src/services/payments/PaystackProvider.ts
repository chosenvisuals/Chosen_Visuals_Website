import { env } from "../../config/env";
import { InitiatePaymentInput, InitiatePaymentResult, PaymentProvider, VerifyPaymentResult } from "./PaymentProvider";

const PAYSTACK_BASE_URL = "https://api.paystack.co";

export class PaystackProvider implements PaymentProvider {
  private get headers() {
    return {
      Authorization: `Bearer ${env.paystackSecretKey}`,
      "Content-Type": "application/json",
    };
  }

  async initiate(input: InitiatePaymentInput): Promise<InitiatePaymentResult> {
    const res = await fetch(`${PAYSTACK_BASE_URL}/transaction/initialize`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        amount: input.amount,
        email: input.email,
        currency: input.currency,
        reference: input.reference,
      }),
    });

    if (!res.ok) {
      throw new Error(`Paystack initiate failed: ${res.status}`);
    }

    const json = await res.json();
    return {
      authorizationUrl: json.data.authorization_url,
      reference: json.data.reference,
    };
  }

  async verify(reference: string): Promise<VerifyPaymentResult> {
    const res = await fetch(`${PAYSTACK_BASE_URL}/transaction/verify/${reference}`, {
      headers: this.headers,
    });

    if (!res.ok) {
      throw new Error(`Paystack verify failed: ${res.status}`);
    }

    const json = await res.json();
    const status = json.data.status === "success" ? "success" : "failed";

    return {
      reference,
      status,
      amount: json.data.amount,
    };
  }
}
