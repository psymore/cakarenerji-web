import { ContactCard } from "@/components/ContactCard";
import { MailForm, type FieldDef } from "@/components/MailForm";
import { PageHero } from "@/components/PageHero";

const contact = {
  name: "Çakar Enerji",
  hours: true,
  subject: "İletişim formu",
  fields: [
    { name: "ad", label: "Ad" },
    { name: "eposta", label: "E-posta*", type: "email", required: true },
    { name: "mesaj", label: "Mesaj", type: "textarea" },
  ] as FieldDef[],
};

const quote = {
  name: "Çakar Enerji",
  hours: false,
  subject: "Teklif talebi",
  fields: [
    { name: "sirket", label: "Şirket Adı" },
    { name: "eposta", label: "E-posta*", type: "email", required: true },
    { name: "mesaj", label: "Mesaj", type: "textarea" },
  ] as FieldDef[],
};

/** İletişim and PROJELERİMİZ (Teklif Al) share one layout: form on the left, visit details on the right. */
export function ContactView({ h1, variant }: { h1: string; variant: "contact" | "quote" }) {
  const cfg = variant === "contact" ? contact : quote;
  return (
    <>
      <PageHero title={h1} />
      <section className="section">
        <div className="wrap split" style={{ alignItems: "start" }}>
          <div>
            <h2 className="big-h" style={{ fontSize: "clamp(1.6rem,3vw,2.3rem)", marginTop: 0, marginBottom: 26 }}>
              Bize mesaj atın!
            </h2>
            <MailForm subject={cfg.subject} submit="Gönder" fields={cfg.fields} />
          </div>
          <ContactCard name={cfg.name} hours={cfg.hours} />
        </div>
      </section>
    </>
  );
}
