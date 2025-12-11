import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import AnimateOnScroll from './AnimateOnScroll';

const articles = [
  {
    href: 'https://www.searcunsoed.com/artikel/politics-ir/diplomasi-hijau-indonesia-antara-retorika-dan-realitas',
    imageSrc: '/images/banjir-sumatera.webp',
    category: 'Politics and International Relations Research',
    title: 'Diplomasi Hijau Indonesia: Antara Retorika dan Realitas',
    author: 'Arif Darmawan',
    date: '8 Desember 2025',
    snippet: 'LEBIH dari 800 jiwa melayang dalam bencana banjir bandang yang menghantam tiga provinsi di Sumatera pada akhir November 2025...',
  },
  {
    href: 'https://www.searcunsoed.com/artikel/culture-linguistics/pop-culture-as-protest-komparasi-gerakan-sosial-one-piece-di-indonesia-filipina-dan-nepal-dalam-reformasi-politik-dan-representasi-rakyat',
    imageSrc: '/images/one-piece.webp',
    category: 'Culture and Linguistics',
    title: '"Pop Culture as Protest": Komparasi Gerakan Sosial "One Piece" di Indonesia, Filipina, dan Nepal dalam Reformasi Politik dan Representasi Rakyat',
    author: 'Putu Puspa Widyanti, dan Azkia Sofie Wulandari',
    date: '25 November 2025',
  },
  {
    href: 'https://www.searcunsoed.com/artikel/economic-social/stabilitas-politik-sebagai-prediktor-pertumbuhan-ekonomi-tinjauan-krisis-domestik-di-tiga-negara-asean',
    imageSrc: '/images/demo.webp',
    category: 'Economic and Social Walfare',
    title: 'Stabilitas Politik sebagai Prediktor Pertumbuhan Ekonomi: Tinjauan Krisis Domestik di Tiga Negara ASEAN',
    author: 'Fabian Adam dan Fahreza Adi Prabowo',
    date: '11 September 2025',
  },
  {
    href: 'https://www.searcunsoed.com/artikel/law-and-human-rights/local-currency-settlement-di-asean',
    imageSrc: '/images/currency.webp',
    category: 'Law and Human Rights',
    title: 'Local Currency Settlements in ASEAN',
    author: 'Fabian Adam',
    date: '3 Juni 2025',
  },
  {
    href: 'https://www.searcunsoed.com/artikel/economic-social/di-antara-keberhasilan-dan-skandal-apa-yang-bisa-dipelajari-danantara-dari-temasek-khazanah-dan-1mdb',
    imageSrc: '/images/danantara.webp',
    category: 'Economic and Social Walfare',
    title: 'Di Antara Keberhasilan dan Skandal: Apa yang Bisa Dipelajari Danantara dari Temasek, Khazanah, dan 1MDB?',
    author: 'Mahardika R. dan Nabilah Ailen',
    date: '3 Juni 2025',
  },
  {
    href: 'https://www.searcunsoed.com/artikel/politics-ir/efek-domino-kebijakan-tarif-trump-dari-eropa-hingga-asia',
    imageSrc: '/images/trump.webp',
    category: 'Politics and International Relations Research',
    title: 'Efek Domino Kebijakan Tarif Trump dari Eropa Hingga Asia',
    author: 'Mahardika R. dan Nabilah Ailen',
    date: '3 Juni 2025',
  },
];

const featuredArticle = articles[0];
const otherArticles = articles.slice(1);

export default function LatestArticlesSection() {
  return (
    <section className="bg-gradient-to-t from-white to-yellow-500/10 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimateOnScroll animationClassName="animate-slide-in-from-bottom">
            <h2 className="text-base font-semibold text-yellow-600 tracking-wide uppercase">Publikasi</h2>
            <p className="mt-2 text-3xl font-extrabold font-sans text-yellow-900 sm:text-4xl">
              Artikel Terbaru dari SEARC
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
              Lihat Semua Artikel
              <FaArrowRight className="ml-3 -mr-1 h-4 w-4" />
            </Link>
        </div>
      </div>
    </section>
  );
}