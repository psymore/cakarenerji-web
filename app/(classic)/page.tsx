import { HomeAbout } from "@/components/home/HomeAbout";
import { HomeSlogan, HomeQuote } from "@/components/home/HomeBands";
import { HomeCompany } from "@/components/home/HomeCompany";
import { HomeContact } from "@/components/home/HomeContact";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeNewsletter } from "@/components/home/HomeNewsletter";

export const metadata = { title: "Çakar Enerji" };

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeAbout />
      <HomeCompany />
      <HomeNewsletter />
      <HomeSlogan />
      <HomeQuote />
      <HomeContact />
    </>
  );
}
