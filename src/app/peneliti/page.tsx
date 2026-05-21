import Image from 'next/image';
import ProfileCard from '../components/ProfileCard';
import Footer from '../components/Footer';
import { cookies } from 'next/headers';

const allResearchers = [
    { 
        name: 'Dr. Arif Darmawan, S.IP, M.Si', 
        role: 'Head of CISS Unsoed', 
        image: '/images/team/arif-darmawan.webp', 
        links: { 
            linkedin: 'https://id.linkedin.com/in/arif-darmawan-20042656', 
            scholar: 'https://scholar.google.com/citations?user=hYcckzAAAAAJ&hl=en', 
        } 
    },
    { 
        name: 'Ulil Afwa, S.H., M.H.', 
        role: 'Researcher of CISS Unsoed', 
        image: '/images/team/ulil.webp', 
        links: { 
            linkedin: 'https://id.linkedin.com/in/ulil-afwa-3543a3b4', 
            scholar: 'https://scholar.google.com/citations?hl=en&user=Thz5iy4AAAAJ', 
        } 
    },
    { 
        name: 'Kiky Srirejeki, M.Sc (Acc.), B.S (Acc.), Ph.D', 
        role: 'Researcher of CISS Unsoed', 
        image: '/images/team/kiky.webp', 
        links: { 
            linkedin: 'https://au.linkedin.com/in/kikysrirejeki', 
            scholar: 'https://scholar.google.com/citations?user=KLK4kpMAAAAJ', 
        } 
    },
    { 
        name: 'Hanifa Pascarina, S.S., M.Hum', 
        role: 'Researcher of CISS Unsoed', 
        image: '/images/team/hanifa.webp', 
        links: { 
            linkedin: 'https://id.linkedin.com/in/hanifa-pascarina', 
            scholar: 'https://scholar.google.com/citations?user=fXMFuIQAAAAJ&hl=id', 
        } 
    },
    { 
        name: 'Bimo F. Hantoro, S.H., LL.M.', 
        role: 'Researcher of CISS Unsoed', 
        image: '/images/team/bimo.webp', 
        links: { 
            linkedin: 'https://www.linkedin.com/in/bimofh', 
            scholar: 'https://scholar.google.com/citations?user=rERGYvkAAAAJ&hl=en', 
        } 
    },
    { 
        name: 'Wasis Singgih Sasono', 
        role: 'Researcher of CISS Unsoed', 
        image: '/images/team/wasis.webp', 
        links: { 
            linkedin: 'https://id.linkedin.com/in/wasis-sasono-668838367', 
            scholar: 'https://scholar.google.com/citations?user=K24Vkt8AAAAJ&hl=id', 
        } 
    },
];

export default async function PenelitiPage() {
    const cookieStore = await cookies();
    const lang = cookieStore.get('lang')?.value || 'id';

    return (
        <main>
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
                            ? 'Profile of the CISS Unsoed Research Team' 
                            : 'Profil Tim Peneliti CISS Unsoed'
                        }
                    </h1>
                    <p className="mt-4 text-lg text-white">
                        {
                            lang === 'en' 
                            ? 'Meet our experts who are dedicated to examining International strategic issues' 
                            : 'Temui para ahli kami yang berdedikasi dalam mengkaji isu-isu strategis Internasional'
                        }
                    </p>
                </div>
            </section>
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-t from-white to-yellow-500/10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {allResearchers.map((researcher) => (
                    <ProfileCard key={researcher.name} {...researcher} />
                ))}
                </div>
            </section>
            <Footer lang={lang} />
        </main>
    );
}