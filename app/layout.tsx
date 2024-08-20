import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { cn } from '@/lib/utils';
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const poppins = Poppins({ subsets: ['latin'], variable: '--font-poppins', weight: ["300", "400", "500", "600", "700", "800", "900"] });

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
      <body className={cn(
        'font-poppins mx-auto antialiased',
        poppins.variable
      )}>
        <Navbar />
        <main className="">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
