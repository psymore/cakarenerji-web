import type { Metadata } from "next";
import { Archivo, Source_Serif_4 } from "next/font/google";
import { DEFAULT_HOME_LAYOUT, homeLayoutInitScript } from "@/lib/home-layout";
import { DEFAULT_THEME, themeInitScript } from "@/lib/theme";
import "./globals.css";
import "./themes.css";

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
    <html
      lang="tr-TR"
      data-theme={DEFAULT_THEME}
      data-scheme="light"
      data-home-layout={DEFAULT_HOME_LAYOUT}
      className={`${archivo.variable} ${sourceSerif.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript + homeLayoutInitScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
