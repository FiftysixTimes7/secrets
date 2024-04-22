import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import React from "react";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={inter.className}>
      <header className="flex justify-between items-center py-4 px-8">
        <Link href="/" className="hover:outline text-xl font-bold rounded-full bg-gray-800 bg-opacity-10 px-4 py-2">Secrets</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/login" className="button">Log In / Sign Up</Link></li>
          </ul>
        </nav>
      </header>
      {children}
    </body>
    </html>
  );
}
