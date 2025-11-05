// src/app/tentang/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { FaBookOpen, FaGlobeAsia, FaBalanceScale, FaPaintBrush, FaSeedling, FaDownload } from 'react-icons/fa';
import Footer from '../components/Footer';

const missionItems = [
  {
    icon: <FaBookOpen />,
    title: 'Transparansi & Demokrasi',
    description: 'Mengupas transparansi, korupsi, dan peran masyarakat sipil di ASEAN dari demokrasi hingga otoritarianisme.',
  },
  {
    icon: <FaGlobeAsia />,
    title: 'Ekonomi & Perdagangan',
    description: 'Melakukan penelitian dari perdagangan internasional, ekonomi digital, hingga solusi inklusif untuk ketidaksetaraan.',
  },
  {
    icon: <FaBalanceScale />,
    title: 'Hukum & Maritim',
    description: 'Mengkaji supremasi hukum hingga konflik maritim, dan bagaimana hukum membentuk masa depan kawasan ini.',
  },
  {
    icon: <FaPaintBrush />,
    title: 'Budaya & Identitas',
    description: 'Mengkaji bagaimana transformasi budaya dan perubahan sosial yang dinamis membentuk identitas Asia Tenggara.',
  },
];

const focusAreas = [
  {
    icon: <FaSeedling className="h-8 w-8" />,
    title: 'Pembangunan Pedesaan',
    description: 'Mengkaji solusi kebijakan inovatif untuk meningkatkan kesejahteraan dan ketahanan komunitas pedesaan di Asia Tenggara.',
  },
  {
    icon: <FaBalanceScale className="h-8 w-8" />,
    title: 'Kebijakan & Tata Kelola',
    description: 'Menganalisis dinamika politik, supremasi hukum, dan peran masyarakat sipil dalam membentuk tata kelola yang baik.',
  },
  {
    icon: <FaGlobeAsia className="h-8 w-8" />,
    title: 'Integrasi Regional',
    description: 'Meneliti dampak kerjasama regional, perdagangan internasional, dan transformasi digital terhadap integrasi kawasan ASEAN.',
  },
];

const featuredPublication = {
  imageSrc: '/images/seablings.webp',
  title: '#SEABLINGS: New Form of ASEAN’s Regional Solidarity',
  description: 'Unjuk rasa yang baru-baru ini terjadi di Indonesia, yang diprakarsai oleh generasi muda, telah melahirkan solidaritas lintas batas di Asia Tenggara dengan warganet...',
  href: '/path/to/your/publication.pdf',
};

export default function SelayangPandang() {
  return (
    <main>
      <section className="relative h-[50vh] bg-yellow-500 text-white flex items-center justify-center text-center">
        <Image 
          src="/images/unsoed-2.webp"
          alt="Tentang SEARC"
          fill
          className="object-cover z-0 opacity-50"
        />
        <div className="relative z-10 p-4">
          <h1 className="text-4xl md:text-6xl font-extrabold font-sans">SEARC Unsoed</h1>
          <p className="mt-4 max-w-2xl text-lg text-white">
            Mengenal lebih dalam visi, misi, dan perjalanan kami dalam mengkaji Asia Tenggara.
          </p>
        </div>
      </section>
      <section className="relative bg-gradient-to-t from-white to-yellow-500/10 py-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl font-bold font-sans sm:text-4xl text-yellow-700">Visi Kami</h2>
                <p className="mt-4 text-lg text-yellow-600 leading-relaxed">
                  Menjadi pusat riset unggulan dan rujukan utama dalam studi kebijakan strategis kawasan Asia Tenggara yang berlandaskan pada kearifan lokal untuk pembangunan berkelanjutan.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {missionItems.map((item) => (
                    <div 
                      key={item.title} 
                      className="bg-white p-8 rounded-xl shadow-lg border hover:border-yellow-700 hover:border-yellow-700/70 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                    >
                        <div className="text-yellow-700 mb-4 text-3xl">
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-bold font-heading text-yellow-700">
                            {item.title}
                        </h3>
                        <p className="mt-2 text-yellow-600">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
      </section>
      <section className="bg-gradient-to-t from-white to-yellow-500/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold font-sans text-yellow-700 sm:text-4xl">
              Fokus Riset Kami
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-yellow-600">
              Kami mengubah data menjadi wawasan, dan wawasan menjadi solusi kebijakan yang nyata.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {focusAreas.map((area) => (
              <div key={area.title} className="bg-white p-8 rounded-xl shadow-lg border hover:border-yellow-700 hover:border-yellow-700/70 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-yellow-100 text-yellow-700 mb-6">
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold font-sans text-yellow-700">{area.title}</h3>
                <p className="mt-2 text-yellow-600">{area.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-20 bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative aspect-w-4 aspect-h-3 lg:aspect-w-3 lg:aspect-h-4">
                      <Image 
                          src={featuredPublication.imageSrc} 
                          alt={featuredPublication.title}
                          fill
                          className="object-cover"
                      />
                  </div>
                  <div className="flex flex-col justify-center p-8 lg:p-12">
                      <p className="text-sm font-semibold text-yellow-600 tracking-wide uppercase">Publikasi Unggulan</p>
                      <h3 className="mt-4 text-3xl font-bold font-sans text-yellow-700">
                          {featuredPublication.title}
                      </h3>
                      <p className="mt-4 text-yellow-600 leading-relaxed">
                          {featuredPublication.description}
                      </p>
                      <div className="mt-8">
                          <Link href={featuredPublication.href} target="_blank" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-b from-yellow-400 to-yellow-600 text-white font-bold rounded-lg shadow-lg shadow-yellow-500/30 transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-yellow-500/50 transform hover:scale-105">
                              <FaDownload className="mr-3" />
                              Unduh Publikasi
                          </Link>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}