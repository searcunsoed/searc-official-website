import HeroImage from "./components/HeroImage";
import Quote from "./components/Quote";
import OverviewSection from "./components/OverviewSection";
import EventPage from "./components/Event";
import LatestArticlesSection from "./components/LatestArticlesSection";
import NewsSection from "./components/NewsSection";
import InstagramSection from "./components/InstagramSection";
import Footer from "./components/Footer";
import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = await cookies();
  const lang = cookieStore.get('lang')?.value || 'id';

  return (
    <main className="bg-background">
      <HeroImage />
      <Quote />
      <OverviewSection />
      <EventPage />
      <LatestArticlesSection />
      <NewsSection lang={lang} />
      <InstagramSection />
      <Footer lang={lang} />
    </main>
  );
}
