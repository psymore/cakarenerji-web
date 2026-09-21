import Link from "next/link";
import { PageHero } from "@/components/PageHero";

/** Live site shows the GoDaddy default 404 (UX-03). Minimal branded stand-in. */
export default function NotFound() {
  return (
    <>
      <PageHero title="Sayfa bulunamadı" solo />
      <section className="section notfound">
        <div className="wrap">
          <Link className="btn" href="/">
            Ana Sayfa
          </Link>
        </div>
      </section>
    </>
  );
}
