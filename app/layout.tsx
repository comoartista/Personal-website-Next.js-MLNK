import "./globals.css";
import { Unbounded } from "next/font/google";
import { Inter } from "next/font/google";

const primaryFont = Inter({ subsets: ["latin"] });
const secondaryFont = Unbounded({ subsets: ["latin"] });

export const metadata = {
  title: "Oksana Melnyk | Personal Website",
  description: "Oksana is a full-stack developer with 2 years of experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${primaryFont.className} ${secondaryFont.className}`}>
        {children}
      </body>
    </html>
  );
}
