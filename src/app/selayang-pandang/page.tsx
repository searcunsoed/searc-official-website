import Image from 'next/image';
import Link from 'next/link';
import { FaBook, FaUsers, FaLandmark, FaBookReader, FaBalanceScale, FaGlobeAsia, FaSeedling, FaDownload } from 'react-icons/fa';
import Footer from '../components/Footer';
import { cookies } from 'next/headers';

export default async function SelayangPandang() {
  const cookieStore = await cookies();
  const lang = cookieStore.get('lang')?.value || 'id';

  const t = {
    subtitle: lang === 'en' 
      ? 'Learn more about our vision, mission, and journey in International.' 
      : 'Mengenal lebih dalam visi, misi, dan perjalanan kami dalam kajian Internasional.',

    visi: lang === 'en' ? 'Our Vision' : 'Visi Kami',
    p1visi: lang === 'en' 
      ? 'To become a leading strategic research center in Indonesia for the analysis of security and development policies in the Southeast Asian and Indo-Pacific regions, making tangible contributions to national and international academic discourse.' 
      : 'Menjadi pusat kajian strategis terkemuka di Indonesia dalam analisis kebijakan keamanan dan pembangunan di kawasan Asia Tenggara dan Indo-Pasifik, dengan kontribusi nyata pada wacana akademik nasional dan internasional.',

    fokus: lang === 'en' ? 'Our Research Focus' : 'Fokus Riset Kami',
    p1fokus: lang === 'en' 
      ? 'We turn data into insights, and insights into real policy solutions.'
      : 'Kami mengubah data menjadi wawasan, dan wawasan menjadi solusi kebijakan yang nyata.',
    
    judulmisi1: lang === 'en' ? 'Research Publication' : 'Publikasi Riset',
    description1: lang === 'en' 
      ? 'Producing high-quality research on the strategic dynamics of the Southeast Asian and Indo-Pacific regions.' 
      : 'Menghasilkan riset berkualitas tinggi tentang dinamika strategis kawasan Asia Tenggara dan Indo-Pasifik.',

    judulmisi2: lang === 'en' ? 'Building Collaborative Networks' : 'Membangun Jejaring Kolaborasi',
    description2: lang === 'en' 
      ? 'Building a network of research collaborations with partner universities and international research institutions.' 
      : 'Membangun jejaring kolaborasi penelitian dengan mitra perguruan tinggi dan lembaga kajian internasional.',
    
    judulmisi3: lang === 'en' ? 'Formulation of Policy Briefs' : 'Perumusan Rekomendasi Kebijakan',
    description3: lang === 'en' 
      ? 'Contribute to policy formulation through academic publications, policy briefs, and public engagement.' 
      : 'Berkontribusi pada perumusan kebijakan melalui publikasi akademik, policy brief, dan keterlibatan publik.',

    judulmisi4: lang === 'en' ? 'Research Capacity Building' : 'Pengembangan Kapasitas Riset',
    description4: lang === 'en' 
      ? 'Supporting the development of research capacity among the UNSOED academic community in the field of international strategic studies.' 
      : 'Mendukung pengembangan kapasitas riset civitas akademika UNSOED di bidang studi strategis internasional.',

    judulfokus1: lang === 'en' ? 'Rural Development' : 'Pembangunan Pedesaan',
    descriptionfokus1: lang === 'en' 
      ? 'Examining innovative policy solutions to improve the welfare and resilience of rural communities in Southeast Asia.' 
      : 'Mengkaji solusi kebijakan inovatif untuk meningkatkan kesejahteraan dan ketahanan komunitas pedesaan di Asia Tenggara.',

    judulfokus2: lang === 'en' ? 'Policy & Governance' : 'Kebijakan & Tata Kelola',
    descriptionfokus2: lang === 'en' 
      ? 'Analyzing political dynamics, the rule of law, and the role of civil society in shaping good governance.' 
      : 'Menganalisis dinamika politik, supremasi hukum, dan peran masyarakat sipil dalam membentuk tata kelola yang baik.',

    judulfokus3: lang === 'en' ? 'Regional Integrations' : 'Integrasi Regional',
    descriptionfokus3: lang === 'en' 
      ? 'Researching the impact of regional cooperation, international trade, and digital transformation on ASEAN regional integration.' 
      : 'Meneliti dampak kerjasama regional, perdagangan internasional, dan transformasi digital terhadap integrasi kawasan ASEAN.',

    pubtitle: lang === 'en' ? 'Featured Publications' : 'Publikasi Unggulan',
    pubdownload: lang === 'en' ? 'Download here' : 'Unduh Publikasi',
    descriptionpub: lang === 'en' 
      ? 'The recent protests in Indonesia, initiated by the younger generation, have given rise to cross-border solidarity in Southeast Asia among netizens...' 
      : 'Unjuk rasa yang baru-baru ini terjadi di Indonesia, yang diprakarsai oleh generasi muda, telah melahirkan solidaritas lintas batas di Asia Tenggara dengan warganet...',
  }

  const missionItems = [
    {
      icon: <FaBook />,
      title: t.judulmisi1,
      description: t.description1,
    },
    {
      icon: <FaUsers />,
      title: t.judulmisi2,
      description: t.description2,
    },
    {
      icon: <FaLandmark />,
      title: t.judulmisi3,
      description: t.description3,
    },
    {
      icon: <FaBookReader />,
      title: t.judulmisi4,
      description: t.description4,
    },
  ];

  const focusAreas = [
    {
      icon: <FaSeedling className="h-8 w-8" />,
      title: t.judulfokus1,
      description: t.descriptionfokus1,
    },
    {
      icon: <FaBalanceScale className="h-8 w-8" />,
      title: t.judulfokus2,
      description: t.descriptionfokus2,
    },
    {
      icon: <FaGlobeAsia className="h-8 w-8" />,
      title: t.judulfokus3,
      description: t.descriptionfokus3,
    },
  ];

  const featuredPublication = {
    imageSrc: '/images/seablings.webp',
    title: '#SEABLINGS: New Form of ASEAN’s Regional Solidarity',
    description: t.descriptionpub,
    href: '/path/to/your/publication.pdf',
  };

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
          <h1 className="text-4xl md:text-6xl font-bold font-sans">CISS Unsoed</h1>
          <p className="mt-4 max-w-2xl text-lg text-white">
            {t.subtitle}
          </p>
        </div>
      </section>
      <section className="relative bg-gradient-to-t from-white to-yellow-500/10 py-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl font-bold font-sans sm:text-4xl text-yellow-700">
                  {t.visi}
                </h2>
                <p className="mt-4 text-lg text-yellow-600 leading-relaxed">
                  {t.p1visi}
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
              {t.fokus}
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-yellow-600">
              {t.p1fokus}
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
                      <p className="text-sm font-semibold text-yellow-600 tracking-wide uppercase">
                        {t.pubtitle}
                      </p>
                      <h3 className="mt-4 text-3xl font-bold font-sans text-yellow-700">
                          {featuredPublication.title}
                      </h3>
                      <p className="mt-4 text-yellow-600 leading-relaxed">
                          {featuredPublication.description}
                      </p>
                      <div className="mt-8">
                          <Link href={featuredPublication.href} target="_blank" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-b from-yellow-400 to-yellow-600 text-white font-bold rounded-lg shadow-lg shadow-yellow-500/30 transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-yellow-500/50 transform hover:scale-105">
                              <FaDownload className="mr-3" />
                              {t.pubdownload}
                          </Link>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </section>
      <Footer lang={lang} />
    </main>
  );
}