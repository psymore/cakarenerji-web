import { Link } from "@/components/AppLink";
import { Photo } from "@/components/Photo";
import { home } from "@/content/home";
import { href, slugs } from "@/lib/site";

export function HomeSlogan() {
  return (
    <section className="band band--photo">
      <div className="bg-photo" aria-hidden>
        <Photo id="slogan" />
      </div>
      <div className="wrap">
        <h2>{home.slogan}</h2>
      </div>
    </section>
  );
}

export function HomeQuote() {
  return (
    <section className="section section--white quote">
      <div className="wrap">
        <p className="label">{home.quoteLabel}</p>
        <h2>{home.quoteH2}</h2>
        <p>
          {home.quoteBefore}
          <Link className="textlink" style={{ fontSize: "inherit" }} href={href(slugs.quote)}>
            {home.quoteLink}
          </Link>
          {home.quoteAfter}
        </p>
      </div>
    </section>
  );
}
