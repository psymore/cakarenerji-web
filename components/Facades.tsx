"use client";

import { useState } from "react";
import { PinIcon, PlayIcon } from "@/components/icons";
import { mapsQuery } from "@/lib/site";

/** Vimeo video from the live home page, loaded only on click (PRF-01). */
export function VideoFacade() {
  const [on, setOn] = useState(false);
  return (
    <div className="frame">
      {on ? (
        <iframe
          src="https://player.vimeo.com/video/738877978?h=44366cdbd0&autoplay=1&title=0&portrait=0&byline=0&badge=0&loop=0&muted=0&controls=1"
          title="Çakar Enerji video"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button type="button" className="frame__btn flat-cells" aria-label="Videoyu oynat" onClick={() => setOn(true)}>
          <span className="play">
            <PlayIcon />
          </span>
        </button>
      )}
    </div>
  );
}

/** Google Maps embed, loaded only on click (PRF-01). The exact location on the live site is not recorded. */
export function MapFacade() {
  const [on, setOn] = useState(false);
  return (
    <div className="frame">
      {on ? (
        <iframe
          src={`https://www.google.com/maps?q=${encodeURIComponent(mapsQuery)}&output=embed`}
          title="Çakar Enerji konumu"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <button
          type="button"
          className="frame__btn frame__btn--map flat-cells"
          aria-label="Haritayı yükle"
          onClick={() => setOn(true)}
        >
          <span className="play">
            <PinIcon />
          </span>
        </button>
      )}
    </div>
  );
}
