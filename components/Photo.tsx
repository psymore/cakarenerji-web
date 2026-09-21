import { photoSrcSet, photoUrl, type PhotoId } from "@/lib/images";

/**
 * A live-site photo as a plain `<img>`: the visitor's browser loads it straight from the live CDN
 * (with `next/image` this server would fetch every image itself). The parent sizes it, the image covers.
 */
export function Photo({
  id,
  alt = "",
  sizes = "100vw",
  widths,
  eager,
  className,
}: {
  id: PhotoId;
  alt?: string;
  sizes?: string;
  widths?: readonly number[];
  eager?: boolean;
  className?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={className}
      src={photoUrl(id, 1023)}
      srcSet={photoSrcSet(id, widths)}
      sizes={sizes}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      referrerPolicy="no-referrer"
    />
  );
}
