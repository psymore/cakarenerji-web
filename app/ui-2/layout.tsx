import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./css/tokens.css";
import "./css/shell.css";
import "./css/content.css";
import { SiteChrome } from "@/components/SiteChrome";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

/** Second design of the same site, reachable under /ui-2. Kept out of search results so it never competes with the main design. */
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function Ui2Layout({ children }: LayoutProps<"/ui-2">) {
  return (
    <div className={`ui2 ${jakarta.variable}`}>
      <SiteChrome>{children}</SiteChrome>
    </div>
  );
}
