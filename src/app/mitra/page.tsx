import PartnerCard from '../components/PartnerCard';
import Image from 'next/image';
import Footer from '../components/Footer';
import { cookies } from 'next/headers';

export default async function MitraPage() {
    const cookieStore = await cookies();
    const lang = cookieStore.get('lang')?.value || 'id';

    const t = {
        title1: lang === 'en' 
        ? 'University Institution' 
        : 'Lembaga Universitas',

        title2: lang === 'en' 
        ? 'Non-Governmental Organizations' 
        : 'Organisasi Non-Pemerintah (NGOs)',
    }

    const partnersByCategory = {
        [t.title1]: [
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
        [t.title2]: [
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
                    <h1 className="max-w-6xl text-4xl md:text-6xl font-bold font-sans">
                        {
                            lang === 'en' 
                            ? 'Partners and Collaboration Networks' 
                            : 'Mitra dan Jaringan Kolaborasi'
                        }
                    </h1>
                    <p className="mt-4 text-lg text-white">
                        {
                            lang === 'en' 
                            ? 'Collaboration is the key to the success of our research. Here are the strategic partners who have collaborated with CISS Unsoed.' 
                            : 'Kolaborasi adalah kunci keberhasilan riset kami. Berikut adalah mitra-mitra strategis yang telah bekerja sama dengan CISS Unsoed.'
                        }
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
            <Footer lang={lang} />
        </main>
    );
}