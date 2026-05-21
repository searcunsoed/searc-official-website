import AssistantCard from "../components/AssistantCard";
import Image from "next/image";
import Footer from "../components/Footer";
import { cookies } from "next/headers";

export default async function AsistenPenelitiPage() {
  const cookieStore = await cookies();
  const lang = cookieStore.get('lang')?.value || 'id';

  const t = {
    department1: lang === 'en' 
    ? 'Department of Journals and Scientific Publishing' 
    : 'Departemen Jurnal dan Penerbitan Ilmiah',

    department2: lang === 'en' 
    ? 'Webinar and Research Dissemination Department' 
    : 'Departemen Webinar dan Diseminasi Riset',

    department3: lang === 'en' 
    ? 'Social Media Department' 
    : 'Departemen Media Sosial',

    ir: lang === 'en' 
    ? 'International Relations' 
    : 'Hubungan Internasional',

    law: lang === 'en' 
    ? 'Law' 
    : 'Hukum',
  }

  const researchAssistantsByDivision = {
    [t.department1] : [
      { name: 'Fabian Adam', major: t.ir, image: '/images/team/adam.webp', email: '#' },
      { name: 'Mahardika Rahmawati', major: t.ir, image: '/images/team/mahardika.webp', email: '#' },
      { name: 'Putu Puspa Widyanti', major: t.ir, image: '/images/team/putu.webp', email: '#' },
      { name: 'Azkia Sofie Wulandari', major: t.ir, image: '/images/team/azkia.webp', email: '#' },
      { name: 'Fahreza Adi Prabowo', major: t.ir, image: '/images/team/fahreza.webp', email: '#' },
    ],
    [t.department2] : [
      { name: 'David Aryodhi', major: t.ir, image: '/images/team/david.webp', email: '#' },
      { name: 'Christiano Disa Pradana', major: t.ir, image: '/images/team/disa.webp', email: '#' },
      { name: 'Yupitha Meidianti', major: t.ir, image: '/images/team/yupitha.webp', email: '#' },
      { name: 'Nabilla Kheysha Azzahra', major: t.ir, image: '/images/team/kheysha.webp', email: '#' },
    ],
    [t.department3]: [
      { name: 'Azra Kusuma', major: t.ir, image: '/images/team/azra.webp', email: '#' },
      { name: 'Rahel Fazilla', major: t.ir, image: '/images/team/rahel.webp', email: '#' },
      { name: 'Nor Elisah', major: t.ir, image: '/images/team/elisah.webp', email: '#' },
      { name: 'Yuana Aulia Syafrilia', major: t.ir, image: '/images/team/yuana.webp', email: '#' },
    ]
  };

  return (
    <main className="bg-slate-50 min-h-screen">
        <section className="relative h-[50vh] bg-yellow-500 text-white flex items-center justify-center text-center">
            <Image 
                src="/images/unsoed-2.webp"
                alt="Tentang CISS"
                fill
                className="object-cover z-0 opacity-50"
            />
            <div className="relative z-10 p-4">
                <h1 className="max-w-6xl text-4xl md:text-6xl font-bold font-sans">
                  {
                    lang === 'en' 
                    ? 'Profile of the CISS Unsoed Research Assistants' 
                    : 'Profil Asisten Peneliti CISS Unsoed'
                  }
                </h1>
                <p className="mt-4 text-lg text-white">
                  {
                    lang === 'en' 
                    ? 'Our dedicated team of research assistants supports CISS Unsoed research and operational activities.' 
                    : 'Tim asisten peneliti kami yang berdedikasi mendukung kegiatan riset dan operasional CISS Unsoed.'
                  }
                </p>
            </div>
        </section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-t from-white to-yellow-500/10">
            <div className="space-y-16">
            {Object.entries(researchAssistantsByDivision).map(([division, assistants]) => (
                <section key={division}>
                <div className="mb-8 pb-4 border-b border-yellow-800">
                    <h2 className="text-3xl font-bold font-sans text-yellow-700">{division}</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {assistants.map((assistant) => (
                    <AssistantCard key={assistant.name} {...assistant} />
                    ))}
                </div>
                </section>
            ))}
            </div>
        </div>
        <Footer lang={lang} />
    </main>
  );
}