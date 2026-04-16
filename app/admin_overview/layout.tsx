import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "StaffPulse – Clinical Curator",
  description: "Healthcare staffing management dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}