import { FaShieldAlt, FaGlobeAsia, FaLandmark, FaBook } from 'react-icons/fa';
import AnimateOnScroll from './AnimateOnScroll';
import { cookies } from 'next/headers';

export default async function OverviewSection() {
  const cookieStore = await cookies();
  const lang = cookieStore.get('lang')?.value || 'id';

  const t = {
    title1: lang === 'en' ? 'Regional Security and Strategies' : 'Keamanan dan Strategi Kawasan',
    description1: lang === 'en' 
      ? [
          'Security in the ASEAN and Indo-Pacific regions.',
          'Strategic rivalry among major powers in Southeast Asia',
          'Regional security architecture: ASEAN, AUKUS, Quad.',
          'Maritime security and the South China Sea conflict.'
        ] 
      : 
        [
          'Keamanan kawasan ASEAN dan Indo-Pasifik.',
          'Rivalitas strategis kekuatan besar di Asia Tenggara.',
          'Arsitektur keamanan regional: ASEAN, AUKUS, Quad.',
          'Keamanan maritim dan konflik Laut China Selatan.'
        ],

    title2: lang === 'en' ? 'Foreign Policy' : 'Kebijakan Luar Negeri',
    description2: lang === 'en' 
      ? [
          'Indonesia\'s foreign policy: independent and active, and strategic pragmatism.',
          'Diplomacy among ASEAN countries.',
          'Indonesia and governance in the Global South.',
          'Indonesia\'s involvement in multilateral forums.'
        ] 
      : 
        [
          'Politik luar negeri Indonesia: bebas-aktif dan pragmatisme strategis.',
          'Diplomasi negara-negara ASEAN.',
          'Indonesia dan tata kelola Global South.',
          'Keterlibatan Indonesia dalam forum multilateral.'
        ],

    title3: lang === 'en' ? 'Development and Sustainability' : 'Pembangunan dan Keberlanjutan',
    description3: lang === 'en' 
      ? [
          'International development and the SDGs in the Global South',
          'Ecological civilization and environmental resilience',
          'SDG localization at the local level (Banyumas)',
          'Circular economy and national resilience.'
        ] 
      : 
        [
          'Pembangunan internasional dan SDGs di Global South.',
          'Ecological civilization dan ketahanan lingkungan.',
          'SDG localization di tingkat daerah (Banyumas).',
          'Circular economy dan ketahanan nasional.'
        ],

    title4: lang === 'en' ? 'Cross-Border Issues' : 'Isu-Isu Lintas Batas',
    description4: lang === 'en' 
      ? [
          'Diaspora studies and international migration',
          'Popular culture and representation in international relations.',
          'Technology, AI, and their implications for global security',
          'Digital governance and cybersecurity.'
        ] 
      : 
        [
          'Studi diaspora dan migrasi internasional.',
          'Budaya populer dan representasi dalam HI.',
          'Teknologi, AI, dan implikasinya dalam keamanan global.',
          'Tata kelola digital dan keamanan siber.'
        ],
  }

  const features = [
    {
      icon: <FaShieldAlt className="h-8 w-8" />,
      title: t.title1,
      description: t.description1,
    },
    {
      icon: <FaBook className="h-8 w-8" />,
      title: t.title2,
      description: t.description2,
    },
    {
      icon: <FaLandmark className="h-8 w-8" />,
      title: t.title3,
      description: t.description3,
    },
    {
      icon: <FaGlobeAsia className="h-8 w-8" />,
      title: t.title4,
      description: t.description4,
    },
  ];

  return (
    <section className="bg-gradient-to-t from-white to-yellow-500/10 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <AnimateOnScroll animationClassName="animate-slide-in-from-bottom">
            <h2 className="text-base font-semibold text-yellow-600 tracking-wide uppercase">
              {lang === 'en' ? 'Focus and Scope of the Study' : 'Fokus dan Ruang Lingkup Kajian'}
            </h2>
            <p className="mt-2 text-3xl font-extrabold font-sans text-yellow-900 sm:text-4xl">
              {lang === 'en' 
                ? 'Focusing on Security Dynamics and Strategic Policy in the Southeast Asian and Indo-Pacific Regions' 
                : 'Berfokus pada Dinamika Keamanan dan Kebijakan Strategis di Kawasan Asia Tenggara dan Indo-Pasifik'}
            </p>
            <p className="mt-4 max-w-3xl mx-auto text-lg sm:text-xl text-yellow-600">
              {lang === 'en' 
                ? 'CISS Unsoed is dedicated to advancing knowledge through research, discussion, and the provision of data on regional and international issues.' 
                : 'CISS Unsoed didedikasikan untuk memajukan pengetahuan melalui penelitian, diskusi, dan penyediaan data terkait isu kawasan dan Internasional.'}
            </p>
          </AnimateOnScroll>
        </div>
        <div className="mt-16">
          <AnimateOnScroll animationClassName="animate-slide-in-from-bottom">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.title} className="bg-white p-8 rounded-xl shadow-lg border border-transparent hover:shadow-2xl hover:border-yellow-700 hover:-translate-y-2 transition-all duration-300 ease-in-out flex flex-col items-center text-center sm:items-start sm:text-left">
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-yellow-100 text-yellow-600">
                      {feature.icon}
                    </span>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-xl font-bold font-sans text-yellow-900">
                      {feature.title}
                    </h3>
                    <ul className="list-disc pl-5 mt-2 text-base text-yellow-600 space-y-1 text-left">
                      {feature.description.map((poin, index) => (
                        <li key={index}>{poin}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}