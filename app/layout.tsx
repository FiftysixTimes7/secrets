import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "secrets",
  description: "Keeps your Deep♂Dark♂Secrets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen">
          <div className="mx-auto text-center flex-initial basis-1/3 h-full">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
