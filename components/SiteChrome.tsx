import { CookieNotice } from "@/components/CookieNotice";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

/** Shared page shell: skip link, header, main, footer, cookie notice. Used by every layout variant. */
export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a className="skip" href="#main">
        İçeriğe geç
      </a>
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        {children}
      </main>
      <SiteFooter />
      <CookieNotice />
    </>
  );
}
