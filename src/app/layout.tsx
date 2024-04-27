import type { Metadata } from "next";
import { Poppins,Ubuntu } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";

const poppins = Poppins({ 
  subsets: ["latin"], 
  weight:["400","600","700","800"],
  variable:"--font-poppins",
  display: 'swap'
});

const ubuntu = Ubuntu({ 
  subsets: ["latin"], 
  weight:["300","400","500","700"],
  variable:"--font-ubuntu",
  display: 'swap'
});

export const metadata: Metadata = {
  title: "StudioT",
  description: "web agency studioT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={`${poppins.variable} ${ubuntu.variable} font-poppins px-2 md:px-12 bg-softwhite`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
