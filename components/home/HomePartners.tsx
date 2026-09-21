import { Photo } from "@/components/Photo";
import { home } from "@/content/home";

/** Logo strip from the live home page (no heading there). */
export function HomePartners() {
  return (
    <section className="section partners">
      <div className="wrap">
        <ul className="partners__list">
          {home.partners.map((p) => (
            <li key={p.id}>
              <Photo id={p.id} alt={p.alt} sizes="200px" widths={[285, 570]} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
