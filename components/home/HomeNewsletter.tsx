import { MailForm } from "@/components/MailForm";
import { home } from "@/content/home";
import { T } from "@/lib/text";

export function HomeNewsletter() {
  return (
    <section className="section section--dark flat-cells">
      <div className="wrap split">
        <div>
          <h2 className="big-h" style={{ marginTop: 0 }}>
            {home.newsletterH2}
          </h2>
          <T className="lead" v={home.newsletterText} />
        </div>
        <MailForm inline subject="Bülten kaydı" submit="Kaydol" fields={[{ name: "eposta", label: "E-posta", type: "email", required: true }]} />
      </div>
    </section>
  );
}
