import "dotenv/config";

function required(name: string, fallback?: string): string {
  const value = process.env[name] ?? fallback;
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export const env = {
  port: Number(process.env.PORT ?? 4000),
  supabaseJwtSecret: required("SUPABASE_JWT_SECRET"),
  databaseUrl: process.env.DATABASE_URL ?? "",
  paystackSecretKey: process.env.PAYSTACK_SECRET_KEY ?? "",
  corsOrigin: process.env.CORS_ORIGIN ?? "http://localhost:3000",
};
