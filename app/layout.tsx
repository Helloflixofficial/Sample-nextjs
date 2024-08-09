import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "YO YO HONEY SINGH",
  description: "For ME",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <body className={inter.className}>{children}</body>
        </body>
      </html>
    </ClerkProvider>
  );
}
