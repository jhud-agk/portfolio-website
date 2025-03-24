import type { Metadata } from "next";
import { Roboto_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "@/component/lenis";
import RefreshLoading from "@/component/RefreshLoading";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const roboto_mono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jude portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body
          className={`${roboto_mono.variable} ${inter.variable} antialiased`}
        >
          <RefreshLoading>{children}</RefreshLoading>
        </body>
      </ReactLenis>
    </html>
  );
}
