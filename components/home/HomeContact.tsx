import { ContactCard } from "@/components/ContactCard";
import { MapEmbed } from "@/components/Embeds";
import { home } from "@/content/home";
import { mapsQuery } from "@/lib/site";

export function HomeContact() {
  const directions = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapsQuery)}`;
  return (
    <section className="section">
      <div className="wrap">
        <h2 className="big-h" style={{ marginTop: 0, marginBottom: 40 }}>
          {home.contactH2}
        </h2>
        <div className="split" style={{ alignItems: "start" }}>
          <ContactCard name="Çakar Enerji A.Ş" hours />
          <div className="stack">
            <MapEmbed />
            <a className="textlink" href={directions} target="_blank" rel="noopener noreferrer">
              {home.directions}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
