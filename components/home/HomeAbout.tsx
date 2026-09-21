import Link from "next/link";
import { VideoFacade } from "@/components/Facades";
import { home } from "@/content/home";
import { href, slugs } from "@/lib/site";

export function HomeAbout() {
  return (
    <section className="section">
      <div className="wrap split">
        <div>
          <p className="label">{home.aboutLabel}</p>
          <h2 className="big-h">{home.aboutH2}</h2>
          <p className="lead">{home.aboutText}</p>
          <p style={{ marginTop: 28 }}>
            <Link className="textlink" href={href(slugs.about)}>
              {home.aboutLink}
            </Link>
          </p>
        </div>
        <VideoFacade />
      </div>
    </section>
  );
}
