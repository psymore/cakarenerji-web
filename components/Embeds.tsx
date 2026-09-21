import { mapsQuery } from "@/lib/site";

/**
 * Vimeo video from the live home page. The player shows its own poster; the iframe is created only
 * when it scrolls near (native lazy loading), so it does not weigh on first paint.
 */
export function VideoEmbed() {
  return (
    <div className="frame">
      <iframe
        src="https://player.vimeo.com/video/738877978?h=44366cdbd0&title=0&portrait=0&byline=0&badge=0"
        title="Çakar Enerji video"
        loading="lazy"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

/** Google Maps embed of the office address, lazy loaded. The exact pin on the live site is not recorded. */
export function MapEmbed() {
  return (
    <div className="frame">
      <iframe
        src={`https://www.google.com/maps?q=${encodeURIComponent(mapsQuery)}&output=embed`}
        title="Çakar Enerji konumu"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
