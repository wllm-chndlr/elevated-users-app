import type { Metadata } from "next";
import { Oxanium } from "next/font/google";
import "./globals.css";
import AppSidebar from "@/components/AppSidebar";

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elevated Users App",
  description: "Browse user profiles and stats",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full bg-white`}>
      <body className={`${oxanium.className} antialiased h-full flex flex-row`}>
        <AppSidebar />
        <main className="flex-grow overflow-y-auto border-t border-gray-200 p-8">
          {children}
        </main>
      </body>
    </html>
  );
}
