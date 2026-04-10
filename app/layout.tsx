import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StaffPulse – Healthcare Staffing Platform",
  description: "Seamless staffing on-demand for healthcare institutions of any scale.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}