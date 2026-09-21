import type { Metadata } from "next";
import { Archivo, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { CookieNotice } from "@/components/CookieNotice";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Çakar Enerji",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr-TR" className={`${archivo.variable} ${sourceSerif.variable}`}>
      <body>
        <a className="skip" href="#main">
          İçeriğe geç
        </a>
        <SiteHeader />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
        <CookieNotice />
      </body>
    </html>
  );
}
