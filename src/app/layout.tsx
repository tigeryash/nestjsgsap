import type { Metadata } from "next";
import { Reddit_Mono } from "next/font/google";
import "./globals.css";
import Menu from "@/components/menu/menu";

const reddit = Reddit_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextJS x GSAP Responsive Navigation",
  description: "by Yash",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={reddit.className}>
        <Menu />
        {children}
      </body>
    </html>
  );
}
