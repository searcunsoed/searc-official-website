import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import AnimateOnScroll from './AnimateOnScroll';
import { cookies } from 'next/headers';

export default async function LatestArticlesSection() {
  const cookieStore = await cookies();
  const lang = cookieStore.get('lang')?.value || 'id';

  const t = {
    title1: lang === 'en' 
    ? 'US and Israeli Attacks on Iran: Future Predictions and Lessons for Indonesia' 
    : 'Serangan AS dan Israel ke Iran: Prediksi ke Depan dan Pelajaran Untuk Indonesia',
    snippet: lang === 'en' 
    ? 'That morning, at 9:27 a.m. Tehran time on February 28, 2026, the skies over Iran turned into hell. The United States and Israel launched the largest joint military attack in the Middle East since...' 
    : 'Pagi itu, pukul 09.27 waktu Teheran, 28 Februari 2026, langit Iran berubah menjadi neraka. Amerika Serikat dan Israel melancarkan serangan militer gabungan terbesar di Timur Tengah sejak...',

    title2: lang === 'en' 
    ? 'The US invasion of Venezuela: How should Indonesia respond?' 
    : 'Invasi AS ke Venezuela: Bagaimana Seharusnya Indonesia Bersikap?',

    title3: lang === 'en' 
    ? 'Southeast Asian Geopolitics in 2025: Between Great Power Rivalry and the Fragility of ASEAN Centrality' 
    : 'Geopolitik Asia Tenggara 2025: Antara Rivalitas Kekuatan Besar dan Rapuhnya Sentralitas ASEAN',

    title4: lang === 'en' 
    ? 'Green Diplomacy of Indonesia: Between Rhetoric and Reality' 
    : 'Diplomasi Hijau Indonesia: Antara Retorika dan Realitas',

    title5: lang === 'en' 
    ? '"Pop Culture as Protest": A Comparison of the “One Piece” Social Movement in Indonesia, the Philippines, and Nepal in Political Reform and Peoples Representation' 
    : '"Pop Culture as Protest": Komparasi Gerakan Sosial "One Piece" di Indonesia, Filipina, dan Nepal dalam Reformasi Politik dan Representasi Rakyat',

    title6: lang === 'en' 
    ? 'The SEAblings Phenomenon and the Birth of a Pan-Southeast Asian Digital Identity' 
    : 'Fenomena SEAblings dan Kelahiran Identitas Digital Pan-Asia Tenggara',

    title7: lang === 'en' 
    ? 'Board of Peace Trump: A Trap for Indonesian Leadership in the Global South' 
    : 'Board of Peace Trump: Jebakan bagi Kepemimpinan Indonesia di Global South',
  }

  const articles = [
    {
      href: 'https://www.searcunsoed.com/artikel/politics-ir/serangan-as-dan-israel-ke-iran-prediksi-ke-depan-dan-pelajaran-untuk-indonesia',
      imageSrc: '/images/serangan.jpg',
      category: 'Politics and International Relations Research',
      title: t.title1,
      author: 'Arif Darmawan',
      date: '1 Maret 2026',
      snippet: t.snippet,
    },
    {
      href: 'https://www.searcunsoed.com/artikel/politics-ir/fenomena-seablings-dan-kelahiran-identitas-digital-pan-asia-tenggara',
      imageSrc: '/images/seablings.jpeg',
      category: 'Politics and International Relations Research',
      title: t.title6,
      author: 'Arif Darmawan',
      date: '21 Februari 2026',
    },
    {
      href: 'https://www.searcunsoed.com/artikel/politics-ir/board-of-peace-trump-jebakan-bagi-kepemimpinan-indonesia-di-global-south',
      imageSrc: '/images/bop.webp',
      category: 'Politics and International Relations Research',
      title: t.title7,
      author: 'Arif Darmawan',
      date: '5 Februari 2026',
    },
    {
      href: 'https://www.searcunsoed.com/artikel/politics-ir/invasi-as-ke-venezuela-bagaimana-seharusnya-indonesia-bersikap',
      imageSrc: '/images/venezuela.webp',
      category: 'Politics and International Relations Research',
      title: t.title2,
      author: 'Arif Darmawan',
      date: '7 Januari 2026',
    },
    {
      href: 'https://www.searcunsoed.com/artikel/politics-ir/efek-domino-kebijakan-tarif-trump-dari-eropa-hingga-asia',
      imageSrc: '/images/asean-logo.webp',
      category: 'Politics and International Relations Research',
      title: t.title3,
      author: 'Fabian Adam, dan Fahreza Adi Prabowo',
      date: '26 Desember 2025',
    },
    {
      href: 'https://www.searcunsoed.com/artikel/politics-ir/diplomasi-hijau-indonesia-antara-retorika-dan-realitas',
      imageSrc: '/images/banjir-sumatera.webp',
      category: 'Politics and International Relations Research',
      title: t.title4,
      author: 'Arif Darmawan',
      date: '8 Desember 2025',
    },
    {
      href: 'https://www.searcunsoed.com/artikel/culture-linguistics/pop-culture-as-protest-komparasi-gerakan-sosial-one-piece-di-indonesia-filipina-dan-nepal-dalam-reformasi-politik-dan-representasi-rakyat',
      imageSrc: '/images/one-piece.webp',
      category: 'Culture and Linguistics',
      title: t.title5,
      author: 'Putu Puspa Widyanti, dan Azkia Sofie Wulandari',
      date: '25 November 2025',
    },
  ];

  const featuredArticle = articles[0];
  const otherArticles = articles.slice(1);

  return (
    <section className="bg-gradient-to-t from-white to-yellow-500/10 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimateOnScroll animationClassName="animate-slide-in-from-bottom">
            <h2 className="text-base font-semibold text-yellow-600 tracking-wide uppercase">
              {lang === 'en' ? 'Publications' : 'Publikasi'}
            </h2>
            <p className="mt-2 text-3xl font-extrabold font-sans text-yellow-900 sm:text-4xl">
              {
                lang === 'en' 
                ? 'Latest Articles from SEARC' 
                : 'Artikel Terbaru dari SEARC'
              }
            </p>
          </AnimateOnScroll>
        </div>
        <AnimateOnScroll animationClassName="animate-slide-in-from-bottom">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
            <div className="group">
              <Link href={featuredArticle.href} className="block">
                <div className="overflow-hidden rounded-xl shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                  <Image
                    src={featuredArticle.imageSrc}
                    alt={featuredArticle.title}
                    width={800}
                    height={450}
                    className="w-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="mt-6">
                  <p className="text-sm font-semibold text-yellow-600">{featuredArticle.category}</p>
                  <h3 className="mt-2 text-2xl font-bold font-heading text-yellow-700 group-hover:text-yellow-700 transition-colors">
                    {featuredArticle.title}
                  </h3>
                  <p className="mt-4 text-yellow-600">{featuredArticle.snippet}</p>
                  <p className="mt-4 text-sm text-yellow-500">{featuredArticle.author} • {featuredArticle.date}</p>
                </div>
              </Link>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="space-y-8">
                {otherArticles.map((article) => (
                  <div key={article.title} className="group flex items-start gap-4">
                    <Link href={article.href} className="flex-shrink-0">
                      <div className="w-32 h-20 overflow-hidden rounded-lg shadow-md group-hover:shadow-xl transition-shadow duration-300">
                        <Image
                          src={article.imageSrc}
                          alt={article.title}
                          width={128}
                          height={80}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </Link>
                    <div>
                      <p className="text-xs font-semibold text-yellow-600">{article.category}</p>
                      <h4 className="mt-1 text-base font-bold font-heading text-yellow-700">
                        <Link href={article.href} className="hover:text-yellow-700 transition-colors line-clamp-2">
                          {article.title}
                        </Link>
                      </h4>
                      <p className="mt-1 text-xs text-yellow-500">{article.author} • {article.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimateOnScroll>
        <div className="mt-8 flex justify-center">
            <Link href="/artikel/economic-social" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-b from-yellow-400 to-yellow-600 text-white font-bold rounded-lg shadow-lg shadow-yellow-500/30 transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-yellow-500/50 transform hover:scale-105">
              {
                lang === 'en' 
                ? 'See More Articles' 
                : 'Lihat Semua Artikel'
              }
              <FaArrowRight className="ml-3 -mr-1 h-4 w-4" />
            </Link>
        </div>
      </div>
    </section>
  );
}