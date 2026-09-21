import { HomeAbout } from "@/components/home/HomeAbout";
import { HomeSlogan, HomeQuote } from "@/components/home/HomeBands";
import { HomeCompany } from "@/components/home/HomeCompany";
import { HomeContact } from "@/components/home/HomeContact";
import { HeroField } from "@/components/home/HeroField";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeNewsletter } from "@/components/home/HomeNewsletter";
import { originalUrl } from "@/lib/images";

export const metadata = { title: "Çakar Enerji", openGraph: { images: [originalUrl("home")] } };

export default function Home() {
  return (
    <>
      <HomeHero />
      <HeroField />
      <HomeAbout />
      <HomeCompany />
      <HomeNewsletter />
      <HomeSlogan />
      <HomeQuote />
      <HomeContact />
    </>
  );
}
