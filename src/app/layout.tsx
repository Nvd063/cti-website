import type { Metadata } from "next";
import Header from "@/components/header/Header";
import "./globals.css";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "CTI | System & Solutions",
  description: "Explore CTI products, services and solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
  
}