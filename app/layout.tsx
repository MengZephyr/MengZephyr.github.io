import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meng Zhang (Zephyr) — Computer Graphics Researcher",
  description:
    "Meng Zhang is an Associate Professor researching physics simulation, digital garments, 3D hair, and neural rendering.",
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
