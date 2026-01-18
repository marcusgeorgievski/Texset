import type { Metadata } from "next";
import "./globals.css";
import { geistSans } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Texset",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} antialiased`}>{children}</body>
    </html>
  );
}
