import { MailForm } from "@/components/MailForm";
import { PageHero } from "@/components/PageHero";
import { hr } from "@/content/pages/hr";
import { T } from "@/lib/text";

export function HrView({ h1 }: { h1: string }) {
  return (
    <>
      <PageHero title={h1} />
      <section className="section">
        <div className="wrap split split--wide-left" style={{ alignItems: "start" }}>
          <div className="body-text">
            {hr.intro.map((t, i) => (
              <T key={i} v={t} />
            ))}
            <p>
              <a className="textlink" href={hr.download.href} target="_blank" rel="noopener noreferrer">
                {hr.download.label}
              </a>
            </p>
          </div>
        </div>
      </section>
      <section className="section section--white">
        <div className="wrap split" style={{ alignItems: "start" }}>
          <div>
            <h2 className="big-h">{hr.joinH2}</h2>
            <h3 style={{ marginTop: 22, fontSize: "1.3rem" }}>{hr.joinH4}</h3>
            <p className="lead">{hr.joinText}</p>
          </div>
          <div>
            <h3 style={{ marginBottom: 22, fontSize: "1.3rem" }}>{hr.applyH4}</h3>
            <MailForm
              subject="İnsan Kaynakları başvurusu"
              submit="Başvuruyu Gönder"
              fields={[
                { name: "isim", label: "İsim" },
                { name: "telefon", label: "Telefon", type: "tel" },
                { name: "eposta", label: "E-posta*", type: "email", required: true },
                { name: "mesaj", label: "Mesaj", type: "textarea" },
                { name: "ozgecmis", label: "Özgeçmiş Ekle", type: "file" },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
