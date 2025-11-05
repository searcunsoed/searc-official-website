import PartnerCard from '../components/PartnerCard';
import Image from 'next/image';
import Footer from '../components/Footer';

const partnersByCategory = {
  "Lembaga Universitas": [
    { 
        name: "Universitas Jenderal Soedirman", 
        logoSrc: "/images/unsoed-logo.png", 
        websiteUrl: "https://unsoed.ac.id/" 
    },
    { 
        name: "LPPM Unsoed", 
        logoSrc: "/images/lppm.png", 
        websiteUrl: "https://lppm.unsoed.ac.id/" 
    },
  ],
  "Organisasi Non-Pemerintah (NGOs)": [
    { 
        name: "Global Institute For Tomorrow (GIFT)", 
        logoSrc: "/images/logo-gift.png", 
        websiteUrl: "https://global-inst.com/" 
    },
    { 
        name: "Ocean Centres", 
        logoSrc: "/images/ocean-centres-logo.webp", 
        websiteUrl: "https://www.oceancentres.com/indonesia" },
  ],
};

export default function MitraPage() {
  return (
    <main className="bg-slate-50">
        <section className="relative h-[50vh] bg-yellow-500 text-white flex items-center justify-center text-center">
                <Image 
                    src="/images/unsoed-2.webp"
                    alt="Tentang SEARC"
                    fill
                    className="object-cover z-0 opacity-50"
                />
                <div className="relative z-10 p-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold font-sans">Mitra dan Jaringan Kolaborasi</h1>
                    <p className="mt-4 text-lg text-white">
                        Kolaborasi adalah kunci keberhasilan riset kami. Berikut adalah mitra-mitra strategis yang telah bekerja sama dengan SEARC Unsoed.
                    </p>
                </div>
            </section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-t from-white to-yellow-500/10">
            <div className="space-y-16">
            {Object.entries(partnersByCategory).map(([category, partners]) => (
                <section key={category}>
                <div className="mb-8 pb-4 border-b border-yellow-800">
                    <h2 className="text-3xl font-bold font-sans text-yellow-700">{category}</h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    {partners.map((partner) => (
                    <PartnerCard key={partner.name} {...partner} />
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