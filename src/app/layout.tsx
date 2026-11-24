import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CTI",
  description: "Explore CTI products, services and solutions.",
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