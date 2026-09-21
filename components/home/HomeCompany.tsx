import { Link } from "@/components/AppLink";
import { Photo } from "@/components/Photo";
import { home } from "@/content/home";
import { href, slugs } from "@/lib/site";

export function HomeCompany() {
  return (
    <section className="section section--dark section--photo on-dark">
      <div className="bg-photo" aria-hidden>
        <Photo id="homeField" widths={[767, 1023, 1535, 1920]} />
      </div>
      <div className="wrap split split--wide-left" style={{ alignItems: "start" }}>
        <h3 className="big-h" style={{ fontSize: "clamp(1.6rem,3.2vw,2.5rem)", marginTop: 0 }}>
          {home.companyH4}
        </h3>
        <div className="body-text">
          <p>{home.companyText}</p>
          <p>
            <Link className="textlink" href={href(slugs.about)}>
              {home.companyLink}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
