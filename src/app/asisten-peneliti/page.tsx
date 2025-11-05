import AssistantCard from "../components/AssistantCard";
import Image from "next/image";
import Footer from "../components/Footer";

const researchAssistantsByDivision = {
  "Departemen Jurnal dan Penerbitan Ilmiah": [
    { name: 'Fabian Adam', major: 'Hubungan Internasional', image: '/images/team/adam.webp', email: '#' },
    { name: 'Luthfi Nabilah Ailen', major: 'Hukum', image: '/images/team/nabilah.webp', email: '#' },
    { name: 'Mahardika Rahmawati', major: 'Hubungan Internasional', image: '/images/team/mahardika.webp', email: '#' },
    { name: 'Putu Puspa Widyanti', major: 'Hubungan Internasional', image: '/images/team/putu.webp', email: '#' },
    { name: 'Azkia Sofie Wulandari', major: 'Hubungan Internasional', image: '/images/team/azkia.webp', email: '#' },
    { name: 'Fahreza Adi Prabowo', major: 'Hubungan Internasional', image: '/images/team/fahreza.webp', email: '#' },
  ],
  "Departemen Webinar dan Diseminasi Riset": [
    { name: 'David Aryodhi', major: 'Hubungan Internasional', image: '/images/team/david.webp', email: '#' },
    { name: 'Christiano Disa Pradana', major: 'Hubungan Internasional', image: '/images/team/disa.webp', email: '#' },
    { name: 'Yupitha Meidianti', major: 'Hubungan Internasional', image: '/images/team/yupitha.webp', email: '#' },
    { name: 'Nabilla Kheysha Azzahra', major: 'Hubungan Internasional', image: '/images/team/kheysha.webp', email: '#' },
  ],
  "Departemen Media Sosial": [
    { name: 'Azra Kusuma', major: 'Hubungan Internasional', image: '/images/team/azra.webp', email: '#' },
    { name: 'Rahel Fazilla', major: 'Hubungan Internasional', image: '/images/team/rahel.webp', email: '#' },
    { name: 'Nor Elisah', major: 'Hubungan Internasional', image: '/images/team/elisah.webp', email: '#' },
    { name: 'Yuana Aulia Syafrilia', major: 'Hubungan Internasional', image: '/images/team/yuana.webp', email: '#' },
  ]
};

export default function AsistenPenelitiPage() {
  return (
    <main className="bg-slate-50 min-h-screen">
        <section className="relative h-[50vh] bg-yellow-500 text-white flex items-center justify-center text-center">
            <Image 
                src="/images/unsoed-2.webp"
                alt="Tentang SEARC"
                fill
                className="object-cover z-0 opacity-50"
            />
            <div className="relative z-10 p-4">
                <h1 className="text-4xl md:text-6xl font-extrabold font-sans">Profil Asisten Peneliti SEARC Unsoed</h1>
                <p className="mt-4 text-lg text-white">
                    Tim asisten peneliti kami yang berdedikasi mendukung kegiatan riset dan operasional SEARC Unsoed.
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
        <Footer />
    </main>
  );
}