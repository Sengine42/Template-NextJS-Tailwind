import type { Metadata } from "next";
//import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";

export const metadata: Metadata = {
  title: "Template NextJS With TailWind",
  description: "Create template For Landing page",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>){
  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
