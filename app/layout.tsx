import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import classNames from "classnames";
import NavBar from "@/components/NavBar/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BALLAMAS",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={classNames(inter.className, "w-full")}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
