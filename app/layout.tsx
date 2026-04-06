import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FRNTRW Foundation — Auckland Youth Athletic Development",
  description:
    "Frntrw Foundation provides structured development pathways for Auckland athletes aged 10–17. Elite coaching. Real access. No athlete left behind.",
  openGraph: {
    title: "FRNTRW Foundation",
    description:
      "Auckland-based youth athletic development. Free community programme for ages 10–17.",
    siteName: "FRNTRW Foundation",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.className}>
      <body>{children}</body>
    </html>
  );
}
