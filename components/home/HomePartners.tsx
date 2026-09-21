import { PartnersCarousel } from "@/components/home/PartnersCarousel";
import { home } from "@/content/home";

/** Logo strip from the live home page (no heading there), shown as a self-turning carousel. */
export function HomePartners() {
  return (
    <section className="section partners">
      <div className="wrap">
        <PartnersCarousel items={home.partners} />
      </div>
    </section>
  );
}
