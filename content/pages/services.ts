import type { PageDef } from "./types";
import { p } from "./types";
import { slugs } from "@/lib/site";

export const servicesPages: Record<string, PageDef> = {
  [slugs.services]: {
    kind: "doc",
    title: "Hizmetlerimiz | Çakar Enerji",
    h1: "Hizmetlerimiz",
    layout: "datasheet",
    sections: [
      {
        heading: "Şebeke Bağlantılı (On-Grid) Sistemler",
        body: [
          p(
            "Şebeke bağlantılı sistemlerde, kullanıcının enerji tüketimi, fotovoltaik(PV) sistemin ürettiği enerjiden karşılanır. Tüketimin üretimden fazla olduğu durumlarda kullanıcı tüketim fazlası enerjiyi şebekeden alır; buna karşılık, kullanıcının tüketimi üretiminden az olduğu durumlarda ise üretim fazlası enerji devletin alım garantisi ile şebekeye veriliyor. Burada kullanılan çift yönlü sayaç veya devletin ön gördüğü sayaçlar sayesinde şebekeden ne kadar tüketildiği ve şebekeye ne kadar verildiği gibi tüm veriler kaydediliyor. Bu sayede üretilen enerjinin 1 kWp’inin bile boşa gitmemesi sağlanmış oluyor. Elektrik aboneliği olan herkes bu sistemleri kullanarak, enerjisini güneşten alabilir.",
          ),
        ],
      },
      {
        heading: "Şebeke Bağlantılı (Off-Grid) Sistemler",
        body: [
          p(
            "Şebekenin bulunmadığı yerlerde ihtiyaç duyulan enerjinin tamamının güneşten karşılandığı projelerdir. Bu sistemlerde fotovoltaik(PV) paneller ile üretilen elektrik enerjisi akülerde depolanır ve kullanıcı enerji ihtiyacını (gece-gündüz) bu akülerden sağlar. Sistemin kapasitesi, otonomi süresi boyunca (güneşten elektrik üretilemediği süreç) kullanıcının ihtiyacını karşılayacak şekilde boyutlandırılabilir. Burada profesyonel bir çalışma yapmak çok önemlidir. Tüketim cihazlarının ve bunların ne kadar enerji tükettiğinin iyi analiz edilmesi gerekmektedir. Gerekirse yedekleme süresi biraz uzun tutularak güneşin olmadığı günlerde de enerji kesintisinin önüne geçilir. Bu sistemler jeneratörle kıyaslandığında çok mantıklı ticari sonuçlar doğurmakta ve bu yatırımlar çok kısa sürede kendini amorti edebilmektedir.",
          ),
        ],
      },
      {
        heading: "Güneş Enerjili Sulama Sistemleri",
        body: [
          p(
            "Güneş enerjili sulama sistemleri, solar pompa sistemleri, güneş enerjisinden faydalanılarak elektrik motorlu pompaların çalıştırılmasını sağlayan sistemlerdir. Özellikle şebekenin olmadığı yerlerde her türlü sulama sistemleri için çok ekonomik, uzun ömürlü ve çevreci çözümleri siz değerli müşterilerimize sunulabiliyoruz. Güneş enerjisi ile çalışan özel pompalarımız sayesinde 300 metre derinliğe kadar su temini yapılabiliyoruz. Elektriğin olmadığı yerlerde jeneratör veya pancar motoru gibi imkanlarla yapılan sulama sistemlerine kıyasen güneş enerjili sulama sistemi; bakım gerektirmemesi ve ilk yatırım bedelinden başka hiçbir masrafa ihtiyaç duymaması sayesinde değerli müşterilerimiz için çok mantıklı ticari sonuçlar ortaya çıkarmaktadır.",
          ),
        ],
      },
      {
        heading: "Led Aydınlatma Sistemleri",
        body: [
          p(
            "Akşam vakti karanlığına ve yüksek elektrik faturalarına elveda deyin. Güneş enerjisiyle çalışan LED aydınlatma çözümlerimizle de siz değerli müşterilerimize hizmet vermekteyiz. Güneşten (ışık enerjisinden) üretilen elektrik enerjisinin zamanlaması aydınlatma için çok uygun olmadığı için gündüz üretilen bu enerjiyi bataryada depolayıp gece kullanma durumunda kalırız. Daha çok elektrik şebekesinin olmadığı bölgelerde aydınlatmalar, tesisatın zahmetli/maliyetli olduğu alanlar (genellikle peyzaj uygulamaları), reklam ve işaret ışıkları, şebeke maliyetinin yüksek olduğu çevre aydınlatmaları gibi alanlarda daha çok tercih edilmektedir. Çakar Enerji olarak güneş enerjili ve-veya şebeke destekli Led aydınlatma sistemlerinde ürün tedariki ve anahtar teslim projelerinizde hizmet vermeye devam ediyoruz.",
          ),
        ],
      },
      {
        heading: "İş Sonrası Teknik Hizmet ve Bakım Anlaşması",
        body: [
          p(
            "Yüksek kalite anlayışıyla uyguladığımız fotovoltaik(PV) enerji projelerimizin periyodik bakımlarını 5 veya 10 yıllık anlaşmalar ile yapıyoruz.",
          ),
        ],
      },
      {
        heading: "Uygulama",
        body: [
          p(
            "Mekanik elektrik (DC-AC-AG-OG) tüm işlerinin anahtar teslim yapılması ve ilgili tesisin devreye alınması aşamasına kadar siz değerli müşterilerimizin yanında oluyoruz.",
          ),
        ],
      },
      {
        heading: "Yasal Başvuru ve Takip Danışmanlığı",
        body: [
          p(
            "Lisanslı ve Lisanssız üretime bağlı projelerinizde; dağıtım şirketi ve EDAŞ ile yasal ve resmi süreçlerin tüm takip süreci alanında profesyonel ekibimiz tarafından yönetilmektedir.",
          ),
        ],
      },
      {
        heading: "Finansman",
        body: [
          p(
            "Orta ölçekli ve büyük ölçekli projelerinizde ürün tedarikinden montajına kadar tüm iş kalemlerinde sizlere tek elden hizmet verdiğimiz gibi finansman konusunda da çeşitli seçenekler ve alternatif finansman kaynakları önerebiliyoruz. Yatırım geri dönüş süreniz hesaplanarak en cazip finans kaynağını siz değerli müşterilerimizin önerilerine sunuyoruz.",
          ),
          p({
            t: "Çakar Enerji olarak yurt içi ve yurt dışı kaynaklı, devlet destekli alternatif krediler hakkında doğru ve en uygun bilgileri sizlerle paylaşıyoruz.",
            fixed: "paylaşıyoruz.. → paylaşıyoruz.",
          }),
        ],
      },
      {
        heading: "Projelendirme",
        body: [
          p(
            "Keşif ve planlama sürecinden elde ettiğimiz bilgiler doğrultusunda güneş enerjisi santralleriniz için siz değerli müşterilerimize, kendi bünyemizde çalışan uzman mühendislerimizle profesyonel bir anlayışla mühendislik, projelendirme EDAŞ onay hizmeti sunuyoruz. Uygulama yapılacak alanın statik yapısı, mukavemeti, kullanılacak altyapının rüzgâra dayanımı, kar yükü vb. gibi parametreleri tek tek ele alıp kullanılacak ürünleri bu doğrultuda seçiyoruz. Uluslararası arenada kabul görmüş bir program sayesinde tüm bölgelerin ışınım değerlerine göre hazırladığımız raporda; projeyle ilgili bilgileri, 25 yıllık üretim analizleri, finansal analizler ve geri dönüşüm tabloları gibi tüm detayları değerli müşterilerimizin hizmetine sunuyoruz.",
          ),
          p(
            "Yüzlerce küçük detaydan birinde yapılacak en ufak bir mühendislik hatası, yatırımın verimliliğinde ciddi olumsuz sonuçlara neden olabilir. Bu nedenle Çakar Enerji olarak siz değerli müşterilerimizin kötü sürprizler yaşamasını önlemek ve alabileceğiniz en güvenli hizmeti sunmak amacıyla, mühendislik birimimizin rehberliği ve kontrolünde olan deneyimli teknisyenlerle hizmet veriyoruz. Ekonomik hedeflerinize uygun ve istikrarlı bir üretim yapılması için ileri teknoloji ürünü inşaat makineleri ve üstün kaliteli ekipmanlar kullanıyoruz.",
          ),
        ],
      },
      {
        heading: "Planlama",
        body: [
          p(
            "Çakar Enerji olarak, keşif sürecinin ardından kendi bünyemizde çalışan deneyimli ve alanında uzman mühendislerimizle, operasyon ve kurulum sürecini planlama hizmetini siz değerli müşterilerimize sunuyoruz.",
          ),
        ],
      },
      {
        heading: "Keşif",
        body: [
          p(
            "Deneyimli ve alanında uzman ekibimizle, santralinizi kurmayı planladığınız çatı ya da arazi konumuna giderek, sahanın uygunluğunun keşfi ve proje tasarımını siz değerli müşterilerimizin hizmetine sunuyoruz.",
          ),
        ],
      },
      {
        heading: "Tedarik",
        body: [
          p(
            "Ürün tedarikinde ve projenin uygulanması esnasında A’ dan Z’ ye ihtiyacınız olan tüm ürünleri güvenilir bir elden hizmetinize sunuyoruz. Ayrıca geniş ürün yelpazemiz ile birlikte ürün seçimlerinizde sizlere ücretsiz danışmanlık hizmeti veriyoruz. Bizler sadece ürün alırken değil, projeniz tamamlanıncaya kadar sizin yanınızda oluyoruz. Bu sayede en yüksek verimli ve en ekonomik sistemi birlikte belirliyoruz. Kaliteli ve ekonomik bir ürüne sahip olmanın farkını bizimle birlikte hissedeceksiniz.",
          ),
        ],
      },
    ],
  },

};
