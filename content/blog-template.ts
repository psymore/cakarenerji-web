import type { PhotoId } from "@/lib/images";
import type { Txt } from "@/lib/text";

export type TplGroup = {
  heading?: Txt;
  lead?: string;
  paras?: Txt[];
  listLabel?: string;
  list?: Txt[];
  photo?: PhotoId;
  photoAlt?: string; // the live site's alt text, when it has one
};

/** The "Hesabınızı Bizimle İlişkilendirin" block that the live blog template repeats under every post and the list (BLG-02). */
export const blogTemplate = {
  title: "Hesabınızı Bizimle İlişkilendirin",
  slogan: "\"Enerji daha güçlü atılımlar için birikimdir..\"",
  company: "Çakar Enerji A.Ş.",
  sections: [
    {
      heading: { t: "EPC HİZMETLERİMİZ", fixed: "HİZİMETLERİMİZ → HİZMETLERİMİZ" } as Txt,
      groups: [
        {
          heading: "Saha Tipi Güneş Enerji Santrali Kurulumu",
          photo: "field",
          paras: [
            "Saha uygulamaları geçtiğimiz yıllarda Türkiye'de en yaygın olarak kullanılan güneş enerji santrali uygulamalarıdır. Saha uygulamalarında, toprak üzerinde çalışıldığı için zemin ve toprak özellikleri tasarım açısından son derece önemlidir. İyi çalışılmış bir zemin etüdü ve sahanın eğim, yüzey alanı, çukur, yükselti, vb. fiziksel özelliklerinin iyi analiz edilmesi ile beraber yaratıcı bir konstrüksiyon tasarımı ile saha tipi güneş enerji santrallerinden o bölge için alınabilecek en yüksek üretim verimini almak mümkündür.",
            "Çakar Enerji olarak, lisanssız güneş enerjisi üretim tesisi kurulumu ile ilgili gerekli izinlerin alınmasından güneş enerji santralinin kurulup ilgili kabullerin tamamlanarak elektrik satışına başlanmasına kadarki tüm süreci üstlenerek santral kurulumu işini \"anahtar teslim\" olarak üstleniyoruz.",
          ],
        },
        {
          heading: "Çatı Tipi Güneş Enerji Santrali Kurulumu",
          paras: [
            {
              t: "Çatı üstüne kurulan güneş enerji santralleri maliyet avantajı sebebiyle son dönemde diğer kurulum çeşitlerine göre daha popüler olmakla beraber çatı kurulumlarında saha kurulumlarına göre önemli teknik farklılıklar vardır. En önemli konulardan birisi güneş panellerinin yerleştirileceği konstrüksiyon sistemi seçimi ve açılandırmadır.",
              fixed: "saha kurulumlarını göre → saha kurulumlarına göre",
            },
            "Bunun yanında çatı tipi güneş enerji santrali kurulumlarında, saha kurulumlarına göre kısıtlamalar daha fazladır. Örneğin; saha tipi güneş enerji santrali kurulumlarında güneş panellerinin yönleri ve eğimleri optimum şekilde kolaylıkla ayarlanabilirken çatı tipi güneş enerji santrali kurulumlarında yön (azimuth) ve açıların ayarlanmasında çatının pozisyonu, yönü, mahyaların pozisyonu, çatının statik yük hesapları ve buna benzer daha bir çok konu hesabın içerisine girmektedir. Ayrıca, bazı durumlarda çatının delinmesi uygun olmadığından buna göre çözümler geliştirilmesi gerekmektedir.",
            "Bu sebeple, çatı tipi güneş enerji santrali kurulumlarında tasarım kriterlerinin her biri son derece önemlidir ve profesyonelce tasarlanmalıdır. Çakar Enerji olarak, sektörde en uzun süredir anahtar teslim çatı kurulum tecrübesine sahip firmalardan birisi olarak; yüksek verimli ve dayanıklı güneş enerji santralleri kurulumunu taahhüt etmekteyiz.",
          ],
        },
        {
          heading: "Otopark Üzeri Güneş Enerji Santrali Kurulumu",
          photo: "parking",
          photoAlt: "Otopark Üzeri Güneş Enerji Santrali",
          paras: [
            {
              t: "Açık otopark alanları ve garaj çatıları büyük ölçekli güneş enerji santrali kurulumları için ideal geniş alanlar oluşturmaktadır. Özellikle, açık otopark üstü uygulamalar sayesinde hem park eden araçların güneşten korunması sağlanır aynı zamanda da atıl olarak duran geniş bir alan yenilenebilir enerji kaynağına dönüşmüş olur. Özellikle önümüzdeki dönemde elektrikli araçların da yaygınlaşacağı düşünüldüğünde geniş otopark alanlarının üzerlerine kurulabilecek güneş enerji sistemleri ile elektrikli araç şarj istasyonları beslenebilir.",
              fixed: "sarj → şarj",
            },
            "Ancak, otopark üstü uygulamalarda konstrüksiyon sistemi seçimi, can ve mal güvenliği açısından son derece önemlidir. Tasarlanacak sistem bölgenin kar ve rüzgar yüklerine göre en üst düzey dayanımda olmalı ve panel montaj sistemi her projenin spesifik özelliklerine göre özel olarak imal edilmelidir.",
          ],
        },
      ] as TplGroup[],
    },
    {
      heading: { t: "EPC HİZMETLERİMİZ", fixed: "HİZİMETLERİMİZ → HİZMETLERİMİZ" } as Txt,
      groups: [
        {
          heading: "EPC – Anahtar Teslim Sistem Kurulumu",
          paras: [
            "Çatı ve Arazi uygulamalı Güneş Enerji Santralleri için en ideal sistem tasarımı, planlanması, iş takvimi dahilinde yürütülmesi ve tesisin zamanında teslim edilerek devreye alınması konularında EPC olarak bilinen Mühendislik, Planlama, Tedarik, Lojistik, İnşaat ve Kurulum hizmetlerini sunmaktayız.",
            "Anahtar teslim EPC deneyimimiz sayesinde projenizin tüm sorumluluğu uzman ekiplerimizin güvencesindedir.",
          ],
          listLabel: "Hizmet kapsamındaki çalışmalar",
          list: [
            "Arazi analizi",
            "Fizibilite çalışmaları",
            "Teknik dizayn ve planlama",
            "Statik ve elektrik projelendirme",
            "Proje resmi onay süreçleri",
            { t: "Saha hazırlıkları ve tesviye", fixed: "tesfiye → tesviye" },
            "Ürün tedariki – İthalat / Satın alma",
            "Lojistik ve ulaşım koordinasyonu",
            "Proje sahası inşaat çalışmaları",
            "Kurulum ve montaj çalışmaları",
            "Testler",
            "Devreye alma",
            "Kabul işlemleri",
          ],
        },
        {
          heading: "PROJELENDİRME VE MÜHENDİSLİK",
          paras: [
            "Sorumluluğumuzdaki projelerin tasarım ve uygulamalarının yapılması, iyi planlanmış bir projenin hem zamanı hem de en uygun ekonomik şartları sağlamak adına doğru projelendirme ve doğru mühendislik yaklaşımı ile hareket etmekteyiz.",
          ],
          listLabel: "Hizmetlerimiz",
          list: [
            "Saha-çatı yerleşimi ve sistem tasarımının yapılması",
            "Proje çizimlerinin oluşturulması",
            "Mühendislik hesapları",
            "İş programının yapılması",
            "Doğru ürün seçimi",
            "Malzeme özelliklerinin belirlenmesi",
            "Üretim değerlerinin simüle edilmesi",
            "Gölgelenme analizlerinin yapılması",
          ],
        },
        {
          heading: "Çatı Tipi Güneş Enerji Santrali Kurulumu ve Öztüketim",
          lead: "Kendi Elektriğini Kendin Üret!",
          paras: [
            "12 Mayıs 2019 tarihinde yayımlanan yeni Lisanssız Elektrik üretim yönetmeliği ile enerji tüketen tesislerin öztüketim amaçlı çatı güneş tesisi kurmalarının önü açılmıştır.",
            "Gün geçtikçe azalan Güneş Enerjisi Santral kurulum maliyetleri sayesinde artık kendi elektriğini üretmek ekonomik anlamda hiç olmadığı kadar kazançlı hale gelmiştir. Avrupa Ülkelerine kıyasla çok daha fazla güneşlenme potansiyeline sahip olan ülkemizde GES yatırım geri dönüş süreleri 4 yıla kadar gerilemiştir.",
            "Çakar Enerji güçlü ve deneyimli teknik kadrosu ile, Sanayi Tesisleri ve Ticarethane sahiplerine Güneş Enerjisi Santrali başvuru süreçleri, teknik ve ekonomik fizibilite çalışmaları, projelendirme ve anahtar teslim kurulum hizmetleri konusunda destek vermeye devam etmektedir.",
          ],
        },
      ] as TplGroup[],
    },
  ],
};

