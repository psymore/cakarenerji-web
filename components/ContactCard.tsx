import { ClockIcon, MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/icons";
import { site } from "@/lib/site";

/** "Daha da iyisi, gelin, yüz yüze görüşelim!" block with the company's contact details. */
export function ContactCard({ name, hours, extra }: { name: string; hours?: boolean; extra?: React.ReactNode }) {
  return (
    <div className="contact-card">
      <h3>Daha da iyisi, gelin, yüz yüze görüşelim!</h3>
      <p className="stack" style={{ marginTop: 14 }}>
        Müşterilerimize değer veriyoruz. Mesai saatleri içinde bizi dilediğiniz zaman ziyaret edebilirsiniz.
      </p>
      <p style={{ marginTop: 22 }}>
        <a className="btn" href={site.whatsapp} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon />
          Bize WhatsApp Üzerinden Ulaşın
        </a>
      </p>
      <ul className="info-list">
        <li>
          <PinIcon />
          <address>
            <strong>{name}</strong>
            {site.address.street}, {site.address.city}
          </address>
        </li>
        <li>
          <MailIcon />
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </li>
        <li>
          <PhoneIcon />
          <a href={`tel:${site.phone.tel}`}>{site.phone.display}</a>
        </li>
        {hours ? (
          <li>
            <ClockIcon />
            <div>
              <strong>Çalışma Saatleri</strong>
              <span className="open">Bugün açık</span> {site.hours}
            </div>
          </li>
        ) : null}
      </ul>
      {extra}
    </div>
  );
}
