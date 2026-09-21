import { LoopCarousel } from "@/components/LoopCarousel";
import { Photo } from "@/components/Photo";
import { home } from "@/content/home";

/** Logo strip from the live home page (no heading there), shown as a self-turning carousel. */
export function HomePartners() {
  return (
    <section className="section partners">
      <div className="wrap">
        <LoopCarousel
          label="İş ortakları"
          prevLabel="Önceki logolar"
          nextLabel="Sonraki logolar"
          items={home.partners.map((p) => (
            <Photo key={p.id} id={p.id} alt={p.alt} sizes="200px" widths={[285, 570]} />
          ))}
        />
      </div>
    </section>
  );
}
