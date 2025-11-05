import HeroImage from "./components/HeroImage";
import Quote from "./components/Quote";
import OverviewSection from "./components/OverviewSection";
import LatestArticlesSection from "./components/LatestArticlesSection";
import NewsSection from "./components/NewsSection";
import InstagramSection from "./components/InstagramSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-background">
      <HeroImage />
      <Quote />
      <OverviewSection />
      <LatestArticlesSection />
      <NewsSection />
      <InstagramSection />
      <Footer />
    </main>
  );
}
