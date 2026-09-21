import type { PageDef } from "./types";
import { p, ul } from "./types";
import { slugs } from "@/lib/site";

export const aboutPages: Record<string, PageDef> = {
  [slugs.about]: {
    kind: "doc",
    title: "Hakkımızda",
    h1: "Hakkımızda",
    layout: "prose",
    sections: [
      {
        heading: "Çakar Enerji",
        body: [
          p(
            "Çakar Enerji Taahhüt İnşaat Gıda Sanayi ve Ticaret A.Ş, 1992 yılında gıda, tekstil, uluslararası inşaat ve taahhüt faaliyetleri yürütmek üzere kurulmuştur. Türkiye’nin zengin güneş, rüzgâr ve hidroelektrik enerji potansiyeline katılmak isteyen Çakar Enerji 2016 yılında yürürlüğe giren “Yenilenebilir Enerji Kanunu” ile yatırımcı bir firma olarak enerji sektöründe faaliyet göstermeye başlamıştır. 2019 yılına kadar Yenilenebilir Enerji yatırımları ile faaliyet göstermiş daha sonra Ülkemizdeki yasal düzenlemelerle beraber \"Çakar Enerji A.Ş\" çatısı altında, alanında uzman kadrosu ile mümkün olan en yüksek verimlilikle Güneş Enerjisi Santrallerini anahtar teslimi (EPC) hizmeti vermek üzerine yoğunlaştırmıştır.",
          ),
          p(
            "Çakar Enerji, güneş enerji santrallerinin (GES) yatırım ve teknik danışmanlığı, projelendirme, sistem tasarımı, lisanslı ve lisanssız santral kurulumları, lisans alımı ve işletme, ayrıca lisanssız üretim yönetmeliğine uygun olarak projeler planlama, projelendirme, finans ve uygulama ile kurulum sonrası teknik bakım, onarım konularında da hizmet vermektedir.",
          ),
          p(
            "Endüstriyel kurulumların yanı sıra evsel çatı kurulumlarında da çözümler sunuyor. Şebeke bağlantılı (On-Grid) sistemlerin yanı sıra şebekeden bağımsız akü destekli sistemler (Off-Grid), güneş enerjili sulama sistemleri, LED aydınlatma sistemleri, güneş enerjili kamera sistemleri ve elektrikli araç şarj istasyonları gibi alanlarda da hizmet vermektedir.",
          ),
          p(
            "Çakar Enerji, kaliteden ödün vermeyen ve müşteri memnuniyetini birinci derecede misyon edinmiş bir anlayışla faaliyetini sürdürmektedir.",
          ),
        ],
      },
      {
        heading: "MİSYONUMUZ & VİZYONUMUZ",
        body: [
          p(
            "Çakar Enerji, yaşadığımız gezegenin enerji ihtiyacını temiz kaynaklarla karşılamak için öncülük ederek, güneş enerjisinin kullanımını yaygınlaştırıp, insanoğlunun geleceğini yeni teknolojiler ile destekleyip, dünya ekonomisine katkı sağlamayı ve gelecek nesillere yaşanabilir bir doğa bırakmayı amaç edinmektedir.",
          ),
          p(
            "Çakar Enerji, dürüst, güvenilir, ilkeli ve fikir sahibi bir kuruluş olarak varlığını uzun süreler devam ettirebilmeyi görev edinmektedir.",
          ),
        ],
      },
      {
        heading: "KALİTE VE SERTİFİKASYON",
        body: [
          p(
            "Çakar Enerji, insanoğlunun yaşamını daha sürdürülebilir kılabilmek için duyarlı davranarak yeni teknolojiler sunan, tüm ürün ve hizmetlerinde önceliği müşteri odaklılık ve yüksek kalite olan, sektörde fark yaratan ve kendi sektöründe dünya lideri olma yolunda emin adımlarla ilerleyen bir firmadır.",
          ),
          p("Kalite Politikasını;"),
          ul([
            "Yürürlükteki yasalara ve yönetmeliklere kayıtsız şartsız uymak",
            "Ticari ahlak ve toplumsal değerleri işten öne çıkartmak",
            "Teknolojik gelişmelere süratle ayak uydurmak",
            "Müşteri odaklı kalite yönetim sistemimizden ödün vermemek ve iyileştirilmesini sağlamak",
            "Hedeflerimize ulaşmamızı etkileyen iç ve dış konuları analiz ederek sistemsel risklere proaktif yaklaşmak ve fırsatları değerlendirmek",
            "Uluslararası standartları takip etmek ve yapılan işlerde standartlardan hiçbir koşulda ödün vermemek",
            "Müşteri ihtiyaçlarına duyarlı, önerilere açık, hızlı ve hatasız olmak",
            "İş hacmini büyüterek Türkiye'de edinilmiş tecrübe ve birikimlerle, yurtdışı işler yaparak ülke ekonomisine katkı sağlamak",
            "Faaliyetlerimiz sırasında ilgili tarafların şartlarını gerçekleştirirken beklentilerini de değerlendirerek memnuniyeti en üst düzeyde sağlamaktır.",
          ]),
        ],
      },
      {
        heading: "İNSAN KAYNAKLARI POLİTİKAMIZ",
        body: [
          p(
            "İnsan kaynaklarına verdiği önemle fark yaratan Çakar Enerji, kendini yetiştirmiş veya yetiştirmek isteyen tüm çalışanların öncelikli tercih ettiği kurumdur.",
          ),
          p(
            "Çakar Enerji, kuruluşundan bugüne kadar birlik ve bütünlük, anlayış, mükemmellik, sorumluluk, yaratıcılık gibi unsurları temel alan değerleri esas almaktadır.",
          ),
          p(
            "Sürekli gelişim felsefesi ile faaliyet gösteren Çakar Enerji, bunu alanlarında derin bilgi birikimine sahip, tecrübeli ve yetenekli kişilerden oluşan değerli ekibiyle gerçeğe dönüştürmektedir. Çakar Enerji’de, çalışmak bir zorunluluk olmaktan çıkarak, eğlenceli bir alışkanlık haline gelir.",
          ),
        ],
      },
      {
        heading: "ANAHTAR TESLİM SOLAR SİSTEMLER",
        body: [],
        cards: [
          {
            heading: "Mekanik Montaj",
            text: "Güneş Santralinizi kurulum sürecinden başlayıp tesliminden itibaren 2 yıl boyunca Garantisini verdiğimiz teknik mekanik montaj sistemimiz üstün kalitedeki ekipman kullanımını uzman teknik ekip ile harmanlayarak kusursuz sonucu elde ediyoruz.",
          },
          {
            heading: "Elektrik Montaj",
            text: "Fotovoltaik güneş paneller ile üreteceğiniz elektrik enerjisini minimal düzeyde kayıpla üretiminizi sağlayacak tasarım uygulayıcısı teknik personelimizle enerji verimliliğinizi maksimum düzeyde tutuyoruz.",
          },
          {
            heading: "Ürün Seçimi",
            text: {
              t: "Güneşi en verimli enerji santraliniz haline getireceğiniz birbiri ile uyumlu birçok ürün ve markayı yatırım tercihlerinize göre beraber planlayalım.",
              fixed: "bir biri → birbiri",
            },
          },
          {
            heading: "Uzman Mühendislerle Bilimsel Çözümler",
            text: "İşletmenizde en verimli çatı tipi güneş enerji santrali kurulumu için alanlarında uzman mühendis ekibimiz sizlere analiz ve projelendirme hizmetleri sunuyor.",
          },
          {
            heading: "Yatırım Fizibilitesi",
            text: "Güneş Enerjisi Santralinizin yıllık üretim kapasitesi ve güneşlenme süresi ile beraber yatırımınızın yaklaşık geri dönüşünü, yıllık kazanç miktarınızı sizler için önceden hesaplayarak yatırımınızı mantıksal ekonomik seviyede tutuyoruz.",
          },
        ],
      },
    ],
  },

};
