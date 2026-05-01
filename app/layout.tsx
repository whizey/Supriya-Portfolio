import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Supriya Deb | Data Scientist Portfolio",
  description: "Data Scientist specializing in Machine Learning, ETL Pipelines, and Data Analytics. Building intelligent systems that think, learn, and scale.",
  keywords: ["Data Scientist", "Machine Learning", "Data Analytics", "ETL", "Python", "SQL"],
  authors: [{ name: "Supriya Deb" }],
  openGraph: {
    title: "Supriya Deb | Data Scientist",
    description: "Building intelligent systems that think, learn, and scale.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        {children}
      </body>
    </html>
  );
}
