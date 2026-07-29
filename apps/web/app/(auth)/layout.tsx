import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Sign In — Chosen Visuals",
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full flex-col overflow-hidden bg-white">
      <Navbar />
      <main className="flex-1 grid">{children}</main>
    </div>
  );
}
