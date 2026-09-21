"use client";

import { useState } from "react";
import { Lightbox } from "@/components/Lightbox";
import { LoopCarousel } from "@/components/LoopCarousel";
import { Photo } from "@/components/Photo";
import type { PhotoId } from "@/lib/images";

/**
 * Self-turning photo slider with an "enlarge" button on every photo. While a photo is enlarged the
 * slider behind it stands still.
 */
export function PhotoGallery({ photos }: { photos: readonly PhotoId[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <LoopCarousel
        label="Fotoğraflar"
        prevLabel="Önceki fotoğraf"
        nextLabel="Sonraki fotoğraf"
        dotLabel="Fotoğraf"
        pauseLabel="Otomatik geçişi durdur"
        playLabel="Otomatik geçişi başlat"
        zoomLabel="Fotoğrafı büyüt:"
        dwell={4500}
        paused={open !== null}
        onZoom={setOpen}
        items={photos.map((id) => (
          <Photo key={id} id={id} sizes="(min-width: 1240px) 1400px, 100vw" widths={[767, 1023, 1535]} />
        ))}
      />
      <Lightbox
        photos={photos}
        index={open}
        onIndex={setOpen}
        onClose={() => setOpen(null)}
        labels={{ close: "Kapat", prev: "Önceki fotoğraf", next: "Sonraki fotoğraf", photo: "Büyütülmüş fotoğraf" }}
      />
    </>
  );
}
