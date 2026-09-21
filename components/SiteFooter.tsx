import Link from "next/link";
import { FacebookIcon, InstagramIcon, LinkedInIcon, WhatsAppIcon } from "@/components/icons";
import { Logo } from "@/components/Logo";
import { productLinks, site } from "@/lib/site";
import { T } from "@/lib/text";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap site-footer__grid">
        <div>
          <Logo />
          <address>
            {site.name}
            <br />
            {site.address.street}, {site.address.city}
            <br />
            <a href={`tel:${site.phone.tel}`}>{site.phone.display}</a>
          </address>
        </div>
        <nav aria-label="Ürünlerimiz">
          <h2>ÜRÜNLERİMİZ</h2>
          <ul>
            {productLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>
                  <T as="span" v={l.label} />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2>{site.name}</h2>
          <div className="social">
            <a href={site.whatsapp} aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
            </a>
            <a href={site.social.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <FacebookIcon />
            </a>
            <a href={site.social.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
            </a>
            <a href={site.social.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="wrap site-footer__legal">
        Telif Hakkı © {site.year} {site.legal} - Tüm Hakları Saklıdır.
      </div>
    </footer>
  );
}
