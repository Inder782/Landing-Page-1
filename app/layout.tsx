import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Landing Page Demo",
  description: "Landing Page demo, number 1 ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {children}
      </body>
    </html>
  );
}
