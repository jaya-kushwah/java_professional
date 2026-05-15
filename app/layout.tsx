import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "./components/layout/LayoutWrapper";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Java Professionals - Training Industry-Ready Developers",
  description: "Training industry-ready Java developers through real enterprise projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${urbanist.variable} h-full antialiased`}
    >
      <body className={`${urbanist.className} min-h-full flex flex-col`}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
