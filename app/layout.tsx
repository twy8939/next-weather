import type { Metadata } from "next";
import "./globals.css";
import Header from "./_components/Header";

export const metadata: Metadata = {
  title: "Next Weather",
  description: "A weather app built with Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"mx-auto w-[500px] bg-slate-950 px-6 pt-3 text-sky-100"}>
        <Header />
        {children}
      </body>
    </html>
  );
}
