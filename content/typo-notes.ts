/** Errors on the live site that V0 leaves as they are, with the reason. Shown on /duzeltmeler. */
export type Untouched = { where: string; text: string; why: string; ref?: string };

export const untouched: Untouched[] = [
  {
    where: "Hizmetlerimiz",
    text: "Şebeke Bağlantılı (Off-Grid) Sistemler",
    why: "Yazım değil, olgu hatası olabilir (Off-Grid şebekeden bağımsızdır). İş sahibi doğrulamalı.",
    ref: "YAZ-01, Q-19",
  },
  {
    where: "Sık Sorulan Sorular",
    text: "+09 (312) 999 06 45",
    why: "Yanlış ülke kodu, ama telefon bilgisi. Doğrusu iş sahibinden teyit edilmeli.",
    ref: "NAP-03, Q-04",
  },
  {
    where: "Ana sayfa ve blog şablonu",
    text: 'Enerji daha güçlü atılımlar için birikimdir.."',
    why: "İki nokta ve eşleşmeyen tırnak, sloganın kendisi. Amaç belirsiz.",
  },
  {
    where: "Sık Sorulan Sorular, blog",
    text: "… nedir ?  ·  … önem taşır ?",
    why: "Soru işaretinden önce boşluk. Çok yerde tekrarlanıyor, yazım tercihi olabilir.",
  },
  {
    where: "Hizmetlerimiz",
    text: "… su temini yapılabiliyoruz  ·  … çözümleri sunulabiliyoruz",
    why: "Çatık kip. Cümle yapısı değişeceği için dokunulmadı.",
  },
  {
    where: "Blog: Güneş Enerjisi Hibe Destek Programları",
    text: "%50si",
    why: "Ek apostrofu eksik olabilir, kaynak metin olduğu gibi bırakıldı.",
  },
  {
    where: "Sık Sorulan Sorular",
    text: "Mimari Proje (1. soru)  ·  Mimari proje (4. soru)",
    why: "Aynı liste iki yerde farklı büyük/küçük harfle. Tutarsızlık, yazım hatası değil.",
  },
];
