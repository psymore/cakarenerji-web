import type { Metadata } from "next";
import { Archivo, Source_Serif_4 } from "next/font/google";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
