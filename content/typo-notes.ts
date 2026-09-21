/** Errors on the live site that V0 leaves as they are, with the reason. Shown on /duzeltmeler. */
export type Untouched = {
  where: string;
  text: string;
  /** Short plain-language name of the problem, shown on the card. */
  kind: string;
  /** Why V0 did not change it, one short sentence. */
  why: string;
  /** Internal issue / question ids (AUDIT.md, OPEN-QUESTIONS.md). Not shown on the page. */
  ref?: string;
};

export const untouched: Untouched[] = [
  {
    where: "Hizmetlerimiz",
    text: "Şebeke Bağlantılı (Off-Grid) Sistemler",
    kind: "Anlam hatası olabilir",
    why: "Off-Grid, şebekeden bağımsız demektir; başlıktaki “Şebeke Bağlantılı” ile çelişiyor. İş sahibi doğrulamalı.",
    ref: "YAZ-01, Q-19",
  },
  {
    where: "Sık Sorulan Sorular",
    text: "+09 (312) 999 06 45",
    kind: "Telefon bilgisi",
    why: "Ülke kodu yanlış görünüyor. Telefon bilgisi olduğu için iş sahibi teyit etmeli.",
    ref: "NAP-03, Q-04",
  },
  {
    where: "Ana sayfa ve blog şablonu",
    text: 'Enerji daha güçlü atılımlar için birikimdir.."',
    kind: "Fazladan nokta, eşleşmeyen tırnak",
    why: "Sloganın kendisi. Amacı belirsiz olduğu için dokunulmadı.",
  },
  {
    where: "Sık Sorulan Sorular, blog",
    text: "… nedir ?  ·  … önem taşır ?",
    kind: "Soru işaretinden önce boşluk",
    why: "Çok yerde tekrarlanıyor, yazım tercihi olabilir.",
  },
  {
    where: "Hizmetlerimiz",
    text: "… su temini yapılabiliyoruz  ·  … çözümleri sunulabiliyoruz",
    kind: "Cümle yapısı hatası",
    why: "Düzeltmek cümleyi değiştirir, o yüzden dokunulmadı.",
  },
  {
    where: "Blog: Güneş Enerjisi Hibe Destek Programları",
    text: "%50si",
    kind: "Ek apostrofu eksik olabilir",
    why: "Kaynak metin olduğu gibi bırakıldı.",
  },
  {
    where: "Sık Sorulan Sorular",
    text: "Mimari Proje (1. soru)  ·  Mimari proje (4. soru)",
    kind: "Büyük/küçük harf tutarsızlığı",
    why: "Aynı liste iki yerde farklı yazılmış. Yazım hatası değil.",
  },
];
