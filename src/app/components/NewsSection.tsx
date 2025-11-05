"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import AnimateOnScroll from './AnimateOnScroll';

const newsItems = [
  {
    href: '/berita/insiden-timor-leste', 
    imageSrc: '/images/insiden-timor-leste.webp',
    category: 'Politics and Security',
    date: '29 September 2025',
    title: 'Insiden Penembakan Warga Negara Indonesia di Perbatasan Timor Leste'
  },
  {
    href: '/berita/malaysia-thailand',
    imageSrc: '/images/malaysia.webp',
    category: 'ASEAN and International Relations',
    date: '1 Mei 2025',
    title: 'Menghubungkan Dua Negara, Menggerakkan Satu Kawasan: Malaysia dan Thailand Luncurkan Proyek Transportasi Besar'
  },
  {
    href: '/berita/johor-singapore',
    imageSrc: '/images/johor.webp',
    category: 'Economic Zone',
    date: '28 April 2025',
    title: 'Johor-Singapore Special Economic Zone (JSSEZ): Peluang dan Tantangan di Asia Tenggara'
  },
];

export default function NewsSection() {
  const [activeImage, setActiveImage] = useState(newsItems[0].imageSrc);

  return (
    <section className="bg-gradient-to-t from-white to-yellow-500/10 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimateOnScroll animationClassName="animate-slide-in-from-bottom">
            <h2 className="text-base font-semibold text-yellow-600 tracking-wide uppercase">SEA Update</h2>
            <p className="mt-2 text-3xl font-extrabold font-sans text-yellow-900 sm:text-4xl">
              Berita Terbaru dari SEARC
            </p>
          </AnimateOnScroll>
        </div>
        <AnimateOnScroll animationClassName="animate-slide-in-from-bottom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="w-full lg:sticky lg:top-24">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  key={activeImage}
                  src={activeImage}
                  alt="Pratinjau Berita"
                  fill
                  className="object-cover animate-fade-in"
                />
              </div>
            </div>
            <div className="w-full">
              <div className="space-y-4">
                {newsItems.map((item) => (
                  <Link 
                    key={item.title}
                    href={item.href}
                    className={`block p-6 rounded-xl transition-all duration-300 ${activeImage === item.imageSrc ? 'bg-yellow-100/50 shadow-md' : 'bg-transparent'}`}
                    onMouseEnter={() => setActiveImage(item.imageSrc)}
                  >
                    <article>
                      <p className="text-sm font-semibold text-yellow-600">{item.category}</p>
                      <h3 className="mt-2 text-2xl font-bold font-heading text-yellow-900">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm text-yellow-500">{item.date}</p>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </AnimateOnScroll>
        <div className="mt-12 flex justify-center">
            <Link href="/berita" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-b from-yellow-400 to-yellow-600 text-white font-bold rounded-lg shadow-lg shadow-yellow-500/30 transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-yellow-500/50 transform hover:scale-105">
              Lihat SEA Update Lainnya
              <FaArrowRight className="ml-3 -mr-1 h-4 w-4" />
            </Link>
        </div>
      </div>
    </section>
  );
}