import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Public Service Announcement",
  description: "Scanning an unknown QR code can be dangerous. Be careful!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
