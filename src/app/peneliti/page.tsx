"use client";

import Image from 'next/image';
import ProfileCard from '../components/ProfileCard';
import Footer from '../components/Footer';

const allResearchers = [
    { 
        name: 'Dr. Arif Darmawan, S.IP, M.Si', 
        role: 'Head of SEARC Unsoed', 
        image: '/images/team/arif-darmawan.webp', 
        links: { 
            linkedin: 'https://id.linkedin.com/in/arif-darmawan-20042656', 
            scholar: 'https://scholar.google.com/citations?user=hYcckzAAAAAJ&hl=en', 
        } 
    },
    { 
        name: 'Ulil Afwa, S.H., M.H.', 
        role: 'Secretary of SEARC Unsoed', 
        image: '/images/team/ulil.webp', 
        links: { 
            linkedin: 'https://id.linkedin.com/in/ulil-afwa-3543a3b4', 
            scholar: 'https://scholar.google.com/citations?hl=en&user=Thz5iy4AAAAJ', 
        } 
    },
    { 
        name: 'Elpeni Fitrah, S.Sos., M.A., Ph.D', 
        role: 'Editor in Chief Sea Insight Journal SEARC Unsoed', 
        image: '/images/team/elpeni-fitrah.webp', 
        links: { 
            linkedin: 'https://id.linkedin.com/in/elpeni-fitrah-a2657a339', 
            scholar: 'https://scholar.google.com/citations?hl=en&user=vZKxidEAAAAJ', 
        } 
    },
    { 
        name: 'Dr. Aryuni Yuliantiningsih, S.H., M.H.', 
        role: 'Researcher of SEARC Unsoed', 
        image: '/images/team/aryuni.webp', 
        links: { 
            linkedin: '#', 
            scholar: 'https://scholar.google.com/citations?hl=en&user=Ye259U0AAAAJ'
        } 
    },
    { 
        name: 'Kiky Srirejeki, M.Sc (Acc.), B.S (Acc.), Ph.D', 
        role: 'Researcher of SEARC Unsoed', 
        image: '/images/team/kiky.webp', 
        links: { 
            linkedin: 'https://au.linkedin.com/in/kikysrirejeki', 
            scholar: 'https://scholar.google.com/citations?user=KLK4kpMAAAAJ', 
        } 
    },
    { 
        name: 'Hanifa Pascarina, S.S., M.Hum', 
        role: 'Researcher of SEARC Unsoed', 
        image: '/images/team/hanifa.webp', 
        links: { 
            linkedin: 'https://id.linkedin.com/in/hanifa-pascarina', 
            scholar: 'https://scholar.google.com/citations?user=fXMFuIQAAAAJ&hl=id', 
        } 
    },
];

export default function PenelitiPage() {
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
                <h1 className="text-4xl md:text-6xl font-extrabold font-sans">Profil Tim Peneliti SEARC Unsoed</h1>
                <p className="mt-4 text-lg text-white">
                    Temui para ahli kami yang berdedikasi dalam mengkaji isu-isu strategis di Asia Tenggara.
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
        <Footer />
    </main>
  );
}