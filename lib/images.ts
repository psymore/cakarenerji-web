/**
 * Images of the live site, linked straight from its CDN (nothing is downloaded or stored here).
 * `file` is the original file name, percent-encoded as on the live site. To self-host later, change
 * `photoUrl` and put the files in `public/`: no other file knows where the images come from.
 * The live CDN resizes on the fly with `/:/rs=w:<px>,m`; the widths below are the ones the live site
 * itself asks for.
 */
const BASE = "https://img1.wsimg.com/isteam/ip/dfa0ec36-44a3-43ff-b542-8ec12cf0ce89/";

export const photos = {
  // Hero backgrounds
  home: "pexels-tom-fisk-9893727.jpg",
  about: "pexels-los-muertos-crew-8853511.jpg",
  industrial: "cati-ustu.jpg",
  land: "solar-panels-gda31f3f20_1920.jpg",
  carpark: "pexels-kindel-media-9800008.jpg",
  consulting: "pexels-burst-544965.jpg",
  supply: "pexels-los-muertos-crew-8853502.jpg",
  roof: "pexels-kindelmedia-9799994.jpg",
  // Hakkımızda: "Anahtar Teslim Solar Sistemler" cards, in card order
  mechanical: "pexels-los-muertos-crew-8853505-0001.jpg",
  electrical: "pexels-los-muertos-crew-8853502.jpg",
  product: "pexels-los-muertos-crew-8853536.jpg",
  engineers: "pexels-burst-544965.jpg",
  feasibility: "pexels-liza-summer-6347724.jpg",
  // Blog template ("EPC HİZMETLERİMİZ" cards)
  field: "solar-panels-gda31f3f20_1920.jpg",
  parking: "29052017_101529_8.jpg",
  // Social preview image (og:image) of each blog post on the live site
  teias: "2283646_620x349.jpg",
  agri: "pexels-tom-fisk-9893727.jpg",
  spot: "pexels-volkan-sorkun-8844580.jpg",
  hibe: "pexels-los-muertos-crew-8853539.jpg",
  sulama: "pexels-red-zeppelin-4148472.jpg",
  gida: "pexels-pixabay-414837%20(1).jpg",
  yenilenebilir: "pexels-pixabay-459728.jpg",
  // Home: slogan band background ("Enerji daha güçlü atılımlar için birikimdir")
  slogan: "9D437085-C24C-4DAC-85EC-5805D8CC94E1_L0_001.jpg",
  // Home: partner logos
  huawei: "10_huawei_0.jpg",
  cw: "1_cw-enerji_0.jpg",
  tomma: "2_tommatech_0.jpg",
  fimer: "7_fimer_0.jpg",
  partner5: "indir.png",
  // Arazi GES Konstrüksiyon: photo slider, in the order the files appear on the live page
  frame4: "4.jpg",
  frame1: "1.jpg",
  frame2: "2.jpg",
  frame7: "7.jpg",
  frame8: "8.jpg",
  frame9: "9.jpg",
  frame6: "6.jpg",
  frame5: "5.jpg",
  frame3: "3.jpg",
  // Solar Carport Sistemleri: photo slider, in the order the files appear on the live page (the 5th is portrait)
  carport1: "pexels-kindelmedia-9800005-9e282fd.jpg",
  carport2: "pexels-kindelmedia-9799757-29c97e2.jpg",
  carport3: "pexels-kindelmedia-9800008.jpg",
  carport4: "pexels-kindelmedia-9799767-8680332.jpg",
  carport5: "pexels-kindelmedia-9799756-7d6794d.jpg",
  carport6: "pexels-kindelmedia-9799763-acf19d5.jpg",
  carport7: "pexels-kindelmedia-9799759-f11980c.jpg",
  carport8: "pexels-kindelmedia-9799728-5cc57ad.jpg",
  carport9: "pexels-kindelmedia-9799764-12cdbf0.jpg",
  // Brand
  logo: "%C3%87AKAR%20ENERJ%C4%B0-0001.png",
} as const;

export type PhotoId = keyof typeof photos;

export const PHOTO_WIDTHS = [450, 767, 1023, 1535, 1920] as const;

/** Original file (no resize), for social previews. */
export const originalUrl = (id: PhotoId) => `${BASE}${photos[id]}`;

/** File resized to a width by the live CDN. */
export const photoUrl = (id: PhotoId, width: number) => `${BASE}${photos[id]}/:/rs=w:${width},m`;

export const photoSrcSet = (id: PhotoId, widths: readonly number[] = PHOTO_WIDTHS) =>
  widths.map((w) => `${photoUrl(id, w)} ${w}w`).join(", ");
