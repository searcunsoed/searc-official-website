import { FaBookOpen, FaUsers, FaLandmark } from 'react-icons/fa';
import AnimateOnScroll from './AnimateOnScroll';
import { cookies } from 'next/headers';

export default async function OverviewSection() {
  const cookieStore = await cookies();
  const lang = cookieStore.get('lang')?.value || 'id';

  const t = {
    title1: lang === 'en' ? 'Research Publication' : 'Publikasi Riset',
    description1: lang === 'en' 
      ? 'Using an interdisciplinary approach to produce high-quality publications on issues in Southeast Asia.' 
      : 'Menggunakan pendekatan interdisipliner untuk menghasilkan publikasi berkualitas tinggi tentang isu-isu di Asia Tenggara.',

    title2: lang === 'en' ? 'Rural Development Issues' : 'Isu Pembangunan Pedesaan',
    description2: lang === 'en' 
      ? 'Engaged in research discussing challenges and solutions for rural development in Southeast Asia.' 
      : 'Terlibat dalam riset yang membahas tantangan serta solusi pembangunan pedesaan di Asia Tenggara.',

    title3: lang === 'en' ? 'Local Wisdom in Policy Making' : 'Kearifan Lokal dalam Kebijakan',
    description3: lang === 'en' 
      ? 'Utilize relevant data collections and public policy analyses from various countries in Southeast Asia.' 
      : 'Manfaatkan kumpulan data dan analisis kebijakan publik yang relevan dari berbagai negara di Asia Tenggara.',
  }

  const features = [
    {
      icon: <FaBookOpen className="h-8 w-8" />,
      title: t.title1,
      description: t.description1,
    },
    {
      icon: <FaLandmark className="h-8 w-8" />,
      title: t.title2,
      description: t.description2,
    },
    {
      icon: <FaUsers className="h-8 w-8" />,
      title: t.title3,
      description: t.description3,
    },
  ];

  return (
    <section className="bg-gradient-to-t from-white to-yellow-500/10 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <AnimateOnScroll animationClassName="animate-slide-in-from-bottom">
            <h2 className="text-base font-semibold text-yellow-600 tracking-wide uppercase">
              {lang === 'en' ? 'Our Focus' : 'Fokus Kami'}
            </h2>
            <p className="mt-2 text-3xl font-extrabold font-sans text-yellow-900 sm:text-4xl">
              {lang === 'en' 
                ? 'Conducting Studies on the Southeast Asian Region Through Three Main Pillars' 
                : 'Melakukan Studi Kawasan Asia Tenggara Melalui Tiga Pilar Utama'}
            </p>
            <p className="mt-4 max-w-3xl mx-auto text-lg sm:text-xl text-yellow-600">
              {lang === 'en' 
                ? 'SEARC Unsoed is dedicated to advancing knowledge through research, discussion, and the provision of data related to issues in the Southeast Asian region.' 
                : 'SEARC Unsoed didedikasikan untuk memajukan pengetahuan melalui penelitian, diskusi, dan penyediaan data terkait isu kawasan Asia Tenggara.'}
            </p>
          </AnimateOnScroll>
        </div>
        <div className="mt-16">
          <AnimateOnScroll animationClassName="animate-slide-in-from-bottom">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                    <p className="mt-2 text-base text-yellow-600">
                      {feature.description}
                    </p>
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