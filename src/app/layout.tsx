
import type { Metadata } from "next";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://ctit.com.pk";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: "CTI | System & Solutions",

  description:
    "CTI System & Solutions provides integrated fire safety, security, building automation, surveillance and infrastructure solutions across Pakistan.",

  applicationName: "CTI System & Solutions",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "en_PK",
    siteName: "CTI System & Solutions",
    title: "CTI | System & Solutions",
    description:
      "Integrated safety, security, automation and infrastructure solutions across Pakistan.",
  },

  twitter: {
    card: "summary_large_image",
    title: "CTI | System & Solutions",
    description:
      "Integrated safety, security and automation solutions across Pakistan.",
  },
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
